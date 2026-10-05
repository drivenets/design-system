import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';
import { setProjectAnnotations, type Preview } from '@storybook/react-vite';
import { expect } from 'vitest';
import { page } from 'vitest/browser';
import * as projectAnnotations from './preview';

// Pinned fonts instead of the unversioned Google Fonts links, so upstream font updates never change baselines.
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/100-italic.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/300-italic.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/500-italic.css';
import '@fontsource/roboto/600.css';
import '@fontsource/roboto/600-italic.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/700-italic.css';
import '@fontsource/roboto/900.css';
import '@fontsource/roboto/900-italic.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/fira-mono/400.css';
import '@fontsource/fira-mono/500.css';
import '@fontsource/fira-mono/700.css';
import 'material-symbols/outlined.css';
import 'material-symbols/rounded.css';

import './vitest.visual.setup.css';

interface ChromaticParameters {
	disableSnapshot?: boolean;
	delay?: number;
}

// `@storybook/addon-vitest` resets the viewport before each story, so it is pinned per story.
const VIEWPORT = { width: 1280, height: 800 } as const;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Screenshots every story after it renders. Reads the same `parameters.chromatic.*`
 * knobs as Chromatic, so stories carry over unchanged when we migrate.
 */
const visualAnnotations: Preview = {
	parameters: {
		a11y: { test: 'off' },
	},
	beforeEach: async () => {
		await page.viewport(VIEWPORT.width, VIEWPORT.height);
	},
	afterEach: async ({ parameters }) => {
		const chromatic = parameters.chromatic as ChromaticParameters | undefined;

		if (chromatic?.disableSnapshot) {
			return;
		}

		await document.fonts.ready;

		if (chromatic?.delay) {
			await sleep(chromatic.delay);
		}

		await expect.element(page.elementLocator(document.body)).toMatchScreenshot();
	},
};

setProjectAnnotations([a11yAddonAnnotations, projectAnnotations, visualAnnotations]);
