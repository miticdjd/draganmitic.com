import Image from 'next/image';
import portrait from '@/public/dragan.jpg';
import NewsletterSection from '@/components/NewsletterSection';
import ProjectCard from '@/components/ProjectCard';
import SocialLinks from '@/components/SocialLinks';
import ButtonLink from '@/components/ui/ButtonLink';
import Eyebrow from '@/components/ui/Eyebrow';
import TextLink from '@/components/ui/TextLink';
import { StarMark, StatusDot } from '@/components/ui/icons';
import { HOME, PROJECTS, SITE } from '@/lib/constants';
import { cn, wrap } from '@/lib/styles';

export default function HomePage() {
  const total = PROJECTS.length;

  return (
    <>
      <section
        className={cn(
          wrap,
          'grid grid-cols-[1.1fr_.9fr] items-center gap-[8%] pt-[68px] pb-[72px] 2xl:py-[85px] max-xl:gap-[7%] max-xl:pt-[60px] max-md:grid-cols-1 max-md:gap-[38px] max-md:pt-[45px] max-md:pb-10'
        )}
      >
        <div className="animate-rise">
          <Eyebrow className="mb-[30px] flex items-center gap-3 max-md:mb-[25px]">
            <StatusDot />
            {SITE.role}
          </Eyebrow>
          <h1 className="text-[clamp(82px,8.8vw,132px)] font-medium leading-[.94] tracking-[-.075em] 2xl:text-[144px] max-xl:text-[100px] max-md:text-[clamp(82px,16vw,128px)] max-md:leading-[.95] max-xs:text-[78px]">
            Dragan
            <br />
            <span className="ml-[75px] block font-serif font-normal italic tracking-[-.065em] max-xl:ml-[45px] max-md:ml-[60px]">
              Mitić<span className="text-accent">.</span>
            </span>
          </h1>
          <p className="mt-8 max-w-[460px] text-[14px] leading-[1.85] text-muted 2xl:text-[15px] max-xl:text-[13px] max-md:mt-[25px] max-md:max-w-[520px] max-md:leading-[1.9]">
            {HOME.heroIntro}
          </p>
          <div className="mt-[30px] flex items-center gap-7 max-xl:gap-5 max-md:mt-[25px] max-md:gap-[27px] max-xs:gap-5">
            <ButtonLink
              href="/projects"
              className="gap-8 px-[22px] max-xl:gap-5 max-xl:px-4 max-md:px-[21px] max-xs:gap-4 max-xs:px-4"
            >
              {HOME.exploreLabel}
            </ButtonLink>
            <TextLink href="/contact" icon="right">
              {HOME.talkLabel}
            </TextLink>
          </div>
        </div>
        <figure className="group relative mt-[10px] animate-rise [animation-delay:.1s] [animation-duration:.9s] max-md:mt-0">
          <div className="aspect-[1/1.08] overflow-hidden rounded-[2px_2px_90px_2px] bg-[#f1f5fa] 2xl:max-h-[540px] max-md:aspect-[1.2] max-md:max-h-[450px] max-md:rounded-[2px_2px_65px_2px]">
            <Image
              src={portrait}
              alt={`Portrait of ${SITE.name}`}
              priority
              sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) 42vw, 560px"
              className="size-full object-cover object-[47%_center] brightness-[1.05] saturate-[.85] transition-[filter,transform] duration-[600ms,1000ms] group-hover:scale-[1.025] group-hover:saturate-100 max-md:object-[center_35%]"
            />
          </div>
          <figcaption className="mt-[17px] flex justify-between gap-4 text-[9px] uppercase tracking-[.07em] text-muted max-xl:text-[8px] max-md:mt-[13px]">
            <span>Based in {SITE.location}</span>
            <span>{SITE.coordinates}</span>
          </figcaption>
          <span className="absolute -top-6 -right-[23px] rotate-[10deg] text-decorative max-xl:-right-[17px] max-md:-top-5 max-md:right-[14px]">
            <StarMark className="size-[68px] max-xl:size-[55px] max-md:size-[52px]" />
          </span>
        </figure>
      </section>

      <div
        className={cn(
          wrap,
          'flex items-center justify-between border-y border-line py-6 text-[10px] uppercase tracking-[.1em] max-md:gap-[10px] max-md:py-[18px] max-md:text-[8px] max-md:leading-[1.6]'
        )}
      >
        <span className="text-muted">{HOME.strip.tagline}</span>
        <a href="#selected-work" className="flex items-center gap-10 max-md:gap-3 max-md:whitespace-nowrap">
          {HOME.strip.cta} <span className="text-[18px]">↓</span>
        </a>
      </div>

      <section id="selected-work" className={cn(wrap, 'pt-[88px] pb-[90px] max-md:py-[55px]')}>
        <div className="mb-9 flex items-end justify-between max-md:mb-7 max-md:gap-[15px]">
          <div>
            <Eyebrow>{HOME.work.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-[42px] font-medium tracking-[-.055em] max-md:text-[33px] max-xs:text-[29px]">
              {HOME.work.heading}
              <span className="text-accent">.</span>
            </h2>
          </div>
          <TextLink
            href="/projects"
            className="mb-[7px] max-md:mb-[5px] max-md:gap-2 max-md:text-[10px] max-md:whitespace-nowrap max-xs:gap-[5px]"
          >
            {HOME.work.allProjects}
            <span className="text-[9px] text-muted max-md:hidden">
              {String(total).padStart(2, '0')}
            </span>
          </TextLink>
        </div>
        <div className="grid grid-cols-3 gap-6 max-xl:gap-5 max-md:grid-cols-1 max-md:gap-[35px]">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} total={total} />
          ))}
        </div>
      </section>

      <section
        className={cn(
          wrap,
          'grid grid-cols-2 gap-[12%] border-t border-line pt-[85px] pb-[100px] max-xl:gap-[8%] max-md:grid-cols-1 max-md:gap-7 max-md:py-[50px]'
        )}
      >
        <div>
          <Eyebrow>{HOME.about.eyebrow}</Eyebrow>
          <h2 className="mt-[22px] max-w-[430px] text-[43px] font-medium leading-[1.13] tracking-[-.045em] max-xl:text-[36px] max-md:mt-[18px] max-md:max-w-[480px] max-md:text-[37px]">
            {HOME.about.headingLead} <em className="font-serif font-normal">{HOME.about.headingEm}</em>
          </h2>
        </div>
        <div className="pt-[34px] max-md:pt-0">
          {HOME.about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={cn('text-[14px] leading-[1.9] text-muted max-md:text-[13px]', i > 0 && 'mt-6')}
            >
              {paragraph}
            </p>
          ))}
          <SocialLinks className="mt-[30px]" />
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
