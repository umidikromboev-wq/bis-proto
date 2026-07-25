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
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  // Стили Next и next/font подставляются в разметку — иначе оформление отвалится.
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "media-src 'self'",
  "font-src 'self' data:",
  // Наружу ходит только сервер (заявки в Telegram), браузеру внешние адреса не нужны.
  "connect-src 'self'",
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

const nextConfig: NextConfig = {
  // Не сообщаем миру, на чём собран сайт: лишняя подсказка при подборе эксплойтов.
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
