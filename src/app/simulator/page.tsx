import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { SimulatorView } from "@/components/simulator-view";

export const metadata: Metadata = {
  title: "Симулятор потерь без единой системы · BIS",
  description: "Посчитайте, сколько бизнес теряет без единой системы учёта: замороженный склад, скидки вслепую, ручной труд и упущенные запросы. Без формы и звонка.",
};

export default function Page() {
  return (
    <SiteShell>
      <SimulatorView />
    </SiteShell>
  );
}
