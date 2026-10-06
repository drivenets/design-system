import * as React from 'react';
import { useState } from 'react';
import { DsBulkActions, DsSlider, type DsSliderValue, DsStack, DsTypography } from '@drivenets/design-system';

// Owned preview: the story file imports './ds-bulk-actions.stories.module.scss' for a
// decorator-only wrapper (`BoundedScene` -> outerBounds/innerBounds, plus widthDemo/
// widthComparison/parentTrack). Story-local .scss can't compile in the lightweight
// story-preview pass (no Sass preprocessor), so it resolves to `{}` — every className
// from this module is undefined. The two bounding divs then render with NO
// `position: relative`, so the component's OWN `.floating` class (position: absolute;
// bottom; left: 50%) has no positioned ancestor to anchor to and escapes to the
// viewport instead of staying contained in the demo box. Reimplemented here with the
// same values inlined as plain style objects so `placement="floating"` stays
// contained exactly like the storybook render.

const SCENE_WIDTH = 720;
const OUTER_HEIGHT = 400;
const BOUNDS_RADIUS = 4;
const BAR_MIN_WIDTH = 280;
const BAR_MAX_WIDTH = 720;
const BAR_DEFAULT_WIDTH = 480;

const outerBoundsStyle: React.CSSProperties = {
	position: 'relative',
	display: 'flex',
	width: SCENE_WIDTH,
	height: OUTER_HEIGHT,
	padding: 'var(--xl)',
	border: '1px solid var(--color-dap-gray-400)',
	borderRadius: BOUNDS_RADIUS,
	backgroundColor: 'var(--background-secondary)',
};
const innerBoundsStyle: React.CSSProperties = {
	position: 'relative',
	flex: 1,
	overflow: 'hidden',
	border: '1px dashed var(--color-dap-blue-400)',
	borderRadius: BOUNDS_RADIUS,
	backgroundColor: 'var(--background)',
};
const widthDemoStyle: React.CSSProperties = { width: SCENE_WIDTH };
const widthComparisonStyle: React.CSSProperties = { minWidth: SCENE_WIDTH };
const parentTrackStyle: React.CSSProperties = {
	width: 480,
	padding: 'var(--md)',
	border: '1px dashed var(--border-secondary)',
	borderRadius: BOUNDS_RADIUS,
	backgroundColor: 'var(--background-secondary)',
};

const noop = () => {};

const BoundedScene = ({ children }: { children: React.ReactNode }) => (
	<div style={outerBoundsStyle}>
		<div style={innerBoundsStyle}>{children}</div>
	</div>
);

export const Default = () => (
	<DsBulkActions selectedCount={3} onClearSelection={noop}>
		<DsBulkActions.Item icon="alarm" label="Notify" onClick={noop} />
		<DsBulkActions.Item icon="folder_open" label="Folder" onClick={noop} />
		<DsBulkActions.Item icon="delete_outline" label="Delete" onClick={noop} />
	</DsBulkActions>
);

export const Floating = () => (
	<BoundedScene>
		<DsBulkActions selectedCount={3} onClearSelection={noop} placement="floating">
			<DsBulkActions.Item icon="alarm" label="Notify" onClick={noop} />
			<DsBulkActions.Item icon="folder_open" label="Folder" onClick={noop} />
			<DsBulkActions.Item icon="delete_outline" label="Delete" onClick={noop} />
		</DsBulkActions>
	</BoundedScene>
);

