import Image from "next/image";
import Link from "next/link";
import { contacts, footer, nav, navSecondary } from "@/content/blocks";
import { PixelArrow, SapMark } from "./marks";
import "./footer.css";

/** Ссылки дизайн-версии живут под /design, пока она не стала основной. */
const base = (href: string) => (href.startsWith("/") ? `/design${href === "/" ? "" : href}` : href);

/**
 * Подвал.
 *
 * Построен не как служебная сноска, а как последний экран: сначала крупный
 * призыв во всю ширину, потом контакты и разделы, и только внизу — правовая
 * строка. Логика та же, что у первого экрана: человек, дочитавший до конца,
 * должен упереться в действие, а не в мелкий список ссылок.
 */
export function SiteFooter() {
  return (
    <footer className="df">
      <div className="d-wrap">
        {/* Призыв во всю ширину: подвал начинается с действия, а не со ссылок */}
        <div className="df-call">
          <div>
            <span className="df-cap">Следующий шаг</span>
            <p className="df-call-h">
              Разберём ваши процессы<br />и покажем систему на них
            </p>
          </div>
          <a href="#form" className="df-call-btn">
            <span>Записаться на аудит</span>
            <span className="df-call-icon"><PixelArrow /></span>
          </a>
        </div>

        <div className="df-grid">
          <div className="df-brand">
            <Image src="/design/bis-logo-white.png" alt="BIS — Business Intelligence Solutions" width={1012} height={782} />
            <p>{contacts.legal}</p>
            <span className="df-partner">
              <SapMark />
              Внедряем SAP в Узбекистане с 2019 года
            </span>
          </div>

          <nav className="df-col" aria-label="Разделы сайта">
            <span className="df-cap">{footer.navTitle}</span>
            <ul>
              {nav.map((n) => (
                <li key={n.href}><Link href={base(n.href)}>{n.label}</Link></li>
              ))}
            </ul>
          </nav>

          <nav className="df-col" aria-label="Дополнительные разделы">
            <span className="df-cap">Ещё</span>
            <ul>
              {navSecondary.map((n) => (
                <li key={n.href}><Link href={base(n.href)}>{n.label}</Link></li>
              ))}
              <li><Link href="/design/simulator">Симулятор потерь</Link></li>
              {footer.legal.map((n) => (
                <li key={n.label}><a href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="df-col df-contacts">
            <span className="df-cap">Контакты</span>
            {/* Телефон набран крупно: в B2B это самый частый способ первого касания */}
            <a className="df-phone" href={contacts.phoneHref}>{contacts.phone}</a>
            <a className="df-mail" href={`mailto:${contacts.email}`}>{contacts.email}</a>
            <p className="df-address">{contacts.address}</p>
          </div>
        </div>

        <div className="df-bottom">
          <span>© {new Date().getFullYear()} BIS · Business Intelligence Solutions</span>
          <span>Ташкент · внедрение и поддержка SAP</span>
        </div>
      </div>
    </footer>
  );
}
