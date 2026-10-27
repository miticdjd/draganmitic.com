/** Joins class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

/** Page-width container used by every section. */
export const wrap =
  'mx-auto w-[calc(100%-112px)] max-w-[1280px] max-xl:w-[calc(100%-72px)] max-md:w-[calc(100%-40px)] max-xs:w-[calc(100%-32px)]';

/** Filled button. Callers add gap and horizontal padding so variants never conflict. */
export const button =
  'inline-flex min-h-[52px] items-center justify-between border border-transparent bg-button text-[12px] font-medium text-button-text transition-[background-color,transform] duration-200 hover:-translate-y-[2px] hover:bg-button-hover disabled:cursor-wait [&>svg]:size-[18px]';

export const eyebrow =
  'text-[10px] font-medium uppercase leading-[1.7] tracking-[.13em] max-md:text-[9px]';

export const textLink =
  'group/link inline-flex items-center gap-[15px] text-[12px] leading-[1.5] hover:text-accent';

export const textLinkIcon =
  'size-[18px] transition-transform duration-200 group-hover/link:translate-x-[3px] group-hover/link:-translate-y-[2px]';
