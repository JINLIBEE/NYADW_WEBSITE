import puppeteer from "file:///C:/Users/jinli/.claude-tools/nyadw-puppeteer/node_modules/puppeteer/lib/puppeteer/puppeteer.js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
const url = args.find((a) => !a.startsWith("--")) || "http://localhost:3002";
const label = args.slice(1).find((a) => !a.startsWith("--"));
const isMobile = args.includes("--mobile");

const widthArg = args.find((a) => a.startsWith("--width="));
const heightArg = args.find((a) => a.startsWith("--height="));

let width = isMobile ? 390 : 1440;
let height = isMobile ? 844 : 900;
if (widthArg) width = parseInt(widthArg.split("=")[1], 10);
if (heightArg) height = parseInt(heightArg.split("=")[1], 10);

const outDir = path.join(__dirname, "temporary screenshots");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const existing = fs
  .readdirSync(outDir)
  .map((f) => {
    const m = f.match(/^screenshot-(\d+)/);
    return m ? parseInt(m[1], 10) : 0;
  })
  .filter((n) => !Number.isNaN(n));
const next = existing.length ? Math.max(...existing) + 1 : 1;

const fileName = label
  ? `screenshot-${next}-${label}.png`
  : `screenshot-${next}.png`;
const outPath = path.join(outDir, fileName);

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width, height });
await page.goto(url, { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 1200));
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Saved ${outPath}`);
