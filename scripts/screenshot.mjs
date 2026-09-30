// Full-page screenshots at desktop, tablet and phone widths for visual review.
// Usage: npm run dev  (in another shell), then  npm run shots [-- <url> [<path> ...]]
//   npm run shots                       -> http://localhost:3000/
//   npm run shots -- http://localhost:3000 / /work/hospital
import { chromium } from "playwright";
import { existsSync, mkdirSync } from "node:fs";

const [base = "http://localhost:3000", ...paths] = process.argv.slice(2);
const routes = paths.length ? paths : ["/"];
const viewports = {
  desktop: { width: 1440, height: 900 },
  tablet: { width: 820, height: 1180 },
  phone: { width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
};
const out = "screenshots";
mkdirSync(out, { recursive: true });

const executablePath = existsSync("/opt/pw-browsers/chromium")
  ? "/opt/pw-browsers/chromium"
  : undefined;
const browser = await chromium.launch(executablePath ? { executablePath } : {});

for (const [name, { width, height, ...rest }] of Object.entries(viewports)) {
  const page = await browser.newPage({ viewport: { width, height }, ...rest });
  for (const route of routes) {
    await page.goto(new URL(route, base).href, { waitUntil: "networkidle" });
    // Scroll through once so scroll-triggered content is revealed before capture.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight / 2) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 400));
    });
    const slug = route === "/" ? "home" : route.replace(/^\/|\/$/g, "").replace(/\//g, "-");
    const file = `${out}/${slug}-${name}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(file);
  }
  await page.close();
}
await browser.close();
