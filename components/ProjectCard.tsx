import type { Project } from '@/lib/types';
import ProjectVisual from './ProjectVisual';
import { ArrowUpRight } from './ui/icons';

type ProjectCardProps = {
  project: Project;
  total: number;
};

export default function ProjectCard({ project, total }: ProjectCardProps) {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
      <ProjectVisual project={project} total={total} layout="card" />
      <div className="mt-[22px] flex items-start justify-between gap-[15px] max-md:mt-[18px]">
        <h3 className="text-[17px] font-medium tracking-[-.035em] max-xl:text-[15px] max-md:text-[19px]">
          {project.title}
        </h3>
        <ArrowUpRight className="mt-[2px] size-[17px] transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
      </div>
      <p className="mt-3 text-[12px] leading-[1.85] text-muted max-md:mt-2 max-md:max-w-[540px] max-md:text-[13px]">
        {project.description}
      </p>
    </a>
  );
}
