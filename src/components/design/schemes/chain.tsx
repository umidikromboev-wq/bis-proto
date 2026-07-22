import { GlassIcon, type IconName } from "../icon";

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
const STAGES: { icon: IconName; name: string; note: string }[] = [
  { icon: "partnership", name: "Заказ от клиента", note: "менеджер принял и зарезервировал" },
  { icon: "procurement", name: "Закупка сырья", note: "MRP посчитал, чего не хватит" },
  { icon: "production", name: "Производственное задание", note: "цех видит состав и срок" },
  { icon: "warehouse", name: "Движение по складу", note: "остаток обновился для всех" },
  { icon: "analytics", name: "Расчёт себестоимости", note: "пересчитался по факту списания" },
  { icon: "finance", name: "Деньги", note: "маржа по заказу видна сразу" },
];

export function ProcessChain() {
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
      <p className="ch-caption">
        Данные вводятся один раз в начале цепочки и дальше идут по ней сами — без повторного
        ввода на каждом стыке.
      </p>
    </div>
  );
}
