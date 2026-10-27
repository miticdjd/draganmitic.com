import type { Metadata } from 'next';
import ContactBanner from '@/components/ContactBanner';
import ProjectRow from '@/components/ProjectRow';
import Eyebrow from '@/components/ui/Eyebrow';
import { StarMark } from '@/components/ui/icons';
import { PROJECTS, PROJECTS_PAGE } from '@/lib/constants';
import { cn, wrap } from '@/lib/styles';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Things I have made trying to put my mark on the universe. Explore my portfolio of software projects including open-source contributions and tech ventures.',
  openGraph: {
    title: 'Projects | Dragan Mitić',
    description:
      'Explore the portfolio of software projects by Dragan Mitić, including open-source contributions and innovative tech ventures.',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section className={cn(wrap, 'animate-rise pt-[75px] pb-[65px] max-md:pt-[45px] max-md:pb-10')}>
        <Eyebrow>{PROJECTS_PAGE.eyebrow}</Eyebrow>
        <h1 className="mt-7 max-w-[1000px] text-[clamp(45px,5.5vw,79px)] font-medium leading-[1.05] tracking-[-.055em] max-md:mt-6 max-md:text-[clamp(38px,7vw,58px)] max-md:leading-[1.1] max-md:tracking-[-.05em]">
          {PROJECTS_PAGE.headingLead}{' '}
          <em className="font-serif font-normal text-accent">{PROJECTS_PAGE.headingEm}</em>
        </h1>
        <div className="mt-[35px] flex items-center justify-between gap-[60px] max-md:mt-[25px] max-md:gap-[15px]">
          <p className="max-w-[560px] text-[14px] leading-[1.9] text-muted max-md:text-[13px]">
            {PROJECTS_PAGE.intro}
          </p>
          <span className="mr-[30px] text-decorative max-md:hidden">
            <StarMark className="size-[60px]" />
          </span>
        </div>
      </section>

      <section aria-label="Selected projects">
        {PROJECTS.map((project) => (
          <ProjectRow key={project.slug} project={project} total={PROJECTS.length} />
        ))}
      </section>

      <ContactBanner />
    </>
  );
}
