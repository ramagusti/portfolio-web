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
  title: "Rama Gusti Anuga | Full-Stack Developer & SaaS Builder",
  description: "Building innovative SaaS solutions, automation tools, and developer products. Creator of Reddit Alert, SnapLink, SnapFetch, and PiggyBang.",
  keywords: ["developer", "saas", "full-stack", "automation", "next.js", "react"],
  openGraph: {
    title: "Rama Gusti Anuga | Developer Portfolio",
    description: "Building innovative SaaS solutions and developer tools",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
