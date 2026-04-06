import type { Metadata } from 'next';
import ContactClient from './ContactClient';

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
  return <ContactClient />;
}
