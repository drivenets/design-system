import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { parseArgs } from 'node:util';

type StepStatus = 'pass' | 'fail' | 'skip' | 'hint';

type StepResult = {
	name: string;
	status: StepStatus;
	detail: string;
};

type WorkspacePackage = {
	dir: string;
	name: string;
	isPrivate: boolean;
	scripts: Record<string, string>;
	workspaceDependencies: string[];
};

type PackageJson = {
	name: string;
	private?: boolean;
	scripts?: Record<string, string>;
	dependencies?: Record<string, string>;
	devDependencies?: Record<string, string>;
	peerDependencies?: Record<string, string>;
};

const ROOT_DIR = path.resolve(import.meta.dirname, '../../');
const DS_PACKAGE = '@drivenets/design-system';
const DS_DIR = 'packages/design-system';
const UPSTREAM_REPO_PATTERN = /[:/]drivenets\/design-system(\.git)?$/;
const VISUAL_SERVER_PORT = Number(process.env.PW_SERVER_PORT ?? '3000');
const VISUAL_SERVER_TIMEOUT_MS = 2000;
const OUTPUT_MAX_BYTES = 256 * 1024 * 1024;
const NO_TESTS_FOUND = 'No test files found';
const SKIP_CHANGELOG_NOTE = 'the PR needs the `skip changelog` label';

// Every package lints, typechecks and tests through these, so a change here can break any of them.
const SHARED_CONFIG_FILES = new Set([
	'package.json',
	'pnpm-lock.yaml',
	'pnpm-workspace.yaml',
	'tsconfig.base.json',
	'eslint.config.base.ts',
	'turbo.json',
]);

const PACKAGE_CONFIG_FILE =
	/^packages\/[^/]+\/(package\.json|eslint\.config\.[cm]?[jt]s|tsconfig[^/]*\.json|vitest\.config\.[cm]?[jt]s)$/;
const DOCS_TESTS_INPUT =
	/^packages\/design-system\/(.*\.stories\.tsx?|.*\/stories\/.*|.*\.docs\.(test\.ts|snap)|tests\/storybook\/.*)$/;
const SCRIPT_FILE = /\.[cm]?[jt]sx?$/;
const CODE_FILE = /\.([cm]?[jt]sx?|scss)$/;
const TEST_FILE = /\.test\.tsx?$/;
const FIGMA_FILE = /\.figma(\.batch)?\.tsx?$/;
const COMPONENT_DIR = /^packages\/design-system\/src\/components\/[^/]+(?=\/)/;
const STORY_FILE = /\.stories\.tsx?$/;
const CHANGESET_FILE = /^\.changeset\/(?!README\.md$)[^/]+\.md$/;
const CHANGESET_FRONTMATTER = /^---\n([\s\S]*?)\n---/;
const CHANGESET_PACKAGE = /^\s*['"]?([^'":\s]+)['"]?\s*:/gm;
const NON_PUBLISHED_SOURCE =
	/(\/__tests__\/|\/stories\/|\/__screenshots__\/|\.test\.|\.stories\.|\.figma\.|\.mdx?$)/;

const DOCS_TESTS_COMMAND = 'pnpm test:storybook-docs -- tests/storybook/docs-snippets.docs.test.ts --run';
const VISUAL_TESTS_COMMAND = `pnpm --filter ${DS_PACKAGE} test:visual --run`;
const VISUAL_SERVER_COMMAND = `pnpm --filter ${DS_PACKAGE} test:visual:server`;

const { values: options } = parseArgs({
	options: {
		full: { type: 'boolean', default: false },
		changeset: { type: 'boolean', default: true },
		help: { type: 'boolean', short: 'h', default: false },
	},
	allowNegative: true,
});

if (options.help) {
	console.log(`Usage: pnpm agent:check [--full] [--no-changeset]

Checks what the branch changed against the merge base with upstream main.

  --full           Also run docs snippet tests and visual tests when they apply.
  --no-changeset   Skip the changeset check (refactors, internal tooling).`);
	process.exit(0);
}

const base = findBase();
const changedFiles = getChangedFiles(base);
const existingFiles = changedFiles.filter((file) => fs.existsSync(path.join(ROOT_DIR, file)));
const packages = getWorkspacePackages();
const sharedConfigChanged = changedFiles.some((file) => SHARED_CONFIG_FILES.has(file));
const changedPackages = packages.filter((pkg) => changedFiles.some((file) => isInPackage(pkg, file)));
const fullCheckPackages = getFullCheckPackages();
const checkedPackages = packages.filter(
	(pkg) => changedPackages.includes(pkg) || fullCheckPackages.includes(pkg),
);

