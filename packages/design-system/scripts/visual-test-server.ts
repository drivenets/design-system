// Starts the Playwright browser server used by `pnpm test:visual`.
// The image tag follows the installed `playwright` version, because client and server must match.
// Pass `--detach` to run it in the background and wait until it accepts connections (used in CI).
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { setTimeout as sleep } from 'node:timers/promises';

const require = createRequire(import.meta.url);
const { version } = require('playwright/package.json') as { version: string };

const PORT = process.env.PW_SERVER_PORT ?? '3000';
const IMAGE = `mcr.microsoft.com/playwright:v${version}-noble`;
const READY_TIMEOUT_MS = 120_000;
const READY_POLL_INTERVAL_MS = 1_000;

const detach = process.argv.includes('--detach');

const args = [
	'run',
	'--rm',
	'--init',
	'--ipc=host',
	// CI runners are amd64; Chromium renders some pixels differently on arm64, so pin the architecture everywhere.
	'--platform',
	'linux/amd64',
	...(detach ? ['--detach'] : []),
	'--publish',
	// Loopback only: the server has no auth, so don't expose it to the local network.
	`127.0.0.1:${PORT}:${PORT}`,
	'--workdir',
	'/home/pwuser',
	'--user',
	'pwuser',
	IMAGE,
	'/bin/sh',
	'-c',
	`npx -y playwright@${version} run-server --port ${PORT} --host 0.0.0.0`,
];

process.stdout.write(`Starting ${IMAGE} on ws://127.0.0.1:${PORT}/\n`);

const child = spawn('docker', args, { stdio: 'inherit' });

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
		const response = await fetch(`http://127.0.0.1:${PORT}/`);
		return response.ok;
	} catch {
		return false;
	}
}
