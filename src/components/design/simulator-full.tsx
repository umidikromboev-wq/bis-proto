"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import "./simulator.css";

/**
 * Симулятор потерь — копия прототипа один в один.
 *
 * Разметка, формулы, константы и порядок блоков не тронуты: в прототипе всё
 * это уже согласовано и работает. Отличие только в цвете — палитра
 * переопределена в simulator.css через те же CSS-переменные, на которых
 * симулятор и был собран. Ни одной новой сущности, чтобы поведение осталось
 * ровно тем, которое проверяли.
 *
 * Из зависимостей прототипа убраны две: хлебные крошки его оболочки и
 * контекст попапов — в дизайн-версии их нет.
 */

const PRESETS: Record<string, Record<string, number>> = {
  prod: { revenue: 4000000, margin: 25, frozen: 10, wacc: 22, blindShare: 40, blindLoss: 3, people: 2, salary: 700, time: 60, lost: 3 },
  distrib: { revenue: 6000000, margin: 18, frozen: 12, wacc: 22, blindShare: 35, blindLoss: 2.5, people: 2, salary: 600, time: 55, lost: 4 },
  retail: { revenue: 3000000, margin: 30, frozen: 8, wacc: 22, blindShare: 25, blindLoss: 2, people: 1, salary: 550, time: 50, lost: 3 },
};

const RATE = 12800; // сум за $ (вынести в актуальный курс)
const UNFREEZE = 0.30; // доля неликвида, высвобождаемая системой (разово)
const REC = { A: 0.30, B: 0.80, C: 0.70, D: 0.50 }; // возврат по строкам/год

const SLIDER_KEYS = ["margin", "frozen", "wacc", "blindShare", "blindLoss", "people", "salary", "time", "lost"] as const;
type SliderKey = (typeof SLIDER_KEYS)[number];
type Sliders = Record<SliderKey, number>;

const PRESET_LABELS: { key: string; label: string }[] = [
  { key: "prod", label: "Производство" },
  { key: "distrib", label: "Дистрибуция" },
  { key: "retail", label: "Розница" },
];

