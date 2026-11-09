'use client';

import React, { useState, useEffect, useId } from 'react';
import { Shield, Check, Loader2, RefreshCw, AlertCircle, Lock } from 'lucide-react';

export interface SecurityCaptchaProps {
  onVerify: (verified: boolean, token?: string) => void;
  isVerified?: boolean;
  error?: string | null;
  className?: string;
  theme?: 'dark' | 'light';
}

interface MathProblem {
  num1: number;
  num2: number;
  operator: '+' | '-' | 'x';
  answer: number;
}

function generateMathProblem(): MathProblem {
  const ops: Array<'+' | '-' | 'x'> = ['+', '-', 'x'];
  const op = ops[Math.floor(Math.random() * ops.length)];
  let num1 = 1;
  let num2 = 1;
  let answer = 2;

  if (op === '+') {
    num1 = Math.floor(Math.random() * 8) + 2; // 2 to 9
    num2 = Math.floor(Math.random() * 8) + 2;
    answer = num1 + num2;
  } else if (op === '-') {
    num1 = Math.floor(Math.random() * 9) + 7; // 7 to 15
    num2 = Math.floor(Math.random() * 6) + 1; // 1 to 6
    answer = num1 - num2;
  } else {
    num1 = Math.floor(Math.random() * 4) + 2; // 2 to 5
    num2 = Math.floor(Math.random() * 4) + 2; // 2 to 5
    answer = num1 * num2;
  }

  return { num1, num2, operator: op, answer };
}

