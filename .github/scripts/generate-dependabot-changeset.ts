import path from 'node:path';
import fs from 'node:fs/promises';
import { promisify } from 'node:util';
import { exec } from 'node:child_process';
import * as git from '@changesets/git';
import getChangesets from '@changesets/read';
import writeChangeset from '@changesets/write';
import { type Changeset } from '@changesets/types';
import { shouldSkipPackage } from '@changesets/should-skip-package';
import changesetConfig from '../../.changeset/config.json' with { type: 'json' };

const execAsync = promisify(exec);

const BASE_BRANCH = 'origin/' + changesetConfig.baseBranch;
const ROOT_DIR = path.resolve(import.meta.dirname, '../../');

const changedPackages = await getVersionableChangedPackages();

const newChangeset: Changeset = {
	summary: 'Update dependencies',
	releases: changedPackages.map((pkg) => ({
		name: pkg.packageJson.name,
		type: 'patch',
	})),
};

const existingChangeset = await getExistingChangeset();

if (existingChangeset) {
	if (changesetsAreEqual(existingChangeset, newChangeset)) {
		console.log('Changeset is already up to date');
		process.exit(0);
	}

	await removeChangeset(existingChangeset.id);

	console.log('Removed outdated changeset');
}

if (changedPackages.length === 0) {
	console.log('No changed packages found');
	process.exit(0);
}

await writeChangeset(newChangeset, ROOT_DIR);

console.log('Added new changeset');

await git.add('-A', ROOT_DIR);
await git.commit('chore: update changeset', ROOT_DIR);

await execAsync('git push', { cwd: ROOT_DIR });

async function getExistingChangeset() {
	return (await getChangesets(ROOT_DIR, BASE_BRANCH)).find(
		(changeset) => changeset.summary === newChangeset.summary,
	);
}

async function removeChangeset(changesetId: string) {
	const changesetPath = path.resolve(ROOT_DIR, '.changeset', changesetId + '.md');

	await fs.rm(changesetPath);
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

function changesetsAreEqual(changeset1: Changeset, changeset2: Changeset) {
	return (
		changeset1.summary === changeset2.summary &&
		JSON.stringify(changeset1.releases) === JSON.stringify(changeset2.releases)
	);
}
