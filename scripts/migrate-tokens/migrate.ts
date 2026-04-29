import fs from 'node:fs';
import path from 'node:path';
import { hasBothNames, hasOldName, type Mapping, parseMappings, type WithOldName } from './parse-mappings';
import { resolveAll, type ResolvedValues } from './resolve-values';
import {
	applyReplacements,
	findUsages,
	type Replacement,
	type ReplaceResult,
	type Usage,
} from './replace-tokens';

const ROOT = process.cwd();
const REPORTS_DIR = path.resolve(ROOT, 'scripts/migrate-tokens/reports');
const PREP_REPORT = path.join(REPORTS_DIR, 'step-3-removed-prep.md');
const APPLY_REPORT = path.join(REPORTS_DIR, 'step-3-removed-apply.md');

const ensureReportsDir = (): void => {
	fs.mkdirSync(REPORTS_DIR, { recursive: true });
};

const relPath = (file: string): string => path.relative(ROOT, file);

const componentOf = (file: string): string => {
	const [, name] = /\/components\/(ds-[^/]+)\//.exec(file) ?? [];

	if (name) {
		return name;
	}

	if (file.includes('/src/styles/')) {
		return 'styles';
	}

	if (file.includes('/src/stories/')) {
		return 'stories';
	}

	if (file.includes('/src/utils/')) {
		return 'utils';
	}

	return relPath(file);
};

const formatPerToken = (perToken: Map<string, number>): string => {
	const rows = [...perToken.entries()].sort((a, b) => b[1] - a[1]);
	const lines = ['| Old token | Replacements |', '| --------- | ------------ |'];

	for (const [token, count] of rows) {
		lines.push(`| \`${token}\` | ${count.toString()} |`);
	}

	return lines.join('\n');
};

const formatPerFile = (perFile: Map<string, Map<string, number>>): string => {
	const groups = new Map<string, { file: string; tokens: Map<string, number> }[]>();

	for (const [file, tokens] of perFile) {
		const component = componentOf(file);
		const list = groups.get(component) ?? [];
		list.push({ file, tokens });
		groups.set(component, list);
	}

	const sortedGroups = [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0]));
	const lines: string[] = [];

	for (const [component, entries] of sortedGroups) {
		const total = entries.reduce((sum, e) => sum + [...e.tokens.values()].reduce((s, n) => s + n, 0), 0);

		lines.push(`### \`${component}\` (${total.toString()} replacements)`);
		lines.push('');

		for (const { file, tokens } of entries.sort((a, b) => a.file.localeCompare(b.file))) {
			const tokenSummary = [...tokens.entries()].map(([t, n]) => `\`${t}\`×${n.toString()}`).join(', ');

			lines.push(`- \`${relPath(file)}\` — ${tokenSummary}`);
		}

		lines.push('');
	}

	return lines.join('\n');
};

const ensureUniqueByOldName = (replacements: Replacement[]): Replacement[] => {
	const seen = new Map<string, string>();

	for (const r of replacements) {
		const existing = seen.get(r.oldName);

		if (existing && existing !== r.newName) {
			throw new Error(`Conflicting replacement for ${r.oldName}: ${existing} vs ${r.newName}`);
		}

		seen.set(r.oldName, r.newName);
	}

	return [...seen.entries()].map(([oldName, newName]) => ({ oldName, newName }));
};

const renamableMappings = (mappings: Mapping[], status: 'Renamed' | 'Changed'): Replacement[] =>
	mappings
		.filter(hasBothNames)
		.filter((m) => m.status === status && m.oldName !== m.newName)
		.map((m) => ({ oldName: m.oldName, newName: m.newName }));

const sameNameMappings = (mappings: Mapping[], status: 'Renamed' | 'Changed'): WithOldName[] =>
	mappings.filter(hasBothNames).filter((m) => m.status === status && m.oldName === m.newName);

const dryRun = process.argv.includes('--dry-run');

const writeReport = (file: string, content: string): void => {
	ensureReportsDir();
	fs.writeFileSync(file, content);
	console.log(`Report written: ${relPath(file)}`);
};

