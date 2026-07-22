"use client";

import { PixelArrow } from "./marks";
import { useLeadPopup } from "./lead-popup";

/**
 * Призыв в подвале. Вынесен отдельным клиентским компонентом, чтобы сам
 * подвал остался серверным — в нём больше ничего интерактивного нет.
 */
export function FooterCallButton() {
  const { openLead } = useLeadPopup();
  return (
    <button type="button" className="df-call-btn" onClick={() => openLead("audit")}>
      <span>Записаться на аудит</span>
      <span className="df-call-icon"><PixelArrow /></span>
    </button>
  );
}
