import type { Metadata } from "next";
import { ContactsView } from "@/components/design/inner-views";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (RU)
export const metadata: Metadata = {
  title: "Контакты BIS-PRO — Офис Внедрения SAP и ERP в Ташкенте",
  description:
    "Приезжайте в офис BIS-PRO в Ташкенте или начните с онлайн-анализа! Консультации по внедрению SAP и автоматизации бизнеса по всему Узбекистану.",
  keywords: [
    "контакты BIS PRO",
    "адрес SAP Ташкент",
    "телефон BIS PRO",
    "внедрение SAP в Ташкенте контакты",
    "офис SAP Узбекистан",
    "консультация по ERP Ташкент",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/contacts", // Loyihangiz papka tuzilishiga moslang
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title: "Контакты BIS-PRO — Офис Внедрения SAP и ERP в Ташкенте",
    description:
      "Приезжайте в офис BIS-PRO в Ташкенте или начните с онлайн-анализа! Консультации по внедрению SAP и автоматизации бизнеса по всему Узбекистану.",
    url: "/ru/contacts",
    siteName: "BIS-PRO",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og/bis-ru.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "Контакты BIS-PRO — Офис Внедрения SAP и ERP в Ташкенте",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title: "Контакты BIS-PRO — Офис Внедрения SAP и ERP в Ташкенте",
    description:
      "Приезжайте в офис BIS-PRO в Ташкенте или начните с онлайн-анализа! Консультации по внедрению SAP и автоматизации бизнеса.",
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
  return <ContactsView />;
}