console.log(`Base: ${base.slice(0, 9)} — ${changedFiles.length.toString()} changed file(s)`);

if (changedFiles.length === 0) {
	process.exit(0);
}

if (fullCheckPackages.length > 0) {
	console.log(
		`Full lint, typecheck and tests (config or a dependency changed): ${fullCheckPackages.map((pkg) => pkg.name).join(', ')}`,
	);
}

const results: StepResult[] = [
	...runLint(),
	...runTypecheck(),
	...runTests(),
	runFigmaLint(),
	checkChangeset(),
	runDocsTests(),
	await runVisualTests(),
];

printSummary(results);

process.exit(results.some((result) => result.status === 'fail') ? 1 : 0);

function findBase() {
	let upstream = git('remote', '-v')
		.split('\n')
		.map((line) => line.split(/\s+/))
		.find(([, url, kind]) => kind === '(fetch)' && url !== undefined && UPSTREAM_REPO_PATTERN.test(url))?.[0];

	if (!upstream) {
		upstream = 'origin';
		console.warn(
			'No git remote points at drivenets/design-system; diffing against origin/main, which may be stale.',
		);
	}

	try {
		git('fetch', '-q', upstream, 'main');
	} catch {
		console.warn(`Could not fetch ${upstream}/main; using the local copy.`);
	}

	try {
		return git('merge-base', 'HEAD', `${upstream}/main`);
	} catch {
		console.error(`Can't find ${upstream}/main. Run \`git fetch ${upstream} main\`, then rerun.`);
		process.exit(1);
	}
}

function getChangedFiles(baseRef: string) {
	const tracked = git('diff', '--name-only', '--no-renames', baseRef);
	const untracked = git('ls-files', '--others', '--exclude-standard');

	return [...new Set([...tracked.split('\n'), ...untracked.split('\n')])].filter(Boolean).sort();
}

function getWorkspacePackages(): WorkspacePackage[] {
	return fs
		.readdirSync(path.join(ROOT_DIR, 'packages'))
		.map((dirName) => `packages/${dirName}`)
		.filter((dir) => fs.existsSync(path.join(ROOT_DIR, dir, 'package.json')))
		.map((dir) => {
			const packageJson = JSON.parse(
				fs.readFileSync(path.join(ROOT_DIR, dir, 'package.json'), 'utf8'),
			) as PackageJson;
			const dependencies = {
				...packageJson.dependencies,
				...packageJson.devDependencies,
				...packageJson.peerDependencies,
			};

			return {
				dir,
				name: packageJson.name,
				isPrivate: packageJson.private ?? false,
				scripts: packageJson.scripts ?? {},
				workspaceDependencies: Object.keys(dependencies).filter((name) =>
					dependencies[name]?.startsWith('workspace:'),
				),
			};
		});
}

function getFullCheckPackages() {
	if (sharedConfigChanged) {
		return packages;
	}

	const affected = new Set(changedPackages.map((pkg) => pkg.name));
	let grew = true;

	while (grew) {
		const dependents = packages.filter(
			(pkg) => !affected.has(pkg.name) && pkg.workspaceDependencies.some((name) => affected.has(name)),
		);

		dependents.forEach((pkg) => affected.add(pkg.name));
		grew = dependents.length > 0;
	}

	return packages.filter(
		(pkg) =>
			changedFiles.some((file) => isInPackage(pkg, file) && PACKAGE_CONFIG_FILE.test(file)) ||
			(affected.has(pkg.name) && !changedPackages.includes(pkg)),
	);
}

function runLint(): StepResult[] {
	const lintRoot = sharedConfigChanged || changedFiles.includes('eslint.config.ts');
	const files = existingFiles.filter(
		(file) =>
			SCRIPT_FILE.test(file) &&
			!fullCheckPackages.some((pkg) => isInPackage(pkg, file)) &&
			!(lintRoot && !file.startsWith('packages/')),
	);
	const steps = fullCheckPackages
		.filter((pkg) => pkg.scripts.lint)
		.map((pkg) => runPackageScript(`lint ${pkg.name}`, pkg, 'lint'));

	if (lintRoot) {
		steps.push(run('lint root', 'pnpm', ['lint:root']));
	}

	if (files.length > 0) {
		steps.unshift(runEslint(files));
	}

	return steps.length > 0 ? steps : [skip('eslint', 'no JS/TS files changed')];
}

