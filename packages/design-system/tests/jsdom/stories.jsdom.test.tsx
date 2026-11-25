import { composeStories } from '@storybook/react-vite';
import preview from '../../.storybook/preview';
import { act, render } from '@testing-library/react';
import type { ComponentType } from 'react';
import { describe, expect, it } from 'vitest';
import { allowConsoleMessages, getUnexpectedConsoleMessages } from '../../vitest/jsdom-console';

type StoryModule = Parameters<typeof composeStories>[0];
type ComposedStory = ComponentType & { load: () => Promise<void> };

const storyModules = import.meta.glob<StoryModule>('../../src/components/**/*.stories.tsx', { eager: true });

// Component bugs that also show in real browsers, not JSDOM gaps.
const knownIssues = [
	// DsCommentCard renders its action buttons inside its own <button>.
	{ file: '/ds-comment-card/', message: /cannot (be a descendant of|contain a nested)/ },
	// DsCodeInput with `defaultExpanded` opens its popover before the panel mounts.
	{ file: '/ds-code-input/', message: /node is `null` or `undefined`/ },
];

describe.each(Object.entries(storyModules))('%s', (file, storyModule) => {
	it.each(Object.entries<ComposedStory>(composeStories(storyModule, preview)))(
		'%s renders without errors or warnings',
		async (_name, Story) => {
			allowConsoleMessages(
				...knownIssues.filter((issue) => file.includes(issue.file)).map((issue) => issue.message),
			);

			await Story.load();
			render(<Story />);
			await act(async () => {});

			expect(getUnexpectedConsoleMessages()).toEqual([]);
		},
	);
});
