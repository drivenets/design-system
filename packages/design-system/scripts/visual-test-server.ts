// cspell:ignore pwuser
// Starts the Playwright browser server used by `pnpm test:visual`.
// The image tag follows the installed `playwright` version, because client and server must match.
// Pass `--detach` to run it in the background and wait until it accepts connections (used in CI).
import { spawn } from 'node:child_process';
import { realpathSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname } from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';

const require = createRequire(import.meta.url);
const { version } = require('playwright/package.json') as { version: string };

// The server runs from the lockfile-installed `playwright-core` (no dependencies), mounted read-only,
// so nothing is downloaded from npm inside the container. The image provides Node and the browsers.
const PLAYWRIGHT_CORE_DIR = dirname(
	realpathSync(
		require.resolve('playwright-core/package.json', { paths: [require.resolve('playwright/package.json')] }),
	),
);
const CONTAINER_PLAYWRIGHT_CORE_DIR = '/opt/playwright-core';

const PORT = process.env.PW_SERVER_PORT ?? '3000';
const IMAGE = `mcr.microsoft.com/playwright:v${version}-noble`;
const SHM_SIZE = '1gb';
const READY_TIMEOUT_MS = 120_000;
const READY_POLL_INTERVAL_MS = 1_000;
const READY_REQUEST_TIMEOUT_MS = 2_000;

const detach = process.argv.includes('--detach');

const args = [
	'run',
	'--rm',
	'--init',
	// Chromium needs more shared memory than Docker's 64MB default.
	`--shm-size=${SHM_SIZE}`,
	// CI runners are amd64; Chromium renders some pixels differently on arm64, so pin the architecture everywhere.
	'--platform',
	'linux/amd64',
	...(detach ? ['--detach'] : []),
	'--publish',
	// Loopback only: the server has no auth, so don't expose it to the local network.
	`127.0.0.1:${PORT}:${PORT}`,
	'--volume',
	`${PLAYWRIGHT_CORE_DIR}:${CONTAINER_PLAYWRIGHT_CORE_DIR}:ro`,
	'--user',
	'pwuser',
	IMAGE,
	'node',
	`${CONTAINER_PLAYWRIGHT_CORE_DIR}/cli.js`,
	'run-server',
	'--port',
	PORT,
	'--host',
	'0.0.0.0',
];

process.stdout.write(`Starting ${IMAGE} on ws://127.0.0.1:${PORT}/\n`);

const child = spawn('docker', args, { stdio: 'inherit' });

child.on('error', (error: NodeJS.ErrnoException) => {
	const message =
		error.code === 'ENOENT'
			? 'Docker is required to run visual tests, but the `docker` command was not found.'
			: `Failed to start Docker: ${error.message}`;

	process.stderr.write(`${message}\n`);
	process.exit(1);
});

child.on('exit', (code) => {
	if (!detach || code !== 0) {
		process.exit(code ?? 0);
	}

	void waitForServer();
});

async function waitForServer() {
	const deadline = Date.now() + READY_TIMEOUT_MS;

	while (Date.now() < deadline) {
		if (await isServerUp()) {
			process.stdout.write('Playwright server is ready.\n');
			return;
		}

		await sleep(READY_POLL_INTERVAL_MS);
	}

	process.stderr.write(`Playwright server did not start within ${String(READY_TIMEOUT_MS / 1000)}s.\n`);
	process.exit(1);
}

// Probe over HTTP: Docker's port proxy accepts TCP connections before the server listens.
async function isServerUp() {
	try {
		const response = await fetch(`http://127.0.0.1:${PORT}/`, {
			signal: AbortSignal.timeout(READY_REQUEST_TIMEOUT_MS),
		});
		return response.ok;
	} catch {
		return false;
	}
}
