import type { Metadata, Viewport } from "next";
import { DM_Sans, Inter } from "next/font/google";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Well Alive Hospital, Uyo",
  description: "Premium cinematic healthcare landing experience for Well Alive Hospital, Uyo.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`no-js scroll-smooth ${dmSans.variable} ${inter.variable}`}>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
