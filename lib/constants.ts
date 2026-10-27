import htgLogo from '@/public/projects/htg.png';
import kiddlyLogo from '@/public/projects/kiddly.png';
import avoventLogo from '@/public/projects/avovent.png';
import type { NavItem, Project, SocialLink } from './types';

export const NAV_ITEMS: NavItem[] = [
  { index: '01', label: 'About', href: '/' },
  { index: '02', label: 'Projects', href: '/projects' },
  { index: '03', label: 'Contact', href: '/contact' },
];

export const SITE = {
  name: 'Dragan Mitić',
  role: 'Software engineer & CEO',
  email: 'hello@draganmitic.com',
  phone: '+38169775051',
  phoneDisplay: '+381 69 775051',
  location: 'Niš, Serbia',
  coordinates: '43.32° N · 21.90° E',
  company: { name: 'HTG', url: 'https://hefesgroup.com' },
} as const;

export const PROJECTS: Project[] = [
  {
    slug: 'htg',
    number: '01',
    title: 'Hefes Technology Group',
    category: 'Product development',
    description:
      'A product-focused software company I founded to turn ideas into scalable systems.',
    tags: ['Ideas', 'Scalable systems'],
    logo: htgLogo,
    link: 'https://hefesgroup.com',
    domain: 'hefesgroup.com',
    visual: 'htg',
  },
  {
    slug: 'kiddly',
    number: '02',
    title: 'Kiddly',
    category: 'Open-source · Education',
    description:
      'Kiddly is an open-source preschool management platform designed to modernize early education systems.',
    tags: ['Open source', 'Early education'],
    logo: kiddlyLogo,
    link: 'https://kiddly.io',
    domain: 'kiddly.io',
    visual: 'kiddly',
  },
  {
    slug: 'avovent',
    number: '03',
    title: 'Avovent',
    category: 'Cloud · Events',
    description:
      'Cloud event ecosystem that interconnects organizers, speakers, attendees, sponsors, and exhibitors under one roof',
    tags: ['Event ecosystem', 'Connected experiences'],
    logo: avoventLogo,
    link: 'https://avovent.com',
    domain: 'avovent.com',
    visual: 'avovent',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/miticdjd' },
  { name: 'GitHub', url: 'https://github.com/miticdjd' },
  { name: 'Instagram', url: 'https://instagram.com/miticdjd' },
  { name: 'X', url: 'https://x.com/miticdjd' },
];

export const HOME = {
  heroIntro:
    "Welcome to my corner of the web! I'm Dragan Mitić, a seasoned software engineer with over a decade of hands-on experience. Currently calling the historic city of Niš, Serbia, my home.",
  exploreLabel: 'Explore my work',
  talkLabel: "Let's talk",
  strip: { tagline: 'Engineering ideas into reality.', cta: 'Discover my work' },
  work: { eyebrow: '01 / Selected work', heading: 'Ideas, made real', allProjects: 'All projects' },
  about: {
    eyebrow: '02 / A little about me',
    headingLead: "Welcome to Dragan Mitić's",
    headingEm: 'Digital Hub!',
    paragraphs: [
      'As the CEO of Hefes Technology Group, I lead a passionate team dedicated to empowering digital landscapes through cutting-edge software solutions. Our journey is fueled by a relentless pursuit of excellence, and we take pride in crafting digital experiences that transcend expectations.',
      'I invite you to check out my latest projects and feel free to contact me if you require any assistance. I am confident I can provide you with the help you need.',
    ],
  },
} as const;

export const NEWSLETTER = {
  eyebrow: 'Occasional notes. Thoughtful updates.',
  heading: 'Subscribe to my newsletter',
  body: 'Get notified when I publish something new, and unsubscribe at any time. I promise no spam, just quality updates about software engineering and product development.',
  label: 'Email address',
  placeholder: 'you@example.com',
  cta: 'Join Now',
  loading: 'Joining…',
  success: 'Thanks for subscribing! You are now on the list.',
} as const;

export const PROJECTS_PAGE = {
  eyebrow: `Projects / ${String(PROJECTS.length).padStart(2, '0')} selected ventures`,
  headingLead: "Things I've made trying to put my mark on the",
  headingEm: 'universe.',
  intro:
    'These are the projects I’ve built and continue to work on. They represent my ideas, experiments, and long-term efforts to create meaningful products I truly care about.',
  banner: { eyebrow: 'Have something in mind?', cta: "Let's talk" },
} as const;

export const CONTACT_PAGE = {
  eyebrow: 'Contact / Start a conversation',
  headingLead: "Let's",
  headingEm: 'talk.',
  intro:
    "I'm currently available for freelance work and open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  formEyebrow: '01 / Send a message',
  directEyebrow: '02 / Directly',
  follow: 'Follow me',
  helper: ['Sent straight to my inbox.', 'No newsletter, no spam.'],
  locationNote: 'Open to a conversation.',
  submit: 'Send Message',
  submitting: 'Sending…',
  success: "Message sent! Thanks for reaching out. I'll get back to you as soon as possible.",
} as const;
