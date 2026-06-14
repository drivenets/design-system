import fs from 'node:fs';

type ChangesetStatus = {
	releases: Array<{ type: string }>;
};

const changesetStatusFile = process.argv[2];

if (!changesetStatusFile || !fs.existsSync(changesetStatusFile)) {
	exit(false);
}

const status = JSON.parse(fs.readFileSync(changesetStatusFile, 'utf-8')) as ChangesetStatus;

const hasMajor = status.releases.some((release) => release.type === 'major');

exit(hasMajor);

function exit(hasMajor: boolean): never {
	const outputFile = process.env.GITHUB_OUTPUT;

	if (outputFile) {
		fs.appendFileSync(outputFile, `has-major=${hasMajor.toString()}\n`);
	}

	console.log(`Major changeset detected: ${hasMajor.toString()}`);

	process.exit(0);
}
