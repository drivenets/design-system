import { mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { resolveManifestsSource } from '../manifests-source.js';

describe('resolveManifestsSource', () => {
	let projectDir: string;

	beforeEach(() => {
		projectDir = mkdtempSync(join(tmpdir(), 'mcp-project-'));
	});

	afterEach(() => {
		rmSync(projectDir, { recursive: true, force: true });
	});

	const installDesignSystem = (root: string, { version = '0.29.0', withManifests = true } = {}) => {
		const packageDir = join(root, 'node_modules', '@drivenets', 'design-system');
		mkdirSync(join(packageDir, 'manifests'), { recursive: true });
		writeFileSync(
			join(packageDir, 'package.json'),
			JSON.stringify({ name: '@drivenets/design-system', version }),
		);

		if (withManifests) {
			writeFileSync(join(packageDir, 'manifests', 'components.json'), '{}');
		}

		return join(packageDir, 'manifests');
	};

	it('reads the manifests of the design system installed in the project', () => {
		// Arrange.
		const manifestsDir = installDesignSystem(projectDir);

		// Act.
		const source = resolveManifestsSource({ projectDir });

		// Assert.
		expect(source).toStrictEqual({
			manifestsDir,
			note: 'Docs match @drivenets/design-system 0.29.0 installed in this project.',
		});
	});

	it('finds a design system hoisted into a parent directory', () => {
		// Arrange.
		const manifestsDir = installDesignSystem(projectDir);
		const appDir = join(projectDir, 'apps', 'console');
		mkdirSync(appDir, { recursive: true });

		// Act.
		const source = resolveManifestsSource({ projectDir: appDir });

		// Assert.
		expect(source.manifestsDir).toBe(manifestsDir);
	});

	it('falls back to the hosted docs when the installed design system ships no manifests', () => {
		// Arrange.
		installDesignSystem(projectDir, { version: '0.28.0', withManifests: false });

		// Act.
		const source = resolveManifestsSource({ projectDir });

		// Assert.
		expect(source).toStrictEqual({
			note: 'Docs come from unreleased main on GitHub Pages; the project has @drivenets/design-system 0.28.0, so some components or props may not exist in that version.',
		});
	});

	it('falls back to the hosted docs when no design system is installed', () => {
		// Act.
		const source = resolveManifestsSource({ projectDir });

		// Assert.
		expect(source).toStrictEqual({
			note: "Docs come from unreleased main on GitHub Pages; @drivenets/design-system wasn't found in this project, so some components or props may not exist in the version it uses.",
		});
	});

	it.each([
		{ flag: '--manifests-dir', opts: { manifestsDir: '/docs/manifests' } },
		{ flag: '--manifests-url', opts: { manifestsUrl: 'http://localhost:6006' } },
	])('uses $flag over the installed design system, without a note', ({ opts }) => {
		// Arrange.
		installDesignSystem(projectDir);

		// Act.
		const source = resolveManifestsSource({ projectDir, ...opts });

		// Assert.
		expect(source).toStrictEqual(opts);
	});

	it('follows the symlink pnpm creates for the installed design system', () => {
		// Arrange.
		const store = join(projectDir, 'node_modules', '.pnpm', '@drivenets+design-system@0.29.0');
		installDesignSystem(store);
		mkdirSync(join(projectDir, 'node_modules', '@drivenets'), { recursive: true });
		symlinkSync(
			join(store, 'node_modules', '@drivenets', 'design-system'),
			join(projectDir, 'node_modules', '@drivenets', 'design-system'),
		);

		// Act.
		const source = resolveManifestsSource({ projectDir });

		// Assert.
		expect(source.note).toBe('Docs match @drivenets/design-system 0.29.0 installed in this project.');
	});

	it('falls back to the hosted docs when the installed package.json is unreadable', () => {
		// Arrange.
		installDesignSystem(projectDir);
		writeFileSync(join(projectDir, 'node_modules', '@drivenets', 'design-system', 'package.json'), '');

		// Act.
		const source = resolveManifestsSource({ projectDir });

		// Assert.
		expect(source.manifestsDir).toBeUndefined();
	});
});
