'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/constants';

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="flex items-center gap-10 max-md:gap-[23px] max-xs:gap-4">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={pathname === item.href ? 'page' : undefined}
          className="relative py-[13px] text-[13px] after:absolute after:inset-x-0 after:bottom-1 after:h-[2px] after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100 aria-[current=page]:after:scale-x-100 max-md:text-[12px]"
        >
          <span className="mr-[6px] align-super text-[9px] text-muted max-md:hidden">
            {item.index}
          </span>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
