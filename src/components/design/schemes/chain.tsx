import { GlassIcon } from "../icon";
import { schemes } from "@/content/schemes";
import { DEFAULT_LOCALE, type Locale } from "@/content/locale";

/**
 * Сквозной процесс: заказ → закупка → производство → склад → себестоимость →
 * деньги.
 *
 * Фраза «это один непрерывный процесс, а не шесть отдельных таблиц» текстом
 * не доказывается — её нужно увидеть. Поэтому здесь цепочка, по которой
 * непрерывно бежит импульс: он не останавливается на узлах и не начинается
 * заново, и именно это и есть всё сообщение блока.
 *
 * Импульс сделан на CSS-анимации фона линии, а не элементом: браузер держит
 * его на композиторе, и шесть бегущих точек ничего не стоят по кадрам.
 */

export function ProcessChain({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const { stages: STAGES, caption } = schemes(locale).chain;
  return (
    <div className="ch">
      <ol className="ch-track">
        {STAGES.map((s, i) => (
          <li key={s.name}>
            <span className="ch-node">
              <GlassIcon name={s.icon} />
            </span>
            <span className="ch-n">{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.name}</h3>
            <p>{s.note}</p>
            {i < STAGES.length - 1 ? <span className="ch-link" aria-hidden /> : null}
          </li>
        ))}
      </ol>
      <p className="ch-caption">{caption}</p>
    </div>
  );
}
