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
  title: "ByWorship - All-in-One Worship Team Management Solution",
  description: "Streamline your worship preparation from songs to setlists. Transform your worship team management with ByWorship's comprehensive platform.",
  keywords: ["worship team", "church management", "songs", "setlists", "team management", "worship preparation", "church software"],
  authors: [{ name: "ByWorship" }],
  creator: "ByWorship",
  publisher: "ByWorship",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://byworship.com",
    title: "ByWorship - All-in-One Worship Team Management Solution",
    description: "Streamline your worship preparation from songs to setlists. Transform your worship team management with ByWorship's comprehensive platform.",
    siteName: "ByWorship",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ByWorship - Worship Team Management Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ByWorship - All-in-One Worship Team Management Solution",
    description: "Streamline your worship preparation from songs to setlists",
    images: ["/og-image.png"],
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
  verification: {
    google: "verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://byworship.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
