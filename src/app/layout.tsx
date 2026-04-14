import type { Metadata, Viewport } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";

import "./globals.css";

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
    <html lang="en" className="no-js scroll-smooth">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
