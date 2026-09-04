import { useState, type ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { DsSlider, type DsSliderValue } from '../ds-slider';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';
import { DsBulkActions } from './index';
import { bulkActionsMenuPlacements, bulkActionsPlacements } from './ds-bulk-actions.types';
import styles from './ds-bulk-actions.stories.module.scss';

const BAR_MIN_WIDTH = 280;
const BAR_MAX_WIDTH = 720;
const BAR_DEFAULT_WIDTH = 480;

const BoundedScene = ({ children }: { children: ReactNode }) => (
	<div className={styles.outerBounds}>
		<div className={styles.innerBounds}>{children}</div>
	</div>
);

const meta: Meta<typeof DsBulkActions> = {
	title: 'Components/BulkActions',
	component: DsBulkActions,
	parameters: {
		layout: 'centered',
		// Every story renders through a `render` function, so Show code is extracted
		// asynchronously. Under CI load `auto` can race and fall back to the raw CSF
		// object, so pin dynamic at the meta level for stable, clean JSX snippets.
		docs: { source: { type: 'dynamic' } },
	},
	args: {
		selectedCount: 3,
		onClearSelection: fn(),
	},
	argTypes: {
		placement: { control: 'select', options: bulkActionsPlacements },
		menuPlacement: { control: 'select', options: bulkActionsMenuPlacements },
		children: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsBulkActions>;

/**
 * Static toolbar in normal document flow. The consumer owns placement via layout,
 * `className`, or `style`.
 */
export const Default: Story = {
	args: {
		selectedCount: 3,
	},
	render: (args) => (
		<DsBulkActions {...args}>
			<DsBulkActions.Item icon="alarm" label="Notify" onClick={fn()} />
			<DsBulkActions.Item icon="folder_open" label="Folder" onClick={fn()} />
			<DsBulkActions.Item icon="delete_outline" label="Delete" onClick={fn()} />
		</DsBulkActions>
	),
};

/**
 * Floating bar anchored to the bottom center of a positioned ancestor — the
 * default integration for tables and trees.
 */
export const Floating: Story = {
	parameters: {
		layout: 'padded',
	},
	args: {
		placement: 'floating',
	},
	render: (args) => (
		<DsBulkActions {...args}>
			<DsBulkActions.Item icon="alarm" label="Notify" onClick={fn()} />
			<DsBulkActions.Item icon="folder_open" label="Folder" onClick={fn()} />
			<DsBulkActions.Item icon="delete_outline" label="Delete" onClick={fn()} />
		</DsBulkActions>
	),
	decorators: [
		(Story) => (
			<BoundedScene>
				<Story />
			</BoundedScene>
		),
	],
};

/**
 * Drag the slider to constrain `style.width`. Rightmost actions collapse into More;
 * at the narrowest widths the summary label hides so one action and More still fit.
 */
export const Overflow: Story = {
	tags: ['!manifest'],
	parameters: {
		layout: 'padded',
		docs: { canvas: { sourceState: 'none' } },
	},
	args: {
		placement: 'floating',
	},
	render: function Render(args) {
		const [width, setWidth] = useState<DsSliderValue>(BAR_DEFAULT_WIDTH);
		const barWidth = typeof width === 'number' ? width : BAR_DEFAULT_WIDTH;

		return (
			<DsStack direction="column" gap="var(--md)" className={styles.widthDemo}>
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
					<DsBulkActions {...args} style={{ width: barWidth }}>
						<DsBulkActions.Item icon="alarm" label="Notify" onClick={fn()} />
						<DsBulkActions.Item icon="folder_open" label="Folder" onClick={fn()} />
						<DsBulkActions.Item icon="share" label="Share" onClick={fn()} />
						<DsBulkActions.Item icon="edit" label="Edit" onClick={fn()} />
						<DsBulkActions.Item icon="content_copy" label="Duplicate" onClick={fn()} />
						<DsBulkActions.Item icon="delete_outline" label="Delete" onClick={fn()} />
					</DsBulkActions>
				</BoundedScene>
			</DsStack>
		);
	},
};

/**
 * Constrained `style.width` collapses trailing actions into More. Use Overflow
 * to drag the width live.
 */
export const ConstrainedWidth: Story = {
	args: {
		selectedCount: 6,
	},
	render: (args) => (
		<DsBulkActions {...args} style={{ width: 420 }}>
			<DsBulkActions.Item icon="alarm" label="Notify" onClick={fn()} />
			<DsBulkActions.Item icon="folder_open" label="Folder" onClick={fn()} />
			<DsBulkActions.Item icon="share" label="Share" onClick={fn()} />
			<DsBulkActions.Item icon="edit" label="Edit" onClick={fn()} />
			<DsBulkActions.Item icon="content_copy" label="Duplicate" onClick={fn()} />
			<DsBulkActions.Item icon="delete_outline" label="Delete" onClick={fn()} />
		</DsBulkActions>
	),
};

/**
 * Fill the parent with width 100%. Overflow uses that used width, so More appears when
 * the parent is narrower than the actions.
 */
export const ParentWidth: Story = {
	parameters: {
		layout: 'padded',
	},
	args: {
		selectedCount: 6,
	},
	render: (args) => (
		<div className={styles.parentTrack}>
			<DsBulkActions {...args} style={{ width: '100%' }}>
				<DsBulkActions.Item icon="alarm" label="Notify" onClick={fn()} />
				<DsBulkActions.Item icon="folder_open" label="Folder" onClick={fn()} />
				<DsBulkActions.Item icon="share" label="Share" onClick={fn()} />
				<DsBulkActions.Item icon="edit" label="Edit" onClick={fn()} />
				<DsBulkActions.Item icon="content_copy" label="Duplicate" onClick={fn()} />
				<DsBulkActions.Item icon="delete_outline" label="Delete" onClick={fn()} />
			</DsBulkActions>
		</div>
	),
};

/**
 * Pass `menu` on an Item to open a flyout instead of firing `onClick`. Entries
 * support icons, disabled, and `variant="error"`.
 */
export const MenuAction: Story = {
	args: {
		selectedCount: 3,
	},
	render: (args) => (
		<DsBulkActions {...args}>
			<DsBulkActions.Item icon="alarm" label="Notify" onClick={fn()} />
			<DsBulkActions.Item
				icon="share"
				label="Share"
				menu={[
					{ value: 'email', label: 'Email', icon: 'mail', onSelect: fn() },
					{ value: 'link', label: 'Copy link', icon: 'link', onSelect: fn() },
					{
						value: 'delete',
						label: 'Remove access',
						icon: 'delete_outline',
						variant: 'error',
						onSelect: fn(),
					},
				]}
			/>
			<DsBulkActions.Item icon="delete_outline" label="Delete" onClick={fn()} />
		</DsBulkActions>
	),
};

/**
 * Nested `menu` arrays render as submenus. `menuPlacement` on the root controls
 * the top-level flyout; nested menus open to the right.
 */
export const NestedMenu: Story = {
	parameters: {
		layout: 'padded',
	},
	args: {
		placement: 'floating',
		selectedCount: 3,
	},
	render: (args) => (
		<DsBulkActions {...args}>
			<DsBulkActions.Item icon="alarm" label="Notify" onClick={fn()} />
			<DsBulkActions.Item
				icon="share"
				label="Share"
				menu={[
					{ value: 'email', label: 'Email', icon: 'mail', onSelect: fn() },
					{
						value: 'more',
						label: 'More options',
						icon: 'link',
						menu: [
							{ value: 'copy-link', label: 'Copy link', onSelect: fn() },
							{ value: 'social', label: 'Social media', onSelect: fn() },
						],
					},
				]}
			/>
			<DsBulkActions.Item icon="delete_outline" label="Delete" onClick={fn()} />
		</DsBulkActions>
	),
	decorators: [
		(Story) => (
			<BoundedScene>
				<Story />
			</BoundedScene>
		),
	],
};

/**
 * Default width is a 64–84px column. Labels that overflow truncate; hover shows the full text.
 */
export const LongActionLabels: Story = {
	args: {
		selectedCount: 2,
	},
	render: (args) => (
		<DsBulkActions {...args}>
			<DsBulkActions.Item icon="alarm" label="Notify all stakeholders" onClick={fn()} />
			<DsBulkActions.Item icon="delete_outline" label="Delete permanently" onClick={fn()} />
		</DsBulkActions>
	),
};

/**
 * Same long labels under each width mode so the column size is obvious. Hover a truncated
 * label for the full string.
 */
export const ItemWidths: Story = {
	tags: ['!manifest'],
	parameters: {
		layout: 'padded',
		docs: { canvas: { sourceState: 'none' } },
	},
	args: {
		selectedCount: 3,
	},
	render: (args) => (
		<DsStack direction="column" gap="var(--lg)" className={styles.widthComparison}>
			<DsStack direction="column" gap="var(--3xs)">
				<DsTypography variant="body-sm-md" color="secondary">
					fixed (default) — 64–84px column, truncates
				</DsTypography>
				<DsBulkActions {...args}>
					<DsBulkActions.Item icon="alarm" label="Notify all stakeholders" onClick={fn()} />
					<DsBulkActions.Item icon="share" label="Share with everyone in the workspace" onClick={fn()} />
					<DsBulkActions.Item icon="delete_outline" label="Delete permanently" onClick={fn()} />
				</DsBulkActions>
			</DsStack>
			<DsStack direction="column" gap="var(--3xs)">
				<DsTypography variant="body-sm-md" color="secondary">
					fit-content — hugs the label
				</DsTypography>
				<DsBulkActions {...args}>
					<DsBulkActions.Item
						icon="alarm"
						label="Notify all stakeholders"
						width="fit-content"
						onClick={fn()}
					/>
					<DsBulkActions.Item
						icon="share"
						label="Share with everyone in the workspace"
						width="fit-content"
						onClick={fn()}
					/>
					<DsBulkActions.Item
						icon="delete_outline"
						label="Delete permanently"
						width="fit-content"
						onClick={fn()}
					/>
				</DsBulkActions>
			</DsStack>
			<DsStack direction="column" gap="var(--3xs)">
				<DsTypography variant="body-sm-md" color="secondary">
					120px — exact width, truncates
				</DsTypography>
				<DsBulkActions {...args}>
					<DsBulkActions.Item icon="alarm" label="Notify all stakeholders" width={120} onClick={fn()} />
					<DsBulkActions.Item
						icon="share"
						label="Share with everyone in the workspace"
						width={120}
						onClick={fn()}
					/>
					<DsBulkActions.Item icon="delete_outline" label="Delete permanently" width={120} onClick={fn()} />
				</DsBulkActions>
			</DsStack>
		</DsStack>
	),
};

/**
 * Hugs each label instead of the 64–84px column. Use when the action name should stay fully visible.
 */
export const WidthFitContent: Story = {
	args: {
		selectedCount: 3,
	},
	render: (args) => (
		<DsBulkActions {...args}>
			<DsBulkActions.Item icon="alarm" label="Notify all stakeholders" width="fit-content" onClick={fn()} />
			<DsBulkActions.Item
				icon="share"
				label="Share with everyone in the workspace"
				width="fit-content"
				onClick={fn()}
			/>
			<DsBulkActions.Item
				icon="delete_outline"
				label="Delete permanently"
				width="fit-content"
				onClick={fn()}
			/>
		</DsBulkActions>
	),
};

/**
 * Exact pixel width per action. Labels that do not fit still truncate with a tooltip.
 */
export const WidthCustom: Story = {
	args: {
		selectedCount: 3,
	},
	render: (args) => (
		<DsBulkActions {...args}>
			<DsBulkActions.Item icon="alarm" label="Notify all stakeholders" width={120} onClick={fn()} />
			<DsBulkActions.Item
				icon="share"
				label="Share with everyone in the workspace"
				width={120}
				onClick={fn()}
			/>
			<DsBulkActions.Item icon="delete_outline" label="Delete permanently" width={160} onClick={fn()} />
		</DsBulkActions>
	),
};

/**
 * Individual actions can be disabled while keeping the bar visible.
 */
export const DisabledAction: Story = {
	args: {
		selectedCount: 1,
	},
	render: (args) => (
		<DsBulkActions {...args}>
			<DsBulkActions.Item icon="alarm" label="Notify" onClick={fn()} />
			<DsBulkActions.Item icon="delete_outline" label="Delete" disabled onClick={fn()} />
		</DsBulkActions>
	),
};

/**
 * Override user-facing strings via `locale` for i18n.
 */
export const Localized: Story = {
	args: {
		selectedCount: 5,
		locale: {
			itemsSelectedLabel: 'Rows picked',
			clearSelectionLabel: 'Dismiss selection',
			moreActionsLabel: 'More actions',
		},
	},
	render: (args) => (
		<DsBulkActions {...args}>
			<DsBulkActions.Item icon="alarm" label="Notify" onClick={fn()} />
		</DsBulkActions>
	),
};
