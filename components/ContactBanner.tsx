import Link from 'next/link';
import { PROJECTS_PAGE } from '@/lib/constants';
import { cn, wrap } from '@/lib/styles';
import Eyebrow from './ui/Eyebrow';
import { ArrowUpRight } from './ui/icons';

export default function ContactBanner() {
  return (
    <section
      className={cn(wrap, 'mt-5 border-t border-line pt-[65px] pb-[75px] max-md:pt-10 max-md:pb-[50px]')}
    >
      <Eyebrow as="span">{PROJECTS_PAGE.banner.eyebrow}</Eyebrow>
      <Link
        href="/contact"
        className="group mt-4 flex w-full items-center text-[90px] font-medium tracking-[-.07em] max-md:text-[65px]"
      >
        {PROJECTS_PAGE.banner.cta}
        <span className="text-accent">.</span>
        <ArrowUpRight className="ml-auto size-[70px] transition-transform duration-300 group-hover:translate-x-[7px] group-hover:-translate-y-[7px] max-md:size-10" />
      </Link>
    </section>
  );
}
