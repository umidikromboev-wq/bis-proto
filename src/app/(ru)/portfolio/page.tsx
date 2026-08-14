import type { Metadata } from "next";
import { CasesList } from "@/components/design/inner-views";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (RU)
export const metadata: Metadata = {
  title: "Кейсы и Проекты Внедрения SAP в Узбекистане — Портфолио BIS-PRO",
  description:
    "Результаты и кейсы внедрения SAP Business One в Узбекистане. Реальные цифры снижения издержек и роста продаж наших клиентов в сфере производства и торговли.",
  keywords: [
    "кейсы внедрения SAP",
    "портфолио BIS PRO",
    "проекты SAP Узбекистан",
    "результаты внедрения SAP Business One",
    "отзывы внедрение SAP Ташкент",
    "кейсы автоматизации производства",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/portfolio", // Loyihangiz papka tuzilishiga moslang
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title: "Кейсы и Проекты Внедрения SAP в Узбекистане — Портфолио BIS-PRO",
    description:
      "Результаты и кейсы внедрения SAP Business One в Узбекистане. Реальные цифры снижения издержек и роста продаж наших клиентов в сфере производства и торговли.",
    url: "/ru/portfolio",
    siteName: "BIS-PRO",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og/bis-ru.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "Кейсы и Проекты Внедрения SAP в Узбекистане — Портфолио BIS-PRO",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title: "Кейсы и Проекты Внедрения SAP в Узбекистане — Портфолио BIS-PRO",
    description:
      "Результаты и кейсы внедрения SAP Business One в Узбекистане. Реальные цифры снижения издержек и роста продаж наших клиентов.",
    images: ["/og/bis-ru.png"],
  },

  // Indeksatsiya va Botlar sozlamasi
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

export default function Page() {
  return <CasesList />;
}
