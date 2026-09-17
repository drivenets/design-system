import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsButtonV3 } from '../ds-button-v3';
import { DsIcon } from '../ds-icon';
import { DsAvatar } from '../ds-avatar';
import { DsDivider } from '../ds-divider';
import { DsStatusBadgeV2 } from '../ds-status-badge-v2';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';
import { DsPopover } from './ds-popover';
import { popoverAligns, popoverOpenTriggers, popoverSides } from './ds-popover.types';
import styles from './ds-popover.stories.module.scss';

const PLACEHOLDER_IMAGE =
	'data:image/svg+xml;utf8,' +
	encodeURIComponent(
		`<svg xmlns="http://www.w3.org/2000/svg" width="352" height="200"><rect width="100%" height="100%" fill="#e5e8ed"/><text x="50%" y="50%" fill="#4c5f76" font-family="Roboto, sans-serif" font-size="16" text-anchor="middle" dominant-baseline="middle">Map preview</text></svg>`,
	);

const meta: Meta<typeof DsPopover.Root> = {
	// `DsPopover` is a hybrid: callable (legacy `trigger` form) + compound namespace.
	// The call signature makes consistent-story-titles classify `.Root` as a
	// sub-component ("Root"); the title is correctly the namespace name.
	// eslint-disable-next-line @drivenets/ds-internal/consistent-story-titles
	title: 'Components/Popover',
	component: DsPopover.Root,
	parameters: {
		layout: 'centered',
	},
	args: {
		side: 'bottom',
		align: 'center',
		gutter: 8,
		modal: false,
		defaultOpen: false,
	},
	argTypes: {
		side: { control: 'select', options: popoverSides },
		align: { control: 'select', options: popoverAligns },
		gutter: { control: 'number' },
		modal: { control: 'boolean' },
		openOn: { control: 'inline-radio', options: popoverOpenTriggers },
		openDelay: { control: 'number' },
		closeDelay: { control: 'number' },
		matchAnchorWidth: { control: 'boolean' },
		restoreFocus: { control: 'boolean' },
		open: { table: { disable: true } },
		onOpenChange: { table: { disable: true } },
		getAnchorElement: { table: { disable: true } },
		onOpenAutoFocus: { table: { disable: true } },
		onCloseAutoFocus: { table: { disable: true } },
		onInteractOutside: { table: { disable: true } },
		children: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsPopover.Root>;

export const WithContentItemsAndCTA: Story = {
	render: (args) => (
		<DsPopover.Root {...args}>
			<DsPopover.Trigger>
				<DsButtonV3 variant="secondary">Release lock</DsButtonV3>
			</DsPopover.Trigger>
			<DsPopover.Panel>
				<DsPopover.Header icon={<DsIcon icon="lock" color="action-secondary" />}>
					Release lock
				</DsPopover.Header>
				<DsPopover.Content>
					<DsPopover.ContentItem status={<DsStatusBadgeV2 phase="active" label="Active" size="small" />}>
						Releases a physical lock on a device or asset, granting immediate access to the selected inventory
						item.
					</DsPopover.ContentItem>
					<DsDivider />
					<DsPopover.ContentItem headline="Last version: 2.3.4">
						<DsStack direction="row" alignItems="center" gap="var(--xs)">
							<DsAvatar name="John Smith" size="xsm" />
							<DsTypography variant="body-xs-reg" color="secondary">
								John Smith &bull; 23-May-2024 04:47 PM
							</DsTypography>
						</DsStack>
					</DsPopover.ContentItem>
					<DsDivider />
					<DsPopover.ContentItem headline="Category">
						<DsIcon icon="sell" size="small" color="secondary" />
						DAP / Inventory / Physical
					</DsPopover.ContentItem>
				</DsPopover.Content>
				<DsPopover.Footer>
					<DsButtonV3 variant="secondary" size="small" icon="check_circle">
						Confirm
					</DsButtonV3>
				</DsPopover.Footer>
			</DsPopover.Panel>
		</DsPopover.Root>
	),
};

export const SingleContentItem: Story = {
	render: (args) => (
		<DsPopover.Root {...args}>
			<DsPopover.Trigger>
				<DsButtonV3 variant="secondary">Set element status</DsButtonV3>
			</DsPopover.Trigger>
			<DsPopover.Panel>
				<DsPopover.Header icon={<DsIcon icon="account_tree" color="action-secondary" />}>
					Set element status
				</DsPopover.Header>
				<DsPopover.Content>
					<DsPopover.ContentItem
						status={<DsStatusBadgeV2 phase="not-started" label="Node not connected" size="small" />}
					>
						This node has no outgoing connections. Link it to another node to continue the workflow.
					</DsPopover.ContentItem>
				</DsPopover.Content>
			</DsPopover.Panel>
		</DsPopover.Root>
	),
};

/**
 * Legacy single-element call form (`@deprecated`). The old `trigger` / `side` /
 * `align` API still compiles and runs — it now renders the new light panel.
 * Prefer the compound API shown above.
 */
export const Legacy: Story = {
	tags: ['deprecated'],
	render: () => (
		<DsPopover side="top" trigger={<DsButtonV3 variant="secondary">Legacy call form</DsButtonV3>}>
			<DsPopover.Header icon={<DsIcon icon="lock" color="action-secondary" />}>
				Legacy call form
			</DsPopover.Header>
			<DsPopover.Content>
				<DsPopover.ContentItem>
					Still works after the rewrite — same one-liner, new panel styling.
				</DsPopover.ContentItem>
			</DsPopover.Content>
		</DsPopover>
	),
};

/**
 * `openOn="hover"` layers pointer intent on top of the click behavior: the panel
 * opens after `openDelay`, survives the pointer crossing the `gutter` gap onto the
 * panel itself, and closes `closeDelay` after the pointer leaves both. Click and
 * keyboard activation still toggle, so touch devices keep working.
 *
 * Under `openOn="hover"` the panel deliberately does not take focus on open — tab
 * from the trigger to reach the links inside.
 */
export const HoverTrigger: Story = {
	args: { openOn: 'hover', side: 'right', align: 'start' },
	render: (args) => (
		<DsPopover.Root {...args}>
			<DsPopover.Trigger>
				<DsButtonV3 variant="secondary" icon="account_tree">
					Inventory
				</DsButtonV3>
			</DsPopover.Trigger>
			<DsPopover.Panel width={280}>
				<DsPopover.Header icon={<DsIcon icon="account_tree" color="action-secondary" />}>
					Inventory
				</DsPopover.Header>
				<DsPopover.Content>
					<DsPopover.ContentItem>
						<DsStack direction="column" gap="var(--xs)">
							<DsTypography variant="body-md-link" asChild>
								<a href="#physical">Physical</a>
							</DsTypography>
							<DsTypography variant="body-md-link" asChild>
								<a href="#logical">Logical</a>
							</DsTypography>
							<DsTypography variant="body-md-link" asChild>
								<a href="#topology">Topology</a>
							</DsTypography>
						</DsStack>
					</DsPopover.ContentItem>
				</DsPopover.Content>
			</DsPopover.Panel>
		</DsPopover.Root>
	),
};

export const WithImage: Story = {
	render: (args) => (
		<DsPopover.Root {...args}>
			<DsPopover.Trigger>
				<DsButtonV3 variant="secondary">London</DsButtonV3>
			</DsPopover.Trigger>
			<DsPopover.Panel>
				<DsPopover.Header icon={<DsIcon icon="location_on" color="action-secondary" />}>
					London
				</DsPopover.Header>
				<DsPopover.Content>
					<DsPopover.ContentItem>
						<img className={styles.image} src={PLACEHOLDER_IMAGE} alt="Map of London" />
					</DsPopover.ContentItem>
				</DsPopover.Content>
			</DsPopover.Panel>
		</DsPopover.Root>
	),
};

/**
 * When the trigger is not the positioning reference — for example a field with an
 * end-adornment button — wrap the field in `DsPopover.Anchor` and set `matchAnchorWidth`
 * so the panel lines up with the field rather than the button.
 */
export const CustomAnchor: Story = {
	args: {
		align: 'start',
		matchAnchorWidth: true,
	},
	render: (args) => (
		<DsPopover.Root {...args}>
			<DsPopover.Anchor>
				<div className={styles.anchorField}>
					<DsTypography variant="body-sm-reg" color="main">
						Query filter
					</DsTypography>
					<DsPopover.Trigger>
						<DsButtonV3 variant="tertiary" size="small" icon="info" aria-label="Filter details" />
					</DsPopover.Trigger>
				</div>
			</DsPopover.Anchor>
			<DsPopover.Panel>
				<DsPopover.Header icon={<DsIcon icon="filter_alt" color="action-secondary" />}>
					Query filter
				</DsPopover.Header>
				<DsPopover.Content>
					<DsPopover.ContentItem>
						The panel positions against the field and matches its width. The info button only toggles open
						state.
					</DsPopover.ContentItem>
				</DsPopover.Content>
			</DsPopover.Panel>
		</DsPopover.Root>
	),
};