function runEslint(files: string[]) {
	const needsScssTypes = files.some((file) => file.startsWith(`${DS_DIR}/`));
	const scssTypesDir = path.join(ROOT_DIR, DS_DIR, '.scss-dts');

	// Type-aware rules read SCSS module class names from generated typings, as in the package's own lint script.
	if (needsScssTypes) {
		spawnSync('pnpm', ['--filter', DS_PACKAGE, 'generate-scss-dts'], { cwd: ROOT_DIR });
	}

	try {
		return run(`eslint (${files.length.toString()} file(s))`, 'node_modules/.bin/eslint', [
			'--max-warnings=0',
			'--no-warn-ignored',
			...files,
		]);
	} finally {
		if (needsScssTypes) {
			fs.rmSync(scssTypesDir, { recursive: true, force: true });
		}
	}
}

function runTypecheck(): StepResult[] {
	const steps = checkedPackages
		.filter((pkg) => pkg.scripts.typecheck)
		.map((pkg) => runPackageScript(`typecheck ${pkg.name}`, pkg, 'typecheck'));

	const rootChanged = changedFiles.some(
		(file) => file === 'tsconfig.json' || (!file.startsWith('packages/') && SCRIPT_FILE.test(file)),
	);

	if (sharedConfigChanged || rootChanged) {
		steps.push(run('typecheck root', 'pnpm', ['typecheck:root']));
	}

	return steps.length > 0 ? steps : [skip('typecheck', 'no package or root TS changed')];
}

function runTests(): StepResult[] {
	const steps = checkedPackages
		.filter((pkg) => pkg.scripts.test)
		.map((pkg) => {
			const name = `tests ${pkg.name}`;
			const args = ['--run', '--passWithNoTests'];

			if (fullCheckPackages.includes(pkg)) {
				return runTestScript(name, pkg, args);
			}

			if (pkg.name !== DS_PACKAGE) {
				return runTestScript(name, pkg, [...args, '--changed', base]);
			}

			const filters = getDesignSystemTestFilters(pkg);

			return filters ? runTestScript(name, pkg, [...args, ...filters]) : skip(name, 'no code changed');
		});

	return steps.length > 0 ? steps : [skip('tests', 'no package with tests changed')];
}

// `vitest --changed` crashes in the browser projects (vite:css), so run by changed component folder.
function getDesignSystemTestFilters(pkg: WorkspacePackage) {
	const files = changedFiles.filter((file) => isInPackage(pkg, file) && CODE_FILE.test(file));

	if (files.length === 0) {
		return undefined;
	}

	const filters = files.map((file) => {
		const componentDir = COMPONENT_DIR.exec(file)?.[0];

		if (componentDir) {
			return `${path.relative(pkg.dir, componentDir)}/`;
		}

		return TEST_FILE.test(file) ? path.relative(pkg.dir, file) : undefined;
	});

	// Shared code (hooks, utils, styles, Storybook and Vitest setup) can affect any test, so run them all.
	return filters.every((filter) => filter !== undefined) ? [...new Set(filters)] : [];
}

function runTestScript(name: string, pkg: WorkspacePackage, args: string[]): StepResult {
	const result = runPackageScript(name, pkg, 'test', args);

	return result.status === 'pass' && result.detail === NO_TESTS_FOUND
		? skip(name, 'no tests matched')
		: result;
}

function runFigmaLint(): StepResult {
	if (!changedFiles.some((file) => FIGMA_FILE.test(file))) {
		return skip('figma:lint', 'no *.figma.ts changed');
	}

	return run('figma:lint', 'pnpm', ['--filter', DS_PACKAGE, 'figma:lint']);
}

function checkChangeset(): StepResult {
	const published = packages.filter((pkg) => !pkg.isPrivate);
	const publishedChanged = published.some((pkg) => changedFiles.some((file) => isInPackage(pkg, file)));
	const labelNote = publishedChanged ? `; ${SKIP_CHANGELOG_NOTE}` : '';

	if (!options.changeset) {
		return skip('changeset', `--no-changeset${labelNote}`);
	}

	const needsChangeset = published.filter((pkg) => changedFiles.some((file) => isPublishedSource(pkg, file)));

	if (needsChangeset.length === 0) {
		return skip('changeset', `no published source changed${labelNote}`);
	}

	const named = getChangesetPackageNames();
	const missing = needsChangeset.filter((pkg) => !named.has(pkg.name));

	if (missing.length === 0) {
		return { name: 'changeset', status: 'pass', detail: '' };
	}

	return {
		name: 'changeset',
		status: 'fail',
		detail: `no .changeset/*.md names ${missing.map((pkg) => pkg.name).join(', ')}. Run \`pnpm changelog\`, or pass --no-changeset if the change is not user-facing.`,
	};
}

function isPublishedSource(pkg: WorkspacePackage, file: string) {
	return (
		file === `${pkg.dir}/package.json` ||
		(file.startsWith(`${pkg.dir}/src/`) && !NON_PUBLISHED_SOURCE.test(file))
	);
}

