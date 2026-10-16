import { resolve } from 'node:path';
import { parseArgs } from 'node:util';
import { chromium } from 'playwright';

const { values, positionals } = parseArgs({
	allowPositionals: true,
	options: {
		url: { type: 'string', default: 'http://localhost:6006' },
		width: { type: 'string', default: '1280' },
		height: { type: 'string', default: '720' },
		click: { type: 'string', multiple: true, default: [] },
	},
});

const [storyId, out] = positionals;

if (!storyId || !out) {
	process.stderr.write(
		'Usage: pnpm screenshot <story-id> <out.png> [--url] [--width] [--height] [--click <text>]\n',
	);
	process.exit(1);
}

// `pnpm --filter` runs from the package dir; resolve against the caller's cwd instead.
const outPath = resolve(process.env.INIT_CWD ?? process.cwd(), out);

const browser = await chromium.launch();
const page = await browser.newPage({
	viewport: { width: Number(values.width), height: Number(values.height) },
	deviceScaleFactor: 2,
});

await page.goto(`${values.url}/iframe.html?id=${storyId}&viewMode=story`, { waitUntil: 'networkidle' });
await page.locator('#storybook-root > *').first().waitFor();
await page.evaluate(() => document.fonts.ready);

for (const text of values.click) {
	await page.getByText(text, { exact: true }).first().click();
}

if (values.click.length) {
	// Let open/enter animations finish.
	await page.waitForTimeout(500);
}

await page.screenshot({ path: outPath });
await browser.close();

process.stdout.write(`${outPath}\n`);
