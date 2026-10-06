import * as React from 'react';
import { DsStack } from '@drivenets/design-system';

// Owned preview: ds-stack.stories.tsx imports a story-local
// `ds-stack.stories.module.scss` for demo item chrome (`.box`) and width
// constraints (`.container`, used by Responsive/SpaceBetween/Wrapping to
// demonstrate wrap/space-between behavior). That SCSS module resolves to
// `{}` in the preview-compile pass (no Sass there), so items render as bare
// text and the width-dependent stories lose their constrained layout. This
// mirrors the story JSX with the same CSS inlined as plain style objects
// (see DsButton.tsx for the reference pattern).

const boxStyle: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	minWidth: 80,
	padding: 'var(--xs) var(--sm)',
	border: '1px solid var(--color-border-default)',
	borderRadius: 4,
	backgroundColor: 'var(--color-bg-surface-1)',
	fontSize: 'var(--font-size-body-md)',
};

const containerStyle: React.CSSProperties = { width: 600 };

const Box = ({ children }: { children: React.ReactNode }) => <div style={boxStyle}>{children}</div>;

export const Default = () => (
	<DsStack direction="column" gap="var(--xs)">
		<Box>Item 1</Box>
		<Box>Item 2</Box>
		<Box>Item 3</Box>
	</DsStack>
);

export const Row = () => (
	<DsStack direction="row" gap="var(--standard)" alignItems="center">
		<Box>Item 1</Box>
		<Box>Item 2</Box>
		<Box>Item 3</Box>
	</DsStack>
);

export const Responsive = () => (
	<DsStack
		direction={{ md: 'column', lg: 'row' }}
		gap={{ md: 'var(--xs)', lg: 'var(--lg)' }}
		alignItems="center"
		style={containerStyle}
	>
		<Box>Item 1</Box>
		<Box>Item 2</Box>
		<Box>Item 3</Box>
	</DsStack>
);

export const SpaceBetween = () => (
	<DsStack
		direction="row"
		justifyContent="space-between"
		alignItems="center"
		width="100%"
		style={containerStyle}
	>
		<Box>Left</Box>
		<Box>Right</Box>
	</DsStack>
);

export const Wrapping = () => (
	<DsStack direction="row" gap="var(--xs)" flexWrap="wrap" style={containerStyle}>
		{Array.from({ length: 10 }, (_, i) => (
			<Box key={i}>Item {i + 1}</Box>
		))}
	</DsStack>
);

export const Nested = () => (
	<DsStack gap="var(--lg)">
		<DsStack direction="row" gap="var(--standard)" alignItems="center">
			<Box>Row 1 - A</Box>
			<Box>Row 1 - B</Box>
			<Box>Row 1 - C</Box>
		</DsStack>

		<DsStack direction="row" gap="var(--standard)" alignItems="center">
			<Box>Row 2 - A</Box>
			<Box>Row 2 - B</Box>
		</DsStack>
	</DsStack>
);
