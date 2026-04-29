import fs from 'node:fs';
import path from 'node:path';

const STYLES_DIR = path.resolve(process.cwd(), 'packages/design-system/src/styles');

export type ValueMap = Map<string, string>;

const DECL_RE = /(--[A-Za-z0-9_-]+)\s*:\s*([^;]+);/g;
const VAR_RE = /^var\((--[A-Za-z0-9_-]+)\)$/;

const parseScssDeclarations = (filePath: string): ValueMap => {
	const text = fs.readFileSync(filePath, 'utf8');
	const map: ValueMap = new Map();

	for (const match of text.matchAll(DECL_RE)) {
		const [, name, rawValue] = match;

		if (!name || !rawValue) {
			continue;
		}

		map.set(name, rawValue.trim().replace(/\s+/g, ' '));
	}

	return map;
};

const parseColorsScss = (): ValueMap => {
	const filePath = path.join(STYLES_DIR, '_colors.scss');
	const text = fs.readFileSync(filePath, 'utf8');
	const map: ValueMap = new Map();

	const start = text.indexOf('$colors:');

	if (start < 0) {
		return map;
	}

	const open = text.indexOf('(', start);

	if (open < 0) {
		return map;
	}

	let depth = 0;
	let close = open;

	for (let i = open; i < text.length; i++) {
		const ch = text[i];

		if (ch === '(') {
			depth++;
		} else if (ch === ')') {
			depth--;

			if (depth === 0) {
				close = i;
				break;
			}
		}
	}

	const body = text.slice(open + 1, close).replace(/\/\/[^\n]*/g, '');
	const items: string[] = [];
	let buf = '';
	let parens = 0;

	for (const ch of body) {
		if (ch === '(') {
			parens++;
		} else if (ch === ')') {
			parens--;
		}

		if (ch === ',' && parens === 0) {
			items.push(buf);
			buf = '';
		} else {
			buf += ch;
		}
	}

	if (buf.trim()) {
		items.push(buf);
	}

	for (const item of items) {
		const colon = item.indexOf(':');

		if (colon < 0) {
			continue;
		}

		const name = item.slice(0, colon).trim();
		const value = item.slice(colon + 1).trim();

		if (name) {
			map.set(`--${name}`, value);
		}
	}

	return map;
};

const resolveChain = (raw: ValueMap): ValueMap => {
	const resolved: ValueMap = new Map();

	const visit = (name: string, seen: Set<string>): string | undefined => {
		const cached = resolved.get(name);

		if (cached !== undefined) {
			return cached;
		}

		if (seen.has(name)) {
			return undefined;
		}

		seen.add(name);
		const value = raw.get(name);

		if (value === undefined) {
			return undefined;
		}

		const [, ref] = VAR_RE.exec(value) ?? [];

		if (ref) {
			const inner = visit(ref, seen);

			if (inner !== undefined) {
				resolved.set(name, inner);
				return inner;
			}
		}

		resolved.set(name, value);
		return value;
	};

	for (const name of raw.keys()) {
		visit(name, new Set());
	}

	return resolved;
};

export type ResolvedValues = {
	old: ValueMap;
	new: ValueMap;
};

export const resolveAll = (): ResolvedValues => {
	const oldRaw: ValueMap = new Map();

	for (const file of ['_root.scss', '_spacing.scss']) {
		for (const [name, value] of parseScssDeclarations(path.join(STYLES_DIR, file))) {
			oldRaw.set(name, value);
		}
	}

	for (const [name, value] of parseColorsScss()) {
		oldRaw.set(name, value);
	}

	const newRaw = parseScssDeclarations(path.join(STYLES_DIR, '_root_new.scss'));

	return {
		old: resolveChain(oldRaw),
		new: resolveChain(newRaw),
	};
};
