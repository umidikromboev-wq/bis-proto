import type { Metadata } from "next";
import { AboutView } from "@/components/design/company-views";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (UZ)
export const metadata: Metadata = {
  title:
    "Biz Haqimizda — O‘zbekistonda SAP Joriy Etish Mutaxassislari | BIS-PRO",
  description:
    "2019-yildan beri O‘zbekistonda SAP ERP joriy etish jamoasi. 35+ ta muvaffaqiyatli loyiha va $2M+ qiymatdagi tajriba. Jarayonlarni bepul audit qilishdan boshlaymiz!",
  keywords: [
    "BIS-PRO kompaniyasi",
    "SAP partner Uzbekistan",
    "SAP joriy etish jamoasi",
    "SAP konsalting Toshkent",
    "Ahmadjon Ergashev SAP",
    "SAP Activate metodologiyasi",
    "ERP konsultantlar O'zbekiston",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/uz"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/aboutus",
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title:
      "Biz Haqimizda — O‘zbekistonda SAP Joriy Etish Mutaxassislari | BIS-PRO",
    description:
      "2019-yildan beri O‘zbekistonda SAP ERP joriy etish jamoasi. 35+ ta muvaffaqiyatli loyiha va $2M+ qiymatdagi tajriba. Jarayonlarni bepul audit qilishdan boshlaymiz!",
    url: "/aboutus",
    siteName: "BIS-PRO",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/og/bis-uz.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "Biz Haqimizda — O‘zbekistonda SAP Joriy Etish Mutaxassislari | BIS-PRO",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title:
      "Biz Haqimizda — O‘zbekistonda SAP Joriy Etish Mutaxassislari | BIS-PRO",
    description:
      "2019-yildan beri O‘zbekistonda SAP ERP joriy etish jamoasi. 35+ ta muvaffaqiyatli loyiha va $2M+ qiymatdagi tajriba.",
    images: ["/og/bis-uz.png"],
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
  return <AboutView locale="uz" />;
}
