import { existsSync, readFileSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export interface ManifestStory {
	id?: string;
	name: string;
	snippet?: string;
	summary?: string;
	description?: string;
	jsDocTags?: Record<string, string[]>;
}

export interface ManifestDocgenProp {
	description?: string;
	required?: boolean;
	tsType?: { name?: string };
	type?: { name?: string };
	defaultValue?: { value?: string };
}

export interface ManifestComponent {
	id: string;
	name: string;
	path: string;
	import?: string;
	summary?: string;
	description?: string;
	jsDocTags?: Record<string, string[]>;
	stories?: ManifestStory[];
	reactDocgen?: {
		displayName?: string;
		props?: Record<string, ManifestDocgenProp>;
		composes?: string[];
	};
	error?: { name: string; message: string };
}

export interface ComponentsManifest {
	v?: number;
	meta?: unknown;
	components: Record<string, ManifestComponent>;
}

export interface EnrichOptions {
	packageRoot: string;
	readFileSync?: (path: string) => string;
	fileExists?: (path: string) => boolean;
}

const PUBLIC_PACKAGE = '@drivenets/design-system';

const HTML_ATTRIBUTE_TYPES = Object.freeze([
	'AriaAttributes',
	'AnchorHTMLAttributes',
	'ButtonHTMLAttributes',
	'DOMAttributes',
	'FormHTMLAttributes',
	'HTMLAttributes',
	'ImgHTMLAttributes',
	'InputHTMLAttributes',
	'Properties',
	'SVGAttributes',
	'SelectHTMLAttributes',
	'TextareaHTMLAttributes',
	'VideoHTMLAttributes',
]);

const COMPONENT_PROPS_TYPES = Object.freeze([
	'ComponentProps',
	'ComponentPropsWithoutRef',
	'ComponentPropsWithRef',
]);

const SKIP_TYPE_NAME = /(?:Locale|Api|Context|SlotProps|Config)$/;

export function sanitizeSnippet(snippet: string): string {
	return snippet
		.replaceAll(/\bfn\(\)/g, '() => {}')
		.replaceAll(/\baction\((?:'[^']*'|"[^"]*")\)/g, '() => {}');
}

export function isNoiseSnippet(snippet: string): boolean {
	if (/\bwithResponsiveProps\b/.test(snippet) || /\bcontrolify\b/.test(snippet)) {
		return true;
	}

	const hasPublicComponent = /<Ds[A-Z]/.test(snippet);

	if (/<[A-Z][\s/>]/.test(snippet) && !hasPublicComponent) {
		return true;
	}

	if (hasPublicComponent) {
		return false;
	}

	return snippet.includes('React.Fragment') || /=>\s*<>/.test(snippet) || /return\s*\(\s*<>/.test(snippet);
}

export function toPublicImport(componentName: string): string {
	const dot = componentName.indexOf('.');
	const exported = dot === -1 ? componentName : componentName.slice(0, dot);

	return `import { ${exported} } from '${PUBLIC_PACKAGE}';`;
}

function componentFolderFromPath(storyPath: string): string | undefined {
	return storyPath.split(/[/\\]/).find((part) => part.startsWith('ds-'));
}

export function enrichManifest(manifest: ComponentsManifest, options: EnrichOptions): ComponentsManifest {
	const components: Record<string, ManifestComponent> = {};

	for (const [id, component] of Object.entries(manifest.components)) {
		components[id] = enrichComponent(component, options);
	}

	return { ...manifest, components };
}

function isErrnoCode(error: unknown, code: string): boolean {
	return typeof error === 'object' && error !== null && 'code' in error && error.code === code;
}

export async function enrichManifestFile(packageRoot: string): Promise<string> {
	const manifestPath = join(packageRoot, 'storybook-static/manifests/components.json');
	let raw: string;

	try {
		raw = await readFile(manifestPath, 'utf8');
	} catch (error) {
		if (isErrnoCode(error, 'ENOENT')) {
			throw new Error(`MCP manifest not found at ${manifestPath}`, { cause: error });
		}

		throw error;
	}

	const manifest = JSON.parse(raw) as ComponentsManifest;
	const enriched = enrichManifest(manifest, { packageRoot });

	await writeFile(manifestPath, `${JSON.stringify(enriched, null, '\t')}\n`);

	return manifestPath;
}

function enrichComponent(component: ManifestComponent, options: EnrichOptions): ManifestComponent {
	const next: ManifestComponent = {
		...component,
		import: toPublicImport(component.name),
		stories: sanitizeStories(component.stories),
		jsDocTags: component.jsDocTags ? { ...component.jsDocTags } : undefined,
	};

	const types = readDeclaredProps(next, options);

	applyDeclaredProps(next, types);
	applyDeprecation(next, types?.deprecated);
	applyCanonicalExample(next);

	return next;
}

function sanitizeStories(stories: ManifestStory[] | undefined): ManifestStory[] | undefined {
	if (!stories) {
		return stories;
	}

	return stories
		.map((story) => ({
			...story,
			snippet: story.snippet === undefined ? undefined : sanitizeSnippet(story.snippet),
		}))
		.filter((story) => story.snippet === undefined || !isNoiseSnippet(story.snippet));
}

interface DeclaredProps {
	keys: Set<string>;
	descriptions: Record<string, string>;
	defaults: Record<string, string>;
	required: Set<string>;
	deprecated?: string;
	incomplete: boolean;
}

function readDeclaredProps(component: ManifestComponent, options: EnrichOptions): DeclaredProps | undefined {
	const typesPath = resolveTypesPath(component.path, options);

	if (!typesPath) {
		return undefined;
	}

	const read = options.readFileSync ?? ((path: string) => readFileSync(path, 'utf8'));
	const source = read(typesPath);

	if (!source) {
		return undefined;
	}

	const candidates = candidateTypeNames(component.name, componentFolderFromPath(component.path));

	return extractDeclaredProps(source, candidates);
}

function resolveTypesPath(storyPath: string, options: EnrichOptions): string | undefined {
	const exists = options.fileExists ?? existsSync;
	const read = options.readFileSync;
	let dir = dirname(resolve(options.packageRoot, storyPath));
	const componentsRoot = resolve(options.packageRoot, 'src/components');

	while (dir.startsWith(componentsRoot)) {
		const folder = basename(dir);

		if (folder.startsWith('ds-')) {
			const candidate = join(dir, `${folder}.types.ts`);

			if (read) {
				try {
					read(candidate);
					return candidate;
				} catch {
					// keep walking
				}
			} else if (exists(candidate)) {
				return candidate;
			}
		}

		const parent = dirname(dir);

		if (parent === dir) {
			break;
		}

		dir = parent;
	}

	return undefined;
}

function candidateTypeNames(componentName: string, folder: string | undefined): string[] {
	const root = componentName.split('.')[0] ?? componentName;
	const compact = componentName.replaceAll('.', '');
	const fromFolder = folder ? `Ds${kebabToPascal(folder.replace(/^ds-/, ''))}` : undefined;
	const names = [`${compact}Props`, `${root}Props`];

	if (fromFolder) {
		names.push(`${fromFolder}Props`, `DsData${fromFolder.slice(2)}Props`);
	}

	return [...new Set(names)];
}

function kebabToPascal(value: string): string {
	return value
		.split('-')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');
}

export function extractDeclaredProps(source: string, candidateNames: string[]): DeclaredProps {
	const declarations = indexExportedTypes(source);
	const targetName =
		candidateNames.find((name) => declarations.has(name)) ??
		[...declarations.keys()].find((name) => name.endsWith('Props') && !SKIP_TYPE_NAME.test(name));

	const empty: DeclaredProps = {
		keys: new Set(),
		descriptions: {},
		defaults: {},
		required: new Set(),
		incomplete: false,
	};

	if (!targetName) {
		return empty;
	}

	const keys = new Set<string>();
	const descriptions: Record<string, string> = {};
	const defaults: Record<string, string> = {};
	const required = new Set<string>();
	const visited = new Set<string>();
	const flags = { incomplete: false };

	collectType(targetName, source, declarations, visited, keys, descriptions, defaults, required, flags);

	return {
		keys,
		descriptions,
		defaults,
		required,
		deprecated: declarations.get(targetName)?.deprecated,
		incomplete: flags.incomplete,
	};
}

interface ExportedType {
	kind: 'interface' | 'type';
	expr: string;
	deprecated?: string;
}

function indexExportedTypes(source: string): Map<string, ExportedType> {
	const declarations = new Map<string, ExportedType>();
	const pattern = /(?:export\s+)?(interface|type)\s+(\w+)/g;

	for (const match of source.matchAll(pattern)) {
		const kind = match[1] as 'interface' | 'type';
		const name = match[2];

		if (!name) {
			continue;
		}

		const afterName = source.slice(match.index + match[0].length);
		const expr = kind === 'interface' ? parseInterfaceExpr(afterName) : parseTypeAliasExpr(afterName);

		if (expr === undefined) {
			continue;
		}

		declarations.set(name, {
			kind,
			expr,
			deprecated: parseDeprecated(jsDocImmediatelyBefore(source, match.index)),
		});
	}

	return declarations;
}

function parseInterfaceExpr(afterName: string): string | undefined {
	const rest = skipGenerics(afterName.trimStart());
	const brace = rest.indexOf('{');

	if (brace === -1) {
		return undefined;
	}

	const body = sliceBalanced(rest, brace, '{', '}');

	if (body === undefined) {
		return undefined;
	}

	const heritage = rest
		.slice(0, brace)
		.replace(/^extends\s*/, '')
		.trim();

	return heritage ? `${heritage} & ${body}` : body;
}

function parseTypeAliasExpr(afterName: string): string | undefined {
	const rest = skipGenerics(afterName.trimStart());

	if (!rest.startsWith('=')) {
		return undefined;
	}

	return sliceToTopLevelSemicolon(rest.slice(1).trimStart());
}

function skipGenerics(value: string): string {
	if (!value.startsWith('<')) {
		return value;
	}

	const generic = sliceBalanced(value, 0, '<', '>');

	return generic === undefined ? value : value.slice(generic.length).trimStart();
}

function collectType(
	typeName: string,
	source: string,
	declarations: Map<string, ExportedType>,
	visited: Set<string>,
	keys: Set<string>,
	descriptions: Record<string, string>,
	defaults: Record<string, string>,
	required: Set<string>,
	flags: { incomplete: boolean },
): void {
	if (visited.has(typeName) || HTML_ATTRIBUTE_TYPES.includes(typeName)) {
		return;
	}

	const declaration = declarations.get(typeName);

	if (!declaration) {
		flags.incomplete = true;
		return;
	}

	visited.add(typeName);
	collectExpr(declaration.expr, source, declarations, visited, keys, descriptions, defaults, required, flags);
}

function collectExpr(
	expr: string,
	source: string,
	declarations: Map<string, ExportedType>,
	visited: Set<string>,
	keys: Set<string>,
	descriptions: Record<string, string>,
	defaults: Record<string, string>,
	required: Set<string>,
	flags: { incomplete: boolean },
): void {
	const trimmed = stripComments(expr).trim();

	if (!trimmed) {
		return;
	}

	if (trimmed.startsWith('{')) {
		collectMembers(trimmed, keys, descriptions, defaults, required);
		return;
	}

	const unionParts = splitTopLevel(trimmed, '|');

	if (unionParts.length > 1) {
		for (const part of unionParts) {
			collectExpr(part, source, declarations, visited, keys, descriptions, defaults, required, flags);
		}

		return;
	}

	const intersectionParts = splitTopLevel(trimmed, '&');

	if (intersectionParts.length > 1) {
		for (const part of intersectionParts) {
			collectExpr(part, source, declarations, visited, keys, descriptions, defaults, required, flags);
		}

		return;
	}

	const omitPick = /^(Omit|Pick)\s*</.exec(trimmed);

	if (omitPick) {
		const inside = sliceBalanced(trimmed, trimmed.indexOf('<'), '<', '>');

		if (!inside) {
			return;
		}

		const args = splitTopLevel(inside.slice(1, -1), ',');
		const [sourceType, keyList] = args;

		if (!sourceType) {
			return;
		}

		const nested = new Set<string>();
		const nestedDescriptions: Record<string, string> = {};
		const nestedDefaults: Record<string, string> = {};
		const nestedRequired = new Set<string>();
		const nestedFlags = { incomplete: false };

		collectExpr(
			sourceType.trim(),
			source,
			declarations,
			visited,
			nested,
			nestedDescriptions,
			nestedDefaults,
			nestedRequired,
			nestedFlags,
		);

		const listed = new Set(parseStringLiterals(keyList ?? ''));

		if (omitPick[1] === 'Pick') {
			const keep = nested.size > 0 ? [...nested].filter((key) => listed.has(key)) : [...listed];

			for (const key of keep) {
				keys.add(key);
			}

			return;
		}

		if (nested.size === 0 && !isHtmlSoupExpr(sourceType.trim())) {
			flags.incomplete = true;
			return;
		}

		const keep = [...nested].filter((key) => !listed.has(key));

		for (const key of keep) {
			keys.add(key);

			if (nestedDescriptions[key]) {
				descriptions[key] = nestedDescriptions[key];
			}

			if (nestedDefaults[key]) {
				defaults[key] = nestedDefaults[key];
			}

			if (nestedRequired.has(key)) {
				required.add(key);
			}
		}

		return;
	}

	if (isHtmlSoupExpr(trimmed)) {
		return;
	}

	const identifier = /^([A-Za-z_]\w*)/.exec(trimmed)?.[1];

	if (identifier) {
		collectType(identifier, source, declarations, visited, keys, descriptions, defaults, required, flags);
	}
}

function collectMembers(
	body: string,
	keys: Set<string>,
	descriptions: Record<string, string>,
	defaults: Record<string, string>,
	required: Set<string>,
): void {
	const inner = body.trim().startsWith('{') ? body.trim().slice(1, -1) : body;
	const memberPattern = /(?:\/\*\*([\s\S]*?)\*\/\s*)?(?:readonly\s+)?([A-Za-z_]\w*)(\??)\s*[:(]/g;

	for (const match of inner.matchAll(memberPattern)) {
		const jsdoc = match[1];
		const name = match[2];
		const optional = match[3] === '?';

		if (!name || isAtNestedDepth(inner, match.index)) {
			continue;
		}

		keys.add(name);

		if (!optional) {
			required.add(name);
		}

		const description = jsdoc?.replace(/^\s*\*\s?/gm, '').trim();

		if (description) {
			const defaultTag = /@default\s+([^\n*]+)/.exec(description);
			descriptions[name] = description.replace(/@\w+[^\n]*/g, '').trim();

			if (defaultTag?.[1]) {
				defaults[name] = defaultTag[1].trim();
			}
		}
	}
}

function isAtNestedDepth(source: string, index: number): boolean {
	let depth = 0;
	let i = 0;

	while (i < index) {
		if (source.startsWith('/*', i)) {
			const end = source.indexOf('*/', i + 2);
			i = end === -1 || end >= index ? index : end + 2;
			continue;
		}

		const char = source[i];

		if (char === '{' || char === '(') {
			depth += 1;
		} else if (char === '}' || char === ')') {
			depth -= 1;
		}

		i += 1;
	}

	return depth > 0;
}

function applyDeclaredProps(component: ManifestComponent, types: DeclaredProps | undefined): void {
	if (!types || (types.keys.size === 0 && !types.incomplete)) {
		return;
	}

	const existing = component.reactDocgen?.props;
	const filtered: Record<string, ManifestDocgenProp> = {};

	const seed = (key: string): ManifestDocgenProp => ({
		description: types.descriptions[key],
		required: types.required.has(key),
		tsType: { name: 'unknown' },
		defaultValue: types.defaults[key] ? { value: types.defaults[key] } : undefined,
	});

	if (types.incomplete && existing) {
		Object.assign(filtered, existing);

		for (const key of types.keys) {
			filtered[key] ??= seed(key);
		}
	} else {
		for (const key of types.keys) {
			filtered[key] = existing?.[key] ?? seed(key);
		}
	}

	if (Object.keys(filtered).length === 0) {
		return;
	}

	component.reactDocgen = {
		...component.reactDocgen,
		displayName: component.reactDocgen?.displayName ?? component.name,
		props: filtered,
	};
}

function isHtmlSoupExpr(expr: string): boolean {
	const name = /^([A-Za-z_]\w*)/.exec(expr)?.[1];

	if (!name) {
		return false;
	}

	if (HTML_ATTRIBUTE_TYPES.includes(name)) {
		return true;
	}

	if (!COMPONENT_PROPS_TYPES.includes(name)) {
		return false;
	}

	const generic = sliceBalanced(expr, expr.indexOf('<'), '<', '>');

	if (!generic) {
		return false;
	}

	const firstArg = splitTopLevel(generic.slice(1, -1), ',')[0]?.trim();

	return Boolean(firstArg && /^['"][a-z]/.test(firstArg));
}

function applyDeprecation(component: ManifestComponent, deprecated: string | undefined): void {
	const fromTags = component.jsDocTags?.deprecated?.[0];
	const text = deprecated ?? fromTags;

	if (!text) {
		return;
	}

	const line = text.startsWith('Deprecated') ? `**${text}**` : `**Deprecated:** ${text}`;

	component.jsDocTags = {
		...component.jsDocTags,
		deprecated: [text],
	};

	if (component.description?.includes('**Deprecated:**') || component.description?.includes('@deprecated')) {
		return;
	}

	component.description = component.description ? `${line}\n\n${component.description}` : line;
}

function applyCanonicalExample(component: ManifestComponent): void {
	const stories = component.stories;

	if (!stories?.length) {
		return;
	}

	const defaultIndex = stories.findIndex((story) => story.name === 'Default');

	if (defaultIndex <= 0) {
		return;
	}

	const [defaultStory] = stories.splice(defaultIndex, 1);

	if (defaultStory) {
		stories.unshift(defaultStory);
	}
}

function jsDocImmediatelyBefore(source: string, index: number): string | undefined {
	const before = source.slice(0, index).trimEnd();

	if (!before.endsWith('*/')) {
		return undefined;
	}

	const start = before.lastIndexOf('/**');

	return start === -1 ? undefined : before.slice(start);
}

function parseDeprecated(jsdoc: string | undefined): string | undefined {
	if (!jsdoc) {
		return undefined;
	}

	const match = /@deprecated\s+([^\n*]*)/.exec(jsdoc);
	const text = match?.[1]?.trim();

	if (text) {
		return text;
	}

	return jsdoc.includes('@deprecated') ? 'This component is deprecated.' : undefined;
}

function parseStringLiterals(expr: string): string[] {
	return [...expr.matchAll(/'([^']+)'|"([^"]+)"/g)]
		.flatMap((match) => [match[1] ?? match[2] ?? ''])
		.filter(Boolean);
}

function splitTopLevel(expr: string, separator: string): string[] {
	const parts: string[] = [];
	let depth = 0;
	let start = 0;

	for (let i = 0; i < expr.length; i += 1) {
		const char = expr[i];

		if (char === '<' || char === '{' || char === '(') {
			depth += 1;
		} else if (char === '>' || char === '}' || char === ')') {
			depth -= 1;
		} else if (depth === 0 && expr.startsWith(separator, i)) {
			parts.push(expr.slice(start, i).trim());
			start = i + separator.length;
		}
	}

	parts.push(expr.slice(start).trim());

	return parts.filter(Boolean);
}

function sliceBalanced(source: string, start: number, open: string, close: string): string | undefined {
	if (source[start] !== open) {
		return undefined;
	}

	let depth = 0;

	for (let i = start; i < source.length; i += 1) {
		if (source[i] === open) {
			depth += 1;
		} else if (source[i] === close) {
			depth -= 1;

			if (depth === 0) {
				return source.slice(start, i + 1);
			}
		}
	}

	return undefined;
}

function sliceToTopLevelSemicolon(source: string): string {
	let depth = 0;

	for (let i = 0; i < source.length; i += 1) {
		const char = source[i];

		if (char === '<' || char === '{' || char === '(') {
			depth += 1;
		} else if (char === '>' || char === '}' || char === ')') {
			depth -= 1;
		} else if (char === ';' && depth === 0) {
			return source.slice(0, i).trim();
		}
	}

	return source.trim();
}

function stripComments(value: string): string {
	return value.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
}

const isDirectRun =
	Boolean(process.argv[1]) && resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url);

if (isDirectRun) {
	const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

	await enrichManifestFile(packageRoot);
}