function getChangesetPackageNames() {
	const names = existingFiles
		.filter((file) => CHANGESET_FILE.test(file))
		.flatMap((file) => {
			const frontmatter = CHANGESET_FRONTMATTER.exec(fs.readFileSync(path.join(ROOT_DIR, file), 'utf8'))?.[1];

			return [...(frontmatter ?? '').matchAll(CHANGESET_PACKAGE)].map((match) => match[1]);
		});

	return new Set(names);
}

function runDocsTests(): StepResult {
	if (!changedFiles.some((file) => DOCS_TESTS_INPUT.test(file))) {
		return skip('docs tests', 'no stories or docs snapshots changed');
	}

	if (!options.full) {
		return hint('docs tests', DOCS_TESTS_COMMAND);
	}

	return run('docs tests', 'pnpm', DOCS_TESTS_COMMAND.split(' ').slice(1));
}

async function runVisualTests(): Promise<StepResult> {
	const designSystem = packages.find((pkg) => pkg.name === DS_PACKAGE);
	const applies =
		(designSystem && changedFiles.some((file) => isPublishedSource(designSystem, file))) ||
		changedFiles.some((file) => {
			const componentDir = COMPONENT_DIR.exec(file)?.[0];

			return componentDir !== undefined && hasVisualStories(path.join(ROOT_DIR, componentDir));
		});

	if (!applies) {
		return skip('visual tests', 'no design-system source or visual stories changed');
	}

	if (!options.full) {
		return hint(
			'visual tests',
			`start ${VISUAL_SERVER_COMMAND} in another terminal, then ${VISUAL_TESTS_COMMAND}`,
		);
	}

	if (!(await isVisualServerUp())) {
		return {
			name: 'visual tests',
			status: 'fail',
			detail: `Playwright server is not running. Start it with ${VISUAL_SERVER_COMMAND}, then rerun.`,
		};
	}

	return run('visual tests', 'pnpm', VISUAL_TESTS_COMMAND.split(' ').slice(1));
}

function hasVisualStories(dir: string) {
	if (!fs.existsSync(dir)) {
		return false;
	}

	return fs
		.readdirSync(dir, { recursive: true, encoding: 'utf8' })
		.filter((file) => STORY_FILE.test(file))
		.some((file) => /tags:\s*\[[^\]]*'visual'/.test(fs.readFileSync(path.join(dir, file), 'utf8')));
}

function isInPackage(pkg: WorkspacePackage, file: string) {
	return file.startsWith(`${pkg.dir}/`);
}

function runPackageScript(name: string, pkg: WorkspacePackage, script: string, args: string[] = []) {
	return run(name, 'pnpm', ['--filter', pkg.name, script, ...args]);
}

function run(name: string, command: string, args: string[]): StepResult {
	console.log(`▶ ${name}: ${command} ${args.join(' ')}`);

	// Output is printed only on failure: passing runs (e.g. figma:lint's parsed JSON) would flood an agent's context.
	const { status, stdout, stderr, error } = spawnSync(command, args, {
		cwd: ROOT_DIR,
		encoding: 'utf8',
		maxBuffer: OUTPUT_MAX_BYTES,
	});

	if (error) {
		return { name, status: 'fail', detail: error.message };
	}

	if (status !== 0) {
		console.log(stdout + stderr);

		return { name, status: 'fail', detail: '' };
	}

	return { name, status: 'pass', detail: stdout.includes(NO_TESTS_FOUND) ? NO_TESTS_FOUND : '' };
}

function skip(name: string, reason: string): StepResult {
	return { name, status: 'skip', detail: reason };
}

function hint(name: string, command: string): StepResult {
	return { name, status: 'hint', detail: `not run: ${command}, or pnpm agent:check --full` };
}

// Probe over HTTP: Docker's port proxy accepts TCP connections before the server listens.
async function isVisualServerUp() {
	try {
		const response = await fetch(`http://127.0.0.1:${VISUAL_SERVER_PORT.toString()}/`, {
			signal: AbortSignal.timeout(VISUAL_SERVER_TIMEOUT_MS),
		});

		return response.ok;
	} catch {
		return false;
	}
}

function printSummary(steps: StepResult[]) {
	console.log('\nagent:check summary');

	for (const step of steps) {
		const detail = step.detail ? ` — ${step.detail}` : '';

		console.log(`  ${step.status.toUpperCase().padEnd(4)}  ${step.name}${detail}`);
	}
}

function git(...args: string[]) {
	return execFileSync('git', args, { cwd: ROOT_DIR, encoding: 'utf8', stdio: 'pipe' }).trim();
}
