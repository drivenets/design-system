import fs from 'node:fs';
import path from 'node:path';

export type Status = 'Renamed' | 'Changed' | 'New' | 'Removed';

export type Mapping = {
	oldName: string | null;
	newName: string | null;
	status: Status;
	section: string;
	subsection: string;
};

export type WithOldName = Mapping & { oldName: string };
export type WithBothNames = Mapping & { oldName: string; newName: string };

export const hasOldName = (m: Mapping): m is WithOldName => m.oldName !== null;
export const hasBothNames = (m: Mapping): m is WithBothNames => m.oldName !== null && m.newName !== null;

const MDX_PATH = path.resolve(process.cwd(), 'packages/design-system/src/stories/token-migration.mdx');

const TOKEN_RE = /`(--[A-Za-z0-9_-]+)`/;

const isStatus = (s: string): s is Status =>
	s === 'Renamed' || s === 'Changed' || s === 'New' || s === 'Removed';

export const parseMappings = (): Mapping[] => {
	const text = fs.readFileSync(MDX_PATH, 'utf8');
	const lines = text.split('\n');
	const mappings: Mapping[] = [];
	let section = '';
	let subsection = '';

	for (const raw of lines) {
		const line = raw.trim();

		if (line.startsWith('## ')) {
			section = line.replace(/^##\s*/, '');
			subsection = '';
			continue;
		}

		if (line.startsWith('### ')) {
			subsection = line.replace(/^###\s*/, '');
			continue;
		}

		if (!line.startsWith('|')) {
			continue;
		}

		if (/^\|\s*-+/.test(line)) {
			continue;
		}

		const cells = line
			.split('|')
			.slice(1, -1)
			.map((c) => c.trim());

		if (cells.length < 3) {
			continue;
		}

		const statusRaw = cells[2] ?? '';

		if (!isStatus(statusRaw)) {
			continue;
		}

		const oldRaw = cells[0] ?? '';
		const newRaw = cells[1] ?? '';
		const [, oldName = null] = TOKEN_RE.exec(oldRaw) ?? [];
		const [, newName = null] = TOKEN_RE.exec(newRaw) ?? [];

		mappings.push({
			oldName,
			newName,
			status: statusRaw,
			section,
			subsection,
		});
	}

	return mappings;
};

export const groupByStatus = (mappings: Mapping[]): Record<Status, Mapping[]> => {
	const groups: Record<Status, Mapping[]> = {
		Renamed: [],
		Changed: [],
		New: [],
		Removed: [],
	};

	for (const m of mappings) {
		groups[m.status].push(m);
	}

	return groups;
};
