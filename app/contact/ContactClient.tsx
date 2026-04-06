'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '@/lib/constants';
import ContactForm from '@/components/ContactForm';

export default function ContactClient() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  // Email parts for obfuscation
  const emailUser = 'hello';
  const emailDomain = 'draganmitic.com';

  // Phone parts for obfuscation (Serbia country code +381)
  const phoneCountry = '+381';
  const phoneArea = '69';
  const phoneRest = '775051';

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${emailUser}@${emailDomain}`;
  };

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `tel:${phoneCountry}${phoneArea}${phoneRest}`;
  };

  const handleSuccess = () => {
    setStatus('success');
  };

  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div className="lg:order-first">
        <header>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl"
          >
            Let&apos;s talk.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
          >
            I&apos;m currently available for freelance work and open to new
            opportunities. Whether you have a question or just want to say hi,
            I&apos;ll try my best to get back to you!
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          {status === 'success' ? (
            <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6 dark:border-brand/20">
              <h3 className="text-lg font-semibold text-brand dark:text-brand">
                Message sent!
              </h3>
              <p className="mt-2 text-zinc-700 dark:text-zinc-400">
                Thanks for reaching out. I&apos;ll get back to you as soon as
                possible.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 text-sm font-medium text-brand hover:underline dark:text-brand"
              >
                Send another message
              </button>
            </div>
          ) : (
            <ContactForm onSuccess={handleSuccess} />
          )}
        </motion.div>
      </div>

      <div className="lg:pl-20">
        <ul role="list" className="space-y-4">
          <li className="flex mb-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Follow me
            </h2>
          </li>
          {SOCIAL_LINKS.map((social) => (
            <li key={social.name} className="flex">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-brand dark:text-zinc-200 dark:hover:text-brand"
              >
                <div className="flex h-6 w-6 flex-none items-center justify-center transition group-hover:scale-110">
                  {React.cloneElement(
                    social.icon as React.ReactElement<{ className?: string }>,
                    {
                      className: `${
                        social.name === 'X' ? 'h-5 w-5' : 'h-6 w-6'
                      } flex-none fill-zinc-500 transition group-hover:fill-brand dark:fill-zinc-400 dark:group-hover:fill-brand`,
                    }
                  )}
                </div>
                <span className="ml-4">{social.name}</span>
              </a>
            </li>
          ))}

          <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
            {/* Email link */}
            <a
              href="#"
              onClick={handleEmailClick}
              className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-brand dark:text-zinc-200 dark:hover:text-brand"
            >
              <div className="flex h-6 w-6 flex-none items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-brand dark:fill-zinc-400 dark:group-hover:fill-brand"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="ml-4">
                {emailUser}
                <span className="hidden">avoid-scraping</span>@{emailDomain}
              </span>
            </a>
          </li>

          <li className="mt-4 flex">
            {/* Phone link */}
            <a
              href="#"
              onClick={handlePhoneClick}
              className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-brand dark:text-zinc-200 dark:hover:text-brand"
            >
              <div className="flex h-6 w-6 flex-none items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-brand dark:fill-zinc-400 dark:group-hover:fill-brand"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.819V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="ml-4">
                {phoneCountry} {phoneArea} {phoneRest}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