const summarize = (label: string, result: ReplaceResult): void => {
	console.log(
		`${label}: scanned ${result.filesScanned.toString()} files, changed ${result.filesChanged.toString()}, ${result.totalReplacements.toString()} replacements${dryRun ? ' (dry-run)' : ''}`,
	);
};

const runRenamed = (): void => {
	const mappings = parseMappings();
	const replacements = ensureUniqueByOldName(renamableMappings(mappings, 'Renamed'));
	const result = applyReplacements(replacements, { dryRun });

	summarize('Phase 1 (Renamed)', result);

	const skipped = [
		'packages/design-system/src/styles/_root.scss',
		'packages/design-system/src/styles/_colors.scss',
		'packages/design-system/src/styles/_spacing.scss',
		'**/*.mdx (all docs, including token-migration.mdx and colors.mdx)',
	];

	const lines: string[] = [
		'# Phase 1 — Renamed tokens',
		'',
		'> Trivial renames where the resolved value is identical. No visual testing required.',
		'',
		'## Summary',
		'',
		`- Files scanned: ${result.filesScanned.toString()}`,
		`- Files changed: ${result.filesChanged.toString()}`,
		`- Total replacements: ${result.totalReplacements.toString()}`,
		`- Unique tokens renamed: ${replacements.length.toString()}`,
		'',
		'## Excluded from rewrites',
		'',
		...skipped.map((p) => `- \`${p}\``),
		'',
		'## Replacements per token',
		'',
		formatPerToken(result.perToken),
		'',
		'## Affected files (grouped)',
		'',
		formatPerFile(result.perFile),
	];

	writeReport(path.join(REPORTS_DIR, 'step-1-renamed.md'), lines.join('\n'));
};

const VALUE_CHANGE_NOTES: { token: string; oldValue: string; newValue: string }[] = [
	{ token: '--color-red-100 → --color-dap-red-100', oldValue: '#f5c2bf', newValue: '#ffd2cf' },
	{
		token: '--color-negative-100 → --negative-100',
		oldValue: '#f5c2bf',
		newValue: '#ffd2cf',
	},
	{
		token: '--color-background-success → --background-success',
		oldValue: '#ecfdf6 (green-50)',
		newValue: '#d9f7e9 (green-075)',
	},
	{
		token: '--color-status-bg-success → --status-bg-success',
		oldValue: '#ecfdf6 (green-50)',
		newValue: '#d9f7e9 (green-075)',
	},
	{
		token: '--color-border-disabled → --border-disabled',
		oldValue: '#e5e8ed (brand-050)',
		newValue: '#c7c9cc (gray-300)',
	},
	{
		token: '--color-border-danger-weak → --border-error-weak',
		oldValue: '#f5c2bf',
		newValue: '#ffd2cf',
	},
	{
		token: '--color-font-disabled → --font-disabled',
		oldValue: '#8b98a6 (gray-500)',
		newValue: '#c7c9cc (gray-300)',
	},
	{
		token: '--color-icon-danger → --icon-error',
		oldValue: '#d70a00 (red-400)',
		newValue: '#a10800 (red-500)',
	},
	{
		token: '--font-family-base (same name)',
		oldValue: "'Roboto', sans-serif",
		newValue: 'Roboto',
	},
	{
		token: '--font-family-code (same name)',
		oldValue: "'Fira Mono', monospace",
		newValue: 'Fira Mono',
	},
	{
		token: '--paragraph-spacing-* → --*-paragraph-space-*',
		oldValue: 'unitless integer (e.g. 8)',
		newValue: 'px (e.g. 8px)',
	},
];

