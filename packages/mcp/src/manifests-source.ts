import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

const DESIGN_SYSTEM_PACKAGE = '@drivenets/design-system';

export interface ManifestsSourceOptions {
	manifestsDir?: string | undefined;
	manifestsUrl?: string | undefined;
	/**
	 * Where to look for the installed design system. Its `node_modules` and those of every parent directory are searched.
	 */
	projectDir: string;
}

export interface ManifestsSource {
	manifestsDir?: string | undefined;
	manifestsUrl?: string | undefined;
	/**
	 * Tells agents which design-system version the docs describe.
	 */
	note?: string | undefined;
}

export function resolveManifestsSource(opts: ManifestsSourceOptions): ManifestsSource {
	if (opts.manifestsDir) {
		return { manifestsDir: opts.manifestsDir };
	}

	if (opts.manifestsUrl) {
		return { manifestsUrl: opts.manifestsUrl };
	}

	const installed = findInstalledDesignSystem(opts.projectDir);

	if (installed && existsSync(join(installed.manifestsDir, 'components.json'))) {
		return {
			manifestsDir: installed.manifestsDir,
			note: `Docs match ${DESIGN_SYSTEM_PACKAGE} ${installed.version} installed in this project.`,
		};
	}

	const fallbackNote = installed
		? `the project has ${DESIGN_SYSTEM_PACKAGE} ${installed.version}, so some components or props may not exist in that version.`
		: `${DESIGN_SYSTEM_PACKAGE} wasn't found in this project, so some components or props may not exist in the version it uses.`;

	return { note: `Docs come from unreleased main on GitHub Pages; ${fallbackNote}` };
}

function findInstalledDesignSystem(projectDir: string) {
	for (let dir = resolve(projectDir); ; dir = dirname(dir)) {
		const packageDir = join(dir, 'node_modules', DESIGN_SYSTEM_PACKAGE);
		const packageJsonPath = join(packageDir, 'package.json');

		if (existsSync(packageJsonPath)) {
			try {
				const { version } = JSON.parse(readFileSync(packageJsonPath, 'utf8')) as { version: string };

				return { version, manifestsDir: join(packageDir, 'manifests') };
			} catch {
				// A broken install shouldn't stop the server from starting; the hosted docs still work.
				return undefined;
			}
		}

		if (dirname(dir) === dir) {
			return undefined;
		}
	}
}
