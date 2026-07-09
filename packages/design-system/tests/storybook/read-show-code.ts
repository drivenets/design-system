import type { Page } from 'playwright';
import { getStorybookUrl } from './storybook-url';

export interface ReadShowCodeSnippetOptions {
	docsStoryId: string;
	storyName: string;
}

function getDocsIframe(page: Page) {
	const frame = page.frames().find((f) => f.url().includes('iframe'));
	if (!frame) {
		throw new Error('Storybook docs iframe not found');
	}

	return frame;
}

export async function readShowCodeSnippet(
	page: Page,
	{ docsStoryId, storyName }: ReadShowCodeSnippetOptions,
): Promise<string> {
	const storybookUrl = getStorybookUrl();
	await page.goto(`${storybookUrl}/?path=/docs/${docsStoryId}`, {
		waitUntil: 'networkidle',
		timeout: 60_000,
	});

	const frame = getDocsIframe(page);
	const section = frame.locator('h3', { hasText: new RegExp(`^${storyName}$`) }).locator('..');
	const showCodeButton = section.locator('button', { hasText: 'Show code' });

	if ((await showCodeButton.count()) === 0) {
		throw new Error(`Show code button not found for story "${storyName}" in ${docsStoryId}`);
	}

	await showCodeButton.click();

	const source = section.locator('pre');
	await source.waitFor({ state: 'visible', timeout: 10_000 });

	const deadline = Date.now() + 10_000;
	let text = (await source.innerText()).trim();

	while (!text && Date.now() < deadline) {
		await page.waitForTimeout(100);
		text = (await source.innerText()).trim();
	}
	if (!text) {
		throw new Error(`Show code panel is empty for story "${storyName}" in ${docsStoryId}`);
	}

	return text;
}
