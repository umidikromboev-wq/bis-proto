import type { Metadata } from "next";
import { WorkingCapitalCalculator } from "@/components/design/calculator/working-capital";
import "@/components/design/page-hero.css";

export const metadata: Metadata = {
  title: "Калькулятор оборотного капитала · BIS",
  description:
    "Посчитайте денежный цикл бизнеса: за сколько дней оборачивается товар, когда возвращаются деньги от клиентов и сколько заморожено в запасах и дебиторке. Расчёт по методике консультантов BIS.",
};

export default function Page() {
  return (
    <div className="d-wrap" style={{ paddingBlock: "calc(var(--nav-h) + 2rem) var(--section-y)" }}>
      <WorkingCapitalCalculator  locale="uz" />
    </div>
  );
}
