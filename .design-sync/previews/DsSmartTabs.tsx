import * as React from 'react';
import { useState } from 'react';
import { DsSmartTabs, DsStack, DsTypography } from '@drivenets/design-system';

// Owned preview: the story file imports './ds-smart-tabs.stories.module.scss' for the
// `Default` story's status-readout footer (`.statusReadout`/`.statusValue` - background,
// padding, border-radius, and a secondary text color). Story-local .scss can't compile
// in the lightweight story-preview pass (no Sass preprocessor), so it resolves to `{}` -
// the footer loses its background pill and renders as plain unstyled text. Reimplemented
// here with the same values inlined as plain style objects.

const statusReadoutStyle: React.CSSProperties = {
	marginTop: 'var(--md)',
	padding: 'var(--sm)',
	background: 'var(--background-secondary)',
	borderRadius: 4,
};

const statusValueStyle: React.CSSProperties = {
	color: 'var(--font-secondary)',
};

export const Basic = () => {
	const [activeTab, setActiveTab] = useState('all');

	return (
		<DsSmartTabs activeTab={activeTab} onTabClick={setActiveTab}>
			<DsSmartTabs.Tab label="All" value="all" icon="view_apps" color="dark-blue" content="747" />
			<DsSmartTabs.Tab label="Active" value="active" icon="check_circle" color="green" content="198" />
		</DsSmartTabs>
	);
};

export const Default = () => {
	const [activeTab, setActiveTab] = useState('all');

	return (
		<DsStack direction="column">
			<DsSmartTabs activeTab={activeTab} onTabClick={setActiveTab}>
				<DsSmartTabs.Tab label="All" value="all" icon="view_apps" color="dark-blue" content="747" />
				<DsSmartTabs.Tab label="Active" value="active" icon="check_circle" color="green" content="198" />
				<DsSmartTabs.Tab
					label="Deprecated"
					value="deprecated"
					icon="notifications"
					color="red"
					content="202"
				/>
				<DsSmartTabs.Tab
					label="Inactive"
					value="inactive"
					icon="stop_circle"
					color="gray"
					content="347"
					disabled
				/>
			</DsSmartTabs>
			<DsStack direction="row" gap={4} style={statusReadoutStyle}>
				<DsTypography variant="body-sm-md">Active tab:</DsTypography>
				<DsTypography variant="body-sm-md" style={statusValueStyle}>
					{activeTab}
				</DsTypography>
			</DsStack>
		</DsStack>
	);
};
