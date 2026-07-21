import type { Frame, Page } from 'playwright';
import { getStorybookUrl } from './storybook-url';

export interface ReadShowCodeSnippetOptions {
	docsStoryId: string;
	storyName: string;
}

async function getDocsIframe(page: Page): Promise<Frame> {
	// Storybook renders Autodocs inside its preview iframe, which is attached asynchronously
	// after the manager boots — wait for it rather than reading frames right after navigation.
	const iframeElement = await page.waitForSelector('#storybook-preview-iframe', {
		state: 'attached',
		timeout: 60_000,
	});
	const frame = await iframeElement.contentFrame();

	if (!frame) {
		throw new Error('Storybook docs iframe not found');
	}

	await frame.waitForLoadState('domcontentloaded');

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

	const frame = await getDocsIframe(page);
	const section = frame.locator('h3', { hasText: new RegExp(`^${storyName}$`) }).locator('..');
	const showCodeButton = section.locator('button', { hasText: 'Show code' });

	if ((await showCodeButton.count()) === 0) {
		throw new Error(`Show code button not found for story "${storyName}" in ${docsStoryId}`);
	}

	await showCodeButton.click();

	const source = section.locator('pre');
	await source.waitFor({ state: 'visible', timeout: 10_000 });

	// The syntax-highlighted source renders after the panel becomes visible, so wait for the
	// element to hold non-whitespace text rather than snapshotting an empty panel.
	const sourceHandle = await source.elementHandle();

	if (!sourceHandle) {
		throw new Error(`Show code panel not found for story "${storyName}" in ${docsStoryId}`);
	}

	try {
		await frame.waitForFunction((element) => element.textContent.trim().length > 0, sourceHandle, {
			timeout: 10_000,
		});
	} catch {
		throw new Error(`Show code panel is empty for story "${storyName}" in ${docsStoryId}`);
	}

	return (await source.innerText()).trim();
}
