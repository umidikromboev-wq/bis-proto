import type { Metadata } from "next";
import { CareersView } from "@/components/design/extra-views";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (RU)
export const metadata: Metadata = {
  title: "Вакансии SAP Ташкент — Работа для ERP Консультантов в BIS-PRO",
  description:
    "Вакансии для сертифицированных консультантов SAP Business One и руководителей ERP проектов в Ташкенте. Присоединяйтесь к команде BIS-PRO и отправьте резюме!",
  keywords: [
    "вакансии SAP Ташкент",
    "работа SAP консультант Ташкент",
    "вакансии консультант SAP Business One",
    "руководитель ERP проектов вакансия",
    "BIS PRO карьера",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/vacancy", // Loyihangiz papka tuzilishiga moslang
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title: "Вакансии SAP Ташкент — Работа для ERP Консультантов в BIS-PRO",
    description:
      "Вакансии для сертифицированных консультантов SAP Business One и руководителей ERP проектов в Ташкенте. Присоединяйтесь к команде BIS-PRO и отправьте резюме!",
    url: "/ru/vacancy",
    siteName: "BIS-PRO",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og/bis-ru.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "Вакансии SAP Ташкент — Работа для ERP Консультантов в BIS-PRO",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title: "Вакансии SAP Ташкент — Работа для ERP Консультантов в BIS-PRO",
    description:
      "Вакансии для сертифицированных консультантов SAP Business One и руководителей ERP проектов в Ташкенте. Присоединяйтесь к команде и отправьте резюме!",
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
  return <CareersView />;
}
