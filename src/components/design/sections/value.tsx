import Image from "next/image";
import { industries } from "@/content/blocks";
import { clientLogos } from "@/content/client-logos";
import { effect, logoStrip, roles, unifiedBase } from "@/content/playbook";
import { Reveal } from "../reveal";
import { Section, SectionHead } from "../ui";

/**
 * Лента клиентов сразу под первым экраном.
 *
 * Знаки настоящие — из рабочей группы BIS. Все приведены к монохрому и одной
 * оптической высоте: исходники пришли на фонах от чёрного до жёлтого, и в
 * пёстром виде ряд читался бы как свалка, а не как список клиентов.
 * Лента едет сама — двадцать восемь знаков в статичный ряд не встают.
 */
export function LogoStrip() {
  return (
    <section className="d-strip" aria-label={logoStrip.title}>
      <div className="d-wrap">
        <span className="d-strip-title">{logoStrip.title}</span>
      </div>
      <div className="d-strip-track">
        {/* вторая копия подхватывает ленту в момент, когда первая уезжает */}
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1}>
            {clientLogos.map((c) => (
              <li key={`${copy}-${c.file}`}>
                <Image
                  src={`/design/logos/${c.file}`}
                  alt={copy === 0 ? c.name : ""}
                  width={c.w}
                  height={c.h}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

/**
 * Единая база. Снимает главный страх при покупке ERP — «модули не свяжутся».
 *
 * Поэтому связки показаны действиями, а не схемой с иконками: слева то, что
 * человек делает, справа — что от этого происходит у остальных.
 */
export function UnifiedBase() {
  return (
    <Section id="unified">
      <Reveal>
        <SectionHead kicker={unifiedBase.kicker} h2={unifiedBase.h2} lead={unifiedBase.lead} />
      </Reveal>

      <ul className="d-links">
        {unifiedBase.links.map((l, i) => (
          <Reveal as="li" key={l.action} delay={(i % 2) * 80}>
            <div className="d-link-action">
              <span className="d-link-arrow" aria-hidden>→</span>
              <h3 className="d-h3">{l.action}</h3>
            </div>
            <div className="d-link-effect">
              <p>{l.effect}</p>
              <span className="d-link-old">{l.old}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

/**
 * Эффект внедрения. Диапазоны, а не одна красивая цифра.
 *
 * Полоса — единственный график на сайте, поэтому она предельно простая:
 * длина кодирует величину эффекта, значение стоит рядом, источник — под ним.
 * Никаких осей и легенд: они здесь ничего не добавили бы.
 */
export function Effect() {
  return (
    <Section id="effect" tone="tint">
      <Reveal>
        <SectionHead kicker={effect.kicker} h2={effect.h2} lead={effect.lead} />
      </Reveal>

      <div className="d-bars">
        {effect.bars.map((bar, i) => (
          <Reveal key={bar.label} delay={i * 70} className="d-bar">
            <div className="d-bar-head">
              <span className="d-bar-label">{bar.label}</span>
              <span className="d-bar-value">
                {bar.from}<em>…{bar.to}</em>
              </span>
            </div>
            <div className="d-bar-track">
              <span className="d-bar-fill" style={{ ["--pct" as string]: `${bar.pct}%` }} />
            </div>
            <span className="d-bar-note">{bar.note}</span>
          </Reveal>
        ))}
      </div>

      <div className="d-multipliers">
        {effect.multipliers.map((m, i) => (
          <Reveal key={m.label} delay={i * 90} className="d-multiplier">
            <b>{m.value}</b>
            <span>{m.label}</span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Отрасли. Три группы, внутри — плотный список направлений. */
export function Industries() {
  return (
    <Section id="industries">
      <Reveal>
        <SectionHead kicker={industries.kicker} h2={industries.h2} lead={industries.lead} />
      </Reveal>

      <div className="d-industries">
        {industries.groups.map((g, i) => (
          <Reveal key={g.name} delay={i * 90} className="d-industry">
            <h3 className="d-h3">
              <span className="d-industry-count">{String(g.items.length).padStart(2, "0")}</span>
              {g.name}
            </h3>
            <ul>
              {g.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/**
 * Роли. Второй срез аудитории поверх отраслевого.
 *
 * У каждой роли своя боль и своя выгода, поэтому строка держит обе: боль
 * приглушена, выгода набрана основным цветом — читается как переход из «до»
 * в «после» внутри одной строки.
 */
export function Roles() {
  return (
    <Section id="roles" tone="tint">
      <Reveal>
        <SectionHead kicker={roles.kicker} h2={roles.h2} lead={roles.lead} />
      </Reveal>

      <div className="d-roles">
        {roles.items.map((r, i) => (
          <Reveal key={r.role} delay={(i % 2) * 80} className="d-role">
            <h3 className="d-h3">{r.role}</h3>
            <p className="d-role-pain">«{r.pain}»</p>
            <p className="d-role-gain">{r.gain}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
