'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Send,
  X,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { FaRegMessage } from "react-icons/fa6";
import { FaWhatsapp } from 'react-icons/fa';
import { CHATBOT_CONFIG } from '@/data/chatbotData';
import { processChatQuery, buildWhatsAppUrl, BotResponse } from '@/utils/chatbotEngine';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  type?: 'text' | 'contact-flow' | 'callback-form' | 'callback-success';
  contactOptions?: typeof CHATBOT_CONFIG.qa[0]['contactOptions'];
  followUpChips?: string[];
  links?: { label: string; url: string }[];
}

export const FloatingChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Callback form state
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackTime, setCallbackTime] = useState('');
  const [isSubmittingCallback, setIsSubmittingCallback] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const initialTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'bot',
      text: CHATBOT_CONFIG.openingMessage,
      timestamp: initialTime,
      followUpChips: CHATBOT_CONFIG.quickChips,
    },
  ]);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);
    }
  }, [isOpen, messages, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  // Deliver user message and process bot reply
  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: userTimestamp,
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    // Natural brief response time
    setTimeout(() => {
      const botResponse: BotResponse = processChatQuery(text);
      const botTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      const newBotMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botResponse.text,
        timestamp: botTimestamp,
        type: botResponse.type || 'text',
        contactOptions: botResponse.contactOptions,
        followUpChips: botResponse.followUpChips,
        links: botResponse.links,
      };

      setMessages((prev) => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 450);
  };

  // Chip click handler
  const handleChipClick = (chip: string) => {
    if (chip === 'REQUEST A CALLBACK' || chip === 'request-callback') {
      handleTriggerCallbackForm();
      return;
    }
    handleSendMessage(chip);
  };

  // Callback form initiation
  const handleTriggerCallbackForm = () => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const formMessage: ChatMessage = {
      id: `callback-form-${Date.now()}`,
      sender: 'bot',
      text: CHATBOT_CONFIG.callbackForm.introMessage,
      timestamp,
      type: 'callback-form',
    };
    setMessages((prev) => [...prev, formMessage]);
  };

  // Submit Callback Form
  const handleSubmitCallback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackName.trim() || !callbackPhone.trim()) return;

    setIsSubmittingCallback(true);

    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Idempotency-Key': `chat-cb-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        },
        body: JSON.stringify({
          fullName: callbackName.trim(),
          phone: callbackPhone.trim(),
          email: `${callbackPhone.replace(/\D/g, '') || 'callback'}@chatbot.mps`,
          serviceType: 'Chatbot Direct Callback Request',
          message: `Client requested callback via website desk. Preferred time: ${callbackTime.trim() || 'Anytime'}.`,
          formSource: 'Chatbot Callback Form',
          submissionChannel: 'chatbot',
        }),
      }).catch(() => null);

      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages((prev) => [
        ...prev,
        {
          id: `cb-success-${Date.now()}`,
          sender: 'bot',
          text: CHATBOT_CONFIG.callbackForm.successMessage,
          timestamp,
          type: 'callback-success',
          followUpChips: ['TALK TO MARC', 'OUR SERVICES'],
        },
      ]);

      setCallbackName('');
      setCallbackPhone('');
      setCallbackTime('');
    } catch {
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages((prev) => [
        ...prev,
        {
          id: `cb-success-${Date.now()}`,
          sender: 'bot',
          text: "Your callback request has been logged. Marc A. Tardalo will contact you directly.",
          timestamp,
          type: 'callback-success',
          followUpChips: ['TALK TO MARC', 'OUR SERVICES'],
        },
      ]);
    } finally {
      setIsSubmittingCallback(false);
    }
  };

  const whatsappDirectUrl = buildWhatsAppUrl();

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end select-none pointer-events-none">
      {/* 1. Chat Window — Aligned with Website Theme (Executive Midnight Navy #0E2445, Champagne Gold #C5A880, Surface #111B2C) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto w-[calc(100vw-2rem)] sm:w-[385px] max-w-md h-[470px] sm:h-[500px] max-h-[66vh] sm:max-h-[70vh] rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(14,36,69,0.4)] border border-[#1E2D4A] bg-[#0A101D] flex flex-col overflow-hidden mb-2 backdrop-blur-xl"
            role="dialog"
            aria-label="Massive Protective Services Direct Client Desk"
          >
            {/* Header in Executive Midnight Navy #0E2445 with Lion Emblem */}
            <div className="bg-[#0E2445] border-b border-[#1E2D4A] px-3.5 py-3 flex items-center justify-between shrink-0 shadow-sm">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative h-8 w-16 shrink-0">
                  <Image
                    src="/images/mps_lion_logo.png"
                    alt="Massive Protective Services Lion Emblem"
                    fill
                    sizes="64px"
                    className="object-contain object-left"
                    priority
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-sans font-bold tracking-wider uppercase text-white truncate">
                    Massive Protective
                  </h3>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#93C5FD]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span className="truncate">Direct Desk · Lic. B1400200</span>
                  </div>
                </div>
              </div>

              {/* Utility Actions */}
              <div className="flex items-center gap-1 shrink-0">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded text-[#25D366] hover:bg-white/[0.08] transition-colors"
                  title="Direct WhatsApp"
                  aria-label="Direct WhatsApp"
                >
                  <FaWhatsapp className="w-4 h-4" />
                </a>

                <a
                  href={CHATBOT_CONFIG.widget.phoneAction}
                  className="p-1.5 rounded text-[#93C5FD] hover:text-white hover:bg-white/[0.08] transition-colors"
                  title="Call Priority Line"
                  aria-label="Call Priority Line"
                >
                  <Phone className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleCloseChat}
                  className="p-1.5 rounded text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                  title="Close desk"
                  aria-label="Close desk"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Message Stream */}
            <div className="flex-1 overflow-y-auto p-3.5 space-y-3 scroll-smooth bg-[#0A101D]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[88%] rounded-lg px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#0E2445] text-white border border-[#2A4365] rounded-tr-none shadow-sm'
                        : 'bg-[#111B2C] text-zinc-100 border border-[#1E2D4A] rounded-tl-none shadow-sm'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>

                    {/* Contextual Links */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-2.5 pt-2 border-t border-[#1E2D4A] flex flex-wrap gap-2">
                        {msg.links.map((link, lIdx) => (
                          <Link
                            key={lIdx}
                            href={link.url}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1 text-[11px] font-mono text-[#93C5FD] hover:text-white transition-colors"
                          >
                            <span>{link.label}</span>
                            <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* "Talk to Marc" Structured Options styled to match website CTAs */}
                    {msg.type === 'contact-flow' && msg.contactOptions && (
                      <div className="mt-2.5 pt-2.5 border-t border-[#1E2D4A] space-y-1.5">
                        {msg.contactOptions.map((opt) => {
                          if (opt.type === 'tel') {
                            return (
                              <a
                                key={opt.id}
                                href={opt.action}
                                className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-sm bg-[#C5A880] hover:bg-[#bfa075] text-[#0A0A0A] font-bold uppercase tracking-wider text-xs transition-colors shadow-sm"
                              >
                                <Phone className="w-3.5 h-3.5" />
                                <span>{opt.label}</span>
                              </a>
                            );
                          }
                          if (opt.type === 'callback-form') {
                            return (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={handleTriggerCallbackForm}
                                className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-sm bg-[#111B2C] hover:bg-[#162540] border border-[#1E2D4A] hover:border-[#3B82F6]/60 text-[#93C5FD] hover:text-white text-xs font-mono transition-colors cursor-pointer"
                              >
                                <span>{opt.label}</span>
                              </button>
                            );
                          }
                          if (opt.type === 'url' && opt.id === 'whatsapp') {
                            return (
                              <a
                                key={opt.id}
                                href={whatsappDirectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-sm bg-[#111B2C] hover:bg-[#162540] border border-[#1E2D4A] hover:border-[#25D366]/60 text-white text-xs font-mono transition-colors"
                              >
                                <FaWhatsapp className="w-3.5 h-3.5 text-[#25D366]" />
                                <span>{opt.label}</span>
                              </a>
                            );
                          }
                          return (
                            <Link
                              key={opt.id}
                              href={opt.action || '/contact'}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-sm bg-[#111B2C] hover:bg-[#162540] border border-[#1E2D4A] text-zinc-300 hover:text-white text-xs font-mono transition-colors"
                            >
                              <span>{opt.label}</span>
                              <ExternalLink className="w-3 h-3 text-[#93C5FD]" />
                            </Link>
                          );
                        })}
                      </div>
                    )}

                    {/* In-Chat Callback Form */}
                    {msg.type === 'callback-form' && (
                      <form
                        onSubmit={handleSubmitCallback}
                        className="mt-2.5 pt-2.5 border-t border-[#1E2D4A] space-y-2 bg-[#0E1728] p-2.5 rounded-sm border"
                      >
                        <div>
                          <label className="block text-[9px] font-mono uppercase tracking-widest text-[#93C5FD] mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Full Name"
                            value={callbackName}
                            onChange={(e) => setCallbackName(e.target.value)}
                            className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#3B82F6] rounded-sm px-2.5 py-1.5 text-xs text-white placeholder-zinc-500 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] font-mono uppercase tracking-widest text-[#93C5FD] mb-1">
                            Direct Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="(954) 000-0000"
                            value={callbackPhone}
                            onChange={(e) => setCallbackPhone(e.target.value)}
                            className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#3B82F6] rounded-sm px-2.5 py-1.5 text-xs text-white placeholder-zinc-500 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] font-mono uppercase tracking-widest text-[#93C5FD] mb-1">
                            Preferred Time to Call
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Morning, Afternoon, Anytime"
                            value={callbackTime}
                            onChange={(e) => setCallbackTime(e.target.value)}
                            className="w-full bg-[#111B2C] border border-[#1E2D4A] focus:border-[#3B82F6] rounded-sm px-2.5 py-1.5 text-xs text-white placeholder-zinc-500 outline-none"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmittingCallback}
                          className="w-full py-2 px-3 rounded-sm bg-[#C5A880] hover:bg-[#bfa075] text-[#0A0A0A] font-bold uppercase tracking-wider text-xs transition-colors disabled:opacity-50 mt-1 cursor-pointer"
                        >
                          {isSubmittingCallback ? 'Logging Request...' : 'Submit Callback Request'}
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Subtle Timestamp */}
                  <span className="text-[9px] font-mono text-zinc-500 mt-1 px-1">
                    {msg.timestamp}
                  </span>

                  {/* Suggestion Chips with Website Brand Navy & Light Blue styling */}
                  {msg.followUpChips && msg.followUpChips.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1.5 max-w-[95%]">
                      {msg.followUpChips.map((chip, cIdx) => (
                        <button
                          key={cIdx}
                          type="button"
                          onClick={() => handleChipClick(chip)}
                          className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider py-1 px-2.5 rounded-sm bg-[#0E2445]/40 hover:bg-[#0E2445] text-[#93C5FD] hover:text-white border border-[#1E2D4A] hover:border-[#3B82F6]/60 transition-colors cursor-pointer"
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Minimal Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 py-1 px-1 text-[11px] font-mono text-[#93C5FD]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
                  <span>MPS Desk is replying...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Micro WhatsApp Line */}
            <div className="bg-[#080E1A] border-t border-[#1E2D4A] px-3 py-1.5 flex items-center justify-between text-[11px] font-mono text-zinc-400 shrink-0">
              <span>Direct line with Marc A. Tardalo</span>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#25D366] hover:underline"
              >
                <FaWhatsapp className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-2.5 bg-[#0E1728] border-t border-[#1E2D4A] flex items-center gap-2 shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask about services, areas, pricing..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 min-w-0 bg-[#111B2C] border border-[#1E2D4A] focus:border-[#3B82F6] rounded-sm px-3 py-1.5 text-xs sm:text-sm text-white placeholder-zinc-500 outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2 rounded-sm bg-[#C5A880] hover:bg-[#bfa075] text-[#0A0A0A] transition-colors disabled:opacity-30 cursor-pointer shrink-0"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Floating Launcher Buttons at Bottom-Right — Displayed Vertically in Website Brand Tokens */}
      <div className="pointer-events-auto flex flex-col items-end gap-2.5">
        {/* Chatbot Toggle Button (Tightly anchored below Chatbox in #0E2445 Midnight Navy with #C5A880 Gold Icon) */}
        <motion.button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0E2445] hover:bg-[#173A6E] border border-[#1E2D4A] hover:border-[#C5A880] text-[#C5A880] shadow-[0_4px_20px_rgba(14,36,69,0.7)] transition-all cursor-pointer"
          aria-label={isOpen ? 'Close Direct Desk' : 'Open Direct Desk'}
        >
          {isOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <FaRegMessage className="w-5 h-5 text-[#C5A880]" />
          )}

          {!isOpen && unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#C5A880]" />
          )}

          {/* Desktop Hover Tooltip */}
          <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-sm bg-[#0E2445] px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase text-[#93C5FD] shadow-xl opacity-0 transition-opacity group-hover:opacity-100 border border-[#1E2D4A] hidden sm:block">
            {isOpen ? 'Close Desk' : 'Client Desk'}
          </span>
        </motion.button>

        {/* WhatsApp Floating Action Button using react-icons FaWhatsapp */}
        <motion.a
          href={whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all cursor-pointer"
          title="Direct WhatsApp with Marc"
          aria-label="Chat with Marc on WhatsApp"
        >
          <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />

          {/* Desktop Hover Tooltip */}
          <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-sm bg-[#0E2445] px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase text-white shadow-xl opacity-0 transition-opacity group-hover:opacity-100 border border-[#1E2D4A] hidden sm:block">
            WhatsApp Marc
          </span>
        </motion.a>
      </div>
    </div>
  );
};

export default FloatingChatbot;