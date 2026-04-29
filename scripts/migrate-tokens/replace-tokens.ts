import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SCAN_ROOTS = [path.join(ROOT, 'packages')];

const VALID_EXTENSIONS = new Set(['.scss', '.css', '.ts', '.tsx', '.js', '.jsx', '.mdx']);

const IGNORED_DIRS = new Set([
	'node_modules',
	'dist',
	'build',
	'.turbo',
	'.git',
	'coverage',
	'storybook-static',
	'.next',
]);

export const ALWAYS_EXCLUDED_FILES = new Set([
	path.join(ROOT, 'packages/design-system/src/styles/_root.scss'),
	path.join(ROOT, 'packages/design-system/src/styles/_colors.scss'),
	path.join(ROOT, 'packages/design-system/src/styles/_spacing.scss'),
]);

export const isExcluded = (file: string): boolean => {
	if (ALWAYS_EXCLUDED_FILES.has(file)) {
		return true;
	}

	if (file.endsWith('.mdx')) {
		return true;
	}

	return false;
};

const walk = (dir: string, files: string[]): void => {
	const entries = fs.readdirSync(dir, { withFileTypes: true });

	for (const entry of entries) {
		const full = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			if (!IGNORED_DIRS.has(entry.name)) {
				walk(full, files);
			}
		} else if (entry.isFile() && VALID_EXTENSIONS.has(path.extname(entry.name))) {
			files.push(full);
		}
	}
};

let cachedFiles: string[] | null = null;

export const collectFiles = (): string[] => {
	if (cachedFiles) {
		return cachedFiles;
	}

	const all: string[] = [];

	for (const root of SCAN_ROOTS) {
		if (fs.existsSync(root)) {
			walk(root, all);
		}
	}

	cachedFiles = all.filter((f) => !isExcluded(f));
	return cachedFiles;
};

const escapeRegex = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const buildBoundaryRegex = (oldName: string): RegExp =>
	new RegExp(`${escapeRegex(oldName)}(?![A-Za-z0-9_-])`, 'g');

export type Replacement = {
	oldName: string;
	newName: string;
};

export type ReplaceResult = {
	filesScanned: number;
	filesChanged: number;
	totalReplacements: number;
	perToken: Map<string, number>;
	perFile: Map<string, Map<string, number>>;
};

export const applyReplacements = (
	replacements: Replacement[],
	options: { dryRun?: boolean } = {},
): ReplaceResult => {
	const sorted = [...replacements].sort((a, b) => b.oldName.length - a.oldName.length);
	const files = collectFiles();
	const perToken = new Map<string, number>();
	const perFile = new Map<string, Map<string, number>>();
	let filesChanged = 0;
	let totalReplacements = 0;

	for (const file of files) {
		const original = fs.readFileSync(file, 'utf8');
		let updated = original;
		const fileCounts = new Map<string, number>();

		for (const { oldName, newName } of sorted) {
			const re = buildBoundaryRegex(oldName);
			let count = 0;

			updated = updated.replace(re, () => {
				count++;
				return newName;
			});

			if (count > 0) {
				fileCounts.set(oldName, count);
				perToken.set(oldName, (perToken.get(oldName) ?? 0) + count);
				totalReplacements += count;
			}
		}

		if (updated !== original) {
			filesChanged++;
			perFile.set(file, fileCounts);

			if (!options.dryRun) {
				fs.writeFileSync(file, updated);
			}
		}
	}

	return {
		filesScanned: files.length,
		filesChanged,
		totalReplacements,
		perToken,
		perFile,
	};
};

export type Usage = {
	file: string;
	line: number;
	content: string;
};

export const findUsages = (oldNames: string[]): Map<string, Usage[]> => {
	const result = new Map<string, Usage[]>();

	for (const name of oldNames) {
		result.set(name, []);
	}

	const regexes = oldNames.map((name) => ({ name, re: buildBoundaryRegex(name) }));
	const files = collectFiles();

	for (const file of files) {
		const text = fs.readFileSync(file, 'utf8');

		for (const { name, re } of regexes) {
			re.lastIndex = 0;

			if (!re.test(text)) {
				continue;
			}

			const lines = text.split('\n');
			const lineRe = buildBoundaryRegex(name);
			const bucket = result.get(name) ?? [];

			for (const [index, lineText] of lines.entries()) {
				lineRe.lastIndex = 0;

				if (lineRe.test(lineText)) {
					bucket.push({
						file,
						line: index + 1,
						content: lineText.trim(),
					});
				}
			}

			result.set(name, bucket);
		}
	}

	return result;
};
