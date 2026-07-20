"use client";

import type { ReactNode } from "react";
import type { Img } from "@/content/types";

/** Заглушка изображения: серый блок + ТЗ дизайнеру, что здесь будет. */
export function Placeholder({ img, className, style }: { img: Img; className?: string; style?: React.CSSProperties }) {
  return (
    <figure className={`ph ${className ?? ""}`} style={style}>
      <figcaption className="ph-label">
        <InfoIcon />
        <span>
          <b>Фото:</b> {img.brief}
        </span>
      </figcaption>
      <ImageIcon />
      <span aria-hidden />
    </figure>
  );
}

function InfoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" style={{ flex: "none", marginTop: 2 }}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" strokeLinecap="round" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg className="ph-icon" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <circle cx="9" cy="10" r="1.7" />
      <path d="m4 18 5-5 4 4 3-2.5 4 3.5" strokeLinejoin="round" />
    </svg>
  );
}

export function Section({
  id,
  kicker,
  h2,
  lead,
  children,
  className,
}: {
  id?: string;
  kicker?: string;
  h2?: string;
  lead?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`section ${className ?? ""}`}>
      <div className="wrap">
        {(kicker || h2 || lead) && (
          <header style={{ maxWidth: "56ch", marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}>
            {kicker && <p className="kicker">{kicker}</p>}
            {h2 && <h2 className="h2">{h2}</h2>}
            {lead && <p className="lead" style={{ marginTop: "1.25rem" }}>{lead}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export function Stat({ value, label, note }: { value: string; label: string; note?: string }) {
  return (
    <div className="panel" style={{ padding: "1.4rem 1.5rem" }}>
      <div style={{ fontSize: "clamp(1.7rem, 1.2rem + 1.6vw, 2.5rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
        {value}
      </div>
      <div className="muted" style={{ fontSize: "0.88rem", marginTop: "0.5rem" }}>{label}</div>
      {note && <div className="dim" style={{ fontSize: "0.76rem", marginTop: "0.35rem" }}>{note}</div>}
    </div>
  );
}

export function Arrow({ dir = "down" }: { dir?: "down" | "right" }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {dir === "down" ? <path d="M12 5v14M6 13l6 6 6-6" /> : <path d="M5 12h14M13 6l6 6-6 6" />}
    </svg>
  );
}
