import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { AcademyView } from "@/components/academy-view";

export const metadata: Metadata = {
  title: "SAP Академия · обучение пользователей · BIS",
  description: "Обучение работе в SAP по ролям: пользователи, суперпользователи, администраторы. Часть внедрения BIS — снижает риск саботажа и ускоряет освоение системы на 30%.",
};

export default function Page() {
  return (
    <SiteShell>
      <AcademyView />
    </SiteShell>
  );
}
