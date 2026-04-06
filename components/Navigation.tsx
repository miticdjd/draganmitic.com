'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const navItems = [
  { name: 'About', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className="pointer-events-none relative z-50 flex flex-none flex-col">
        <div className="top-0 z-10 h-16 pt-6">
          <div className="sm:px-8 w-full max-w-7xl mx-auto lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12 flex justify-between items-center pointer-events-auto">
              {/* Avatar Left */}
              <Link
                href="/"
                className="group block h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition-all duration-300 hover:ring-2 hover:ring-brand dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-brand overflow-hidden"
              >
                <img
                  src="/dragan.jpg"
                  alt="Dragan Mitic avatar"
                  className="h-full w-full rounded-full object-cover bg-zinc-100 dark:bg-zinc-700"
                />
              </Link>

              {/* Nav Right */}
              <div className="flex items-center gap-4">
                <nav className="hidden md:block">
                  <ul className="flex rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                    {navItems.map((item) => {
                      const isActive = pathname === item.path;
                      return (
                        <li key={item.path} className="relative">
                          <Link
                            href={item.path}
                            className={`relative block px-4 py-2 transition-colors duration-200 ${
                              isActive
                                ? 'text-brand dark:text-white'
                                : 'hover:text-brand dark:hover:text-white text-zinc-600 dark:text-zinc-400'
                            }`}
                          >
                            {isActive && (
                              <motion.span
                                layoutId="bubble"
                                className="absolute inset-0 z-0 rounded-full bg-zinc-100 dark:bg-zinc-700/50"
                                transition={{
                                  type: 'spring',
                                  bounce: 0.2,
                                  duration: 0.6,
                                }}
                              />
                            )}
                            <span className="relative z-10">{item.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  type="button"
                  className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="h-6 w-6 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:hidden"
                    >
                      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
                      <path d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 21.5v-1.5M4.5 12.25H3M6.709 18.791l1.06-1.06M6.709 5.709l1.06 1.06" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block"
                    >
                      <path
                        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-center mt-4 px-4 pointer-events-auto relative z-50">
        <ul className="flex gap-2 rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.path} className="relative">
                <Link
                  href={item.path}
                  className={`relative block px-3 py-1.5 transition duration-200 ${
                    isActive ? 'text-brand dark:text-white' : 'hover:text-brand'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="mobileBubble"
                      className="absolute inset-0 z-0 rounded-full bg-zinc-100 dark:bg-zinc-700/50"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
