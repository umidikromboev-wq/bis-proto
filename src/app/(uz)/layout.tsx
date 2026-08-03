import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { SiteFooter } from "@/components/design/footer";
import { SiteHeader } from "@/components/design/menu";
import { LeadPopupProvider } from "@/components/design/lead-popup";
import { Analytics } from "@/components/seo/analytics";
import { OrganizationJsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/seo";
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
  variable: "--font-manrope",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

/** Запасные метаданные каркаса — см. пояснение в русской раскладке. */
export const metadata: Metadata = pageMetadata("uz", "/");

export default function UzLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" className={`h-full antialiased ${manrope.variable}`}>
      <body className={`d ${manrope.className} flex min-h-full flex-col`}>
        <OrganizationJsonLd locale="uz" />
        <LeadPopupProvider locale="uz">
          <SiteHeader locale="uz" />
          <main className="flex-1">{children}</main>
          <SiteFooter locale="uz" />
          <Analytics />

        </LeadPopupProvider>
      </body>
    </html>
  );
}
