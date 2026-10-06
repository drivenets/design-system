import * as React from 'react';
import { DsDivider, DsStack, DsTypography } from '@drivenets/design-system';

// Owned preview: ds-divider.stories.tsx imports a story-local
// `ds-divider.stories.module.scss` for layout/positioning (widths/heights of
// the demo wrappers, the Showcase table chrome). That SCSS module resolves to
// `{}` in the preview-compile pass (no Sass there), so every story collapses
// to unstyled/unsized content. This mirrors the story JSX with the same CSS
// inlined as plain style objects (see DsButton.tsx for the reference pattern).

const horizontalDemoStyle: React.CSSProperties = { width: 420 };
const verticalDemoStyle: React.CSSProperties = { height: 140 };

export const Default = () => (
	<DsStack direction="column" gap="var(--sm)" alignItems="center" style={horizontalDemoStyle}>
		<DsTypography variant="body-md-reg">Top content</DsTypography>
		<DsDivider orientation="horizontal" />
		<DsTypography variant="body-md-reg">Bottom content</DsTypography>
	</DsStack>
);

const showcaseContainerStyle: React.CSSProperties = { padding: 24, width: 760 };
const showcaseTableStyle: React.CSSProperties = { borderCollapse: 'collapse', width: '100%' };
const showcaseHeaderStyle: React.CSSProperties = {
	textAlign: 'center',
	verticalAlign: 'middle',
	padding: 16,
};
const showcaseCellStyle: React.CSSProperties = { padding: 16, textAlign: 'center', verticalAlign: 'middle' };
const showcaseCellBoldStyle: React.CSSProperties = { fontWeight: 'bold', paddingRight: 8 };
const showcaseCellInlineStyle: React.CSSProperties = { display: 'inline-block' };
const horizontalDividerWrapperStyle: React.CSSProperties = { width: 520 };
const verticalDividerContainerStyle: React.CSSProperties = {
	height: 140,
	display: 'flex',
	alignItems: 'stretch',
	justifyContent: 'center',
};
const verticalDividerContentStyle: React.CSSProperties = {
	width: 120,
	fontSize: 12,
	display: 'flex',
	alignItems: 'center',
};

export const Showcase = () => (
	<div style={showcaseContainerStyle}>
		<table style={showcaseTableStyle}>
			<thead>
				<tr>
					<th style={showcaseHeaderStyle}>Variant</th>
					<th style={showcaseHeaderStyle}>Preview</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td style={showcaseCellStyle}>
						<span style={showcaseCellBoldStyle}>Horizontal</span>
						<span style={showcaseCellInlineStyle}>default</span>
					</td>
					<td style={showcaseCellStyle}>
						<div style={horizontalDividerWrapperStyle}>
							<DsDivider />
						</div>
					</td>
				</tr>

				<tr>
					<td style={showcaseCellStyle}>
						<span style={showcaseCellBoldStyle}>Vertical</span>
						<span style={showcaseCellInlineStyle}>default</span>
					</td>
					<td style={showcaseCellStyle}>
						<div style={verticalDividerContainerStyle}>
							<div style={verticalDividerContentStyle}>Left</div>
							<DsDivider orientation="vertical" />
							<div style={verticalDividerContentStyle}>Right</div>
						</div>
					</td>
				</tr>

				<tr>
					<td style={showcaseCellStyle}>
						<span style={showcaseCellBoldStyle}>Custom</span>
						<span style={showcaseCellInlineStyle}>component=&quot;span&quot;</span>
					</td>
					<td style={showcaseCellStyle}>
						<div style={horizontalDividerWrapperStyle}>
							<DsDivider component="span" />
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
);

export const Horizontal = () => (
	<DsStack direction="column" gap="var(--sm)" alignItems="center" style={horizontalDemoStyle}>
		<DsTypography variant="body-md-reg">Above</DsTypography>
		<DsDivider orientation="horizontal" />
		<DsTypography variant="body-md-reg">Below</DsTypography>
	</DsStack>
);

export const Vertical = () => (
	<DsStack direction="row" gap="var(--sm)" alignItems="center" style={verticalDemoStyle}>
		<DsTypography variant="body-md-reg">Left</DsTypography>
		<DsDivider orientation="vertical" />
		<DsTypography variant="body-md-reg">Right</DsTypography>
	</DsStack>
);

export const WithCustomComponent = () => (
	<DsStack direction="column" gap="var(--sm)" alignItems="center" style={horizontalDemoStyle}>
		<DsTypography variant="body-md-reg">Above</DsTypography>
		<DsDivider orientation="horizontal" component="span" />
		<DsTypography variant="body-md-reg">Below</DsTypography>
	</DsStack>
);
