import fs from 'node:fs';

type ChangesetStatus = {
	releases: Array<{ type: string }>;
};

const changesetStatusFile = process.argv[2];

if (!changesetStatusFile || !fs.existsSync(changesetStatusFile)) {
	exitWithOutput(false, false);
}

const status = JSON.parse(fs.readFileSync(changesetStatusFile, 'utf-8')) as ChangesetStatus;

const hasMajor = status.releases.some((release) => release.type === 'major');
const hasNonPatch = status.releases.some((release) => release.type !== 'patch' && release.type !== 'none');

exitWithOutput(hasMajor, hasNonPatch);

function exitWithOutput(hasMajor: boolean, hasNonPatch: boolean): never {
	const outputFile = process.env.GITHUB_OUTPUT;

	if (outputFile) {
		fs.appendFileSync(
			outputFile,
			`has-major=${hasMajor.toString()}\nhas-non-patch=${hasNonPatch.toString()}\n`,
		);
	}

	console.log(`Major changeset detected: ${hasMajor.toString()}`);
	console.log(`Non-patch changeset detected: ${hasNonPatch.toString()}`);

	process.exit(0);
}
