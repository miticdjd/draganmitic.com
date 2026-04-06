'use client';

import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import Navigation from './Navigation';
import Footer from './Footer';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen py-6 sm:py-10">
        {/* Background container with margins and rounded corners */}
        <div className="fixed inset-0 flex justify-center sm:px-8 pointer-events-none">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 my-6 sm:my-10 rounded-2xl sm:rounded-[2.5rem] shadow-xl shadow-zinc-800/5" />
          </div>
        </div>

        <div className="relative flex flex-col flex-auto">
          <Navigation />

          <main className="flex-auto">
            <div className="sm:px-8 mt-16 sm:mt-32">
              <div className="mx-auto w-full max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
