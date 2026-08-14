import type { Metadata } from "next";
import { IndustryView } from "@/components/design/company-views";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (RU)
export const metadata: Metadata = {
  title:
    "SAP для Производства в Узбекистане — Расчет Фактической Себестоимости",
  description:
    "Автоматизация производства на базе SAP Business One в Ташкенте. Точный расчет себестоимости по каждому заказу, учет сырья и брака. Узнайте стоимость!",
  keywords: [
    "SAP для производства",
    "автоматизация производства Ташкент",
    "расчет себестоимости продукции SAP",
    "ERP система для завода",
    "учет сырья и материалов SAP",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/production", // Loyihangiz papka tuzilishiga moslang
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title:
      "SAP для Производства в Узбекистане — Расчет Фактической Себестоимости",
    description:
      "Автоматизация производства на базе SAP Business One в Ташкенте. Точный расчет себестоимости по каждому заказу, учет сырья и брака. Узнайте стоимость!",
    url: "/ru/production",
    siteName: "BIS-PRO",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og/bis-ru.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "SAP для Производства в Узбекистане — Расчет Фактической Себестоимости",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title:
      "SAP для Производства в Узбекистане — Расчет Фактической Себестоимости",
    description:
      "Автоматизация производства на базе SAP Business One в Ташкенте. Точный расчет себестоимости по каждому заказу, учет сырья и брака.",
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

/** Отраслевая страница. Адрес /production сохранён с прежнего сайта. */
export default function Page() {
  return <IndustryView slug="production" locale="ru" />;
}
