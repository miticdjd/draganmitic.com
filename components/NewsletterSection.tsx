import { NEWSLETTER } from '@/lib/constants';
import { cn, wrap } from '@/lib/styles';
import NewsletterForm from './NewsletterForm';
import Eyebrow from './ui/Eyebrow';
import { StarMark } from './ui/icons';

export default function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className={cn(
        wrap,
        'mb-[85px] grid grid-cols-[65px_1fr_auto] items-center gap-[35px] bg-surface p-[45px] max-xl:grid-cols-[1fr_auto] max-xl:gap-[25px] max-xl:p-[35px] max-lg:grid-cols-1 max-md:mb-[50px] max-md:gap-6 max-md:px-[23px] max-md:py-7'
      )}
    >
      <div className="self-start pt-3 text-decorative max-xl:hidden">
        <StarMark className="size-[50px]" />
      </div>
      <div>
        <Eyebrow>{NEWSLETTER.eyebrow}</Eyebrow>
        <h2 className="mt-2 text-[28px] font-medium tracking-[-.035em] max-md:mt-3 max-md:text-[27px] max-md:leading-[1.2]">
          {NEWSLETTER.heading}
        </h2>
        <p className="mt-3 max-w-[520px] text-[12px] leading-[1.85] text-muted">{NEWSLETTER.body}</p>
      </div>
      <NewsletterForm />
    </section>
  );
}
