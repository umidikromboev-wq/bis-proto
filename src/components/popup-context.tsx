"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type PopupId =
  | "lead"        // основная заявка на аудит
  | "zoom"        // запись на встречу в Zoom
  | "calc"        // квиз-калькулятор потерь
  | "checklist"   // лид-магнит: чек-лист готовности
  | "policy"
  | "requisites"
  | "menu"
  | `case:${string}`
  | null;

type Ctx = {
  open: PopupId;
  payload?: Record<string, string>;
  show: (id: Exclude<PopupId, null>, payload?: Record<string, string>) => void;
  close: () => void;
};

const PopupCtx = createContext<Ctx | null>(null);

export function PopupProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<PopupId>(null);
  const [payload, setPayload] = useState<Record<string, string> | undefined>();

  const show = useCallback((id: Exclude<PopupId, null>, p?: Record<string, string>) => {
    setPayload(p);
    setOpen(id);
  }, []);

  const close = useCallback(() => {
    setOpen(null);
    setPayload(undefined);
  }, []);

  // Esc закрывает, фон не скроллится под попапом
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  // Поддержка ссылок вида href="#popup:policy" — как в прототипах Fobesko
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href^='#popup:']") as HTMLAnchorElement | null;
      if (!a) return;
      e.preventDefault();
      const id = a.getAttribute("href")!.replace("#popup:", "");
      show(id as Exclude<PopupId, null>);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [show]);

  const value = useMemo(() => ({ open, payload, show, close }), [open, payload, show, close]);
  return <PopupCtx.Provider value={value}>{children}</PopupCtx.Provider>;
}

export function usePopup() {
  const ctx = useContext(PopupCtx);
  if (!ctx) throw new Error("usePopup должен вызываться внутри PopupProvider");
  return ctx;
}
