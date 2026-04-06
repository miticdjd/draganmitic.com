'use client';

import React from 'react';
import { SOCIAL_LINKS } from '@/lib/constants';

interface SocialLinksProps {
  showLabel?: boolean;
  className?: string;
}

export default function SocialLinks({
  showLabel = false,
  className = '',
}: SocialLinksProps) {
  return (
    <div className={`flex gap-6 ${className}`}>
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group -m-1 p-1"
          aria-label={`Follow on ${social.name}`}
        >
          <div className="flex items-center">
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
            {showLabel && (
              <span className="ml-4 text-sm font-medium text-zinc-800 transition group-hover:text-brand dark:text-zinc-200 dark:group-hover:text-brand">
                {social.name}
              </span>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}
