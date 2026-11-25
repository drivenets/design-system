import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
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

async function readJson(path: string): Promise<unknown> {
	return JSON.parse(await readFile(path, 'utf8'));
}

if (import.meta.main) {
	await buildAgentDocs(resolve(import.meta.dirname, '..'));
}
