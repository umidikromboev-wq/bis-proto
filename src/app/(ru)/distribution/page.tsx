import type { Metadata } from "next";
import { IndustryView } from "@/components/design/company-views";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (RU)
export const metadata: Metadata = {
  title: "Автоматизация Дистрибуции с SAP Business One в Ташкенте",
  description:
    "Единая система SAP Business One для дистрибьюторов в Узбекистане: управление закупками, складом, отгрузкой и взаиморасчетами. Узнайте подробности!",
  keywords: [
    "автоматизация дистрибуции SAP",
    "SAP Business One для дистрибьюторов",
    "управление закупками и складом",
    "ERP система для дистрибуции",
    "автоматизация торговой компании",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/distribution", // Loyihangiz papka tuzilishiga moslang
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title: "Автоматизация Дистрибуции с SAP Business One в Ташкенте",
    description:
      "Единая система SAP Business One для дистрибьюторов в Узбекистане: управление закупками, складом, отгрузкой и взаиморасчетами. Узнайте подробности!",
    url: "/ru/distribution",
    siteName: "BIS-PRO",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og/bis-ru.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "Автоматизация Дистрибуции с SAP Business One в Ташкенте",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title: "Автоматизация Дистрибуции с SAP Business One в Ташкенте",
    description:
      "Единая система SAP Business One для дистрибьюторов в Узбекистане: управление закупками, складом, отгрузкой и взаиморасчетами.",
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

/** Отраслевая страница. Адрес /distribution сохранён с прежнего сайта. */
export default function Page() {
  return <IndustryView slug="distribution" locale="ru" />;
}
