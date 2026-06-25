import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://c-stacks-livid.vercel.app"),
  title: "C-Stacks | Digital Experiences & Web Tools",
  description: "A curated collection of digital experiences, interactive utilities, and premium web interfaces crafted by Chaniru Weerasinghe.",
  keywords: [
    "Chaniru Weerasinghe", 
    "Web Development", 
    "Portfolio", 
    "C-Stacks", 
    "Frontend Developer", 
    "Web Tools", 
    "Digital Experiences",
    "Next.js Portfolio",
    "React Projects"
  ],
  authors: [{ name: "Chaniru Weerasinghe", url: "https://github.com/ChaniruWeerasinghe" }],
  creator: "Chaniru Weerasinghe",
  openGraph: {
    title: "C-Stacks | Digital Experiences & Web Tools",
    description: "A curated collection of digital experiences, interactive utilities, and premium web interfaces.",
    siteName: "C-Stacks",
    images: [
      {
        url: "/Social-Preview.png", // Next.js will automatically resolve this to the domain root
        width: 1200,
        height: 630,
        alt: "C-Stacks Social Preview Image",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "C-Stacks | Digital Experiences & Web Tools",
    description: "A curated collection of digital experiences, interactive utilities, and premium web interfaces.",
    images: ["/Social-Preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
