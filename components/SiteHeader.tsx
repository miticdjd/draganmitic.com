import Link from 'next/link';
import { cn, wrap } from '@/lib/styles';
import MainNav from './MainNav';
import ThemeToggle from './ThemeToggle';

export default function SiteHeader() {
  return (
    <header
      className={cn(
        wrap,
        'flex h-[114px] items-center gap-[45px] border-b border-line max-md:h-[85px] max-md:gap-5 max-xs:gap-[14px]'
      )}
    >
      <Link
        href="/"
        aria-label="Dragan Mitić home"
        className="mr-auto font-display text-[40px] font-semibold leading-none tracking-[-3px] max-md:text-[35px]"
      >
        dm<span className="text-accent">.</span>
      </Link>
      <MainNav />
      <ThemeToggle />
    </header>
  );
}
