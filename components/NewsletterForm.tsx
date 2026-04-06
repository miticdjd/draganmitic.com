'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          tags: ['draganmitic.com'],
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed. Please try again.');
      }

      setStatus('success');
      setEmail('');
      setMessage('Thanks for subscribing! You are now on the list.');
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-zinc-100 p-8 shadow-sm dark:border-zinc-700/40 bg-white/50 dark:bg-zinc-800/30 backdrop-blur-sm relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-brand/5 blur-3xl" />

      <div className="relative">
        {/* Header spanning top */}
        <h2 className="flex text-lg font-semibold text-zinc-900 dark:text-zinc-100 items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-700/50 mr-4 shadow-sm flex-none">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-6 w-6 flex-none text-zinc-500 dark:text-zinc-400"
            >
              <path
                d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
              />
              <path
                d="m22.5 7.5-8.59 6.22a2.25 2.25 0 0 1-2.82 0L2.5 7.5"
                className="stroke-zinc-400 dark:stroke-zinc-500"
              />
            </svg>
          </div>
          <span>Subscribe to my newsletter</span>
        </h2>

        {/* Content row: Description and Form side-by-side aligned at top */}
        <div className="mt-4 flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-12">
          <div className="max-w-xl">
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Get notified when I publish something new, and unsubscribe at any
              time. I promise no spam, just quality updates about software
              engineering and product development.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto md:min-w-[400px]">
            <div className="relative flex-auto">
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email address"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') {
                    setStatus('idle');
                    setMessage('');
                  }
                }}
                className="w-full appearance-none rounded-xl border border-zinc-900/10 bg-white px-4 py-3.5 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-brand dark:focus:ring-brand/10 sm:text-sm transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="group relative flex-none inline-flex items-center justify-center gap-2 rounded-xl py-3.5 px-8 text-sm outline-offset-2 transition active:transition-none bg-zinc-900 font-bold text-zinc-100 hover:bg-zinc-800 active:bg-zinc-900 active:text-zinc-100/70 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-white dark:active:bg-zinc-200"
            >
              <span>{status === 'loading' ? 'Joining...' : 'Join Now'}</span>
              <AnimatePresence mode="wait">
                {status !== 'loading' && (
                  <motion.svg
                    initial={{ x: -5, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 5, opacity: 0 }}
                    className="h-4 w-4 stroke-current transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 text-sm text-brand font-medium flex items-center gap-2"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="h-4 w-4"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            {message || 'Thanks for subscribing! You are now on the list.'}
          </motion.p>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 text-sm text-red-600 dark:text-red-400 font-medium"
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
