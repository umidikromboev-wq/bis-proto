import type { Metadata } from "next";
import { BlogList } from "@/components/design/inner-views";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (RU)
export const metadata: Metadata = {
  title: "Блог о ERP и SAP — Практика и Руководства по Автоматизации Бизнеса",
  description:
    "Практические статьи о выборе и внедрении ERP систем без рекламы. Как избежать ошибок при автоматизации склада, учета и производства. Читайте опыт BIS-PRO!",
  keywords: [
    "блог об ERP системах",
    "как выбрать ERP систему",
    "ошибки внедрения ERP",
    "автоматизация бизнеса руководства",
    "статьи о SAP Business One",
    "оцифровка бизнес процессов",
    "что такое ERP простыми словами",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/blog", // Loyihangiz papka tuzilishiga moslang
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title: "Блог о ERP и SAP — Практика и Руководства по Автоматизации Бизнеса",
    description:
      "Практические статьи о выборе и внедрении ERP систем без рекламы. Как избежать ошибок при автоматизации склада, учета и производства. Читайте опыт BIS-PRO!",
    url: "/ru/blog",
    siteName: "BIS-PRO",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og/bis-ru.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "Блог о ERP и SAP — Практика и Руководства по Автоматизации Бизнеса",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title: "Блог о ERP и SAP — Практика и Руководства по Автоматизации Бизнеса",
    description:
      "Практические статьи о выборе и внедрении ERP систем без рекламы. Как избежать ошибок при автоматизации склада, учета и производства.",
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
  return <BlogList />;
}
