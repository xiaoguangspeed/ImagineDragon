const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://zb.oschina.net/projects/list.html');
  await page.setViewport({width:1366,height:768});
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();