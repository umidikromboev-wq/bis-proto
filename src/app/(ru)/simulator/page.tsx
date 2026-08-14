import type { Metadata } from "next";
import { WorkingCapitalCalculator } from "@/components/design/calculator/working-capital";
import "@/components/design/page-hero.css";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (RU)
export const metadata: Metadata = {
  title:
    "Калькулятор Оборотного Капитала — Расчет Замороженных Денег | BIS-PRO",
  description:
    "Сколько ваших денег стоит в обороте без движения? Бесплатный калькулятор оборотного капитала для дистрибуции, розницы и производства. Рассчитайте сейчас!",
  keywords: [
    "калькулятор оборотного капитала",
    "расчет замороженных денег на складе",
    "калькулятор для бизнеса онлайн",
    "расчет денег в обороте",
    "оценка оборачиваемости товаров",
    "симулятор BIS PRO",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/simulator", // Loyihangiz papka tuzilishiga moslang
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title:
      "Калькулятор Оборотного Капитала — Расчет Замороженных Денег | BIS-PRO",
    description:
      "Сколько ваших денег стоит в обороте без движения? Бесплатный калькулятор оборотного капитала для дистрибуции, розницы и производства. Рассчитайте сейчас!",
    url: "/ru/simulator",
    siteName: "BIS-PRO",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og/bis-ru.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "Калькулятор Оборотного Капитала — Расчет Замороженных Денег | BIS-PRO",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title:
      "Калькулятор Оборотного Капитала — Расчет Замороженных Денег | BIS-PRO",
    description:
      "Сколько ваших денег стоит в обороте без движения? Бесплатный калькулятор оборотного капитала для бизнеса. Рассчитайте сейчас!",
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
  return (
    <div
      className="d-wrap"
      style={{ paddingBlock: "calc(var(--nav-h) + 2rem) var(--section-y)" }}
    >
      <WorkingCapitalCalculator />
    </div>
  );
}
