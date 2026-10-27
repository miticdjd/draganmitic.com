import Image from 'next/image';
import type { Project, ProjectVisualKind } from '@/lib/types';
import { cn } from '@/lib/styles';
import { ArrowUpRight } from './ui/icons';

type Layout = 'card' | 'row';

// Literal class strings per project so Tailwind's scanner sees every utility.
const KIND: Record<ProjectVisualKind, { tile: string; geometry: string; img: string }> = {
  htg: {
    tile: 'bg-[#f3f6fa] text-[#53657d]',
    geometry:
      "bg-[linear-gradient(to_right,#637b9c0b_1px,transparent_1px),linear-gradient(to_bottom,#637b9c0b_1px,transparent_1px)] [background-size:40px_40px] after:absolute after:top-[52px] after:right-[35px] after:size-[30px] after:border-t-2 after:border-r-2 after:border-[#adc5e5] after:content-['']",
    img: '',
  },
  kiddly: {
    tile: 'bg-[#f3f1ff] text-[#656096]',
    geometry:
      "before:absolute before:top-[14%] before:left-[17%] before:h-[80%] before:w-[65%] before:rotate-45 before:rounded-[50%] before:border before:border-[#8c83c51f] before:content-[''] after:absolute after:top-[14%] after:left-[17%] after:h-[80%] after:w-[65%] after:-rotate-45 after:rounded-[50%] after:border after:border-[#8c83c51f] after:content-['']",
    img: '[filter:grayscale(1)_invert(1)_contrast(12)] mix-blend-multiply opacity-[.72]',
  },
  avovent: {
    tile: 'bg-[#f0f7ff] text-[#3169a4]',
    geometry:
      "before:absolute before:top-[10%] before:left-[10%] before:size-[80%] before:rounded-[50%] before:border before:border-[#79a9df21] before:content-[''] after:absolute after:-top-[25%] after:-left-[20%] after:h-[150%] after:w-[140%] after:rounded-[50%] after:border after:border-[#79a9df21] after:content-['']",
    img: 'mix-blend-multiply',
  },
};

const LAYOUT: Record<
  Layout,
  { tile: string; img: string; sizes: string; label: string; type: string; no: string; domain: string; corner: string }
> = {
  card: {
    tile: 'aspect-[1.25] max-md:aspect-[1.45]',
    img: 'w-[71%] max-md:w-[62%]',
    sizes: '(max-width: 760px) 62vw, (max-width: 1050px) 22vw, 300px',
    label: 'text-[8px] max-xl:text-[7px] max-md:text-[8px]',
    type: 'top-5 left-5 max-xl:top-[14px] max-xl:left-[14px] max-md:top-5 max-md:left-5',
    no: 'top-5 right-5 max-xl:top-[14px] max-xl:right-[14px] max-md:top-5 max-md:right-5',
    domain: 'bottom-5 left-5 max-xl:bottom-[14px] max-xl:left-[14px] max-md:bottom-5 max-md:left-5',
    corner: 'bottom-[17px] right-5 max-xl:bottom-3 max-xl:right-[14px] max-md:bottom-[18px] max-md:right-5',
  },
  row: {
    tile: 'aspect-[1.4]',
    img: 'w-[64%]',
    sizes: '(max-width: 760px) 64vw, 45vw',
    label: 'text-[9px] max-md:text-[8px]',
    type: 'top-[26px] left-[27px]',
    no: 'top-[26px] right-[27px]',
    domain: 'bottom-[26px] left-[27px]',
    corner: 'bottom-[23px] right-[27px]',
  },
};

type ProjectVisualProps = {
  project: Project;
  total: number;
  layout: Layout;
};

/** Decorative logo tile. Parent link must carry the `group` class for the hover zoom. */
export default function ProjectVisual({ project, total, layout }: ProjectVisualProps) {
  const kind = KIND[project.visual];
  const l = LAYOUT[layout];
  const label = cn('absolute z-[3] uppercase tracking-[.1em]', l.label);
  // The HTG mark is kept fully visible at every size, overriding the layout width.
  const imgWidth = project.visual === 'htg' ? 'w-[38%] max-h-[58%] object-contain' : l.img;

  return (
    <div
      aria-hidden="true"
      className={cn('relative isolate grid place-items-center overflow-hidden', l.tile, kind.tile)}
    >
      <span className={cn(label, l.type)}>{project.category}</span>
      <span className={cn(label, l.no)}>
        {project.number} / {String(total).padStart(2, '0')}
      </span>
      <div className={cn('pointer-events-none absolute inset-0', kind.geometry)} />
      <Image
        src={project.logo}
        alt=""
        sizes={l.sizes}
        className={cn(
          'relative z-[1] h-auto transition-transform duration-[600ms] group-hover:scale-[1.07]',
          imgWidth,
          kind.img
        )}
      />
      <span className={cn(label, l.domain)}>{project.domain}</span>
      <span className={cn('absolute z-[3]', l.corner)}>
        <ArrowUpRight className="size-[17px]" />
      </span>
    </div>
  );
}
