import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { SiteFooter } from "@/components/design/footer";
import { SiteHeader } from "@/components/design/menu";
import { LeadPopupProvider } from "@/components/design/lead-popup";
import { OrganizationJsonLd } from "@/components/seo/json-ld";
import "../globals.css";
import "@/components/design/site.css";
import "@/components/design/lead-popup.css";

/**
 * Корневая раскладка узбекской версии.
 *
 * Своя, а не общая с русской, по одной причине: атрибут lang у <html> должен
 * называть настоящий язык страницы — иначе браузер предлагает перевести
 * узбекский текст с русского, а скринридер читает его русскими правилами.
 * Поэтому у каждого языка своя root layout, а группы (ru) и (uz) не влияют
 * на адреса.
 */
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "BIS — Oʻzbekistonda SAP joriy etish",
  description:
    "2019 yildan Oʻzbekistonda SAP Business One va S/4HANA joriy etamiz: moliya, ombor, xarid, ishlab chiqarish va tannarx bitta tizimda.",
  robots: { index: false, follow: false },
};

export default function UzLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" className="h-full antialiased">
      <body className={`d ${manrope.className}`}>
        <OrganizationJsonLd locale="uz" />
        <LeadPopupProvider locale="uz">
          <SiteHeader locale="uz" />
          <main>{children}</main>
          <SiteFooter locale="uz" />
        </LeadPopupProvider>
      </body>
    </html>
  );
}
