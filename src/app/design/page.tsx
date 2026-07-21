import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { DesignHero } from "@/components/design/hero";

/** Onest — чистый премиальный гротеск с полной кириллицей (RU/UZ). */
const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BIS — дизайн-версия · первый экран",
  description: "Дизайн-направление сайта BIS: premium corporate-tech, брендовая сине-циановая палитра.",
  robots: { index: false, follow: false },
};

export default function DesignPage() {
  return (
    <div className={onest.className}>
      <DesignHero />
    </div>
  );
}
