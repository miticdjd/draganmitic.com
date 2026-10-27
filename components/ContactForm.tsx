'use client';

import { useState } from 'react';
import { CONTACT_PAGE } from '@/lib/constants';
import { button, cn } from '@/lib/styles';
import { ArrowUpRight } from './ui/icons';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const fieldClass =
  'block w-full rounded-none border-0 border-b border-line bg-transparent pt-[10px] pb-4 text-[14px] text-ink transition-colors duration-200 placeholder:text-muted placeholder:opacity-75 focus:border-accent';

const FIELDS = [
  { id: 'name', label: 'Name', type: 'text', autoComplete: 'name', placeholder: 'Your name', maxLength: 150 },
  { id: 'email', label: 'Email', type: 'email', autoComplete: 'email', placeholder: 'you@example.com', maxLength: 254 },
] as const;

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || 'Unable to send your message.');
      }

      setFormData({ name: '', email: '', message: '' });
      setStatus('success');
      setMessage(CONTACT_PAGE.success);
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error ? error.message : 'Unable to send your message. Please try again.'
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {FIELDS.map((field, i) => (
        <div key={field.id} className="mb-[26px]">
          <label htmlFor={field.id} className="mb-2 flex justify-between text-[11px]">
            {field.label} <span className="text-[9px] text-muted">0{i + 1}</span>
          </label>
          <input
            id={field.id}
            name={field.id}
            type={field.type}
            autoComplete={field.autoComplete}
            placeholder={field.placeholder}
            maxLength={field.maxLength}
            required
            value={formData[field.id]}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
      ))}
      <div className="mb-[26px]">
        <label htmlFor="message" className="mb-2 flex justify-between text-[11px]">
          Message <span className="text-[9px] text-muted">03</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="What's on your mind?"
          maxLength={5000}
          required
          value={formData.message}
          onChange={handleChange}
          className={cn(fieldClass, 'min-h-[115px] resize-y')}
        />
      </div>
      <div className="mt-8 flex items-center gap-[22px] max-md:gap-[18px]">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={cn(button, 'gap-8 px-[22px] max-md:gap-[22px] max-md:px-[18px]')}
        >
          {status === 'submitting' ? CONTACT_PAGE.submitting : CONTACT_PAGE.submit}
          <ArrowUpRight />
        </button>
        <p className="text-[10px] leading-[1.7] text-muted max-md:text-[9px]">
          {CONTACT_PAGE.helper[0]}
          <br />
          {CONTACT_PAGE.helper[1]}
        </p>
      </div>
      <p role="status" aria-live="polite" className="mt-5 min-h-5 text-[12px] text-accent">
        {message}
      </p>
    </form>
  );
}
