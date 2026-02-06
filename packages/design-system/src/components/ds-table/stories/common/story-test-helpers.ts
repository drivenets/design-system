import type { within } from 'storybook/test';

export const getDataRows = (canvas: ReturnType<typeof within>) =>
	canvas.getAllByRole('row').filter((row: HTMLElement) => !row.querySelector('th'));