export const Overflow = () => {
	const [width, setWidth] = useState<DsSliderValue>(BAR_DEFAULT_WIDTH);
	const barWidth = typeof width === 'number' ? width : BAR_DEFAULT_WIDTH;

	return (
		<DsStack direction="column" gap="var(--md)" style={widthDemoStyle}>
			<DsSlider
				label="Bar width"
				min={BAR_MIN_WIDTH}
				max={BAR_MAX_WIDTH}
				step={8}
				value={width}
				onValueChange={setWidth}
				formatValue={(current) => `${String(current)}px`}
			/>
			<BoundedScene>
				<DsBulkActions
					selectedCount={3}
					onClearSelection={noop}
					placement="floating"
					style={{ width: barWidth }}
				>
					<DsBulkActions.Item icon="alarm" label="Notify" onClick={noop} />
					<DsBulkActions.Item icon="folder_open" label="Folder" onClick={noop} />
					<DsBulkActions.Item icon="share" label="Share" onClick={noop} />
					<DsBulkActions.Item icon="edit" label="Edit" onClick={noop} />
					<DsBulkActions.Item icon="content_copy" label="Duplicate" onClick={noop} />
					<DsBulkActions.Item icon="delete_outline" label="Delete" onClick={noop} />
				</DsBulkActions>
			</BoundedScene>
		</DsStack>
	);
};

export const ConstrainedWidth = () => (
	<DsBulkActions selectedCount={6} onClearSelection={noop} style={{ width: 420 }}>
		<DsBulkActions.Item icon="alarm" label="Notify" onClick={noop} />
		<DsBulkActions.Item icon="folder_open" label="Folder" onClick={noop} />
		<DsBulkActions.Item icon="share" label="Share" onClick={noop} />
		<DsBulkActions.Item icon="edit" label="Edit" onClick={noop} />
		<DsBulkActions.Item icon="content_copy" label="Duplicate" onClick={noop} />
		<DsBulkActions.Item icon="delete_outline" label="Delete" onClick={noop} />
	</DsBulkActions>
);

export const ParentWidth = () => (
	<div style={parentTrackStyle}>
		<DsBulkActions selectedCount={6} onClearSelection={noop} style={{ width: '100%' }}>
			<DsBulkActions.Item icon="alarm" label="Notify" onClick={noop} />
			<DsBulkActions.Item icon="folder_open" label="Folder" onClick={noop} />
			<DsBulkActions.Item icon="share" label="Share" onClick={noop} />
			<DsBulkActions.Item icon="edit" label="Edit" onClick={noop} />
			<DsBulkActions.Item icon="content_copy" label="Duplicate" onClick={noop} />
			<DsBulkActions.Item icon="delete_outline" label="Delete" onClick={noop} />
		</DsBulkActions>
	</div>
);

export const MenuAction = () => (
	<DsBulkActions selectedCount={3} onClearSelection={noop}>
		<DsBulkActions.Item icon="alarm" label="Notify" onClick={noop} />
		<DsBulkActions.Item
			icon="share"
			label="Share"
			menu={[
				{ value: 'email', label: 'Email', icon: 'mail', onSelect: noop },
				{ value: 'link', label: 'Copy link', icon: 'link', onSelect: noop },
				{
					value: 'delete',
					label: 'Remove access',
					icon: 'delete_outline',
					variant: 'error',
					onSelect: noop,
				},
			]}
		/>
		<DsBulkActions.Item icon="delete_outline" label="Delete" onClick={noop} />
	</DsBulkActions>
);

export const NestedMenu = () => (
	<BoundedScene>
		<DsBulkActions selectedCount={3} onClearSelection={noop} placement="floating">
			<DsBulkActions.Item icon="alarm" label="Notify" onClick={noop} />
			<DsBulkActions.Item
				icon="share"
				label="Share"
				menu={[
					{ value: 'email', label: 'Email', icon: 'mail', onSelect: noop },
					{
						value: 'more',
						label: 'More options',
						icon: 'link',
						menu: [
							{ value: 'copy-link', label: 'Copy link', onSelect: noop },
							{ value: 'social', label: 'Social media', onSelect: noop },
						],
					},
				]}
			/>
			<DsBulkActions.Item icon="delete_outline" label="Delete" onClick={noop} />
		</DsBulkActions>
	</BoundedScene>
);

export const LongActionLabels = () => (
	<DsBulkActions selectedCount={2} onClearSelection={noop}>
		<DsBulkActions.Item icon="alarm" label="Notify all stakeholders" onClick={noop} />
		<DsBulkActions.Item icon="delete_outline" label="Delete permanently" onClick={noop} />
	</DsBulkActions>
);

