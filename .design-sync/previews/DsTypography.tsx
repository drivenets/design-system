import * as React from 'react';
import { DsStack, DsTypography } from '@drivenets/design-system';

// Owned preview: the story file imports './ds-typography.stories.module.scss' for
// two decorator wrappers (truncateBox, onDark). Story-local .scss can't compile in
// the lightweight story-preview pass (no Sass preprocessor - see STORY_LOADERS),
// so the generated preview rendered Truncate* stories with no width constraint
// (no visible truncation) and ColorsOnDark with no background. Reimplemented here
// with the same values inlined as plain style objects.

const truncateBoxStyle: React.CSSProperties = {
	width: 260,
	padding: 'var(--sm)',
	border: '1px dashed var(--border)',
	borderRadius: 'var(--3xs)',
	resize: 'horizontal',
	overflow: 'auto',
};
const onDarkStyle: React.CSSProperties = {
	padding: 'var(--2xl)',
	backgroundColor: 'var(--color-dap-brand-500)',
};

const variantOptions = [
	'body-md-reg',
	'body-md-md',
	'body-md-semi-bold',
	'body-md-bold',
	'body-md-link',
	'body-sm-reg',
	'body-sm-md',
	'body-sm-semi-bold',
	'body-sm-bold',
	'body-sm-link',
	'body-xs-reg',
	'body-xs-md',
	'body-xs-semi-bold',
	'body-xs-bold',
	'body-xs-link',
	'code-sm-reg',
	'code-sm-semi-bold',
	'code-xs-reg',
	'code-xs-semi-bold',
	'heading1',
	'heading2',
	'heading3',
	'heading4',
] as const;
const typographyColors = [
	'main',
	'secondary',
	'action',
	'action-hover',
	'action-secondary',
	'action-secondary-hover',
	'disabled',
	'light-disabled',
	'on-action',
	'on-disabled',
	'placeholder',
	'highlight',
	'success',
	'warning',
	'error',
	'code',
] as const;
const onDarkColors: readonly string[] = ['on-action', 'on-disabled', 'light-disabled'];
const sample = 'The quick brown fox jumps over the lazy dog.';

export const Default = () => (
	<DsTypography variant="body-md-reg" color="main">
		The quick brown fox jumps over the lazy dog.
	</DsTypography>
);

export const Heading = () => (
	<DsTypography variant="heading3">The quick brown fox jumps over the lazy dog.</DsTypography>
);

export const Color = () => (
	<DsTypography variant="body-md-reg" color="secondary">
		The quick brown fox jumps over the lazy dog.
	</DsTypography>
);

export const CustomColor = () => (
	<DsTypography variant="body-md-reg" color="var(--color-dap-purple-600)">
		The quick brown fox jumps over the lazy dog.
	</DsTypography>
);

export const AsChild = () => (
	<DsTypography variant="body-md-link" asChild>
		<a href="https://example.com">Link rendered via asChild</a>
	</DsTypography>
);

export const Truncate = () => (
	<div style={truncateBoxStyle}>
		<DsTypography variant="body-md-reg" truncate>
			The quick brown fox jumps over the lazy dog while the sleepy cat watches from the warm windowsill
			nearby.
		</DsTypography>
	</div>
);

export const TruncateMultiline = () => (
	<div style={truncateBoxStyle}>
		<DsTypography variant="body-md-reg" truncate={2}>
			The quick brown fox jumps over the lazy dog while the sleepy cat watches from the warm windowsill
			nearby.
		</DsTypography>
	</div>
);

export const TruncateWithTooltip = () => (
	<div style={truncateBoxStyle}>
		<DsTypography variant="body-md-reg" truncate tooltip>
			The quick brown fox jumps over the lazy dog while the sleepy cat watches from the warm windowsill
			nearby.
		</DsTypography>
	</div>
);

export const Variants = () => (
	<DsStack direction="column" gap="var(--md)">
		{variantOptions.map((variant) => (
			<DsStack key={variant} direction="column" gap="var(--3xs)">
				<DsTypography variant="code-xs-reg" color="secondary">
					{variant}
				</DsTypography>
				<DsTypography variant={variant}>{sample}</DsTypography>
			</DsStack>
		))}
	</DsStack>
);

export const Colors = () => (
	<DsStack direction="column" gap="var(--sm)">
		{typographyColors
			.filter((color) => !onDarkColors.includes(color))
			.map((color) => (
				<DsStack key={color} direction="column" gap="var(--3xs)">
					<DsTypography variant="code-xs-reg" color="secondary">
						{color}
					</DsTypography>
					<DsTypography variant="body-md-md" color={color}>
						{sample}
					</DsTypography>
				</DsStack>
			))}
	</DsStack>
);

export const ColorsOnDark = () => (
	<DsStack style={onDarkStyle} direction="column" gap="var(--sm)">
		{onDarkColors.map((color) => (
			<DsStack key={color} direction="column" gap="var(--3xs)">
				<DsTypography variant="code-xs-reg" color="var(--secondary-300)">
					{color}
				</DsTypography>
				<DsTypography variant="body-md-md" color={color}>
					{sample}
				</DsTypography>
			</DsStack>
		))}
	</DsStack>
);
