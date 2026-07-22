import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SiteFooter } from "@/components/design/footer";
import { SiteHeader } from "@/components/design/menu";
import { LeadPopupProvider } from "@/components/design/lead-popup";
import "@/components/design/site.css";
import "@/components/design/lead-popup.css";

/**
 * Manrope — геометрический гротеск без засечек с характером: узкие апертуры
 * и высокая x-height. Кириллица закрывает RU и UZ.
 * Набор держится на лёгких начертаниях (300 Light как основное для крупного
 * текста): тонкий штрих на большом кегле — это и есть премиальность,
 * жирный гротеск читается как дешёвый шаблон.
 */
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BIS — внедрение SAP в Узбекистане",
  description:
    "Официальный партнёр SAP в Узбекистане. Внедряем SAP Business One и S/4HANA: финансы, склад, закупки, производство и себестоимость в одной системе.",
  robots: { index: false, follow: false },
};

export default function DesignLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`d ${manrope.className}`}>
      {/* Провайдер обёрнут вокруг всего каркаса: кнопку «оставить заявку»
          открывают и шапка, и подвал, и любая секция страницы. */}
      <LeadPopupProvider>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </LeadPopupProvider>
    </div>
  );
}