function sep(v: number): string {
  return Math.round(v).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function SimulatorFull() {
  const [cur, setCur] = useState<"usd" | "uzs">("usd");
  const [preset, setPreset] = useState<string | null>("prod");
  const [revUsd, setRevUsd] = useState<number>(PRESETS.prod.revenue);
  const [manualUsd, setManualUsd] = useState<number>(0);
  const [s, setS] = useState<Sliders>({
    margin: 25, frozen: 10, wacc: 22, blindShare: 40, blindLoss: 3, people: 2, salary: 700, time: 60, lost: 3,
  });

  // — чтение параметров из ссылки (переживает пересылку финдиректору) —
  // setState на маунте здесь корректно: гидратируем состояние из URL после SSR.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (!q.get("rev")) return;
    const isUzs = q.get("cur") === "uzs";
    if (isUzs) setCur("uzs");
    setPreset(null);
    setS((prev) => {
      const next = { ...prev };
      SLIDER_KEYS.forEach((k) => {
        const raw = q.get(k);
        if (raw !== null) next[k] = parseFloat(raw);
      });
      return next;
    });
    const rev = +(q.get("rev") || 0);
    setRevUsd(isUzs ? rev / RATE : rev);
    const man = q.get("manual");
    if (man) setManualUsd(isUzs ? +man / RATE : +man);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  const fmt = useMemo(() => (usd: number): string => {
    if (cur === "usd") return "$" + sep(usd);
    const v = usd * RATE;
    if (v >= 1e9) return (v / 1e9).toFixed(2).replace(".", ",") + " млрд сум";
    if (v >= 1e6) return Math.round(v / 1e6) + " млн сум";
    return sep(v) + " сум";
  }, [cur]);

  const toDisp = (usd: number) => (cur === "usd" ? usd : usd * RATE);

  // — расчёт (формулы дословно из HTML) —
  const r = useMemo(() => {
    const rev = revUsd;
    const margin = s.margin / 100;
    const frozen = s.frozen / 100;
    const wacc = s.wacc / 100;
    const blindShare = s.blindShare / 100;
    const blindLoss = s.blindLoss / 100;
    const excessStock = rev * frozen;
    const A = excessStock * wacc;
    const B = rev * blindShare * blindLoss;
    const C = s.people * s.salary * 12 * (s.time / 100);
    const D = rev * (s.lost / 100) * margin;
    const total = A + B + C + D + manualUsd;
    const unfreeze = excessStock * UNFREEZE;
    const recover = A * REC.A + B * REC.B + C * REC.C + D * REC.D;
    return { A, B, C, D, total, unfreeze, recover, rev };
  }, [revUsd, manualUsd, s]);

  function setSlider(k: SliderKey, v: number) {
    setPreset(null);
    setS((prev) => ({ ...prev, [k]: v }));
  }

  function applyPreset(k: string) {
    const p = PRESETS[k];
    setPreset(k);
    setRevUsd(p.revenue);
    setManualUsd(0);
    setS({
      margin: p.margin, frozen: p.frozen, wacc: p.wacc, blindShare: p.blindShare, blindLoss: p.blindLoss,
      people: p.people, salary: p.salary, time: p.time, lost: p.lost,
    });
  }

  function onMoneyInput(raw: string, setter: (usd: number) => void) {
    setPreset(null);
    const digits = parseInt(raw.replace(/[^\d]/g, "") || "0", 10);
    setter(cur === "usd" ? digits : digits / RATE);
  }

  function shareToTelegram() {
    const p = new URLSearchParams();
    p.set("cur", cur);
    p.set("rev", String(Math.round(revUsd)));
    SLIDER_KEYS.forEach((k) => p.set(k, String(s[k])));
    if (manualUsd > 0) p.set("manual", String(Math.round(manualUsd)));
    const url = window.location.origin + window.location.pathname + "?" + p.toString();
    const text = "Расчёт потерь без единой системы — BIS";
    window.open("https://t.me/share/url?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(text), "_blank");
  }

  const lines = [
    { n: "Замороженный склад", v: r.A },
    { n: "Скидка вслепую", v: r.B },
    { n: "Люди вместо системы", v: r.C },
    { n: "Упущенные запросы", v: r.D },
    ...(manualUsd > 0 ? [{ n: "Ваша цифра (инвентаризация)", v: manualUsd }] : []),
  ];
  const maxLine = Math.max(...lines.map((l) => l.v), 1);
  const revDisplay = revUsd > 0 ? sep(toDisp(revUsd)) : "";
  const manualDisplay = manualUsd > 0 ? sep(toDisp(manualUsd)) : "";

  return (
    <div className="sim sim-page">
      <nav className="dp-crumbs sim-crumbs" aria-label="Хлебные крошки">
        <span><Link href="/design">Главная</Link><i aria-hidden>/</i></span>
        <span><b>Симулятор потерь</b></span>
      </nav>

      <section className="section" style={{ paddingBlock: "clamp(1.5rem, 1rem + 3vw, 3rem)" }}>
        <div className="wrap">
          <p className="kicker">Симулятор · SAP Business One</p>
          <h1 className="h1" style={{ fontSize: "clamp(1.8rem, 1.3rem + 2.4vw, 3rem)", textTransform: "none", maxWidth: "22ch" }}>
            Сколько бизнес теряет без единой системы
          </h1>
          <p className="lead" style={{ marginTop: "1.25rem", maxWidth: "60ch" }}>
            Пока учёт живёт в Excel и 1С по отделам, деньги утекают тихо — счёт за это не приходит. Возьмите готовый пример или подставьте свои цифры. Каждая строка считается на ваших глазах, без формы и звонка.
          </p>

          <div className="sim-grid" style={{ marginTop: "2rem" }}>
            {/* ── Управление ─────────────────────────────────────────── */}
            <div className="panel" style={{ padding: "1.4rem" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", justifyContent: "space-between", alignItems: "flex-end", paddingBottom: "1.1rem", marginBottom: "1.1rem", borderBottom: "1px solid var(--line)" }}>
                <div style={{ display: "grid", gap: "0.5rem" }}>
                  <span className="dim" style={{ fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Пример бизнеса</span>
                  <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap" }}>
                    {PRESET_LABELS.map((p) => (
                      <button key={p.key} className={`pbtn ${preset === p.key ? "active" : ""}`} onClick={() => applyPreset(p.key)}>{p.label}</button>
                    ))}
                  </div>
                </div>
                <div style={{ display: "grid", gap: "0.5rem" }}>
                  <span className="dim" style={{ fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Валюта</span>
                  <div className="ctoggle">
                    <button className={cur === "usd" ? "active" : ""} onClick={() => setCur("usd")}>$</button>
                    <button className={cur === "uzs" ? "active" : ""} onClick={() => setCur("uzs")}>сум</button>
                  </div>
                </div>
              </div>

              <Field label="Годовой оборот компании">
                <input
                  className="num-input sim-mono" inputMode="numeric" value={revDisplay}
                  onChange={(e) => onMoneyInput(e.target.value, setRevUsd)}
                  placeholder={cur === "usd" ? "$" : "сум"}
                />
              </Field>

              <Slider label="Валовая маржа" value={`${s.margin}%`} min={5} max={60} step={1} v={s.margin} on={(v) => setSlider("margin", v)} />

              {/* A · Замороженный склад */}
              <div className="lc">
                <div className="lc-top"><span className="h3" style={{ fontSize: "0.98rem" }}>Замороженный склад</span><span className="lc-val">{fmt(r.A)}</span></div>
                <p className="lc-exp">Считаем не весь склад — рабочий запас бизнесу нужен. Потеря — только <b>избыток и неликвид</b>: деньги, которые лежат в товаре месяцами. При стоимости денег <b>{s.wacc}%</b>/год это цена их простоя.</p>
                <div style={{ display: "grid", gap: "0.85rem" }}>
                  <MiniSlider label="Доля оборота в избыточных запасах и неликвиде" value={`${s.frozen}%`} min={2} max={30} step={1} v={s.frozen} on={(v) => setSlider("frozen", v)} />
                  <MiniSlider label="Стоимость денег в год (кредит / упущенная выгода)" value={`${s.wacc}%`} min={10} max={40} step={1} v={s.wacc} on={(v) => setSlider("wacc", v)} />
                </div>
              </div>

              {/* B · Скидка вслепую */}
              <div className="lc">
                <div className="lc-top"><span className="h3" style={{ fontSize: "0.98rem" }}>Скидка вслепую</span><span className="lc-val">{fmt(r.B)}</span></div>
                <p className="lc-exp">Не зная точной себестоимости, менеджер даёт скидку из головы — и часть маржи уходит на объёме.</p>
                <div className="sub2">
                  <MiniSlider label="Доля сделок без точной с/с" value={`${s.blindShare}%`} min={0} max={100} step={5} v={s.blindShare} on={(v) => setSlider("blindShare", v)} />
                  <MiniSlider label="Недополучено маржи, п.п." value={String(s.blindLoss)} min={0} max={10} step={0.5} v={s.blindLoss} on={(v) => setSlider("blindLoss", v)} />
                </div>
                <p className="lc-hint">Пример: скидка 12% там, где можно было 9% — это 3 п.п.</p>
              </div>

              {/* C · Люди вместо системы */}
              <div className="lc">
                <div className="lc-top"><span className="h3" style={{ fontSize: "0.98rem" }}>Люди вместо системы</span><span className="lc-val">{fmt(r.C)}</span></div>
                <p className="lc-exp">Ручное сведение отчётов — оплаченные часы, которые не создают продукт. И риск: носитель знаний уходит вместе со знанием.</p>
                <div style={{ display: "grid", gap: "0.85rem" }}>
                  <div className="sub2">
                    <MiniSlider label="Человек на сведении" value={String(s.people)} min={0} max={10} step={1} v={s.people} on={(v) => setSlider("people", v)} />
                    <MiniSlider label="Средняя ЗП/мес" value={fmt(s.salary)} min={200} max={3000} step={50} v={s.salary} on={(v) => setSlider("salary", v)} />
                  </div>
                  <MiniSlider label="Доля их времени на ручную сверку" value={`${s.time}%`} min={10} max={100} step={5} v={s.time} on={(v) => setSlider("time", v)} />
                </div>
              </div>

              {/* D · Упущенные запросы */}
              <div className="lc">
                <div className="lc-top"><span className="h3" style={{ fontSize: "0.98rem" }}>Упущенные запросы</span><span className="lc-val">{fmt(r.D)}</span></div>
                <p className="lc-exp">Клиент уходит не потому, что дорого, а потому что вы не смогли назвать срок. Теряется маржа с запроса, не ставшего заказом.</p>
                <MiniSlider label="Доля запросов, не ставших заказами из-за неназванного срока" value={`${s.lost}%`} min={0} max={15} step={1} v={s.lost} on={(v) => setSlider("lost", v)} />
              </div>

              {/* Ручная строка */}
              <div className="manual">
                <p className="h3" style={{ fontSize: "0.98rem", marginBottom: "0.4rem" }}>Ваша цифра (необязательно)</p>
                <p className="lc-exp" style={{ marginBottom: "0.6rem" }}>Расхождение последней инвентаризации — впишите сумму, которую недосчитались. Это ваш факт, а не наш средний коэффициент.</p>
                <input className="sim-mono" inputMode="numeric" value={manualDisplay} onChange={(e) => onMoneyInput(e.target.value, setManualUsd)} placeholder="например, 70 000" />
                <p className="dim" style={{ fontSize: "0.72rem", marginTop: "0.6rem" }}>Система не гарантирует, что перестанут уносить, — она гарантирует, что вы увидите, где и когда. Поэтому в возврат эту строку не считаем.</p>
              </div>
            </div>

            {/* ── Результат ──────────────────────────────────────────── */}
            <div className="sim-result">
              <p className="dim" style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Теряете в год ориентировочно</p>
              <div className="sim-big">{fmt(r.total)}</div>
              <p className="dim" style={{ fontSize: "0.82rem", marginBottom: "1.25rem" }}>{fmt(r.total / 12)} в месяц</p>

              <div style={{ display: "grid", gap: "0.7rem", paddingBottom: "1.1rem", marginBottom: "1.1rem", borderBottom: "1px solid var(--line)" }}>
                {lines.map((l) => (
                  <div key={l.n} className="rrow">
                    <div className="rr-top"><span className="muted">{l.n}</span><b>{fmt(l.v)}</b></div>
                    <div className="rbar"><i style={{ width: `${Math.round((l.v / maxLine) * 100)}%` }} /></div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.1rem" }}>
                <div style={{ flex: 1 }}>
                  <p className="dim" style={{ fontSize: "0.72rem" }}>За 3 года</p>
                  <p className="sim-mono" style={{ fontWeight: 700, fontSize: "0.98rem" }}>{fmt(r.total * 3)}</p>
                </div>
                <div style={{ flex: 1 }}>
                  <p className="dim" style={{ fontSize: "0.72rem" }}>% от оборота</p>
                  <p className="sim-mono" style={{ fontWeight: 700, fontSize: "0.98rem" }}>{r.rev > 0 ? (r.total / r.rev * 100).toFixed(1) + "%" : "—"}</p>
                </div>
              </div>

              <div className="green" style={{ marginBottom: "1.1rem" }}>
                <p className="dim" style={{ fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.6rem" }}>Что вернёт единая система</p>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "0.6rem", padding: "0.3rem 0" }}>
                  <span className="muted" style={{ fontSize: "0.82rem" }}>Разово высвободится из склада</span>
                  <span className="g-val">{fmt(r.unfreeze)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "0.6rem", padding: "0.3rem 0" }}>
                  <span className="muted" style={{ fontSize: "0.82rem" }}>Вернётся в год (≈40–60% потерь)</span>
                  <span className="g-val">{fmt(r.recover)}/год</span>
                </div>
                <p className="dim" style={{ fontSize: "0.72rem", marginTop: "0.4rem" }}>Возврат считается по строкам: неликвид ~30%, скидка вслепую ~80%, ручной труд ~70%, упущенные запросы ~50%.</p>
              </div>

              <button className="btn btn-solid" style={{ width: "100%", marginBottom: "0.6rem" }} onClick={() => { window.location.hash = "#form"; }}>Точный расчёт от консультанта</button>
              <button className="btn" style={{ width: "100%" }} onClick={shareToTelegram}>Отправить расчёт себе в Telegram</button>
              <p className="dim" style={{ fontSize: "0.74rem", textAlign: "center", marginTop: "0.7rem" }}>3 минуты · без звонка · оборот и отрасль подставим автоматически</p>
            </div>
          </div>

          <div className="panel-2" style={{ padding: "0.9rem 1.1rem", marginTop: "1.25rem", fontSize: "0.8rem", color: "var(--muted)" }}>
            <b style={{ color: "var(--text)" }}>Что мы не считаем в деньгах:</b> решения задним числом и потолок роста честно оценить нельзя, поэтому реальная сумма потерь <b style={{ color: "var(--text)" }}>выше расчётной</b>, а не ниже.
          </div>
          <p className="note" style={{ marginTop: "0.75rem" }}>
            Коэффициенты — средние по проектам BIS до внедрения. [?] сверить дефолты с 3–5 реальными аудитами «до внедрения». Точный расчёт консультант делает на ваших данных.
          </p>
        </div>
      </section>

      {/* Мобильный sticky-итог */}
      <div className="msticky">
        <div>
          <div className="dim sim-mono" style={{ fontSize: "0.66rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Теряете в год</div>
          <div style={{ fontWeight: 700, fontSize: "1.15rem", color: "var(--loss)" }}>{fmt(r.total)}</div>
        </div>
        <button className="btn btn-solid" style={{ padding: "0.7rem 1rem", flex: "none" }} onClick={() => { window.location.hash = "#form"; }}>Точный расчёт</button>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "1.1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.45rem" }}>
        <span style={{ fontSize: "0.85rem", fontWeight: 500 }}>{label}</span>
      </div>
      {children}
    </div>
  );
}

function Slider({ label, value, min, max, step, v, on }: { label: string; value: string; min: number; max: number; step: number; v: number; on: (v: number) => void }) {
  return (
    <div style={{ marginBottom: "1.1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.45rem" }}>
        <span style={{ fontSize: "0.85rem", fontWeight: 500 }}>{label}</span>
        <span className="sim-mono" style={{ fontWeight: 700 }}>{value}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => on(+e.target.value)} />
    </div>
  );
}

function MiniSlider({ label, value, min, max, step, v, on }: { label: string; value: string; min: number; max: number; step: number; v: number; on: (v: number) => void }) {
  return (
    <div className="mini">
      <div className="mlabel"><span>{label}</span><b>{value}</b></div>
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => on(+e.target.value)} />
    </div>
  );
}
