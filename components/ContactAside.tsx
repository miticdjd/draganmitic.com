import { CONTACT_PAGE, SITE } from '@/lib/constants';
import SocialLinks from './SocialLinks';
import Eyebrow from './ui/Eyebrow';
import { ArrowUpRight, StatusDot } from './ui/icons';

export default function ContactAside() {
  return (
    <aside className="border-l border-line pl-10 max-xl:pl-[25px] max-md:border-t max-md:border-l-0 max-md:pt-[35px] max-md:pl-0">
      <Eyebrow>{CONTACT_PAGE.directEyebrow}</Eyebrow>
      <a
        href={`mailto:${SITE.email}`}
        className="mt-[34px] flex items-center gap-[15px] text-[clamp(16px,1.9vw,26px)] tracking-[-.04em] [overflow-wrap:anywhere] hover:text-accent max-md:mt-5 max-md:text-[24px] max-xs:text-[21px]"
      >
        {SITE.email}
        <ArrowUpRight className="size-[18px]" />
      </a>
      <a href={`tel:${SITE.phone}`} className="mt-4 inline-block text-[14px] text-muted hover:text-accent">
        {SITE.phoneDisplay}
      </a>
      <div className="mt-[60px] max-md:mt-[35px]">
        <h2 className="mb-[23px] text-[10px] font-medium uppercase tracking-[.13em]">
          {CONTACT_PAGE.follow}
        </h2>
        <SocialLinks variant="grid" />
      </div>
      <div className="mt-[70px] flex flex-wrap items-center gap-[10px] text-[11px] max-md:mt-10">
        <StatusDot />
        {SITE.location}
        <span className="ml-[17px] w-full text-[10px] text-muted">{CONTACT_PAGE.locationNote}</span>
      </div>
    </aside>
  );
}
