import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

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
  return <ProjectsClient />;
}
