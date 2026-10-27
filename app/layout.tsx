import type { Metadata } from 'next';
import { Inter, Familjen_Grotesk } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://draganmitic.com',
    siteName: 'Dragan Mitić',
    title: 'Dragan Mitić - Software Engineer & CEO',
    description:
      'Seasoned software engineer and CEO of Hefes Technology Group, crafting cutting-edge software solutions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dragan Mitić - Software Engineer & CEO',
    description:
      'Seasoned software engineer and CEO of Hefes Technology Group.',
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
      className={`${inter.variable} ${familjenGrotesk.variable} scroll-smooth scroll-pt-[30px]`}
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
      <body
        id="top"
        className="bg-paper font-sans text-[16px] text-ink antialiased transition-colors duration-[250ms] selection:bg-[#dcecff] selection:text-[#273449]"
      >
        <a
          href="#main"
          className="absolute -top-[70px] left-5 z-10 bg-ink p-[15px] text-paper focus:top-[10px]"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <GoogleAnalytics gaId="G-DFQK2H0FFN" />
      </body>
    </html>
  );
}
