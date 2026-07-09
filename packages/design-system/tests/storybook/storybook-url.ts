export function getStorybookUrl(): string {
	const storybookUrl = process.env.STORYBOOK_URL;

	if (!storybookUrl) {
		throw new Error(
			'STORYBOOK_URL is not set. Storybook docs tests must run via the storybook-docs vitest global setup.',
		);
	}

	return storybookUrl;
}
