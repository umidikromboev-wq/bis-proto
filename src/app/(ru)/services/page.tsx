import type { Metadata } from "next";
import { ServicesView } from "@/components/design/company-views";
import { ServiceJsonLd } from "@/components/seo/json-ld";
import { content } from "@/content";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (RU)
export const metadata: Metadata = {
  title: "Услуги SAP в Узбекистане — Внедрение, Аудит и Поддержка SAP",
  description:
    "Услуги по внедрению SAP Business One и S/4HANA от 3 месяцев. Комплексный аудит текущей ERP системы, настройка и техническая поддержка в Ташкенте. Рассчитайте смету!",
  keywords: [
    "услуги SAP Узбекистан",
    "внедрение SAP от 3 месяцев",
    "аудит ERP системы Ташкент",
    "техническая поддержка SAP",
    "методология SAP Activate",
    "настройка SAP Business One",
    "SAP консалтинг услуги",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/services", // Loyihangiz papka tuzilishiga moslang
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title: "Услуги SAP в Узбекистане — Внедрение, Аудит и Поддержка SAP",
    description:
      "Услуги по внедрению SAP Business One и S/4HANA от 3 месяцев. Комплексный аудит текущей ERP системы, настройка и техническая поддержка в Ташкенте. Рассчитайте смету!",
    url: "/ru/services",
    siteName: "BIS-PRO",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og/bis-ru.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "Услуги SAP в Узбекистане — Внедрение, Аудит и Поддержка SAP — BIS-PRO",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title: "Услуги SAP в Узбекистане — Внедрение, Аудит и Поддержка SAP",
    description:
      "Услуги по внедрению SAP Business One и S/4HANA от 3 месяцев. Комплексный аудит ERP системы, настройка и поддержка в Ташкенте.",
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

/** Адрес /services сохранён с прежнего сайта — страница была в индексе. */
export default function Page() {
  const seoTitle =
    "Услуги SAP в Узбекистане — Внедрение, Аудит и Поддержка SAP";
  const seoDescription =
    "Услуги по внедрению SAP Business One и S/4HANA от 3 месяцев. Комплексный аудит текущей ERP системы, настройка и техническая поддержка в Ташкенте. Рассчитайте смету!";

  return (
    <>
      {/* Search Engine (Schema.org / JSON-LD) Botlari uchun structured data */}
      <ServiceJsonLd
        locale="ru"
        name={seoTitle}
        description={seoDescription}
        path="/services"
      />

      {/* Sahifaning asosiy vizual komponenti */}
      <ServicesView locale="ru" />
    </>
  );
}
