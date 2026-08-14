import type { Metadata } from "next";
import { AcademyView } from "@/components/design/extra-views";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (RU)
export const metadata: Metadata = {
  title: "Академия SAP в Ташкенте — Курсы Обучения Сотрудников | BIS-PRO",
  description:
    "Обучение сотрудников работе в SAP по ролям в Ташкенте. Сократите время освоения системы на 30% и снимите риски внедрения. Запишитесь на курс!",
  keywords: [
    "академия SAP Ташкент",
    "курсы SAP в Узбекистане",
    "обучение сотрудников SAP",
    "обучение пользованию SAP Business One",
    "курсы ERP системы",
    "академия BIS PRO",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/courses", // Loyihangiz papka tuzilishiga moslang
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title: "Академия SAP в Ташкенте — Курсы Обучения Сотрудников | BIS-PRO",
    description:
      "Обучение сотрудников работе в SAP по ролям в Ташкенте. Сократите время освоения системы на 30% и снимите риски внедрения. Запишитесь на курс!",
    url: "/ru/courses",
    siteName: "BIS-PRO",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og/bis-ru.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "Академия SAP в Ташкенте — Курсы Обучения Сотрудников | BIS-PRO",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title: "Академия SAP в Ташкенте — Курсы Обучения Сотрудников | BIS-PRO",
    description:
      "Обучение сотрудников работе в SAP по ролям в Ташкенте. Сократите время освоения системы на 30%. Запишитесь на курс!",
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
  return <AcademyView />;
}
