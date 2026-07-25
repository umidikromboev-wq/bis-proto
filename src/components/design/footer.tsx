import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { DEFAULT_LOCALE, localePath, type Locale } from "@/content/locale";
import { ui } from "@/content/ui";
import { PixelArrow, SapMark } from "./marks";
import { FooterCallButton } from "./footer-cta";
import "./footer.css";

/**
 * Подвал.
 *
 * Построен не как служебная сноска, а как последний экран: сначала крупный
 * призыв во всю ширину, потом контакты и разделы, и только внизу — правовая
 * строка. Логика та же, что у первого экрана: человек, дочитавший до конца,
 * должен упереться в действие, а не в мелкий список ссылок.
 */
export function SiteFooter({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const { contacts, footer, nav, navSecondary } = content(locale).blocks;
  const txt = ui(locale);
  const href = (path: string) => localePath(locale, path);

  return (
    <footer className="df">
      <div className="d-wrap">
        {/* Призыв во всю ширину: подвал начинается с действия, а не со ссылок */}
        <div className="df-call">
          <div>
            <span className="df-cap">{txt.nextStep}</span>
            <p className="df-call-h">
              {txt.footerCallH[0]}<br />{txt.footerCallH[1]}
            </p>
          </div>
          <FooterCallButton label={txt.bookAudit} />
        </div>

        <div className="df-grid">
          <div className="df-brand">
            <Image src="/design/bis-logo-white.png" alt="BIS — Business Intelligence Solutions" width={1012} height={782} />
            <p>{contacts.legal}</p>
            <span className="df-partner">
              <SapMark />
              {txt.partnerLine}
            </span>
          </div>

          <nav className="df-col" aria-label={txt.navSections}>
            <span className="df-cap">{footer.navTitle}</span>
            <ul>
              {nav.map((n) => (
                <li key={n.href}><Link href={href(n.href)}>{n.label}</Link></li>
              ))}
            </ul>
          </nav>

          <nav className="df-col" aria-label={txt.navSecondary}>
            <span className="df-cap">{txt.more}</span>
            <ul>
              {navSecondary.map((n) => (
                <li key={n.href}><Link href={href(n.href)}>{n.label}</Link></li>
              ))}
              <li><Link href={href("/simulator")}>{txt.workingCapital}</Link></li>
              {footer.legal.map((n) => (
                <li key={n.label}><a href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="df-col df-contacts">
            <span className="df-cap">{txt.contacts}</span>
            {/* Телефон набран крупно: в B2B это самый частый способ первого касания */}
            <a className="df-phone" href={contacts.phoneHref}>{contacts.phone}</a>
            <a className="df-mail" href={`mailto:${contacts.email}`}>{contacts.email}</a>
            <p className="df-address">{contacts.address}</p>
          </div>
        </div>

        <div className="df-bottom">
          <span>© {new Date().getFullYear()} BIS · Business Intelligence Solutions</span>
          <span>{txt.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