const visualHintFor = (component: string, tokens: string[]): string => {
	const hints: string[] = [];

	if (tokens.some((t) => t.includes('red') || t.includes('negative') || t.includes('danger'))) {
		hints.push('error/danger surfaces, borders, validation messages');
	}

	if (tokens.some((t) => t.includes('success') || t.includes('status-bg-success'))) {
		hints.push('success backgrounds (banners, chips, status pills)');
	}

	if (tokens.some((t) => t.includes('disabled'))) {
		hints.push('disabled states (background, border, font tone)');
	}

	if (tokens.some((t) => t.includes('icon-danger') || t.includes('icon-error'))) {
		hints.push('error icon tone');
	}

	if (tokens.some((t) => t.includes('paragraph-spacing'))) {
		hints.push('vertical rhythm of headings and body copy');
	}

	if (tokens.some((t) => t.includes('font-family'))) {
		hints.push('font fallback chain (Roboto / Fira Mono now bare)');
	}

	if (hints.length === 0) {
		return `Visual check: tokens involved — ${tokens.map((t) => `\`${t}\``).join(', ')}`;
	}

	return `Verify: ${hints.join('; ')}`;
};

const runChanged = (): void => {
	const mappings = parseMappings();
	const renamable = ensureUniqueByOldName(renamableMappings(mappings, 'Changed'));
	const sameName = sameNameMappings(mappings, 'Changed');
	const result = applyReplacements(renamable, { dryRun });

	summarize('Phase 2 (Changed, renamable)', result);

	const sameNameOldNames = sameName.map((m) => m.oldName);
	const sameNameUsages = findUsages(sameNameOldNames);

	const componentsAffected = new Set<string>();

	for (const file of result.perFile.keys()) {
		componentsAffected.add(componentOf(file));
	}

	for (const usages of sameNameUsages.values()) {
		for (const u of usages) {
			componentsAffected.add(componentOf(u.file));
		}
	}

	const componentTokenMap = new Map<string, Set<string>>();

	for (const [file, tokens] of result.perFile) {
		const component = componentOf(file);
		const set = componentTokenMap.get(component) ?? new Set();

		for (const t of tokens.keys()) {
			set.add(t);
		}

		componentTokenMap.set(component, set);
	}

	for (const [oldName, usages] of sameNameUsages) {
		for (const u of usages) {
			const component = componentOf(u.file);
			const set = componentTokenMap.get(component) ?? new Set();
			set.add(oldName);
			componentTokenMap.set(component, set);
		}
	}

	const lines: string[] = [
		'# Phase 2 — Changed tokens',
		'',
		'> Renamed AND value differs. Visual testing required for affected components.',
		'',
		'## Summary',
		'',
		`- Files scanned: ${result.filesScanned.toString()}`,
		`- Files changed: ${result.filesChanged.toString()}`,
		`- Total replacements: ${result.totalReplacements.toString()}`,
		`- Same-name Changed tokens (no rename, just retest): ${sameName.length.toString()}`,
		`- Affected components: ${componentsAffected.size.toString()}`,
		'',
		'## Value-change reference',
		'',
		'| Token mapping | Old value | New value |',
		'| ------------- | --------- | --------- |',
		...VALUE_CHANGE_NOTES.map((n) => `| \`${n.token}\` | \`${n.oldValue}\` | \`${n.newValue}\` |`),
		'',
		'## Same-name Changed tokens (value differs, no rename)',
		'',
	];

	if (sameName.length === 0) {
		lines.push('_None._');
	} else {
		for (const m of sameName) {
			const usages = sameNameUsages.get(m.oldName) ?? [];
			lines.push(`### \`${m.oldName}\` — ${usages.length.toString()} usages`);
			lines.push('');

			if (usages.length === 0) {
				lines.push('_No usages found in source files._');
			} else {
				const grouped = new Map<string, Usage[]>();

				for (const u of usages) {
					const list = grouped.get(u.file) ?? [];
					list.push(u);
					grouped.set(u.file, list);
				}

				for (const [file, items] of grouped) {
					lines.push(`- \`${relPath(file)}\` (lines ${items.map((i) => i.line.toString()).join(', ')})`);
				}
			}

			lines.push('');
		}
	}

	lines.push('## Replacements per token');
	lines.push('');
	lines.push(formatPerToken(result.perToken));
	lines.push('');
	lines.push('## Affected files (grouped by component)');
	lines.push('');
	lines.push(formatPerFile(result.perFile));
	lines.push('## Visual retest checklist');
	lines.push('');

	for (const component of [...componentTokenMap.keys()].sort()) {
		const tokens = [...(componentTokenMap.get(component) ?? new Set())];
		lines.push(`- [ ] **${component}** — ${visualHintFor(component, tokens)}`);
	}

	writeReport(path.join(REPORTS_DIR, 'step-2-changed.md'), lines.join('\n'));
};

