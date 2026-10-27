'use client';

import { useSyncExternalStore } from 'react';
import { SunIcon } from './ui/icons';

// The inline script in app/layout.tsx sets the `dark` class before paint.
// This component reads that class as an external store, so there is one source of truth.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.classList.contains('dark');
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title="Switch theme"
      className="grid size-10 place-items-center rounded-full border border-line bg-transparent text-ink transition-[transform,background-color] duration-300 hover:rotate-[30deg] hover:bg-surface max-md:size-8"
    >
      <SunIcon className="size-[18px] max-md:size-4" />
    </button>
  );
}
