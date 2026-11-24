import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import type { ComponentType } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

type StoryModule = Parameters<typeof composeStories>[0];

const storyModules = import.meta.glob<StoryModule>('../../src/components/**/*.stories.tsx', { eager: true });

// DsCommentCard renders its action buttons inside its own <button>.
const isKnownIssue = (file: string, message: string) =>
	file.includes('/ds-comment-card/') && /cannot (be a descendant of|contain a nested)/.test(message);

const consoleMessages: string[] = [];

beforeEach(() => {
	consoleMessages.length = 0;

	for (const method of ['error', 'warn'] as const) {
		vi.spyOn(console, method).mockImplementation((...args: unknown[]) => {
			consoleMessages.push(args.map(String).join(' '));
		});
	}
});

afterEach(() => {
	vi.restoreAllMocks();
});

describe.each(Object.entries(storyModules))('%s', (file, storyModule) => {
	it.each(Object.entries<ComponentType>(composeStories(storyModule)))(
		'%s renders without errors or warnings',
		(_name, Story) => {
			render(<Story />);

			expect(consoleMessages.filter((message) => !isKnownIssue(file, message))).toEqual([]);
		},
	);
});
