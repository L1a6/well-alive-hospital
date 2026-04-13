import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Well Alive Hospital, Uyo",
  description: "Premium cinematic healthcare landing experience for Well Alive Hospital, Uyo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`no-js ${plusJakarta.variable}`}>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
