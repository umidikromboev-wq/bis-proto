import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { CasesIndex } from "@/components/case-views";

export const metadata: Metadata = {
  title: "Кейсы внедрения SAP · BIS",
  description: "Кейсы внедрения SAP Business One в производстве и дистрибуции Узбекистана: что было до, что изменилось после, с цифрами клиентов.",
};

export default function Page() {
  return (
    <SiteShell>
      <CasesIndex />
    </SiteShell>
  );
}