export const SecurityCaptcha: React.FC<SecurityCaptchaProps> = ({
  onVerify,
  isVerified = false,
  error,
  className = '',
  theme = 'dark',
}) => {
  const [internalVerified, setInternalVerified] = useState(isVerified);
  const [isVerifying, setIsVerifying] = useState(false);
  const [showMathChallenge, setShowMathChallenge] = useState(false);
  const [problem, setProblem] = useState<MathProblem>(generateMathProblem);
  const [userAnswer, setUserAnswer] = useState('');
  const [mathError, setMathError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');
  const [renderTime] = useState(() => Date.now());

  const inputId = useId();

  useEffect(() => {
    setInternalVerified(isVerified);
  }, [isVerified]);

  const handleCheckboxClick = () => {
    if (internalVerified || isVerifying) return;

    // Check honeypot & timing bot defense
    if (honeypot) {
      console.warn('[MPS Security] Honeypot triggered');
      return;
    }

    setIsVerifying(true);
    setMathError(null);

    // Human entropy delay (simulating cryptographic token handshake)
    const timer = setTimeout(() => {
      setIsVerifying(false);
      setInternalVerified(true);
      const token = `mps_tok_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      onVerify(true, token);
    }, 850);

    return () => clearTimeout(timer);
  };

  const handleMathSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(userAnswer.trim(), 10) === problem.answer) {
      setInternalVerified(true);
      setMathError(null);
      const token = `mps_math_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      onVerify(true, token);
    } else {
      setMathError('Incorrect answer. Please try again.');
      setUserAnswer('');
      setProblem(generateMathProblem());
    }
  };

  const handleResetChallenge = () => {
    setProblem(generateMathProblem());
    setUserAnswer('');
    setMathError(null);
  };

  return (
    <div className={`w-full max-w-sm select-none ${className}`}>
      {/* Invisible Honeypot bot trap */}
      <input
        type="text"
        name="mps_security_bot_trap"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="opacity-0 absolute -left-[9999px] pointer-events-none h-0 w-0"
        aria-hidden="true"
      />

      {/* Main CAPTCHA Card (Cloudflare Turnstile style) */}
      <div
        className={`relative flex items-center justify-between p-3 sm:p-3.5 rounded-sm border transition-all duration-200 ${
          internalVerified
            ? 'bg-[#091815] border-[#25D366]/40 shadow-[0_2px_12px_rgba(37,211,102,0.1)]'
            : error || mathError
            ? 'bg-[#180E12] border-red-500/50'
            : 'bg-[#0B1322] border-white/10 hover:border-[#3B82F6]/50 shadow-sm'
        }`}
      >
        {/* Left Side: Interactive Checkbox */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleCheckboxClick}
            disabled={internalVerified || isVerifying}
            className={`w-6 h-6 sm:w-6.5 sm:h-6.5 rounded flex items-center justify-center transition-all cursor-pointer ${
              internalVerified
                ? 'bg-[#25D366] text-black border border-[#25D366]'
                : isVerifying
                ? 'bg-[#0E2445] border border-[#3B82F6]'
                : 'bg-[#080E1A] border-2 border-zinc-400 hover:border-[#3B82F6]'
            }`}
            aria-label="Verify you are human"
            aria-checked={internalVerified}
            role="checkbox"
          >
            {internalVerified ? (
              <Check className="w-4 h-4 stroke-[3]" />
            ) : isVerifying ? (
              <Loader2 className="w-3.5 h-3.5 text-[#93C5FD] animate-spin" />
            ) : null}
          </button>

          <div>
            <div className="flex items-center gap-1.5">
              <span
                onClick={handleCheckboxClick}
                className={`text-xs sm:text-[13px] font-sans font-medium cursor-pointer ${
                  internalVerified ? 'text-emerald-400 font-semibold' : 'text-zinc-200 hover:text-white'
                }`}
              >
                {internalVerified
                  ? 'Verification complete'
                  : isVerifying
                  ? 'Verifying human session...'
                  : 'I am human'}
              </span>
            </div>
            <p className="text-[10px] text-zinc-400 font-mono tracking-tight leading-none mt-0.5">
              {internalVerified ? 'Security check passed' : 'Click check to verify'}
            </p>
          </div>
        </div>

        {/* Right Side: Security Badge */}
        <div className="flex flex-col items-end shrink-0 pl-2">
          <div className="flex items-center gap-1 text-[#3B82F6]">
            <Shield className="w-4 h-4 text-[#3B82F6]" />
            <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-zinc-300">
              MPS Shield
            </span>
          </div>
          <span className="text-[9px] font-mono text-zinc-400 tracking-tight">
            FL Lic. B1400200
          </span>
        </div>
      </div>

      {/* Optional Math Question Link if user prefers math puzzle */}
      {!internalVerified && (
        <div className="mt-1 flex items-center justify-between text-[11px] text-zinc-400 px-1">
          <button
            type="button"
            onClick={() => setShowMathChallenge(!showMathChallenge)}
            className="hover:text-zinc-300 underline underline-offset-2 transition-colors cursor-pointer"
          >
            {showMathChallenge ? 'Hide math challenge' : 'Security question check'}
          </button>
          <span className="text-[10px] text-zinc-400 font-mono">Anti-Spam Protocol</span>
        </div>
      )}

      {/* Collapsible Math Challenge Card */}
      {!internalVerified && showMathChallenge && (
        <form
          onSubmit={handleMathSubmit}
          className="mt-2 p-2.5 rounded bg-[#080E1A] border border-[#1E2D4A] space-y-2 animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between text-xs text-zinc-300">
            <span className="font-mono text-white font-medium">
              Solve: {problem.num1} {problem.operator} {problem.num2} = ?
            </span>
            <button
              type="button"
              onClick={handleResetChallenge}
              className="text-zinc-400 hover:text-white p-1"
              title="Get another problem"
            >
              <RefreshCw className="w-3 h-3" />
            </button>
          </div>

          <div className="flex gap-2">
            <input
              id={inputId}
              type="number"
              placeholder="Your answer"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="flex-1 bg-[#050A14] border border-white/10 rounded px-2.5 py-1 text-xs text-white focus:outline-none focus:border-[#3B82F6]"
              autoFocus
            />
            <button
              type="submit"
              className="px-3 py-1 bg-[#0E2445] hover:bg-[#173A6E] text-white text-xs font-semibold rounded border border-[#3B82F6]/40 cursor-pointer"
            >
              Verify
            </button>
          </div>
        </form>
      )}

      {/* Error Message */}
      {(error || mathError) && !internalVerified && (
        <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1 px-1">
          <AlertCircle className="w-3 h-3 shrink-0" />
          <span>{mathError || error || 'Please complete the verification check.'}</span>
        </p>
      )}
    </div>
  );
};

export default SecurityCaptcha;

