import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Смысловое выделение и ссылки внутри строки контента.
 *
 * В текстах контента важное место помечается двумя звёздочками — `**так**`,
 * а ссылка — `[текст](/адрес)`. Здесь разметка превращается в <strong> и <a>.
 * Так формулировка и её акцент лежат рядом в одном файле контента, а не
 * разъезжаются по JSX.
 *
 * Через dangerouslySetInnerHTML это делать нельзя: контент всё равно проходит
 * через редактора, и открывать в нём вставку HTML незачем.
 */

/** Ссылка `[текст](адрес)` либо выделение `**текст**`. */
const TOKEN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

export function em(text: string): ReactNode {
  if (!text.includes("**") && !text.includes("](")) return text;

  const out: ReactNode[] = [];
  let last = 0;

  for (const m of text.matchAll(TOKEN)) {
    const start = m.index;
    if (start > last) out.push(text.slice(last, start));

    if (m[1] === undefined) {
      out.push(<strong key={start}>{m[3]}</strong>);
    } else if (m[2].startsWith("/")) {
      // Свой адрес — переход без перезагрузки страницы.
      out.push(
        <Link key={start} href={m[2]}>
          {em(m[1])}
        </Link>,
      );
    } else {
      out.push(
        <a key={start} href={m[2]} rel="noopener noreferrer" target="_blank">
          {em(m[1])}
        </a>,
      );
    }
    last = start + m[0].length;
  }

  if (last < text.length) out.push(text.slice(last));
  return out;
}
