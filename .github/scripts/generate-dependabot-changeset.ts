import path from 'node:path';
import fs from 'node:fs/promises';
import { promisify } from 'node:util';
import { exec } from 'node:child_process';
import writeChangeset from '@changesets/write';
import { type Changeset } from '@changesets/types';
import * as git from '@changesets/git';
import { shouldSkipPackage } from '@changesets/should-skip-package';
import changesetConfig from '../../.changeset/config.json' with { type: 'json' };

const execAsync = promisify(exec);

const rootDir = path.resolve(import.meta.dirname, '../../');
const changedPackages = await getVersionableChangedPackages();

const existingChangeset = await getExistingChangeset();

console.log({ existingChangeset });

if (existingChangeset) {
	await fs.rm(existingChangeset);
}

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

console.log({ changeset });

await writeChangeset(changeset, rootDir);

await git.add('-A', rootDir);
await git.commit('chore: update changeset', rootDir);

await execAsync('git push', { cwd: rootDir });

async function getExistingChangeset() {
	const changedFiles = await git.getChangedFilesSince({
		cwd: rootDir,
		ref: changesetConfig.baseBranch,
	});

	return changedFiles.find((file) => file.includes('.changeset/'));
}

// Stolen from:
// https://github.com/changesets/changesets/blob/d23e19e2d/packages/cli/src/utils/versionablePackages.ts
async function getVersionableChangedPackages() {
	const changedPackages = await git.getChangedPackagesSinceRef({
		cwd: rootDir,
		ref: changesetConfig.baseBranch,
	});

	return changedPackages.filter(
		(pkg) =>
			!shouldSkipPackage(pkg, {
				ignore: changesetConfig.ignore,
				allowPrivatePackages: false,
			}),
	);
}
