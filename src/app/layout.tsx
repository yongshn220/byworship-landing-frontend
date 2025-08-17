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
  title: "ByWorship - 교회 예배팀을 위한 올인원 관리 솔루션",
  description: "찬양곡부터 세트리스트까지, 예배 준비를 더 쉽고 체계적으로. ByWorship으로 예배팀 관리를 혁신하세요. 30일 무료 체험.",
  keywords: ["교회", "예배팀", "찬양곡", "세트리스트", "팀 관리", "공지사항", "예배 준비", "교회 관리"],
  authors: [{ name: "ByWorship" }],
  creator: "ByWorship",
  publisher: "ByWorship",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://byworship.com",
    title: "ByWorship - 교회 예배팀을 위한 올인원 관리 솔루션",
    description: "찬양곡부터 세트리스트까지, 예배 준비를 더 쉽고 체계적으로. ByWorship으로 예배팀 관리를 혁신하세요.",
    siteName: "ByWorship",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ByWorship - 교회 예배팀 관리 솔루션",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ByWorship - 교회 예배팀을 위한 올인원 관리 솔루션",
    description: "찬양곡부터 세트리스트까지, 예배 준비를 더 쉽고 체계적으로",
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
    <html lang="ko">
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
