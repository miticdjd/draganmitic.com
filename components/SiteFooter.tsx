import Link from 'next/link';
import { NAV_ITEMS, SITE } from '@/lib/constants';
import { cn, wrap } from '@/lib/styles';
import CopyrightYear from './CopyrightYear';

export default function SiteFooter() {
  return (
    <footer className={cn(wrap, 'border-t border-line pt-9 pb-7')}>
      <div className="flex items-center justify-between max-md:gap-[30px]">
        <Link
          href="/"
          className="font-display text-[27px] font-medium tracking-[-1px] max-md:text-[24px] max-xs:text-[21px]"
        >
          {SITE.name}
          <span className="text-accent">.</span>
        </Link>
        <nav
          aria-label="Footer navigation"
          className="flex gap-[27px] text-[11px] max-md:gap-[17px] max-md:text-[10px] max-xs:gap-3"
        >
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-10 flex justify-between gap-6 text-[9px] text-muted max-md:mt-[30px] max-md:flex-wrap max-md:gap-[14px] max-md:text-[8px]">
        <p>
          © <CopyrightYear /> {SITE.name}.
        </p>
        <p>
          Made with{' '}
          <span className="text-[10px] text-accent" aria-label="love">
            ♥
          </span>{' '}
          by{' '}
          <a href={SITE.company.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            {SITE.company.name}
          </a>
          .
        </p>
        <a href="#top" className="hover:text-accent max-md:ml-auto">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
