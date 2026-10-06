import * as React from 'react';
import { DsIllustration, DsStack, DsTypography, dsIllustrationVariants } from '@drivenets/design-system';

// Owned preview: ds-illustration.stories.tsx's Showcase story imports a
// story-local `ds-illustration.stories.module.scss` for the catalog grid
// layout (`.showcase`). That SCSS module resolves to `{}` in the
// preview-compile pass (no Sass there), so the catalog collapses from a
// multi-column grid to one item per row. This mirrors the story JSX with the
// same CSS inlined as a plain style object (see DsButton.tsx for the
// reference pattern).

export const Default = () => <DsIllustration variant="no-tasks" />;

const showcaseStyle: React.CSSProperties = {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
	gap: 'var(--standard)',
	padding: 'var(--standard)',
};

export const Showcase = () => (
	<div style={showcaseStyle}>
		{dsIllustrationVariants.map((variant) => (
			<DsStack key={variant} direction="column" alignItems="center" gap="var(--xs)">
				<DsIllustration variant={variant} />
				<DsTypography color="secondary" variant="body-sm-reg">
					{variant}
				</DsTypography>
			</DsStack>
		))}
	</div>
);
