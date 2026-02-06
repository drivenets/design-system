import type { StoryContext } from '@storybook/react-vite';

export const getDataRows = (canvas: StoryContext['canvas']) =>
	canvas.getAllByRole('row').filter((row: HTMLElement) => !row.querySelector('th'));
