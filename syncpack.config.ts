import * as fs from 'node:fs';
import * as path from 'node:path';
import * as yaml from 'yaml';
import type { RcFile } from 'syncpack';

export default {
	versionGroups: [
		{
			label: 'Use workspace protocol for local packages',
			dependencies: ['$LOCAL'],
			dependencyTypes: ['!local'],
			pinVersion: 'workspace:*',
		},
		{
			label: "Allow different peer dependencies versions than what's used in the package",
			dependencyTypes: ['peer'],
			isIgnored: true,
		},
		{
			label: 'Require usage of catalog protocol for shared dependencies',
			pinVersion: 'catalog:',
			dependencies: extractCatalogPackages(),
		},
	],
} satisfies RcFile;

function extractCatalogPackages() {
	const pnpmWorkspace = fs.readFileSync(path.resolve(__dirname, 'pnpm-workspace.yaml'), 'utf-8');

	const { catalog } = yaml.parse(pnpmWorkspace) as { catalog: string[] };

	return Object.keys(catalog);
}
