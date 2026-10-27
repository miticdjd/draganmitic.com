import type { Project } from '@/lib/types';
import { cn, wrap } from '@/lib/styles';
import ProjectVisual from './ProjectVisual';
import Eyebrow from './ui/Eyebrow';
import TextLink from './ui/TextLink';

type ProjectRowProps = {
  project: Project;
  total: number;
};

export default function ProjectRow({ project, total }: ProjectRowProps) {
  return (
    <article
      id={project.slug}
      className={cn(
        wrap,
        'grid grid-cols-[.9fr_1.1fr] items-center gap-[10%] border-t border-line py-[50px] max-xl:gap-[7%] max-md:grid-cols-1 max-md:gap-[25px] max-md:py-9'
      )}
    >
      <div>
        <Eyebrow>
          <span className="text-accent">{project.number}</span> / {project.category}
        </Eyebrow>
        <h2 className="mt-6 max-w-[380px] text-[42px] font-medium leading-[1.06] tracking-[-.05em] max-xl:text-[36px] max-md:mt-[17px] max-md:max-w-none max-md:text-[34px]">
          {project.title}
        </h2>
        <p className="mt-[22px] max-w-[375px] text-[14px] leading-[1.9] text-muted max-md:mt-[17px] max-md:max-w-none max-md:text-[13px]">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2 max-md:mt-[18px]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[30px] border border-line px-[10px] py-[7px] text-[9px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <TextLink
          href={project.link}
          external
          className="mt-[30px] min-w-[180px] justify-between border-b border-line pb-[10px] max-md:mt-5"
        >
          {project.domain}
        </TextLink>
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.title} (opens in a new tab)`}
        className="group block"
      >
        <ProjectVisual project={project} total={total} layout="row" />
      </a>
    </article>
  );
}
