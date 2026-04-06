'use client';

import React, { useState } from 'react';

interface ContactFormProps {
  onSuccess: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(data.error || 'Unable to send your message.');
      }

      onSuccess();
      setFormData({ name: '', email: '', message: '' });
      setStatus('idle');
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Unable to send your message. Please try again.'
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-sm focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-200 dark:focus:border-brand dark:focus:ring-brand/10 sm:text-sm transition-all"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-sm focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-200 dark:focus:border-brand dark:focus:ring-brand/10 sm:text-sm transition-all"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-zinc-900/10 bg-white px-3 py-2 shadow-sm focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-200 dark:focus:border-brand dark:focus:ring-brand/10 sm:text-sm transition-all"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center rounded-xl bg-zinc-900 py-3 px-8 text-sm font-bold text-white shadow-lg hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-brand/40 active:scale-95 transition-all dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-sm font-medium text-red-600 dark:text-red-400">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
