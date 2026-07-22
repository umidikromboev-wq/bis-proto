import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [w,h,dev,tag] of [[1600,900,1,'d'],[390,844,2,'m']]) {
  const p = await b.newPage({viewport:{width:w,height:h}, deviceScaleFactor:dev, isMobile:tag==='m'});
  await p.goto('http://localhost:3000/design', {waitUntil:'networkidle'});
  await p.waitForTimeout(2200);
  // стык бумага -> белое и стык бумага -> тёмное
  await p.evaluate(()=>document.querySelector('#products').scrollIntoView());
  await p.waitForTimeout(1000);
  await p.screenshot({path:`/tmp/edge-${tag}-tint.png`});
  await p.evaluate(()=>document.querySelector('#cost').scrollIntoView());
  await p.waitForTimeout(1000);
  await p.screenshot({path:`/tmp/edge-${tag}-ink.png`});
  await p.close();
}
await b.close();
