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
      { url: "/favicon.ico", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/favicon.ico", sizes: "180x180", type: "image/png" }],
  },

  title: {
    default:
      "SAP Business One в Узбекистане — Внедрение ERP и Автоматизация Бизнеса",
    template: "%s | BIS",
  },

  description:
    "Внедрение SAP Business One в Ташкенте с 2019 года. Единая ERP система вместо Excel и 1С: контроль склада, финансов и производства. Узнайте стоимость проекта!",

  keywords: [
    "SAP Business One в Узбекистане",
    "внедрение SAP Ташкент",
    "ERP система для производства",
    "автоматизация бизнеса Узбекистан",
    "SAP Business One цена",
    "внедрение ERP системы",
    "официальный партнёр SAP",
    "автоматизация склада и учета",
    "замена 1С на SAP",
  ],

  alternates: {
    canonical: "https://www.bis-pro.com/",
    languages: {
      "ru-RU": "https://www.bis-pro.com/",
      "uz-UZ": "https://www.bis-pro.com/uz",
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
      "SAP Business One в Узбекистане — Внедрение ERP и Автоматизация Бизнеса",
    description:
      "Внедрение SAP Business One в Ташкенте с 2019 года. Единая ERP система вместо Excel и 1С: контроль склада, финансов и производства. Узнайте стоимость проекта!",
    url: "https://www.bis-pro.com/",
    siteName: "BIS",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og/bis-ru.png",
        width: 1200,
        height: 630,
        alt: "SAP Business One в Узбекистане",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "SAP Business One в Узбекистане — Внедрение ERP и Автоматизация Бизнеса",
    description:
      "Внедрение SAP Business One в Ташкенте с 2019 года. Единая ERP система вместо Excel и 1С: контроль склада, финансов и производства. Узнайте стоимость проекта!",
    images: ["/og/bis-ru.png"],
  },
};

// AI Search Engines (ChatGPT, Perplexity, Gemini) uchun rus tilidagi GEO Schema
const geoAiJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.bis-pro.com/#service",
      name: "Внедрение SAP Business One ERP и автоматизация бизнеса",
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
        "Услуги по внедрению ERP-системы SAP Business One в Узбекистане: автоматизация склада, финансов, производства и управленческого учета.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.bis-pro.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Кто внедряет SAP Business One в Узбекистане?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Компания BIS (Business Information Solutions) с 2019 года занимается внедрением ERP-системы SAP Business One и автоматизацией бизнес-процессов в Узбекистане.",
          },
        },
        {
          "@type": "Question",
          name: "Какая ERP система подходит для замены 1С и Excel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SAP Business One — это международная ERP-система, созданная специально для малого и среднего бизнеса, позволяющая объединить склад, финансы и производство в единой базе.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`h-full antialiased ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(geoAiJsonLd) }}
        />
      </head>
      <body className={`d ${manrope.className} flex min-h-full flex-col`}>
        <OrganizationJsonLd locale="ru" />
        <LeadPopupProvider locale="ru">
          <SiteHeader locale="ru" />
          <main className="flex-1">{children}</main>
          <SiteFooter locale="ru" />
        </LeadPopupProvider>
      </body>
    </html>
  );
}
