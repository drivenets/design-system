import type { Frame, Page } from 'playwright';
import { getStorybookUrl } from './storybook-url';

export interface ReadShowCodeSnippetOptions {
	docsStoryId: string;
	storyName: string;
}

/** Storybook's channel event carrying a story's generated JSX snippet. */
const SNIPPET_RENDERED = 'storybook/docs/snippet-rendered';
/** Window key the init script publishes the ids it has seen under. */
const SNIPPET_TRACKER = '__dsRenderedSnippetIds';
const SNIPPET_TIMEOUT = 30_000;

/**
 * Records which stories have published their generated snippet.
 *
 * Autodocs fills a story's "Show code" panel in two passes: first the static source the CSF plugin
 * extracted (the story object literal), then — once the story's effect runs `jsxDecorator` and its
 * async `emitTransformCode` resolves — the generated JSX. Both passes render a non-empty panel, so
 * reading on "panel is visible and non-empty" races the swap and intermittently captures the story
 * object instead of the JSX.
 *
 * Must be installed before the page navigates; call once per page.
 */
export async function trackRenderedSnippets(page: Page): Promise<void> {
	await page.addInitScript(
		({ eventName, trackerKey }) => {
			const ids = new Set<string>();

			Object.defineProperty(window, trackerKey, { configurable: true, get: () => [...ids] });

			// Storybook assigns the channel to the preview window while booting, so intercept the
			// assignment rather than polling for it.
			let channel: unknown;
			Object.defineProperty(window, '__STORYBOOK_ADDONS_CHANNEL__', {
				configurable: true,
				get: () => channel,
				set(value: { on?: (event: string, listener: (payload: unknown) => void) => void }) {
					channel = value;
					value.on?.(eventName, (payload) => {
						const id = typeof payload === 'string' ? payload : (payload as { id?: string } | undefined)?.id;

						if (id) {
							ids.add(id);
						}
					});
				},
			});
		},
		{ eventName: SNIPPET_RENDERED, trackerKey: SNIPPET_TRACKER },
	);
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

/**
 * Whether Storybook will replace the story's static source with generated JSX.
 *
 * Mirrors the renderer's own `skipJsxRender`: stories that opt out via `source: { type: 'code' }`
 * or a literal `source.code`, and stories that do not read args (a bare `render` function), keep
 * the static source — for them it is the final value, not a pass to wait out.
 */
async function expectsGeneratedSnippet(frame: Frame, storyId: string): Promise<boolean> {
	return frame.evaluate(async (id) => {
		// The preview exposes the prepared story — including the parameters the decorator reads —
		// on the iframe window.
		const store = (
			window as unknown as {
				__STORYBOOK_PREVIEW__?: {
					storyStore?: {
						loadStory?: (options: { storyId: string }) => Promise<{
							parameters?: {
								__isArgsStory?: boolean;
								docs?: { source?: { type?: string; code?: string } };
							};
						}>;
					};
				};
			}
		).__STORYBOOK_PREVIEW__?.storyStore;

		if (!store?.loadStory) {
			throw new Error('Storybook preview store is unavailable on the docs page');
		}

		const { parameters } = await store.loadStory({ storyId: id });
		const source = parameters?.docs?.source;

		if (source?.type === 'dynamic') {
			return true;
		}

		return Boolean(parameters?.__isArgsStory) && !source?.code && source?.type !== 'code';
	}, storyId);
}

/** Blocks until the story's generated JSX has reached the docs page. */
async function waitForRenderedSnippet(frame: Frame, storyId: string): Promise<void> {
	await frame.waitForFunction(
		({ trackerKey, id }) =>
			((window as unknown as Record<string, string[] | undefined>)[trackerKey] ?? []).includes(id),
		{ trackerKey: SNIPPET_TRACKER, id: storyId },
		{ timeout: SNIPPET_TIMEOUT },
	);
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
	// Story names can contain regex metacharacters (e.g. "Value types (Figma reference)"), so escape
	// before building the exact-match heading matcher.
	const escapedStoryName = storyName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const section = frame.locator('h3', { hasText: new RegExp(`^${escapedStoryName}$`) }).locator('..');
	const showCodeButton = section.locator('button', { hasText: 'Show code' }).first();

	// Autodocs renders each story section asynchronously after the iframe's domcontentloaded, so
	// wait for the control instead of racing the render with an immediate count under CI load.
	try {
		await showCodeButton.waitFor({ state: 'visible', timeout: 30_000 });
	} catch {
		throw new Error(`Show code button not found for story "${storyName}" in ${docsStoryId}`);
	}

	// The story canvas carries the id the snippet event reports, prefixed with `story--`.
	const canvasId = await section.locator('[data-story-block="true"]').first().getAttribute('id');

	if (!canvasId) {
		throw new Error(`Story canvas not found for story "${storyName}" in ${docsStoryId}`);
	}

	const storyId = canvasId.replace(/^story--/, '');

	if (await expectsGeneratedSnippet(frame, storyId)) {
		try {
			await waitForRenderedSnippet(frame, storyId);
		} catch (error) {
			throw new Error(`Timed out waiting for the generated snippet of "${storyName}"`, {
				cause: error,
			});
		}
	}

	await showCodeButton.click();

	const source = section.locator('pre');
	await source.waitFor({ state: 'visible', timeout: 10_000 });

	// The syntax-highlighted source renders after the panel becomes visible, so wait for the
	// element to hold non-whitespace text rather than snapshotting an empty panel.
	const sourceHandle = await source.elementHandle();

	try {
		await frame.waitForFunction((element) => element.textContent.trim().length > 0, sourceHandle, {
			timeout: 10_000,
		});
	} catch {
		throw new Error(`Show code panel is empty for story "${storyName}" in ${docsStoryId}`);
	}

	return (await source.innerText()).trim();
}
