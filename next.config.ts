import type { NextConfig } from "next";

/**
 * Политика безопасности содержимого.
 *
 * Собрана без nonce намеренно. Nonce требует, чтобы каждая страница
 * отрисовывалась под запрос — сайт перестал бы быть статическим и потерял бы
 * скорость первого экрана. Здесь это не окупается: пользовательского контента
 * на сайте нет, единственный ввод — форма заявки, и она никогда не выводится
 * обратно на страницу. Поверхности для XSS, ради которой нужен nonce, просто
 * нет.
 *
 * `'unsafe-inline'` для скриптов оставлен только потому, что Next встраивает
 * свои скрипты гидрации в разметку. Остальное закрыто жёстко: внешние скрипты
 * запрещены, формы уходят только на свой домен, сайт нельзя встроить во фрейм,
 * base-uri зафиксирован.
 *
 * Если на сайте появится пользовательский контент — отзывы, комментарии,
 * загрузка файлов, — политику нужно переводить на nonce через middleware.
 */
/**
 * Хосты Google Analytics.
 *
 * Счётчик перенесён с прежнего сайта, и без явного разрешения политика его
 * заблокирует: правило script-src 'self' внешние скрипты не пускает. Хосты
 * перечислены поимённо — открывать политику целиком ради одного счётчика
 * незачем.
 */
const GA_SCRIPT = "https://www.googletagmanager.com";
const GA_CONNECT = "https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${GA_SCRIPT}`,
  // Стили Next и next/font подставляются в разметку — иначе оформление отвалится.
  "style-src 'self' 'unsafe-inline'",
  // GA передаёт часть событий картинкой-пикселем.
  "img-src 'self' data: blob: https://*.google-analytics.com https://www.googletagmanager.com",
  "media-src 'self'",
  "font-src 'self' data:",
  // Наружу ходит только сервер (заявки в Telegram) и счётчик посещаемости.
  `connect-src 'self' ${GA_CONNECT}`,
  "form-action 'self'",
  "frame-ancestors 'none'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Год HSTS с поддоменами — требование preload-списка браузеров.
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  // frame-ancestors выше закрывает то же самое, но старые браузеры знают только этот заголовок.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Сайту не нужны ни камера, ни микрофон, ни геолокация — отзываем заранее.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
];

/**
 * Переезд с прежнего сайта bis-pro.com.
 *
 * Почти все проиндексированные адреса сохранены буквально — статьи лежат на
 * /post/<slug>, страницы на /courses, /vacancy, /portfolio, /sap-s-4hana, — и
 * редиректы им не нужны: для поиска эти адреса не менялись, переиндексировать
 * нечего. Ниже только те случаи, где прежний адрес сохранить нельзя.
 *
 * Мусорные черновики Webflow (/draft, /untitled, /robbit, /steel-pipe-draft,
 * /climadens-pro-drafr, /benefit-draft, /uz/uz/home) сюда намеренно не попали:
 * они отдают 404 и выпадут из индекса сами. Отдавать по ним 410 пришлось бы
 * через middleware, а он выполняется на каждом запросе к сайту — платить
 * скоростью всех страниц ради семи выброшенных черновиков не стоит.
 *
 * Next отдаёт постоянные редиректы кодом 308: он равнозначен 301 и, в отличие
 * от него, гарантированно сохраняет метод запроса.
 */
const LOCALE_PREFIXES = ["", "/uz"];

/** Пары «прежний адрес → новый», одинаковые для обеих языковых версий. */
const MOVED: [string, string][] = [
  // Кейс BRAUF перенесён целиком, остальные два на новом сайте пока не собраны:
  // их адреса ведут в список кейсов, а не на главную — так ближе по смыслу.
  ["/portfolio-page-1", "/portfolio/brauf"],
  ["/portfolio-page-2", "/portfolio"],
  ["/portfolio-page-3", "/portfolio"],
  ["/portfolio-page-4", "/portfolio"],
  // Вакансии прежнего сайта содержали текст-рыбу из шаблона Webflow; актуальные
  // роли перечислены на самой странице вакансий.
  ["/vacancy/trebuetsya-sap-konsultant", "/vacancy"],
  ["/vacancy/trebuetsya-sap-konsultant-2", "/vacancy"],
  // Отдельная страница формы обратного звонка заменена формой на контактах.
  ["/form-call", "/contacts"],
];

const nextConfig: NextConfig = {
  // Не сообщаем миру, на чём собран сайт: лишняя подсказка при подборе эксплойтов.
  poweredByHeader: false,
  async redirects() {
    return LOCALE_PREFIXES.flatMap((prefix) =>
      MOVED.map(([from, to]) => ({
        source: prefix + from,
        destination: prefix + to,
        permanent: true,
      })),
    );
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
