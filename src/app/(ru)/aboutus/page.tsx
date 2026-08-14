import type { Metadata } from "next";
import { AboutView } from "@/components/design/company-views";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (RU)
export const metadata: Metadata = {
  title: "О Компании BIS-PRO — Эксперты по Внедрению SAP в Узбекистане",
  description:
    "Команда BIS-PRO: внедряем SAP в Ташкенте с 2019 года. Более 35 успешных проектов с бюджетом $2M+. Проводим бесплатный аудит бизнес-процессов перед стартом!",
  keywords: [
    "о компании BIS PRO",
    "партнёр SAP Узбекистан",
    "команда внедрения SAP",
    "Ахмаджон Эргашев SAP",
    "эксперты ERP Ташкент",
    "аудит бизнес процессов SAP",
    "официальный партнёр SAP Business One",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/aboutus", // Loyihangiz papka tuzilishiga moslang
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title: "О Компании BIS-PRO — Эксперты по Внедрению SAP в Узбекистане",
    description:
      "Команда BIS-PRO: внедряем SAP в Ташкенте с 2019 года. Более 35 успешных проектов с бюджетом $2M+. Проводим бесплатный аудит бизнес-процессов перед стартом!",
    url: "/ru/aboutus",
    siteName: "BIS-PRO",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og/bis-ru.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "О Компании BIS-PRO — Эксперты по Внедрению SAP в Узбекистане",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title: "О Компании BIS-PRO — Эксперты по Внедрению SAP в Узбекистане",
    description:
      "Команда BIS-PRO: внедряем SAP в Ташкенте с 2019 года. Более 35 успешных проектов с бюджетом $2M+.",
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

/** Адрес /aboutus сохранён с прежнего сайта — страница была в индексе. */
export default function Page() {
  return <AboutView locale="ru" />;
}