export const ItemWidths = () => (
	<DsStack direction="column" gap="var(--lg)" style={widthComparisonStyle}>
		<DsStack direction="column" gap="var(--3xs)">
			<DsTypography variant="body-sm-md" color="secondary">
				fixed (default) — 64–84px column, truncates
			</DsTypography>
			<DsBulkActions selectedCount={3} onClearSelection={noop}>
				<DsBulkActions.Item icon="alarm" label="Notify all stakeholders" onClick={noop} />
				<DsBulkActions.Item icon="share" label="Share with everyone in the workspace" onClick={noop} />
				<DsBulkActions.Item icon="delete_outline" label="Delete permanently" onClick={noop} />
			</DsBulkActions>
		</DsStack>
		<DsStack direction="column" gap="var(--3xs)">
			<DsTypography variant="body-sm-md" color="secondary">
				fit-content — hugs the label
			</DsTypography>
			<DsBulkActions selectedCount={3} onClearSelection={noop}>
				<DsBulkActions.Item icon="alarm" label="Notify all stakeholders" width="fit-content" onClick={noop} />
				<DsBulkActions.Item
					icon="share"
					label="Share with everyone in the workspace"
					width="fit-content"
					onClick={noop}
				/>
				<DsBulkActions.Item
					icon="delete_outline"
					label="Delete permanently"
					width="fit-content"
					onClick={noop}
				/>
			</DsBulkActions>
		</DsStack>
		<DsStack direction="column" gap="var(--3xs)">
			<DsTypography variant="body-sm-md" color="secondary">
				120px — exact width, truncates
			</DsTypography>
			<DsBulkActions selectedCount={3} onClearSelection={noop}>
				<DsBulkActions.Item icon="alarm" label="Notify all stakeholders" width={120} onClick={noop} />
				<DsBulkActions.Item
					icon="share"
					label="Share with everyone in the workspace"
					width={120}
					onClick={noop}
				/>
				<DsBulkActions.Item icon="delete_outline" label="Delete permanently" width={120} onClick={noop} />
			</DsBulkActions>
		</DsStack>
	</DsStack>
);

export const WidthFitContent = () => (
	<DsBulkActions selectedCount={3} onClearSelection={noop}>
		<DsBulkActions.Item icon="alarm" label="Notify all stakeholders" width="fit-content" onClick={noop} />
		<DsBulkActions.Item
			icon="share"
			label="Share with everyone in the workspace"
			width="fit-content"
			onClick={noop}
		/>
		<DsBulkActions.Item icon="delete_outline" label="Delete permanently" width="fit-content" onClick={noop} />
	</DsBulkActions>
);

export const WidthCustom = () => (
	<DsBulkActions selectedCount={3} onClearSelection={noop}>
		<DsBulkActions.Item icon="alarm" label="Notify all stakeholders" width={120} onClick={noop} />
		<DsBulkActions.Item
			icon="share"
			label="Share with everyone in the workspace"
			width={120}
			onClick={noop}
		/>
		<DsBulkActions.Item icon="delete_outline" label="Delete permanently" width={160} onClick={noop} />
	</DsBulkActions>
);

export const DisabledAction = () => (
	<DsBulkActions selectedCount={1} onClearSelection={noop}>
		<DsBulkActions.Item icon="alarm" label="Notify" onClick={noop} />
		<DsBulkActions.Item icon="delete_outline" label="Delete" disabled onClick={noop} />
	</DsBulkActions>
);

export const Localized = () => (
	<DsBulkActions
		selectedCount={5}
		onClearSelection={noop}
		locale={{
			itemsSelectedLabel: 'Rows picked',
			clearSelectionLabel: 'Dismiss selection',
			moreActionsLabel: 'More actions',
		}}
	>
		<DsBulkActions.Item icon="alarm" label="Notify" onClick={noop} />
	</DsBulkActions>
);
