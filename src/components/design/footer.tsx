import Image from "next/image";
import Link from "next/link";
import { contacts, footer, nav, navSecondary } from "@/content/blocks";

/** Ссылки дизайн-версии живут под /design, пока она не стала основной. */
const base = (href: string) => (href.startsWith("/") ? `/design${href === "/" ? "" : href}` : href);

export function SiteFooter() {
  return (
    <footer className="d-footer">
      <div className="d-wrap">
        <div className="d-footer-top">
          <div className="d-footer-brand">
            <Image src="/design/bis-logo-white.png" alt="BIS — Business Intelligence Solutions" width={1012} height={782} />
            <p className="d-footer-legal">{contacts.legal}</p>
          </div>

          <div>
            <span className="d-footer-cap">{footer.navTitle}</span>
            <ul>
              {nav.map((n) => (
                <li key={n.href}><Link href={base(n.href)}>{n.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <span className="d-footer-cap">Ещё</span>
            <ul>
              {navSecondary.map((n) => (
                <li key={n.href}><Link href={base(n.href)}>{n.label}</Link></li>
              ))}
              {footer.legal.map((n) => (
                <li key={n.label}><a href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="d-footer-contact">
            <span className="d-footer-cap">Контакты</span>
            <a className="d-footer-phone" href={contacts.phoneHref}>{contacts.phone}</a>
            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
            <p style={{ margin: "0.8rem 0 0" }}>{contacts.address}</p>
          </div>
        </div>

        <div className="d-footer-bottom">
          <span>© {new Date().getFullYear()} BIS · Business Intelligence Solutions</span>
          <span>Официальный партнёр SAP в Узбекистане</span>
        </div>
      </div>
    </footer>
  );
}
