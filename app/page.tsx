'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_TEXT, SOCIAL_LINKS } from '@/lib/constants';
import NewsletterForm from '@/components/NewsletterForm';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <motion.img
              src="/dragan.jpg"
              alt="Portrait of Dragan Mitic"
              initial={{ rotate: 3, opacity: 0, scale: 0.9, y: 20 }}
              animate={{ rotate: 3, opacity: 1, scale: 1, y: 0 }}
              whileHover={{
                rotate: 0,
                scale: 1.05,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
              className="aspect-square rounded-2xl bg-zinc-100 object-cover shadow-xl ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold font-familjen tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Welcome to Dragan Mitić&apos;s Digital Hub!
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            {ABOUT_TEXT.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-10">
            <div className="flex gap-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group -m-1 p-1"
                  aria-label={`Follow on ${social.name}`}
                >
                  <div className="flex h-6 w-6 items-center justify-center transition group-hover:scale-110">
                    {React.cloneElement(
                      social.icon as React.ReactElement<{ className?: string }>,
                      {
                        className: `${
                          social.name === 'X' ? 'h-5 w-5' : 'h-6 w-6'
                        } fill-zinc-500 transition group-hover:fill-brand dark:fill-zinc-400 dark:group-hover:fill-brand`,
                      }
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 sm:mt-32">
        <NewsletterForm />
      </div>
    </div>
  );
}