type Suggestion = {
	newName: string;
	value: string;
	distance: number;
};

const HEX_RE = /^#([0-9a-fA-F]{3,8})$/;
const PX_RE = /^(-?\d+(?:\.\d+)?)px$/;
const NUMBER_RE = /^-?\d+(?:\.\d+)?$/;

const expandHex = (hex: string): string => {
	if (hex.length === 3) {
		return hex
			.split('')
			.map((c) => c + c)
			.join('');
	}

	if (hex.length === 4) {
		return hex
			.split('')
			.map((c) => c + c)
			.join('')
			.slice(0, 6);
	}

	if (hex.length >= 6) {
		return hex.slice(0, 6);
	}

	return hex;
};

const parseHex = (value: string): { r: number; g: number; b: number } | null => {
	const [, hex] = HEX_RE.exec(value.trim()) ?? [];

	if (!hex) {
		return null;
	}

	const expanded = expandHex(hex);

	if (expanded.length < 6) {
		return null;
	}

	const r = parseInt(expanded.slice(0, 2), 16);
	const g = parseInt(expanded.slice(2, 4), 16);
	const b = parseInt(expanded.slice(4, 6), 16);

	if ([r, g, b].some((n) => Number.isNaN(n))) {
		return null;
	}

	return { r, g, b };
};

const parseLength = (value: string): number | null => {
	const trimmed = value.trim();
	const [, pxValue] = PX_RE.exec(trimmed) ?? [];

	if (pxValue) {
		return parseFloat(pxValue);
	}

	if (NUMBER_RE.test(trimmed)) {
		return parseFloat(trimmed);
	}

	return null;
};

const colorDistance = (
	a: { r: number; g: number; b: number },
	b: { r: number; g: number; b: number },
): number => Math.sqrt((a.r - b.r) ** 2 + (a.g - b.g) ** 2 + (a.b - b.b) ** 2);

const buildSuggestions = (oldValue: string, newValues: Map<string, string>, limit: number): Suggestion[] => {
	const oldHex = parseHex(oldValue);
	const oldLen = parseLength(oldValue);

	const suggestions: Suggestion[] = [];

	if (oldHex) {
		for (const [name, value] of newValues) {
			const newHex = parseHex(value);

			if (!newHex) {
				continue;
			}

			suggestions.push({
				newName: name,
				value,
				distance: colorDistance(oldHex, newHex),
			});
		}
	} else if (oldLen !== null) {
		for (const [name, value] of newValues) {
			const newLen = parseLength(value);

			if (newLen === null) {
				continue;
			}

			suggestions.push({
				newName: name,
				value,
				distance: Math.abs(oldLen - newLen),
			});
		}
	}

	return suggestions.sort((a, b) => a.distance - b.distance).slice(0, limit);
};

const PREP_TOKEN_HEADING_RE = /^### `(--[A-Za-z0-9_-]+)`/;
const PREP_REPLACEMENT_RE = /^\*\*Replacement:\*\*\s*(.*)$/;

