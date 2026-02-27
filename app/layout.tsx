import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BrandFuel | Дигитална маркетинг агенция за реален бизнес растеж",
  description: "Агенция за дигитален маркетинг, ориентирана към резултати. Създаваме реклами и стратегии, които носят клиенти и реален растеж. Услуги: Instagram менажиране, социални мрежи, видео продукция.",
  keywords: ["дигитален маркетинг", "Instagram менажиране", "социални мрежи", "маркетинг стратегии", "реклама", "BrandFuel", "бизнес растеж", "дигитална агенция", "маркетинг София"],
  authors: [{ name: "BrandFuel", url: "https://brandfuel.bg" }],
  creator: "BrandFuel",
  publisher: "BrandFuel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "BrandFuel | Дигитална маркетинг агенция",
    description: "Възползвайте се от нашите изпитани маркетингови решения. Създаваме реклами и стратегии, които носят клиенти и реален растеж.",
    url: "https://brandfuel.bg",
    siteName: "BrandFuel",
    images: [
      {
        url: "https://brandfuel.bg/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BrandFuel - Дигитална маркетинг агенция",
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandFuel | Дигитална маркетинг агенция",
    description: "Възползвайте се от нашите изпитани маркетингови решения.",
    images: ["https://brandfuel.bg/twitter-image.jpg"],
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
    google: "your-google-verification-code",
  },
  category: "marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <head>
        <link rel="canonical" href="https://brandfuel.bg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MarketingAgency",
              "name": "BrandFuel",
              "description": "Агенция за дигитален маркетинг, ориентирана към резултати. Създаваме реклами и стратегии, които носят клиенти и реален растеж.",
              "url": "https://brandfuel.bg",
              "logo": "https://brandfuel.bg/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BG"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+359889929627",
                  "contactType": "customer service",
                  "availableLanguage": ["Bulgarian", "English"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+359888928003",
                  "contactType": "customer service",
                  "availableLanguage": ["Bulgarian", "English"]
                }
              ],
              "sameAs": [
                "https://www.instagram.com/brandfuel",
                "https://www.facebook.com/brandfuel"
              ],
              "serviceType": [
                "Instagram менажиране",
                "Социални мрежи full service",
                "Видео продукция",
                "Маркетингови стратегии"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}