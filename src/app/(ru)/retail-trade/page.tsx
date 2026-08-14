import type { Metadata } from "next";
import { IndustryView } from "@/components/design/company-views";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (RU)
export const metadata: Metadata = {
  title: "SAP для Розничной Торговли и Магазинов в Ташкенте",
  description:
    "Автоматизация розничной торговли и сетей магазинов на базе SAP в Узбекистане. Сведение кассы, склада и закупок в единую систему. Узнайте подробности!",
  keywords: [
    "SAP для розничной торговли",
    "автоматизация магазинов Ташкент",
    "учет кассы и склада SAP",
    "ERP система для розницы",
    "автоматизация торговой сети",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/retail-trade", // Loyihangiz papka tuzilishiga moslang
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title: "SAP для Розничной Торговли и Магазинов в Ташкенте",
    description:
      "Автоматизация розничной торговли и сетей магазинов на базе SAP в Узбекистане. Сведение кассы, склада и закупок в единую систему. Узнайте подробности!",
    url: "/ru/retail-trade",
    siteName: "BIS-PRO",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og/bis-ru.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "SAP для Розничной Торговли и Магазинов в Ташкенте",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title: "SAP для Розничной Торговли и Магазинов в Ташкенте",
    description:
      "Автоматизация розничной торговли и сетей магазинов на базе SAP в Узбекистане. Сведение кассы, склада и закупок в единую систему.",
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

/** Отраслевая страница. Адрес /retail-trade сохранён с прежнего сайта. */
export default function Page() {
  return <IndustryView slug="retail-trade" locale="ru" />;
}
