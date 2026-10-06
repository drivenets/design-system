import * as React from 'react';
import { DsSpinner, DsStack, DsTypography } from '@drivenets/design-system';

// Owned preview: the story file imports './ds-spinner.stories.module.scss' for the
// ModalLoading story's `modalOverlay`/`modalContent` wrapper classes. Story-local
// .scss can't compile in the lightweight story-preview pass (no Sass preprocessor),
// so it resolves to `{}` — every className from this module is undefined. Without
// `position: fixed` on modalOverlay, the overlay/card never gets its full-screen
// tinted backdrop or centered white card — it just renders as plain stacked content
// at the top of the page. Reimplemented here with the same values inlined as plain
// style objects so the modal framing matches the storybook render.

const modalOverlayStyle: React.CSSProperties = {
	position: 'fixed',
	inset: 0,
	background: 'color-mix(in srgb, var(--background-brand) 40%, transparent)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	zIndex: 1000,
};

const modalContentStyle: React.CSSProperties = {
	background: 'white',
	borderRadius: 8,
	padding: 'var(--2xl) var(--lg)',
	boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 'var(--lg)',
	minWidth: 300,
};

export const Default = () => <DsSpinner size="medium" />;

export const Small = () => <DsSpinner size="small" />;

export const Large = () => <DsSpinner size="large" />;

export const AllSizes = () => (
	<DsStack alignItems="center" gap="var(--2xl)">
		<DsStack direction="column" alignItems="center" gap="var(--xs)">
			<DsSpinner size="small" />
			<DsTypography variant="body-sm-reg" color="secondary">
				Small
			</DsTypography>
		</DsStack>
		<DsStack direction="column" alignItems="center" gap="var(--xs)">
			<DsSpinner size="medium" />
			<DsTypography variant="body-sm-reg" color="secondary">
				Medium
			</DsTypography>
		</DsStack>
		<DsStack direction="column" alignItems="center" gap="var(--xs)">
			<DsSpinner size="large" />
			<DsTypography variant="body-sm-reg" color="secondary">
				Large
			</DsTypography>
		</DsStack>
	</DsStack>
);

export const ModalLoading = () => (
	<div style={modalOverlayStyle}>
		<div style={modalContentStyle}>
			<DsSpinner />
			<DsStack direction="column" alignItems="center" gap="var(--3xs)">
				<DsTypography variant="body-sm-reg">Explanation text will describe the process.</DsTypography>
				<DsTypography variant="body-xs-reg" color="secondary">
					Two lines will be aimed for this.
				</DsTypography>
			</DsStack>
		</div>
	</div>
);
