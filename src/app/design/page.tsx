import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { DesignHero } from "@/components/design/hero";

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
  title: "BIS — дизайн-версия · первый экран",
  description: "Дизайн-направление сайта BIS: premium corporate-tech, брендовая сине-циановая палитра.",
  robots: { index: false, follow: false },
};

export default function DesignPage() {
  return (
    <div className={manrope.className}>
      <DesignHero />
    </div>
  );
}
