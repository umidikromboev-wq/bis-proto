"use client";

/** Поля ввода калькулятора: сумма, ползунок и подпись группы. */

import { money, sep, parseMoney, toDisplay, type Currency } from "./format";

export function GroupTitle({ children }: { children: React.ReactNode }) {
  return <p className="wc-group">{children}</p>;
}

export function MoneyField({
  label,
  hint,
  value,
  currency,
  onChange,
}: {
  label: string;
  hint?: string;
  value: number;
  currency: Currency;
  onChange: (usd: number) => void;
}) {
  const display = value > 0 ? sep(toDisplay(value, currency)) : "";
  return (
    <label className="wc-field">
      <span className="wc-label">
        {label}
        {hint ? <i>{hint}</i> : null}
      </span>
      <input
        className="num-input sim-mono"
        inputMode="numeric"
        value={display}
        onChange={(e) => onChange(parseMoney(e.target.value, currency))}
        placeholder={currency === "usd" ? "$" : "сум"}
      />
    </label>
  );
}

export function SliderField({
  label,
  hint,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  hint?: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="mini wc-slider">
      <div className="mlabel">
        <span>
          {label}
          {hint ? <i className="wc-hint">{hint}</i> : null}
        </span>
        <b>{display}</b>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(+e.target.value)} />
    </div>
  );
}

export function MoneySlider({
  label,
  value,
  currency,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  currency: Currency;
  min: number;
  max: number;
  step: number;
  onChange: (usd: number) => void;
}) {
  return (
    <SliderField
      label={label}
      value={value}
      display={money(value, currency)}
      min={min}
      max={max}
      step={step}
      onChange={onChange}
    />
  );
}
