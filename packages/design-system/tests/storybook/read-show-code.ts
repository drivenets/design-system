import type { ElementHandle, Frame, Locator, Page } from 'playwright';
import { getStorybookUrl } from './storybook-url';

export interface ReadShowCodeSnippetOptions {
	docsStoryId: string;
	storyName: string;
}

const NAVIGATION_TIMEOUT_MS = 60_000;
const IFRAME_TIMEOUT_MS = 60_000;
const SHOW_CODE_BUTTON_TIMEOUT_MS = 30_000;
const SOURCE_PANEL_TIMEOUT_MS = 10_000;
const STORY_RENDER_TIMEOUT_MS = 30_000;
const STABLE_SOURCE_MS = 1_000;
const STABLE_SOURCE_POLL_MS = 100;

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

/**
 * A story sends its dynamic snippet once it renders, so wait for it: an inline story mounts
 * `#story--{id}-inner` (empty when it renders nothing), one with `docs.story.inline: false` renders
 * into its own iframe.
 */
async function waitForStoryRender(section: Locator): Promise<void> {
	const preview = section.locator('.sbdocs-preview');
	const storyIframe = preview.locator('iframe').first();
	const rendered =
		(await storyIframe.count()) > 0
			? storyIframe.contentFrame().locator('#storybook-root > *')
			: preview.locator('[id^="story--"][id$="-inner"]');

	await rendered.first().waitFor({ state: 'attached', timeout: STORY_RENDER_TIMEOUT_MS });
}

/**
 * Until the dynamic snippet arrives the panel shows the raw CSF story object, which also is the
 * final text of a `source: { type: 'code' }` story — so wait for that text to stop changing.
 */
async function waitForStableText(frame: Frame, element: ElementHandle<Element>): Promise<void> {
	await frame.waitForFunction(
		({ target, stableMs }) => {
			const text = target.textContent.trim();
			const state = target as Element & { stableText?: string; stableSince?: number };

			if (state.stableText !== text) {
				state.stableText = text;
				state.stableSince = Date.now();

				return false;
			}

			return Date.now() - (state.stableSince ?? 0) >= stableMs;
		},
		{ target: element, stableMs: STABLE_SOURCE_MS },
		{ timeout: SOURCE_PANEL_TIMEOUT_MS, polling: STABLE_SOURCE_POLL_MS },
	);
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

	await waitForStoryRender(section);
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

	if ((await source.innerText()).trim().startsWith('{')) {
		await waitForStableText(frame, sourceHandle);
	}

	return (await source.innerText()).trim();
}
