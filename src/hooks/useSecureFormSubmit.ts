'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { useForm, UseFormProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { inquirySchema, InquiryFormData } from '@/schemas/inquirySchema';
import { setSubmissionStatus } from '@/store/slices/inquirySlice';
import { CSRF_COOKIE_NAME, CSRF_HEADER_NAME } from '@/utils/csrf';
import { openWhatsApp, FormSubmissionPayload } from '@/utils/whatsapp';

// UUID v4 generator
function generateIdempotencyKey(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Read cookie from browser
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

interface UseSecureFormSubmitOptions {
  defaultValues?: Partial<InquiryFormData>;
  formOptions?: Omit<UseFormProps<InquiryFormData>, 'resolver' | 'defaultValues'>;
  onSuccess?: (data: InquiryFormData, result: { success: boolean; message: string }) => void;
  onError?: (error: Error) => void;
  timeoutMs?: number; // defaults to 8000ms
  formSource?: string;
}

export function useSecureFormSubmit(options: UseSecureFormSubmitOptions = {}) {
  const { defaultValues, formOptions, onSuccess, onError, timeoutMs = 8000, formSource = 'Tactical Inquiry' } = options;
  const dispatch = useDispatch();

  // Persistent Idempotency Key across retries until a submission succeeds
  const [idempotencyKey, setIdempotencyKey] = useState<string>(() => generateIdempotencyKey());
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isTimedOut, setIsTimedOut] = useState<boolean>(false);
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [isMethodModalOpen, setIsMethodModalOpen] = useState<boolean>(false);
  const [isHumanVerified, setIsHumanVerified] = useState<boolean>(false);

  // Single-dispatch lock ref to drop parallel duplicate clicks instantly
  const isLockedRef = useRef<boolean>(false);

  // Initialize react-hook-form with Zod resolver
  const form = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      county: 'Palm Beach',
      serviceType: 'Executive Protection',
      message: '',
      specialRequirements: '',
      ndaRequested: true,
      requiresArmedDriver: false,
      ...defaultValues,
    },
    ...formOptions,
  });

  // Pre-fetch or load CSRF token on mount
  useEffect(() => {
    let isMounted = true;

    async function initCsrf() {
      try {
        const existingCookie = getCookie(CSRF_COOKIE_NAME);
        if (existingCookie) {
          const [rawToken] = existingCookie.split(':');
          if (isMounted) setCsrfToken(rawToken);
          return;
        }

        const res = await fetch('/api/csrf', { method: 'GET' });
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.csrfToken) {
            setCsrfToken(data.csrfToken);
          }
        }
      } catch {
        // Fallback: generate local token if offline
        if (isMounted) setCsrfToken(generateIdempotencyKey());
      }
    }

    initCsrf();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSecureSubmit = useCallback(
    async (formData: InquiryFormData) => {
      // 1. Double-submit lock: drop duplicate clicks immediately
      if (isLockedRef.current) {
        return;
      }

      isLockedRef.current = true;
      setIsSubmitting(true);
      setErrorMessage(null);
      setIsTimedOut(false);
      dispatch(setSubmissionStatus('submitting'));

      // 2. Client-side abort controller with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        controller.abort();
        setIsTimedOut(true);
        const fallbackMsg =
          'Encrypted line timed out. Call Priority Dispatch directly at (954) 234-7231.';
        setErrorMessage(fallbackMsg);
        dispatch(setSubmissionStatus('failed'));
      }, timeoutMs);

      try {
        // Ensure CSRF token is present
        const cookieVal = getCookie(CSRF_COOKIE_NAME)?.split(':')[0];
        let currentToken: string | null = csrfToken || (cookieVal ? cookieVal : null);
        if (!currentToken) {
          const csrfRes = await fetch('/api/csrf', { method: 'GET', signal: controller.signal });
          if (csrfRes.ok) {
            const csrfData = (await csrfRes.json()) as { csrfToken?: string };
            const fetchedToken: string | null = csrfData?.csrfToken || null;
            currentToken = fetchedToken;
            setCsrfToken(fetchedToken);
          }
        }

        // 3. Network dispatch to /api/inquiry with Idempotency-Key & CSRF header
        const response = await fetch('/api/inquiry', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Idempotency-Key': idempotencyKey,
            [CSRF_HEADER_NAME]: currentToken || 'mps-tactical-token',
          },
          body: JSON.stringify({
            ...formData,
            formSource,
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || `Server rejected transmission with code ${response.status}`);
        }

        const result = await response.json();

        // 4. On Success: update Redux, trigger success state, reset form, cycle idempotency key
        setIsSuccess(true);
        setIsMethodModalOpen(false);
        dispatch(setSubmissionStatus('SUBMITTED'));
        form.reset();
        setIdempotencyKey(generateIdempotencyKey());
        onSuccess?.(formData, result);
      } catch (err: unknown) {
        clearTimeout(timeoutId);
        const errorObj = err instanceof Error ? err : new Error(String(err));

        if (errorObj.name === 'AbortError') {
          setIsTimedOut(true);
          const timeoutError =
            'Encrypted line timed out. Call Priority Dispatch directly at (954) 234-7231.';
          setErrorMessage(timeoutError);
          dispatch(setSubmissionStatus('failed'));
        } else {
          setErrorMessage(errorObj.message || 'Encrypted transmission failed. Please call dispatch.');
          dispatch(setSubmissionStatus('failed'));
          onError?.(errorObj);
        }
      } finally {
        clearTimeout(timeoutId);
        setIsSubmitting(false);
        isLockedRef.current = false;
      }
    },
    [csrfToken, dispatch, form, formSource, idempotencyKey, onError, onSuccess, timeoutMs]
  );

  /**
   * Submit via WhatsApp
   */
  const submitViaWhatsApp = useCallback(
    (formData?: InquiryFormData) => {
      const data = formData || form.getValues();
      openWhatsApp(data as FormSubmissionPayload, formSource);

      // Async background logging
      fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          formSource: `${formSource} (WhatsApp)`,
          submissionChannel: 'whatsapp',
        }),
      }).catch(() => {});

      setIsSuccess(true);
      setIsMethodModalOpen(false);
      dispatch(setSubmissionStatus('SUBMITTED'));
      form.reset();
    },
    [dispatch, form, formSource]
  );

  /**
   * Trigger choice modal on valid submit
   */
  const requestSubmissionChoice = useCallback(
    (e?: React.FormEvent) => {
      if (e) e.preventDefault();
      form.handleSubmit(
        () => {
          setIsMethodModalOpen(true);
        },
        () => {
          // If form errors exist, react-hook-form sets them automatically
        }
      )();
    },
    [form]
  );

  return {
    form,
    isSubmitting,
    isSuccess,
    isTimedOut,
    errorMessage,
    idempotencyKey,
    isMethodModalOpen,
    setIsMethodModalOpen,
    isHumanVerified,
    setIsHumanVerified,
    submitViaWhatsApp,
    submitViaEmail: () => form.handleSubmit(handleSecureSubmit)(),
    requestSubmissionChoice,
    handleSubmit: form.handleSubmit(handleSecureSubmit),
    resetForm: () => {
      form.reset();
      setIsSuccess(false);
      setErrorMessage(null);
      setIsTimedOut(false);
      setIsMethodModalOpen(false);
      isLockedRef.current = false;
      setIdempotencyKey(generateIdempotencyKey());
      dispatch(setSubmissionStatus('idle'));
    },
  };
}
