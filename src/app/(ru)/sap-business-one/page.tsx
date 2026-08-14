import type { Metadata } from "next";
import { FaqJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";
import { ProductPageView } from "@/components/design/product-page";
import { productB1 } from "@/content/product-b1";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (RU)
export const metadata: Metadata = {
  title: "Внедрение и Настройка SAP Business One в Ташкенте — BIS-PRO",
  description:
    "Полный цикл внедрения SAP Business One: от аудита до настройки модулей склада, закупок и производства. Консалтинг и поддержка от официального партнёра.",
  keywords: [
    "внедрение SAP Business One",
    "настройка SAP Business One",
    "SAP консалтинг Ташкент",
    "модули SAP Business One",
    "поддержка SAP Узбекистан",
    "аудит бизнес процессов SAP",
    "BIS-PRO",
    "автоматизация бизнеса Ташкент",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/sap-business-one", // Agar ru papka bo'lsa yo'lini moslang
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title: "Внедрение и Настройка SAP Business One в Ташкенте — BIS-PRO",
    description:
      "Полный цикл внедрения SAP Business One: от аудита до настройки модулей склада, закупок и производства. Консалтинг и поддержка от официального партнёра.",
    url: "/ru/sap-business-one",
    siteName: "BIS-PRO",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og/bis-ru.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "Внедрение и Настройка SAP Business One в Ташкенте — BIS-PRO",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title: "Внедрение и Настройка SAP Business One в Ташкенте — BIS-PRO",
    description:
      "Полный цикл внедрения SAP Business One: от аудита до настройки модулей склада, закупок и производства.",
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
  const seoTitle =
    "Внедрение и Настройка SAP Business One в Ташкенте — BIS-PRO";
  const seoDescription =
    "Полный цикл внедрения SAP Business One: от аудита до настройки модулей склада, закупок и производства. Консалтинг и поддержка от официального партнёра.";

  return (
    <>
      {/* Search Engine (Schema.org / JSON-LD) Botlari uchun structured data */}
      <ServiceJsonLd
        locale="ru"
        name={seoTitle}
        description={seoDescription}
        path="/sap-business-one"
      />
      <FaqJsonLd items={productB1.faq} />

      {/* Sahifaning asosiy vizual komponenti */}
      <ProductPageView data={productB1} />
    </>
  );
}