const readPrepReplacements = (): Map<string, string> => {
	if (!fs.existsSync(PREP_REPORT)) {
		throw new Error(`Prep report not found at ${relPath(PREP_REPORT)}. Run \`removed-prep\` first.`);
	}

	const text = fs.readFileSync(PREP_REPORT, 'utf8');
	const lines = text.split('\n');
	const result = new Map<string, string>();
	let currentToken: string | null = null;

	for (const line of lines) {
		const [, heading] = PREP_TOKEN_HEADING_RE.exec(line) ?? [];

		if (heading) {
			currentToken = heading;
			continue;
		}

		if (!currentToken) {
			continue;
		}

		const [, raw] = PREP_REPLACEMENT_RE.exec(line) ?? [];

		if (raw !== undefined) {
			const cleaned = raw
				.trim()
				.replace(/^[`'"]|[`'"]$/g, '')
				.trim();
			result.set(currentToken, cleaned);
			currentToken = null;
		}
	}

	return result;
};

const runRemovedPrep = (): void => {
	if (fs.existsSync(PREP_REPORT) && !process.argv.includes('--force')) {
		console.error(
			`Refusing to overwrite ${relPath(PREP_REPORT)} (your manual replacements would be lost).\n` +
				`Pass --force to regenerate, or delete the file manually.`,
		);
		process.exit(1);
	}

	const mappings = parseMappings();
	const removed = mappings.filter(hasOldName).filter((m) => m.status === 'Removed');
	const resolved: ResolvedValues = resolveAll();
	const oldNames = removed.map((m) => m.oldName);
	const usagesByToken = findUsages(oldNames);

	const totalUsages = [...usagesByToken.values()].reduce((sum, u) => sum + u.length, 0);
	const tokensInUse = oldNames.filter((n) => (usagesByToken.get(n) ?? []).length > 0);

	const lines: string[] = [
		'# Phase 3 — Removed tokens (prep)',
		'',
		'> For each removed token below, fill in the **Replacement:** line with one of:',
		'>',
		'> - the new token name to substitute (e.g. `--color-dap-green-100`),',
		'> - `KEEP` to keep the old token (its definition will remain in `_root.scss`/`_colors.scss`/`_spacing.scss`),',
		'> - any literal value (e.g. `transparent`, `16px`) — it will be substituted verbatim.',
		'',
		'After filling in every Replacement line, run:',
		'',
		'```bash',
		'node scripts/migrate-tokens/migrate.ts removed-apply',
		'```',
		'',
		'## Summary',
		'',
		`- Removed tokens in mapping doc: ${removed.length.toString()}`,
		`- Tokens still in use across the repo: ${tokensInUse.length.toString()}`,
		`- Total usages to triage: ${totalUsages.toString()}`,
		'',
	];

	const groupedBySection = new Map<string, WithOldName[]>();

	for (const m of removed) {
		const key = `${m.section}${m.subsection ? ` / ${m.subsection}` : ''}`;
		const list = groupedBySection.get(key) ?? [];
		list.push(m);
		groupedBySection.set(key, list);
	}

	for (const [sectionLabel, items] of groupedBySection) {
		lines.push(`## ${sectionLabel}`);
		lines.push('');

		for (const m of items) {
			const { oldName } = m;
			const oldValue = resolved.old.get(oldName) ?? '(unresolved)';
			const usages = usagesByToken.get(oldName) ?? [];
			const suggestions = buildSuggestions(oldValue, resolved.new, 4);

			lines.push(`### \`${oldName}\` (\`${oldValue}\`)`);
			lines.push('');

			const [top, ...others] = suggestions;

			if (!top) {
				lines.push('- No automatic suggestion (non-color/non-length value).');
			} else {
				lines.push(`- Top match: \`${top.newName}\` (\`${top.value}\`) — Δ ≈ ${top.distance.toFixed(2)}`);

				if (others.length > 0) {
					lines.push(
						`- Runner-ups: ${others.map((s) => `\`${s.newName}\` (Δ ${s.distance.toFixed(2)})`).join(', ')}`,
					);
				}
			}

			lines.push(`- Usages: ${usages.length.toString()} occurrences`);

			if (usages.length > 0) {
				const grouped = new Map<string, Usage[]>();

				for (const u of usages) {
					const list = grouped.get(u.file) ?? [];
					list.push(u);
					grouped.set(u.file, list);
				}

				for (const [file, items2] of grouped) {
					const linesList = items2.map((i) => i.line.toString()).join(', ');
					lines.push(`  - \`${relPath(file)}\`:${linesList}`);
				}
			}

			lines.push('');

			if (usages.length === 0) {
				lines.push('**Replacement:** `KEEP`');
			} else {
				lines.push('**Replacement:** <fill in: new token name, literal value, or `KEEP`>');
			}

			lines.push('');
		}
	}

	writeReport(PREP_REPORT, lines.join('\n'));
};

