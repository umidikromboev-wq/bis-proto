import type { Metadata } from "next";
import { SimulatorFull } from "@/components/design/simulator-full";
import "@/components/design/page-hero.css";

export const metadata: Metadata = {
  title: "Сколько бизнес теряет без единой системы · BIS",
  description:
    "Симулятор потерь без единой системы учёта: подставьте свои цифры и увидите, во что обходится текущая схема и что вернёт внедрение SAP.",
};

export default function Page() {
  return (
    <div className="d-wrap" style={{ paddingBlock: "calc(var(--nav-h) + 2rem) var(--section-y)" }}>
      <SimulatorFull />
    </div>
  );
}
