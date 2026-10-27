import type { StaticImageData } from 'next/image';

export type ProjectVisualKind = 'htg' | 'kiddly' | 'avovent';

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  logo: StaticImageData;
  link: string;
  domain: string;
  visual: ProjectVisualKind;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface NavItem {
  index: string;
  label: string;
  href: string;
}
