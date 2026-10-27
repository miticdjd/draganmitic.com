'use client';

import { useState } from 'react';
import { NEWSLETTER } from '@/lib/constants';
import { button, cn } from '@/lib/styles';
import { ArrowRight } from './ui/icons';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed. Please try again.');
      }

      setStatus('success');
      setEmail('');
      setMessage(NEWSLETTER.success);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[350px] min-w-0 max-w-full max-lg:w-full md:max-lg:max-w-[520px]"
    >
      <label htmlFor="newsletter-email" className="mb-[10px] block text-[11px] font-medium">
        {NEWSLETTER.label}
      </label>
      <div className="flex items-stretch gap-[10px] max-sm:flex-col">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder={NEWSLETTER.placeholder}
          maxLength={254}
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') {
              setStatus('idle');
              setMessage('');
            }
          }}
          aria-describedby="newsletter-status"
          className="min-h-[52px] w-full min-w-0 flex-1 border border-line bg-paper px-[14px] text-[12px] text-ink transition-colors duration-200 placeholder:text-muted focus:border-accent"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={cn(button, 'min-w-[120px] shrink-0 gap-[14px] px-4 max-sm:w-full')}
        >
          {status === 'loading' ? NEWSLETTER.loading : NEWSLETTER.cta}
          <ArrowRight />
        </button>
      </div>
      <p
        id="newsletter-status"
        role="status"
        aria-live="polite"
        className="mt-[11px] min-h-4 text-[10px] leading-[1.6] text-muted"
      >
        {message}
      </p>
    </form>
  );
}
