'use client';

import React from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'About', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className="transition hover:text-brand dark:hover:text-brand/80"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <p className="flex items-center gap-1 text-sm text-zinc-400 dark:text-zinc-500 text-center sm:text-left">
                    Made with
                    <svg
                      className="h-4 w-4 fill-red-500 animate-pulse"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    by
                    <a
                      href="https://hefesgroup.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand dark:text-brand hover:underline"
                    >
                      HTG
                    </a>
                    . © {new Date().getFullYear()} Dragan Mitić.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
