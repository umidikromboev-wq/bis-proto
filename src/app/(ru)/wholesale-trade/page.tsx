import type { Metadata } from "next";
import { IndustryView } from "@/components/design/company-views";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (RU)
export const metadata: Metadata = {
  title: "SAP для Оптовой Торговли и Дистрибуции в Ташкенте — BIS-PRO",
  description:
    "Автоматизация оптовой торговли и дистрибуции на базе SAP в Узбекистане. Контроль дебиторской задолженности, склада и неликвидов онлайн. Узнайте больше!",
  keywords: [
    "SAP для оптовой торговли",
    "автоматизация дистрибуции Ташкент",
    "контроль дебиторской задолженности SAP",
    "учет склада и неликвидов",
    "ERP для оптовой компании",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/wholesale-trade", // Loyihangiz papka tuzilishiga moslang
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title: "SAP для Оптовой Торговли и Дистрибуции в Ташкенте — BIS-PRO",
    description:
      "Автоматизация оптовой торговли и дистрибуции на базе SAP в Узбекистане. Контроль дебиторской задолженности, склада и неликвидов онлайн. Узнайте больше!",
    url: "/ru/wholesale-trade",
    siteName: "BIS-PRO",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og/bis-ru.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "SAP для Оптовой Торговли и Дистрибуции в Ташкенте — BIS-PRO",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title: "SAP для Оптовой Торговли и Дистрибуции в Ташкенте — BIS-PRO",
    description:
      "Автоматизация оптовой торговли и дистрибуции на базе SAP в Узбекистане. Контроль дебиторской задолженности и склада онлайн.",
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

/** Отраслевая страница. Адрес /wholesale-trade сохранён с прежнего сайта. */
export default function Page() {
  return <IndustryView slug="wholesale-trade" locale="ru" />;
}
