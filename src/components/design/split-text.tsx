import { Fragment } from "react";

export type Segment = { text: string; accent?: boolean };

/**
 * Разбивает заголовок на буквы для анимации «по буквам снизу вверх».
 *
 * Слово — отдельный inline-block, буквы лежат внутри него: иначе перенос строки
 * рвал бы слова в произвольном месте, потому что каждая буква стала бы своим
 * блоком. Индекс буквы сквозной по всем сегментам, поэтому задержка нарастает
 * непрерывно, а не начинается заново на акцентной части.
 */
export function SplitHeading({ segments, className }: { segments: Segment[]; className?: string }) {
  let index = 0;
  const plain = segments.map((s) => s.text).join("");

  return (
    <span className={className}>
      {/* Видимый текст разбит на буквы и скрыт от скринридеров — иначе часть из
          них читает заголовок по одной букве. Смысл несёт эта копия. */}
      <span className="dh-sr">{plain}</span>
      {segments.map((seg, si) => {
        const words = seg.text.split(" ");
        return (
          <Fragment key={si}>
            {words.map((word, wi) => (
              <Fragment key={`${si}-${wi}`}>
                <span className={`dh-word${seg.accent ? " dh-word-accent" : ""}`} aria-hidden>
                  {Array.from(word).map((ch, ci) => (
                    <span key={ci} className="dh-char" style={{ animationDelay: `${0.18 + index++ * 0.022}s` }}>
                      {ch}
                    </span>
                  ))}
                </span>
                {wi < words.length - 1 ? " " : null}
              </Fragment>
            ))}
          </Fragment>
        );
      })}
    </span>
  );
}
