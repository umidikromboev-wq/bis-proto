import type { Metadata } from "next";
import { SiteShell } from "@/components/shell";
import { ContactsView } from "@/components/contacts-view";

export const metadata: Metadata = {
  title: "Контакты · BIS",
  description: "Офис в Ташкенте, телефон, Telegram и почта BIS. Три формата первого разговора: аудит, встреча в Zoom, расчёт потерь.",
};

export default function Page() {
  return (
    <SiteShell>
      <ContactsView />
    </SiteShell>
  );
}
