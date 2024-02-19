import type { Metadata } from "next";
import { Poppins, Syncopate, IBM_Plex_Mono } from "next/font/google";
import StyledComponentsRegistry from '../../lib/registry';
import "./globals.css";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-poppins'
});

const syncopate = Syncopate({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-syncopate'
});

const ibmPlexMono = IBM_Plex_Mono({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-ibm-plex-mono'
});

export const metadata: Metadata = {
  title: "Dragan Mitić",
  description: "Welcome to Dragan Mitić’s Digital Hub!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${syncopate.variable} ${ibmPlexMono.variable} font-sans`}>
        <StyledComponentsRegistry>
            <div className="container mx-auto flex flex-col px-8 h-screen">
                <Header />
                {children}
                <Footer />
            </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
