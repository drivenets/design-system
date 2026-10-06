// Builds a single self-contained HTML page from failed visual tests, with baseline, actual and diff
// images embedded, so CI can publish it as one artifact that opens directly in the browser.
// Run after `pnpm test:visual`; writes nothing when there are no failures.
import { appendFileSync, existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const PACKAGE_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ATTACHMENTS_DIR = join(PACKAGE_ROOT, '.vitest', 'attachments');
const SCREENSHOTS_DIR_NAME = '__screenshots__';
const REPORT_PATH = join(ATTACHMENTS_DIR, 'visual-test-report.html');

const ACTUAL_SUFFIX = '-actual.png';
const DIFF_SUFFIX = '-diff.png';

interface Failure {
	storyFile: string;
	name: string;
	baseline: string | null;
	actual: string;
	diff: string | null;
}

const failures = findFailures();

if (failures.length === 0) {
	process.stdout.write('No visual test failures, no report written.\n');
	process.exit(0);
}

writeFileSync(REPORT_PATH, renderReport(failures));
process.stdout.write(
	`Wrote ${String(failures.length)} failure(s) to ${relative(process.cwd(), REPORT_PATH)}\n`,
);

// In GitHub Actions, list the failures on the job's summary page too.
if (process.env.GITHUB_STEP_SUMMARY) {
	appendFileSync(process.env.GITHUB_STEP_SUMMARY, renderSummary(failures));
}

function findFailures(): Failure[] {
	if (!existsSync(ATTACHMENTS_DIR)) {
		return [];
	}

	return readdirSync(ATTACHMENTS_DIR, { recursive: true, encoding: 'utf-8' })
		.filter((file) => file.endsWith(ACTUAL_SUFFIX))
		.sort()
		.map((actualFile) => {
			// Layout: <attachments>/<story dir>/<story file>/<name>-actual.png
			const storyFileDir = dirname(actualFile);
			const name = actualFile.slice(storyFileDir.length + 1, -ACTUAL_SUFFIX.length);
			const storyDir = dirname(storyFileDir);
			const storyFile = storyFileDir.slice(storyDir.length + 1);

			const baseline = join(PACKAGE_ROOT, storyDir, SCREENSHOTS_DIR_NAME, storyFile, `${name}.png`);
			const diff = join(ATTACHMENTS_DIR, storyFileDir, `${name}${DIFF_SUFFIX}`);

			return {
				storyFile: join(storyDir, storyFile),
				name,
				baseline: existsSync(baseline) ? baseline : null,
				actual: join(ATTACHMENTS_DIR, actualFile),
				diff: existsSync(diff) ? diff : null,
			};
		});
}

function renderReport(items: Failure[]): string {
	const sections = items.map(
		(item) => `
<section>
	<h2>${escapeHtml(item.name)}</h2>
	<p class="file">${escapeHtml(item.storyFile)}</p>
	<div class="images">
		${renderImage('Baseline', item.baseline, 'No baseline committed for this story')}
		${renderImage('Actual', item.actual)}
		${renderImage('Diff', item.diff, 'No diff (missing baseline)')}
	</div>
</section>`,
	);

	return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Visual test failures</title>
<style>
	body { margin: 0; padding: 24px; font: 14px/1.4 system-ui, sans-serif; background: #f5f6f8; color: #1d2433; }
	h1 { margin: 0 0 4px; font-size: 20px; }
	section { margin-top: 24px; padding: 16px; background: #fff; border: 1px solid #d9dde5; border-radius: 8px; }
	h2 { margin: 0; font-size: 16px; }
	.file { margin: 2px 0 12px; color: #5c6680; font-family: ui-monospace, monospace; font-size: 12px; }
	.images { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
	figure { margin: 0; }
	figcaption { margin-bottom: 4px; font-weight: 600; }
	img { display: block; width: 100%; border: 1px solid #d9dde5; cursor: zoom-in; }
	figure.zoomed { grid-column: 1 / -1; }
	figure.zoomed img { width: auto; max-width: 100%; cursor: zoom-out; }
	.missing { padding: 24px; border: 1px dashed #d9dde5; color: #5c6680; text-align: center; }
</style>
</head>
<body>
<h1>Visual test failures (${String(items.length)})</h1>
<p>Baseline is the committed screenshot, Actual is what this run rendered, and Diff marks mismatched pixels in red. Click an image to expand it.</p>
${sections.join('\n')}
<script>
	document.addEventListener('click', (event) => {
		if (event.target instanceof HTMLImageElement) {
			event.target.closest('figure').classList.toggle('zoomed');
		}
	});
</script>
</body>
</html>
`;
}

function renderSummary(items: Failure[]): string {
	const rows = items.map(
		(item) => `| \`${item.storyFile}\` | ${item.name} | ${item.baseline ? 'Changed' : 'No baseline'} |`,
	);

	return [
		`### Visual tests: ${String(items.length)} failed`,
		'',
		'| Story file | Story | Result |',
		'| --- | --- | --- |',
		...rows,
		'',
		'',
	].join('\n');
}

function renderImage(label: string, file: string | null, missingText = 'Missing'): string {
	if (!file) {
		return `<figure><figcaption>${label}</figcaption><div class="missing">${missingText}</div></figure>`;
	}

	const src = `data:image/png;base64,${readFileSync(file).toString('base64')}`;

	return `<figure><figcaption>${label}</figcaption><img src="${src}" alt="${label}"></figure>`;
}

function escapeHtml(value: string): string {
	return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
