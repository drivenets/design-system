import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { ComponentManifestMap, DocsManifestMap } from '@storybook/mcp';
import * as v from 'valibot';

// react-docgen appends a playground link and the full component source to its error message.
const DOCGEN_ERROR_DETAILS = /\n(?:You can debug|Code:)[\s\S]*$/;

type InlineComponentManifestMap = Extract<ComponentManifestMap, { v: 0 }>;
type InlineDocsManifestMap = Extract<DocsManifestMap, { v: 0 }>;

export async function buildAgentDocs(packageRoot: string): Promise<void> {
	const sourceDir = join(packageRoot, 'storybook-static', 'manifests');
	const outDir = join(packageRoot, 'manifests');

	const components = slimComponentsManifest(await readJson(join(sourceDir, 'components.json')), packageRoot);
	const docs = slimDocsManifest(await readJson(join(sourceDir, 'docs.json')), packageRoot);

	await mkdir(outDir, { recursive: true });
	await writeFile(join(outDir, 'components.json'), JSON.stringify(components));
	await writeFile(join(outDir, 'docs.json'), JSON.stringify(docs));

	const { version } = (await readJson(join(packageRoot, 'package.json'))) as { version: string };
	const docsDir = join(packageRoot, 'docs');

	// Pages of renamed or removed components must not linger from a previous build.
	await rm(docsDir, { recursive: true, force: true });

	for (const file of renderAgentMarkdown({ version, components, docs })) {
		await mkdir(dirname(join(docsDir, file.path)), { recursive: true });
		await writeFile(join(docsDir, file.path), file.content);
	}
}

export function slimComponentsManifest(manifest: unknown, packageRoot: string): InlineComponentManifestMap {
	return validate(
		ComponentManifestMap,
		'components.json',
		slim(manifest, packageRoot),
	) as InlineComponentManifestMap;
}

export function slimDocsManifest(manifest: unknown, packageRoot: string): InlineDocsManifestMap {
	return validate(DocsManifestMap, 'docs.json', slim(manifest, packageRoot)) as InlineDocsManifestMap;
}

/**
 * Returns the manifest itself rather than the parsed output, because the schema's objects drop keys they don't list.
 */
function validate(
	schema: typeof ComponentManifestMap | typeof DocsManifestMap,
	fileName: string,
	manifest: unknown,
): unknown {
	const result = v.safeParse(schema, manifest);

	if (!result.success) {
		throw new Error(
			`${fileName} doesn't match the Storybook manifest schema:\n${v.summarize(result.issues)}`,
		);
	}

	if (result.output.v !== 0) {
		throw new Error(
			`${fileName} is a v${String(result.output.v)} manifest; only inline (v0) manifests can be packaged, since v1 references files outside the manifest.`,
		);
	}

	return manifest;
}

function slim(manifest: unknown, packageRoot: string): unknown {
	const absolutePrefix = `${packageRoot}/`;
	// Only where a path starts, so `@drivenets/design-system/…` doesn't match a repo at `/design-system`.
	const repoRootPath = new RegExp(`(?<![\\w@.-])${RegExp.escape(resolve(packageRoot, '../..'))}/`);

	return JSON.parse(JSON.stringify(manifest), (key, value: unknown) => {
		if (key === 'definedInFile') {
			return undefined;
		}

		if (typeof value !== 'string') {
			return value;
		}

		const relative = value.replaceAll(absolutePrefix, './');
		const slimmed = key === 'message' ? relative.replace(DOCGEN_ERROR_DETAILS, '') : relative;

		if (repoRootPath.test(slimmed)) {
			throw new Error(`Manifest field "${key}" still contains an absolute path: ${slimmed}`);
		}

		return slimmed;
	});
}

interface AgentMarkdownInput {
	version: string;
	components: InlineComponentManifestMap;
	docs: InlineDocsManifestMap;
}

interface AgentMarkdownFile {
	/** Relative to `docs/`. */
	path: string;
	content: string;
}

