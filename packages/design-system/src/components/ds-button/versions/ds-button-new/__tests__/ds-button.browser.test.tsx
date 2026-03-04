import { describe, expect, it } from 'vitest';
import { page, type Locator } from 'vitest/browser';
import DsButton from '../ds-button-new';

const cartesian = [
	{ buttonType: 'primary', variant: 'filled' },
	{ buttonType: 'primary', variant: 'ghost' },
	{ buttonType: 'primary', variant: 'danger' },
	{ buttonType: 'primary', variant: 'dark' },
	{ buttonType: 'secondary', variant: 'filled' },
	{ buttonType: 'secondary', variant: 'ghost' },
	{ buttonType: 'secondary', variant: 'danger' },
	{ buttonType: 'secondary', variant: 'dark' },
	{ buttonType: 'secondary-light', variant: 'filled' },
	{ buttonType: 'secondary-light', variant: 'ghost' },
	{ buttonType: 'secondary-light', variant: 'danger' },
	{ buttonType: 'secondary-light', variant: 'dark' },
	{ buttonType: 'tertiary', variant: 'filled' },
	{ buttonType: 'tertiary', variant: 'ghost' },
	{ buttonType: 'tertiary', variant: 'danger' },
	{ buttonType: 'tertiary', variant: 'dark' },
] as const;

describe('DsButton', () => {
	cartesian.forEach((props) => {
		it(`screenshot ${jsonToSlug(props)}`, async () => {
			// Arrange.
			const screen = await page.render(<DsButton {...props}>Click</DsButton>);

			// Act.
			const button = screen.getByRole('button', { name: 'Click' });

			// Assert.
			await expect(button).toMatchScreenshot(jsonToSlug(props), getScreenshotOptions(button));

			// Act.
			await button.hover();

			// Assert.
			await expect(button).toMatchScreenshot(jsonToSlug(props) + '-hover', getScreenshotOptions(button));
		});
	});
});

function jsonToSlug(json: Record<string, string>) {
	return Object.entries(json)
		.map(([, value]) => value)
		.join('-');
}

function getScreenshotOptions(locator: Locator) {
	const boundingClientRect = locator.element().getBoundingClientRect();

	return {
		screenshotOptions: {
			clip: {
				x: boundingClientRect.x,
				y: boundingClientRect.y,
				width: boundingClientRect.width,
				height: boundingClientRect.height,
			},
		},
	};
}
