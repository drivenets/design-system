import * as React from 'react';
import { DsTypography, DsVerticalTabs } from '@drivenets/design-system';

// Owned preview: the story file imports './ds-vertical-tabs.stories.module.scss' for
// its demo-only layout (storyContainer*) AND for the count-badge content itself
// (.tabItemLabel/.tabItemCount/.tabItemDot/.tabItemCountText). Story-local .scss can't
// compile in the lightweight story-preview pass (no Sass preprocessor), so it resolves
// to `{}` — every className from this module is undefined. That's invisible for the
// outer container (just loses a demo width/border), but NOT invisible for
// `.tabItemDot`: it's the only thing giving the small blue status dot its
// width/height/border-radius/background, so without the class the dot renders as a
// zero-size empty <span> and the count badge's indicator disappears entirely.
// Reimplemented here with the same values inlined as plain style objects.

interface TabItem {
	id: string;
	label: string;
	count?: number;
	disabled?: boolean;
}

const storyContainerStyle: React.CSSProperties = {
	width: 364,
	height: 400,
	border: '1px solid #e0e0e0',
};

const storyContainerShortStyle: React.CSSProperties = {
	width: 364,
	height: 200,
	border: '1px solid #e0e0e0',
};

const tabItemLabelStyle: React.CSSProperties = {
	flex: 1,
	color: 'inherit',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
};

const tabItemCountStyle: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	gap: 'var(--xs)',
};

const tabItemDotStyle: React.CSSProperties = {
	width: 10,
	height: 10,
	borderRadius: '50%',
	background: 'var(--background-primary)',
	border: '1px solid var(--background)',
	flexShrink: 0,
};

const tabItemCountTextStyle: React.CSSProperties = {
	color: 'var(--font-secondary)',
};

const noop = () => {};

function TabItemBadge({ count }: { count?: number }) {
	if (!count) return null;

	return (
		<div style={tabItemCountStyle}>
			<span style={tabItemDotStyle} />
			<DsTypography variant="body-sm-reg" style={tabItemCountTextStyle}>
				{count}
			</DsTypography>
		</div>
	);
}

function VerticalTabsDemo({
	items,
	containerStyle,
}: {
	items: TabItem[];
	containerStyle: React.CSSProperties;
}) {
	return (
		<div style={containerStyle}>
			<DsVerticalTabs onValueChange={noop}>
				<DsVerticalTabs.List>
					{items.map((item) => (
						<DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
							<DsTypography variant="body-sm-md" style={tabItemLabelStyle}>
								{item.label}
							</DsTypography>
							<TabItemBadge count={item.count} />
						</DsVerticalTabs.Tab>
					))}
				</DsVerticalTabs.List>
				{items.map((item) => (
					<DsVerticalTabs.Content key={item.id} value={item.id}>
						Selected tab content: {item.id}
					</DsVerticalTabs.Content>
				))}
			</DsVerticalTabs>
		</div>
	);
}

export const Default = () => (
	<VerticalTabsDemo
		containerStyle={storyContainerStyle}
		items={[
			{ id: 'status', label: 'Status', count: 2 },
			{ id: 'running', label: 'Running/Completed' },
			{ id: 'category', label: 'Category' },
			{ id: 'version', label: 'Version' },
			{ id: 'lastEdited', label: 'Last edited', count: 5 },
			{ id: 'lastRun', label: 'Last run' },
			{ id: 'nextRun', label: 'Next run' },
		]}
	/>
);

export const WithDisabledItems = () => (
	<VerticalTabsDemo
		containerStyle={storyContainerStyle}
		items={[
			{ id: 'status', label: 'Status', count: 2, disabled: true },
			{ id: 'running', label: 'Running/Completed' },
			{ id: 'category', label: 'Category' },
			{ id: 'version', label: 'Version' },
			{ id: 'lastEdited', label: 'Last edited', count: 5 },
		]}
	/>
);

export const LongLabels = () => (
	<VerticalTabsDemo
		containerStyle={storyContainerShortStyle}
		items={[
			{ id: '1', label: 'Very Long Navigation Item Label That Might Overflow', count: 99 },
			{ id: '2', label: 'Another Really Long Label For Testing Purposes' },
			{ id: '3', label: 'Short', count: 1 },
		]}
	/>
);

export const HighCounts = () => (
	<VerticalTabsDemo
		containerStyle={storyContainerShortStyle}
		items={[
			{ id: 'status', label: 'Status', count: 999 },
			{ id: 'category', label: 'Category', count: 1000 },
			{ id: 'version', label: 'Version', count: 12345 },
		]}
	/>
);
