import type { Metadata } from 'next';
import { Inter, Familjen_Grotesk } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const familjenGrotesk = Familjen_Grotesk({
  subsets: ['latin'],
  variable: '--font-familjen',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Dragan Mitić - Software Engineer & CEO',
    template: '%s | Dragan Mitić',
  },
  description:
    'Dragan Mitić is a seasoned software engineer and CEO of Hefes Technology Group, based in Niš, Serbia. Specializing in cutting-edge software solutions and digital experiences.',
  keywords: [
    'Dragan Mitić',
    'Software Engineer',
    'Hefes Technology Group',
    'Web Development',
    'Niš Serbia',
    'CEO',
    'Technology',
  ],
  authors: [{ name: 'Dragan Mitić' }],
  creator: 'Dragan Mitić',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://draganmitic.com',
    siteName: 'Dragan Mitić',
    title: 'Dragan Mitić - Software Engineer & CEO',
    description:
      'Seasoned software engineer and CEO of Hefes Technology Group, crafting cutting-edge software solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dragan Mitić - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dragan Mitić - Software Engineer & CEO',
    description:
      'Seasoned software engineer and CEO of Hefes Technology Group.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://draganmitic.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${familjenGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-zinc-50 dark:bg-black transition-colors duration-300 font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
