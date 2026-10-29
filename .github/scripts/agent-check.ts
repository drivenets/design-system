import fs from 'node:fs';
import net from 'node:net';
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
};

const ROOT_DIR = path.resolve(import.meta.dirname, '../../');
const DS_PACKAGE = '@drivenets/design-system';
const UPSTREAM_REPO_PATTERN = /[:/]drivenets\/design-system(\.git)?$/;
const VISUAL_SERVER_PORT = Number(process.env.PW_SERVER_PORT ?? '3000');
const VISUAL_SERVER_TIMEOUT_MS = 1000;

const SCRIPT_FILE = /\.[cm]?[jt]sx?$/;
const FIGMA_FILE = /\.figma(\.batch)?\.tsx?$/;
const COMPONENT_DIR = /^packages\/design-system\/src\/components\/[^/]+(?=\/)/;
const STORY_FILE = /\.stories\.tsx?$/;
const CHANGESET_FILE = /^\.changeset\/(?!README\.md$)[^/]+\.md$/;
const NON_PUBLISHED_SOURCE =
	/(\/__tests__\/|\/stories\/|\/__screenshots__\/|\.test\.|\.stories\.|\.figma\.|\.mdx?$)/;

const DOCS_TESTS_COMMAND = 'pnpm test:storybook-docs -- tests/storybook/docs-snippets.docs.test.ts --run';
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
const changedPackages = packages.filter((pkg) => changedFiles.some((file) => file.startsWith(`${pkg.dir}/`)));
const rootFiles = changedFiles.filter((file) => !file.startsWith('packages/'));

console.log(`Base: ${base.slice(0, 9)} — ${changedFiles.length.toString()} changed file(s)`);

if (changedFiles.length === 0) {
	process.exit(0);
}

const results: StepResult[] = [
	runEslint(),
	...runTypecheck(),
	...runTests(),
	runFigmaLint(),
	options.changeset ? checkChangeset() : skip('changeset', '--no-changeset'),
	runDocsTests(),
	...(await runVisualTests()),
];

printSummary(results);

process.exit(results.some((result) => result.status === 'fail') ? 1 : 0);

function findBase() {
	const remotes = git('remote', '-v').split('\n');
	const upstream = remotes
		.map((line) => line.split(/\s+/))
		.find(([, url, kind]) => kind === '(fetch)' && url !== undefined && UPSTREAM_REPO_PATTERN.test(url))?.[0];

	if (!upstream) {
		throw new Error(
			'No git remote points at drivenets/design-system. Add one, e.g. `git remote add drivenets <url>`.',
		);
	}

	try {
		git('fetch', '-q', upstream, 'main');
	} catch {
		console.warn(`Could not fetch ${upstream}/main; using the local copy.`);
	}

	return git('merge-base', 'HEAD', `${upstream}/main`);
}

function getChangedFiles(baseRef: string) {
	const tracked = git('diff', '--name-only', baseRef);
	const untracked = git('ls-files', '--others', '--exclude-standard');

	return [...new Set([...tracked.split('\n'), ...untracked.split('\n')])].filter(Boolean).sort();
}

function getWorkspacePackages(): WorkspacePackage[] {
	return fs
		.readdirSync(path.join(ROOT_DIR, 'packages'))
		.map((dirName) => `packages/${dirName}`)
		.filter((dir) => fs.existsSync(path.join(ROOT_DIR, dir, 'package.json')))
		.map((dir) => {
			const packageJson = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, dir, 'package.json'), 'utf8')) as {
				name: string;
				private?: boolean;
				scripts?: Record<string, string>;
			};

			return {
				dir,
				name: packageJson.name,
				isPrivate: packageJson.private ?? false,
				scripts: packageJson.scripts ?? {},
			};
		});
}

function runEslint(): StepResult {
	const files = existingFiles.filter((file) => SCRIPT_FILE.test(file));

	if (files.length === 0) {
		return skip('eslint', 'no JS/TS files changed');
	}

	return run(`eslint (${files.length.toString()} file(s))`, 'node_modules/.bin/eslint', [
		'--max-warnings=0',
		'--no-warn-ignored',
		...files,
	]);
}

function runTypecheck(): StepResult[] {
	const steps = changedPackages
		.filter((pkg) => pkg.scripts.typecheck)
		.map((pkg) => runPackageScript(`typecheck ${pkg.name}`, pkg, 'typecheck'));

	if (rootFiles.some((file) => SCRIPT_FILE.test(file))) {
		steps.push(run('typecheck root', 'pnpm', ['typecheck:root']));
	}

	return steps.length > 0 ? steps : [skip('typecheck', 'no package or root TS changed')];
}