const PLACEHOLDER_RE = /^<.*>$/;

const runRemovedApply = (): void => {
	const mappings = parseMappings();
	const removed = mappings.filter(hasOldName).filter((m) => m.status === 'Removed');
	const replacementsRaw = readPrepReplacements();

	const missing: string[] = [];
	const placeholders: string[] = [];
	const kept: string[] = [];
	const replacements: Replacement[] = [];

	for (const m of removed) {
		const { oldName } = m;
		const filled = replacementsRaw.get(oldName);

		if (filled === undefined || filled === '') {
			missing.push(oldName);
			continue;
		}

		if (PLACEHOLDER_RE.test(filled)) {
			placeholders.push(oldName);
			continue;
		}

		if (filled === 'KEEP') {
			kept.push(oldName);
			continue;
		}

		replacements.push({ oldName, newName: filled });
	}

	if (missing.length > 0 || placeholders.length > 0) {
		const issues: string[] = [];

		if (missing.length > 0) {
			issues.push(`Missing Replacement: lines for: ${missing.join(', ')}`);
		}

		if (placeholders.length > 0) {
			issues.push(`Unfilled placeholders for: ${placeholders.join(', ')}`);
		}

		console.error('Cannot apply — fix the prep report first:\n  ' + issues.join('\n  '));
		process.exit(1);
	}

	const result = applyReplacements(replacements, { dryRun });

	summarize('Phase 3 (Removed)', result);

	const lines: string[] = [
		'# Phase 3 — Removed tokens (apply)',
		'',
		'> Replacements were chosen manually in `step-3-removed-prep.md`. Visual testing required for affected components.',
		'',
		'## Summary',
		'',
		`- Files scanned: ${result.filesScanned.toString()}`,
		`- Files changed: ${result.filesChanged.toString()}`,
		`- Total replacements: ${result.totalReplacements.toString()}`,
		`- Tokens replaced: ${replacements.length.toString()}`,
		`- Tokens kept (KEEP): ${kept.length.toString()}`,
		'',
		'## Replacement decisions',
		'',
		'| Old token | Replacement |',
		'| --------- | ----------- |',
	];

	for (const r of replacements) {
		lines.push(`| \`${r.oldName}\` | \`${r.newName}\` |`);
	}

	if (kept.length > 0) {
		lines.push('');
		lines.push('### Kept (KEEP)');
		lines.push('');

		for (const k of kept) {
			lines.push(`- \`${k}\` — old definition stays in place.`);
		}
	}

	lines.push('');
	lines.push('## Replacements per token');
	lines.push('');
	lines.push(formatPerToken(result.perToken));
	lines.push('');
	lines.push('## Affected files (grouped by component)');
	lines.push('');
	lines.push(formatPerFile(result.perFile));
	lines.push('## Visual retest checklist');
	lines.push('');

	const componentTokenMap = new Map<string, Set<string>>();

	for (const [file, tokens] of result.perFile) {
		const component = componentOf(file);
		const set = componentTokenMap.get(component) ?? new Set();

		for (const t of tokens.keys()) {
			set.add(t);
		}

		componentTokenMap.set(component, set);
	}

	for (const component of [...componentTokenMap.keys()].sort()) {
		const tokens = [...(componentTokenMap.get(component) ?? new Set())];
		lines.push(
			`- [ ] **${component}** — ${visualHintFor(component, tokens)} (replaced: ${tokens
				.map((t) => `\`${t}\``)
				.join(', ')})`,
		);
	}

	writeReport(APPLY_REPORT, lines.join('\n'));
};

const usage = (): void => {
	console.error(
		'Usage: node scripts/migrate-tokens/migrate.ts <renamed|changed|removed-prep|removed-apply> [--dry-run]',
	);

	process.exit(1);
};

const phase = process.argv[2];

switch (phase) {
	case 'renamed': {
		runRenamed();
		break;
	}
	case 'changed': {
		runChanged();
		break;
	}
	case 'removed-prep': {
		runRemovedPrep();
		break;
	}
	case 'removed-apply': {
		runRemovedApply();
		break;
	}
	default: {
		usage();
	}
}
