import path from 'node:path';
import fs from 'node:fs/promises';
import { promisify } from 'node:util';
import { exec } from 'node:child_process';
import * as git from '@changesets/git';
import writeChangeset from '@changesets/write';
import { type Changeset } from '@changesets/types';
import { shouldSkipPackage } from '@changesets/should-skip-package';
import changesetConfig from '../../.changeset/config.json' with { type: 'json' };

const execAsync = promisify(exec);

const BASE_BRANCH = 'origin/' + changesetConfig.baseBranch;
const ROOT_DIR = path.resolve(import.meta.dirname, '../../');

const existingChangeset = await getExistingChangeset();

if (existingChangeset) {
	await fs.rm(existingChangeset);
}

const changedPackages = await getVersionableChangedPackages();

if (changedPackages.length === 0) {
	console.log('No changed packages found');
	process.exit(0);
}

const changeset: Changeset = {
	summary: 'Update dependencies',
	releases: changedPackages.map((pkg) => ({
		name: pkg.packageJson.name,
		type: 'patch',
	})),
};

await writeChangeset(changeset, ROOT_DIR);

await git.add('-A', ROOT_DIR);
await git.commit('chore: update changeset', ROOT_DIR);

await execAsync('git push', { cwd: ROOT_DIR });

async function getExistingChangeset() {
	const changedFiles = await git.getChangedFilesSince({
		cwd: ROOT_DIR,
		ref: BASE_BRANCH,
	});

	return changedFiles.find((file) => file.startsWith('.changeset/') && file.endsWith('.md'));
}

// Inspired by:
// https://github.com/changesets/changesets/blob/d23e19e2d/packages/cli/src/utils/versionablePackages.ts
async function getVersionableChangedPackages() {
	const changedPackages = await git.getChangedPackagesSinceRef({
		cwd: ROOT_DIR,
		ref: BASE_BRANCH,
	});

	return changedPackages.filter(
		(pkg) =>
			!shouldSkipPackage(pkg, {
				ignore: changesetConfig.ignore,
				allowPrivatePackages: false,
			}),
	);
}