export function renderAgentMarkdown({ version, components, docs }: AgentMarkdownInput): AgentMarkdownFile[] {
	// Indexed by title only: Storybook's MDX summaries are the first characters of the source, often code.
	const guidelines = Object.values(docs.docs).map((doc) => {
		const title = (doc.title ?? doc.name).replace(/^Guidelines\//, '');

		return {
			path: `guidelines/${doc.id.replace(/--docs$/, '').replace(/^guidelines-/, '')}.md`,
			title,
			content: `# ${title}\n\n${doc.content ?? ''}\n`,
		};
	});

	// Other entries, such as `examples-*`, document story helpers the package doesn't export.
	const packageComponents = Object.values(components.components).filter(({ id }) =>
		id.startsWith('components-'),
	);
	const nameCounts = Map.groupBy(packageComponents, ({ name }) => name);

	const componentPages = packageComponents.map((component) => {
		const slug = component.id.replace(/^components-/, '');

		return {
			path: `components/${slug}.md`,
			// Several stories files document the same component, e.g. one per `DsTable` feature.
			title:
				(nameCounts.get(component.name)?.length ?? 0) > 1 ? `${component.name} (${slug})` : component.name,
			summary: component.summary,
			content: renderComponent(component),
		};
	});

	const index = [
		`# @drivenets/design-system ${version}`,
		'',
		'> Components and design guidelines of the DriveNets design system, generated from the Storybook of the installed version.',
		'',
		'Read the guidelines before writing UI code. Each component file has its import, props and every Storybook example; in examples, `fn()` stands for your own event handler.',
		'',
		'## Guidelines',
		'',
		...guidelines.map(indexLine),
		'',
		'## Components',
		'',
		...componentPages.map(indexLine),
		'',
	].join('\n');

	const files = [{ path: 'llms.txt', content: index }, ...guidelines, ...componentPages];
	const paths = new Set<string>();

	for (const { path } of files) {
		if (paths.has(path)) {
			throw new Error(`Two manifest entries would both write docs/${path}.`);
		}

		paths.add(path);
	}

	return files.map(({ path, content }) => ({ path, content }));
}

function indexLine({ path, title, summary }: { path: string; title: string; summary?: string | undefined }) {
	return `- [${title}](${path})${summary ? `: ${summary}` : ''}`;
}

type ComponentEntry = InlineComponentManifestMap['components'][string];

interface DocgenType {
	name?: string;
	raw?: string;
	value?: string;
	type?: string;
	elements?: DocgenType[];
	signature?: {
		arguments?: { name: string; type?: DocgenType }[];
		return?: DocgenType;
		properties?: { key: string; value?: DocgenType & { required?: boolean } }[];
	};
}

interface DocgenProp {
	required?: boolean;
	tsType?: DocgenType;
	type?: DocgenType;
	description?: string;
	defaultValue?: { value: string };
}

function renderComponent(component: ComponentEntry): string {
	const lines = [`# ${component.name}`, ''];
	const { example: examples = [], ...tags } = component.jsDocTags ?? {};
	const quotes = Object.entries(tags)
		.filter(([tag]) => !HIDDEN_JSDOC_TAGS.has(tag))
		.flatMap(([tag, values]) => values.map((value) => quote(tag, value)));

	if (quotes.length > 0) {
		lines.push(...quotes, '');
	}

	for (const text of [component.summary, component.description]) {
		if (text) {
			lines.push(text, '');
		}
	}

	for (const example of examples) {
		lines.push('**Example:**', '', fence(example.replace(/^```\w*\s*|\s*```$/g, ''), 'tsx'), '');
	}

	if (component.import) {
		lines.push(fence(packageImports(component.import), 'tsx'), '');
	}

	const props = renderProps(component.name, component.reactDocgen);

	if (props.length > 0) {
		lines.push('## Props', '', ...props);
	} else if (component.error) {
		lines.push(
			'## Props',
			'',
			"Props couldn't be extracted from the source:",
			'',
			fence(component.error.message),
			'',
		);
	}

	const subcomponents = Object.values(component.subcomponents ?? {});

	if (subcomponents.length > 0) {
		lines.push('## Subcomponents', '');

		for (const subcomponent of subcomponents) {
			lines.push(`### ${subcomponent.name}`, '');

			if (subcomponent.import) {
				lines.push(fence(packageImports(subcomponent.import), 'tsx'), '');
			}

			lines.push(...renderProps(subcomponent.name, subcomponent.reactDocgen));
		}
	}

	const stories = component.stories ?? [];

	if (stories.length > 0) {
		lines.push('## Examples', '');

		for (const story of stories) {
			lines.push(`### ${story.name}`, '');

			if (story.description) {
				lines.push(story.description, '');
			}

			lines.push(fence(story.snippet ?? '', 'tsx'), '');
		}
	}

	return lines.join('\n');
}

// Tags Storybook consumes elsewhere (summary, description, import) or that ask to hide the component.
const HIDDEN_JSDOC_TAGS = new Set(['ignore', 'desc', 'description', 'describe', 'summary', 'import']);

function quote(tag: string, value: string): string {
	const [first = '', ...rest] = value.trim().split('\n');
	const label = `**${tag.charAt(0).toUpperCase()}${tag.slice(1)}:**`;

	return [`> ${label} ${first}`.trimEnd(), ...rest.map((line) => (line ? `> ${line}` : '>'))].join('\n');
}

// Longer than any backtick run in the text, so a snippet that contains a fence can't close this one.
function fence(text: string, lang = ''): string {
	const longestRun = Math.max(0, ...(text.match(/`+/g) ?? []).map((run) => run.length));
	const ticks = '`'.repeat(Math.max(3, longestRun + 1));

	return `${ticks}${lang}\n${text}\n${ticks}`;
}

// The manifest's import lists everything the stories file imports, including story-only modules.
function packageImports(imports: string): string {
	return imports
		.split(/(?<=;)\n/)
		.filter((statement) => /from ['"]@drivenets\/design-system['"]/.test(statement))
		.join('\n');
}

function renderProps(name: string, docgen: unknown): string[] {
	const props = Object.entries((docgen as { props?: Record<string, DocgenProp> } | undefined)?.props ?? {});

	if (props.length === 0) {
		return [];
	}

	const members = props.flatMap(([propName, prop]) => [
		...renderJsDoc(prop),
		`\t${propName}${prop.required ? '' : '?'}: ${serializeType(prop.tsType ?? prop.type)};`,
	]);

	return [fence([`type ${name.replace(/\W+/g, '')}Props = {`, ...members, '};'].join('\n'), 'ts'), ''];
}

function renderJsDoc({ description, defaultValue }: DocgenProp): string[] {
	const lines = description ? description.split('\n') : [];

	if (defaultValue && !lines.some((line) => line.startsWith('@default'))) {
		lines.push(`@default ${defaultValue.value}`);
	}

	if (lines.length <= 1) {
		return lines.map((line) => `\t/** ${line} */`);
	}

	return ['\t/**', ...lines.map((line) => (line ? `\t * ${line}` : '\t *')), '\t */'];
}

// Mirrors how @storybook/mcp prints react-docgen types, so the files read like `docs-show` output.
function serializeType(type: DocgenType | undefined): string {
	if (!type) {
		return 'any';
	}

	if (type.raw?.trim()) {
		return type.raw;
	}

	const elements = (type.elements ?? []).map(serializeType);

	switch (type.name) {
		case 'union':
			return elements.join(' | ');
		case 'intersection':
			return elements.join(' & ');
		case 'Array':
			return `${elements[0] ?? 'unknown'}[]`;
		case 'tuple':
			return `[${elements.join(', ')}]`;
		case 'literal':
			return type.value ?? 'unknown';
		case 'signature':
			return serializeSignature(type);
	}

	return elements.length > 0 ? `${String(type.name)}<${elements.join(', ')}>` : (type.name ?? 'unknown');
}

function serializeSignature({ type, signature }: DocgenType): string {
	if (type === 'function') {
		const args = (signature?.arguments ?? []).map((arg) => `${arg.name}: ${serializeType(arg.type)}`);

		return `(${args.join(', ')}) => ${signature?.return ? serializeType(signature.return) : 'void'}`;
	}

	const properties = (signature?.properties ?? []).map(
		({ key, value }) => `${key}${value?.required ? '' : '?'}: ${serializeType(value)}`,
	);

	return `{ ${properties.join('; ')} }`;
}

async function readJson(path: string): Promise<unknown> {
	return JSON.parse(await readFile(path, 'utf8'));
}

if (import.meta.main) {
	await buildAgentDocs(resolve(import.meta.dirname, '..'));
}
