import type { Metadata } from "next";
import { Inter, Square_Peg, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

const squarePeg = Square_Peg({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-squarepeg",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-spacegrotesk",
});

export const metadata: Metadata = {
  title: "Prateek Uniyal | Portfolio",
  description: "Prateek Uniyal's Portfolio and Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${squarePeg.variable} ${spaceGrotesk.variable} dark:bg-[#000002] font-common `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
