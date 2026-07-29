import Script from "next/script";

/**
 * Google Analytics 4.
 *
 * Счётчик перенесён с прежнего сайта тем же идентификатором: если завести
 * новый, история посещаемости оборвётся на дате переезда и сравнить «до и
 * после» будет не с чем — а это единственный способ вовремя увидеть просадку.
 *
 * Идентификатор берётся из переменной окружения и на витрине для согласования
 * не задаётся: демо-домен не должен подмешивать свои визиты в статистику
 * заказчика.
 *
 * Загрузка отложенная (afterInteractive): счётчик не должен задерживать
 * отрисовку первого экрана.
 */
export function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}');`}
      </Script>
    </>
  );
}
