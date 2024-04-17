import type { Metadata } from "next";
import { Inter, Ubuntu } from "next/font/google";
import StyledComponentsRegistry from '../../lib/registry';
import "./globals.css";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-inter'
});

const ubuntu = Ubuntu({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-ubuntu'
});

export const metadata: Metadata = {
    title: "Marketing Planer",
    description: "Master marketing planer",
    keywords: ['Marketing', 'Planer', 'Klka', 'Digital', 'KlikaDigital', 'Anastasia', 'Nikolaidou', 'Mitić'],
    openGraph: {
        images: '/dragan.jpg'
    },
    metadataBase: new URL('https://marketing-planer.klikadigital.com')
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ubuntu.variable} font-sans`}>
        <StyledComponentsRegistry>
            {/*<ReCaptchaProvider>*/}
                <div className="flex flex-col">
                    {children}
                </div>
            {/*</ReCaptchaProvider>*/}
        </StyledComponentsRegistry>
      </body>
      {/*<GoogleAnalytics gaId="G-DFQK2H0FFN" />*/}
    </html>
  );
}
