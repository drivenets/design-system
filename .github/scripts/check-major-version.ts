import fs from 'node:fs';

type ChangesetStatus = {
	releases: Array<{ type: string }>;
};

const changesetStatusFile = process.argv[2];

if (!changesetStatusFile || !fs.existsSync(changesetStatusFile)) {
	console.error('Error: Changeset status file path not provided or does not exist.');

	process.exit(1);
}

const status = JSON.parse(fs.readFileSync(changesetStatusFile, 'utf-8')) as ChangesetStatus;

if (status.releases.some((r) => r.type === 'major')) {
	console.error(
		'Error: Major changesets are not allowed. Did you mean to create a minor or patch changeset instead?',
	);

	process.exit(1);
}
