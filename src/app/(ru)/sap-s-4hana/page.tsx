import type { Metadata } from "next";
import { FaqJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";
import { ProductPageView } from "@/components/design/product-page";
import { productS4 } from "@/content/product-s4";

// MUKAMMAL NATIVE NEXT.JS SEO METADATA (RU)
export const metadata: Metadata = {
  title: "Внедрение SAP S/4HANA в Узбекистане — ERP для Холдингов и Заводов",
  description:
    "Внедрение SAP S/4HANA в Ташкенте для крупных предприятий и холдингов. Единый учет нескольких юрлиц, консолидация финансов и автоматизация производства. Запросите демо!",
  keywords: [
    "SAP S/4HANA Узбекистан",
    "внедрение SAP S/4HANA Ташкент",
    "ERP для холдингов",
    "автоматизация крупных предприятий",
    "консолидация отчетности SAP",
    "ERP система для завода",
    "внедрение ERP enterprise",
    "BIS-PRO",
  ],
  authors: [{ name: "BIS-PRO" }],
  creator: "BIS-PRO",
  publisher: "BIS-PRO",
  metadataBase: new URL("https://www.bis-pro.com/"), // Asosiy domeningizni kiriting
  alternates: {
    canonical: "/sap-s-4hana", // Loyihangiz yo'liga moslang
  },

  // Open Graph (Facebook, Telegram, LinkedIn tarmoqlarida ulashilganda ko'rinishi)
  openGraph: {
    title: "Внедрение SAP S/4HANA в Узбекистане — ERP для Холдингов и Заводов",
    description:
      "Внедрение SAP S/4HANA в Ташкенте для крупных предприятий и холдингов. Единый учет нескольких юрлиц, консолидация финансов и автоматизация производства. Запросите демо!",
    url: "/ru/sap-s-4hana",
    siteName: "BIS-PRO",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og/bis-ru.png", // Banner rasmingiz yo'li
        width: 1200,
        height: 630,
        alt: "Внедрение SAP S/4HANA в Узбекистане — ERP для Холдингов и Заводов",
      },
    ],
  },

  // Twitter Karta shakli
  twitter: {
    card: "summary_large_image",
    title: "Внедрение SAP S/4HANA в Узбекистане — ERP для Холдингов и Заводов",
    description:
      "Внедрение SAP S/4HANA в Ташкенте для крупных предприятий и холдингов. Единый учет нескольких юрлиц и консолидация финансов.",
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
    "Внедрение SAP S/4HANA в Узбекистане — ERP для Холдингов и Заводов";
  const seoDescription =
    "Внедрение SAP S/4HANA в Ташкенте для крупных предприятий и холдингов. Единый учет нескольких юрлиц, консолидация финансов и автоматизация производства. Запросите демо!";

  return (
    <>
      {/* Search Engine (Schema.org / JSON-LD) Botlari uchun structured data */}
      <ServiceJsonLd
        locale="ru"
        name={seoTitle}
        description={seoDescription}
        path="/sap-s-4hana"
      />
      <FaqJsonLd items={productS4.faq} />

      {/* Sahifaning asosiy vizual komponenti */}
      <ProductPageView data={productS4} />
    </>
  );
}
