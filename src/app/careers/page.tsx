import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { CareersView } from "@/components/careers-view";

export const metadata: Metadata = {
  title: "Вакансии · BIS",
  description: "Работа в BIS: SAP-консультанты, разработчики .NET и проект-менеджеры внедрения. Реальные проекты SAP в Ташкенте, обучение и сертификации за счёт компании.",
};

export default function Page() {
  return (
    <SiteShell>
      <CareersView />
    </SiteShell>
  );
}
