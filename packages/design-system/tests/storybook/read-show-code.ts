import type { Frame, Page } from 'playwright';
import { getStorybookUrl } from './storybook-url';

export interface ReadShowCodeSnippetOptions {
	docsStoryId: string;
	storyName: string;
}

const NAVIGATION_TIMEOUT_MS = 60_000;
const IFRAME_TIMEOUT_MS = 60_000;
const SHOW_CODE_BUTTON_TIMEOUT_MS = 30_000;
const SOURCE_PANEL_TIMEOUT_MS = 10_000;

function isOnDocsPage(page: Page, docsStoryId: string): boolean {
	try {
		const path = new URL(page.url()).searchParams.get('path');

		return path === `/docs/${docsStoryId}`;
	} catch {
		return false;
	}
}

async function ensureDocsPage(page: Page, docsStoryId: string): Promise<void> {
	if (isOnDocsPage(page, docsStoryId)) {
		return;
	}

	await page.goto(`${getStorybookUrl()}/?path=/docs/${docsStoryId}`, {
		waitUntil: 'domcontentloaded',
		timeout: NAVIGATION_TIMEOUT_MS,
	});
}

async function getDocsIframe(page: Page): Promise<Frame> {
	// Storybook renders Autodocs inside its preview iframe, which is attached asynchronously
	// after the manager boots — wait for it rather than reading frames right after navigation.
	const iframeElement = await page.waitForSelector('#storybook-preview-iframe', {
		state: 'attached',
		timeout: IFRAME_TIMEOUT_MS,
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
	await ensureDocsPage(page, docsStoryId);

	const frame = await getDocsIframe(page);
	// Story names can contain regex metacharacters (e.g. "Value types (Figma reference)"), so escape
	// before building the exact-match heading matcher.
	const escapedStoryName = storyName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const section = frame.locator('h3', { hasText: new RegExp(`^${escapedStoryName}$`) }).locator('..');
	const showCodeButton = section.locator('button', { hasText: 'Show code' }).first();

	// Autodocs renders each story section asynchronously after the iframe's domcontentloaded, so
	// wait for the control instead of racing the render with an immediate count under CI load.
	try {
		await showCodeButton.waitFor({ state: 'visible', timeout: SHOW_CODE_BUTTON_TIMEOUT_MS });
	} catch {
		throw new Error(`Show code button not found for story "${storyName}" in ${docsStoryId}`);
	}

	await showCodeButton.click();

	// Story descriptions can contain fenced code blocks, which render their own `pre` inside the
	// same section — scope the lookup to the story preview so only the Show code panel matches.
	const source = section.locator('.sbdocs-preview pre').first();
	await source.waitFor({ state: 'visible', timeout: SOURCE_PANEL_TIMEOUT_MS });

	// The syntax-highlighted source renders after the panel becomes visible, so wait for the
	// element to hold non-whitespace text rather than snapshotting an empty panel.
	const sourceHandle = await source.elementHandle();

	try {
		await frame.waitForFunction((element) => element.textContent.trim().length > 0, sourceHandle, {
			timeout: SOURCE_PANEL_TIMEOUT_MS,
		});
	} catch {
		throw new Error(`Show code panel is empty for story "${storyName}" in ${docsStoryId}`);
	}

	return (await source.innerText()).trim();
}
