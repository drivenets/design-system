import type { Frame, Page } from 'playwright';
import { STORY_RENDERED } from 'storybook/internal/core-events';
import { SNIPPET_RENDERED } from 'storybook/internal/docs-tools';
import { getStorybookUrl } from './storybook-url';

export interface ReadShowCodeSnippetOptions {
	docsStoryId: string;
	storyName: string;
}

const NAVIGATION_TIMEOUT_MS = 60_000;
const IFRAME_TIMEOUT_MS = 60_000;
const SHOW_CODE_BUTTON_TIMEOUT_MS = 30_000;
const SOURCE_PANEL_TIMEOUT_MS = 10_000;
const STORY_RENDER_TIMEOUT_MS = 60_000;

const RENDER_LOG_KEY = '__docsSnippetsRenderLog';

interface RenderLogOptions {
	logKey: string;
	storyRendered: string;
	snippetRendered: string;
}

interface RenderLog {
	rendered: Set<string>;
	snippets: Set<string>;
}

interface StorybookChannel {
	on: (event: string, listener: (payload: unknown) => void) => void;
}

/**
 * Runs in every frame before Storybook boots, so it sees every story render on the docs page.
 * Records which stories finished rendering and which of them emitted a JSX snippet.
 */
function recordStoryRenders({ logKey, storyRendered, snippetRendered }: RenderLogOptions) {
	const log: RenderLog = { rendered: new Set(), snippets: new Set() };
	let channel: StorybookChannel | undefined;

	Reflect.set(window, logKey, log);
	Object.defineProperty(window, '__STORYBOOK_ADDONS_CHANNEL__', {
		configurable: true,
		get: () => channel,
		set: (next: StorybookChannel) => {
			channel = next;
			next.on(storyRendered, (storyId) => log.rendered.add(storyId as string));
			next.on(snippetRendered, (snippet) => log.snippets.add((snippet as { id: string }).id));
		},
	});
}

const pagesRecordingRenders = new WeakSet<Page>();

async function recordStoryRendersOn(page: Page): Promise<void> {
	if (pagesRecordingRenders.has(page)) {
		return;
	}

	await page.addInitScript(recordStoryRenders, {
		logKey: RENDER_LOG_KEY,
		storyRendered: STORY_RENDERED,
		snippetRendered: SNIPPET_RENDERED,
	});
	pagesRecordingRenders.add(page);
}

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

	await recordStoryRendersOn(page);
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

	// The panel shows the story's CSF source until the story finishes rendering and emits its JSX
	// snippet, and under CI load the button is clickable well before that, so wait for both.
	const storyBlockId = await section.locator('.sbdocs-preview .sb-story').first().getAttribute('id');
	const storyId = storyBlockId?.replace(/^story--/, '');

	if (!storyId) {
		throw new Error(`Story block not found for story "${storyName}" in ${docsStoryId}`);
	}

	try {
		await frame.waitForFunction(
			({ logKey, id }) => (Reflect.get(window, logKey) as RenderLog | undefined)?.rendered.has(id) === true,
			{ logKey: RENDER_LOG_KEY, id: storyId },
			{ timeout: STORY_RENDER_TIMEOUT_MS },
		);
	} catch {
		throw new Error(`Story "${storyName}" in ${docsStoryId} did not finish rendering`);
	}

	const emittedSnippet = await frame.evaluate(
		({ logKey, id }) => (Reflect.get(window, logKey) as RenderLog | undefined)?.snippets.has(id) === true,
		{ logKey: RENDER_LOG_KEY, id: storyId },
	);

	if (emittedSnippet) {
		try {
			await frame.waitForFunction((element) => element.textContent.trim().startsWith('<'), sourceHandle, {
				timeout: SOURCE_PANEL_TIMEOUT_MS,
			});
		} catch {
			throw new Error(
				`Show code for story "${storyName}" in ${docsStoryId} never showed its rendered snippet`,
			);
		}
	}

	return (await source.innerText()).trim();
}
