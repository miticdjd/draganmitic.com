import type { Metadata } from 'next';
import ContactAside from '@/components/ContactAside';
import ContactForm from '@/components/ContactForm';
import Eyebrow from '@/components/ui/Eyebrow';
import { StarMark } from '@/components/ui/icons';
import { CONTACT_PAGE } from '@/lib/constants';
import { cn, wrap } from '@/lib/styles';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Dragan Mitić. Available for freelance work, consulting, and new opportunities in software engineering.',
  openGraph: {
    title: 'Contact | Dragan Mitić',
    description:
      'Get in touch with Dragan Mitić for freelance work, consulting, and new opportunities.',
  },
};

export default function ContactPage() {
  return (
    <>
      <section className={cn(wrap, 'animate-rise pt-[75px] pb-[65px] max-md:pt-[45px] max-md:pb-[35px]')}>
        <Eyebrow>{CONTACT_PAGE.eyebrow}</Eyebrow>
        <h1 className="mt-5 flex items-center gap-[.2em] text-[clamp(85px,10vw,145px)] font-medium leading-[1.1] tracking-[-.065em] max-md:mt-[25px] max-md:text-[clamp(69px,14vw,110px)] max-xs:text-[65px]">
          {CONTACT_PAGE.headingLead}{' '}
          <em className="font-serif font-normal text-accent">{CONTACT_PAGE.headingEm}</em>
          <span className="mr-[35px] ml-auto text-decorative max-md:mr-0">
            <StarMark className="size-[75px] max-md:size-[38px] max-xs:size-[29px]" />
          </span>
        </h1>
        <p className="mt-[25px] max-w-[570px] text-[14px] leading-[1.9] text-muted max-md:mt-[22px] max-md:text-[13px]">
          {CONTACT_PAGE.intro}
        </p>
      </section>

      <section
        className={cn(
          wrap,
          'grid grid-cols-[1.1fr_.9fr] gap-[12%] border-t border-line pt-[50px] pb-[100px] max-xl:gap-[8%] max-md:grid-cols-1 max-md:gap-10 max-md:pt-[35px] max-md:pb-[50px]'
        )}
      >
        <div>
          <Eyebrow className="mb-[35px]">{CONTACT_PAGE.formEyebrow}</Eyebrow>
          <ContactForm />
        </div>
        <ContactAside />
      </section>
    </>
  );
}
