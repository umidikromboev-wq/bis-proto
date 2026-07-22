import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({viewport:{width:1600,height:900}, deviceScaleFactor:1.5});
await p.goto('http://localhost:3000/design', {waitUntil:'networkidle'});
await p.waitForTimeout(3000);
await p.screenshot({path:'/tmp/hdr.png', clip:{x:0,y:0,width:2400,height:260}});
await p.screenshot({path:'/tmp/closed.png'});
// открываем меню
await p.click('.dh-burger');
await p.waitForTimeout(400);
await p.screenshot({path:'/tmp/menu-mid.png'});
await p.waitForTimeout(1000);
await p.screenshot({path:'/tmp/menu-open.png'});
// наведение на пункт — проверяем гашение соседей
await p.hover('.dh-menu-list li:nth-child(2) a');
await p.waitForTimeout(600);
await p.screenshot({path:'/tmp/menu-hover.png'});
// Esc закрывает
await p.keyboard.press('Escape');
await p.waitForTimeout(900);
const st = await p.evaluate(() => {
  const m = document.querySelector('.dh-menu');
  return {открыто: m.classList.contains('is-open'), inert: m.hasAttribute('inert'), скроллЗаблокирован: document.body.style.overflow};
});
console.log('после Esc:', JSON.stringify(st));
await b.close();