function runTests(): StepResult[] {
	const steps = changedPackages
		.filter((pkg) => pkg.scripts.test)
		.map((pkg) =>
			runPackageScript(`tests ${pkg.name}`, pkg, 'test', ['--run', '--changed', base, '--passWithNoTests']),
		);

	return steps.length > 0 ? steps : [skip('tests', 'no package with tests changed')];
}

function runFigmaLint(): StepResult {
	if (!changedFiles.some((file) => FIGMA_FILE.test(file))) {
		return skip('figma:lint', 'no *.figma.ts changed');
	}

	return run('figma:lint', 'pnpm', ['--filter', DS_PACKAGE, 'figma:lint']);
}

function checkChangeset(): StepResult {
	const needsChangeset = packages.filter(
		(pkg) =>
			!pkg.isPrivate &&
			changedFiles.some((file) => file.startsWith(`${pkg.dir}/src/`) && !NON_PUBLISHED_SOURCE.test(file)),
	);

	if (needsChangeset.length === 0) {
		return skip('changeset', 'no published source changed');
	}

	if (existingFiles.some((file) => CHANGESET_FILE.test(file))) {
		return { name: 'changeset', status: 'pass', detail: 'found in .changeset/' };
	}

	const names = needsChangeset.map((pkg) => pkg.name).join(', ');

	return {
		name: 'changeset',
		status: 'fail',
		detail: `${names} changed with no .changeset/*.md. Run \`pnpm changelog\`, or pass --no-changeset if the change is not user-facing.`,
	};
}

function runDocsTests(): StepResult {
	if (!changedFiles.some((file) => file.startsWith('packages/design-system/') && STORY_FILE.test(file))) {
		return skip('docs tests', 'no stories changed');
	}

	if (!options.full) {
		return hint('docs tests', DOCS_TESTS_COMMAND);
	}

	return run('docs tests', 'pnpm', DOCS_TESTS_COMMAND.split(' ').slice(1));
}

async function runVisualTests(): Promise<StepResult[]> {
	const componentDirs = getVisualComponentDirs();

	if (componentDirs.length === 0) {
		return [skip('visual tests', 'no component with visual stories changed')];
	}

	const packageDirs = componentDirs.map((dir) => path.relative('packages/design-system', dir) + '/');
	const command = `pnpm --filter ${DS_PACKAGE} test:visual ${packageDirs.join(' ')} --run`;

	if (!options.full) {
		return [hint('visual tests', `${VISUAL_SERVER_COMMAND} (separate terminal), then ${command}`)];
	}

	if (!(await isPortOpen(VISUAL_SERVER_PORT))) {
		return [
			{
				name: 'visual tests',
				status: 'fail',
				detail: `Playwright server is not running. Start it with ${VISUAL_SERVER_COMMAND}, then rerun.`,
			},
		];
	}

	return [run('visual tests', 'pnpm', command.split(' ').slice(1))];
}

function getVisualComponentDirs() {
	const dirs = new Set(
		changedFiles.map((file) => COMPONENT_DIR.exec(file)?.[0]).filter((dir) => dir !== undefined),
	);

	return [...dirs].filter((dir) => hasVisualStories(path.join(ROOT_DIR, dir)));
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

function runPackageScript(name: string, pkg: WorkspacePackage, script: string, args: string[] = []) {
	return run(name, 'pnpm', ['--filter', pkg.name, script, ...args]);
}

function run(name: string, command: string, args: string[]): StepResult {
	console.log(`\n▶ ${name}: ${command} ${args.join(' ')}`);

	const { status } = spawnSync(command, args, { cwd: ROOT_DIR, stdio: 'inherit' });

	return { name, status: status === 0 ? 'pass' : 'fail', detail: '' };
}

function skip(name: string, reason: string): StepResult {
	return { name, status: 'skip', detail: reason };
}

function hint(name: string, command: string): StepResult {
	return { name, status: 'hint', detail: `not run; to run: ${command} (or pnpm agent:check --full)` };
}

function isPortOpen(port: number) {
	return new Promise<boolean>((resolve) => {
		const socket = net.connect({ host: '127.0.0.1', port, timeout: VISUAL_SERVER_TIMEOUT_MS });

		socket.once('connect', () => {
			socket.destroy();
			resolve(true);
		});
		socket.once('error', () => resolve(false));
		socket.once('timeout', () => {
			socket.destroy();
			resolve(false);
		});
	});
}

function printSummary(steps: StepResult[]) {
	console.log('\nagent:check summary');

	for (const step of steps) {
		const detail = step.detail ? ` — ${step.detail}` : '';

		console.log(`  ${step.status.toUpperCase().padEnd(4)}  ${step.name}${detail}`);
	}
}

function git(...args: string[]) {
	return execFileSync('git', args, { cwd: ROOT_DIR, encoding: 'utf8' }).trim();
}
