/**
 * Ограничение частоты обращений к приёму заявок.
 *
 * Счётчик живёт в памяти процесса. На serverless это значит, что при нескольких
 * одновременных экземплярах лимит считается по каждому отдельно — то есть это
 * заслон от скрипта в один поток, а не от распределённой атаки. Для формы
 * заявок этого достаточно: цель — чтобы группу в Telegram нельзя было залить
 * тысячей сообщений, а не выдержать ботнет.
 *
 * Если поток заявок вырастет или понадобится честный общий лимит — заменить
 * хранилище на Upstash Redis, интерфейс останется тем же.
 */
type Hit = { count: number; resetAt: number };

const store = new Map<string, Hit>();

/** Раз в сколько-то обращений подчищаем истёкшие записи, чтобы карта не росла. */
let sinceCleanup = 0;
const CLEANUP_EVERY = 500;

function cleanup(now: number): void {
  for (const [key, hit] of store) {
    if (hit.resetAt <= now) store.delete(key);
  }
}

export type RateLimitResult = {
  allowed: boolean;
  /** Сколько секунд ждать до следующей попытки. */
  retryAfter: number;
};

export function rateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now();

  if (++sinceCleanup >= CLEANUP_EVERY) {
    sinceCleanup = 0;
    cleanup(now);
  }

  const hit = store.get(key);

  if (!hit || hit.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfter: 0 };
  }

  if (hit.count >= limit) {
    return { allowed: false, retryAfter: Math.ceil((hit.resetAt - now) / 1000) };
  }

  // Счётчик заменяется новым объектом, а не мутируется на месте.
  store.set(key, { count: hit.count + 1, resetAt: hit.resetAt });
  return { allowed: true, retryAfter: 0 };
}

/**
 * Адрес клиента. За прокси Vercel настоящий адрес приходит в x-forwarded-for;
 * берём первый элемент — остальные подставляются промежуточными узлами и
 * доверять им нельзя.
 */
export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}
