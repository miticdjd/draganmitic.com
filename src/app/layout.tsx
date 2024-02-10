import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from '../../lib/registry';

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
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
      <body className={poppins.className}>
        <StyledComponentsRegistry>
            <div className="container mx-auto flex flex-row">
                {children}
            </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
