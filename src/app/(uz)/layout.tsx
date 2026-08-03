import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { SiteFooter } from "@/components/design/footer";
import { SiteHeader } from "@/components/design/menu";
import { LeadPopupProvider } from "@/components/design/lead-popup";
import { OrganizationJsonLd } from "@/components/seo/json-ld";

import "../globals.css";
import "@/components/design/site.css";
import "@/components/design/lead-popup.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-manrope",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

const baseUrl = "https://www.bis-pro.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },

  title: {
    default:
      "SAP Business One Uzbekistan — Biznes Avtomatlashtirish va ERP Tizimi",
    template: "%s | BIS",
  },

  description:
    "2019-yildan beri O‘zbekistonda SAP joriy etish. Excel va 1C o‘rniga bitta ERP tizim: ombor, moliya va ishlab chiqarish nazorati. Loihangiz narxini 1 kunda hisoblang!",

  keywords: [
    "SAP Business One Uzbekistan",
    "ERP tizimini joriy etish",
    "biznesni avtomatlashtirish Toshkent",
    "ishlab chiqarish uchun ERP",
    "korxona boshqaruv dasturi",
    "SAP Business One narxi",
    "ombor avtomatlashtirish",
    "1C va Excel o'rniga ERP",
  ],

  alternates: {
    canonical: "https://www.bis-pro.com/uz",
    languages: {
      "uz-UZ": "https://www.bis-pro.com/uz",
      "ru-RU": "https://www.bis-pro.com/",
    },
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

  openGraph: {
    title:
      "SAP Business One Uzbekistan — Biznes Avtomatlashtirish va ERP Tizimi",
    description:
      "2019-yildan beri O‘zbekistonda SAP joriy etish. Excel va 1C o‘rniga bitta ERP tizim: ombor, moliya va ishlab chiqarish nazorati. Loihangiz narxini 1 kunda hisoblang!",
    url: "https://www.bis-pro.com/uz",
    siteName: "BIS",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/photos/dashboard.webp",
        width: 1200,
        height: 630,
        alt: "SAP Business One Uzbekistan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "SAP Business One Uzbekistan — Biznes Avtomatlashtirish va ERP Tizimi",
    description:
      "2019-yildan beri O‘zbekistonda SAP joriy etish. Excel va 1C o‘rniga bitta ERP tizim: ombor, moliya va ishlab chiqarish nazorati. Loihangiz narxini 1 kunda hisoblang!",
    images: ["/photos/dashboard.webp"],
  },
};

// AI Search Engines (ChatGPT, Perplexity, Gemini) tushunishi uchun qo'shimcha GEO Schema
const geoAiJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.bis-pro.com/uz/#service",
      name: "SAP Business One ERP joriy etish va avtomatlashtirish",
      provider: {
        "@type": "Organization",
        name: "BIS - Business Information Solutions",
        url: "https://www.bis-pro.com",
      },
      areaServed: {
        "@type": "Country",
        name: "Uzbekistan",
      },
      description:
        "O'zbekistonda korxonalar uchun SAP Business One ERP tizimini joriy etish, ombor, moliya va ishlab chiqarish jarayonlarini avtomatlashtirish xizmati.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.bis-pro.com/uz/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "O'zbekistonda SAP Business One kim joriy etadi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BIS (Business Information Solutions) kompaniyasi 2019-yildan beri O'zbekistonda SAP Business One ERP tizimini rasmiy joriy etish va biznes jarayonlarini avtomatlashtirish bilan shug'ullanadi.",
          },
        },
        {
          "@type": "Question",
          name: "1C va Excel o'rniga qaysi ERP tizimi mos keladi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kichik va o'rta biznes, ishlab chiqarish hamda ombor nazorati uchun SAP Business One eng samarali xalqaro ERP yechimi hisoblanadi.",
          },
        },
      ],
    },
  ],
};

export default function UzLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" className={`h-full antialiased ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(geoAiJsonLd) }}
        />
      </head>
      <body className={`d ${manrope.className} flex min-h-full flex-col`}>
        <OrganizationJsonLd locale="uz" />
        <LeadPopupProvider locale="uz">
          <SiteHeader locale="uz" />
          <main className="flex-1">{children}</main>
          <SiteFooter locale="uz" />
        </LeadPopupProvider>
      </body>
    </html>
  );
}
