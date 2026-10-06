import * as React from 'react';
import { useState } from 'react';
import {
	DsPopover,
	DsButtonV3,
	DsIcon,
	DsAvatar,
	DsDivider,
	DsStatusBadgeV2,
	DsStack,
	DsTooltip,
	DsTypography,
} from '@drivenets/design-system';

// Owned preview: the story file imports './ds-popover.stories.module.scss' for two
// demo-only classes — `.image` (decorative, inside the closed-by-default panel
// content, so it never shows up in a closed-state capture) and `.anchorField` (the
// bordered field wrapper around `CustomAnchor`'s trigger, visible even while the
// popover itself is closed). Story-local .scss can't compile in the lightweight
// story-preview pass (no Sass preprocessor), so both classes resolved to `undefined`
// — confirmed visibly on `CustomAnchor`: storybook shows "Query filter" inside a
// bordered box, the generated preview showed bare unstyled text. Both are inlined as
// plain style objects below. The `Legacy` story (deprecated single-element call form)
// isn't part of this component's mapped story set (not in .stories-map.json / the
// captured sheet) and isn't mirrored here.

const imageStyle: React.CSSProperties = {
	display: 'block',
	width: '100%',
	height: 'auto',
	borderRadius: '4px',
};

const anchorFieldStyle: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: 'var(--xs)',
	width: '320px',
	padding: 'var(--sm) var(--standard)',
	background: 'var(--background)',
	border: '1px solid var(--border)',
	borderRadius: 'var(--3xs)',
};

const PLACEHOLDER_IMAGE =
	'data:image/svg+xml;utf8,' +
	encodeURIComponent(
		`<svg xmlns="http://www.w3.org/2000/svg" width="352" height="200"><rect width="100%" height="100%" fill="#e5e8ed"/><text x="50%" y="50%" fill="#4c5f76" font-family="Roboto, sans-serif" font-size="16" text-anchor="middle" dominant-baseline="middle">Map preview</text></svg>`,
	);

export const WithContentItemsAndCTA = () => (
	<DsPopover.Root side="bottom" align="center" gutter={8} modal={false} defaultOpen={false}>
		<DsPopover.Trigger>
			<DsButtonV3 variant="secondary">Release lock</DsButtonV3>
		</DsPopover.Trigger>
		<DsPopover.Panel>
			<DsPopover.Header
				icon={<DsIcon icon="lock" color="action-secondary" />}
				actions={<DsPopover.CloseTrigger />}
			>
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
);

export const SingleContentItem = () => (
	<DsPopover.Root side="bottom" align="center" gutter={8} modal={false} defaultOpen={false}>
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
);

export const HoverTrigger = () => (
	<DsPopover.Root side="right" align="start" gutter={8} modal={false} defaultOpen={false} openOn="hover">
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
);

export const WithImage = () => (
	<DsPopover.Root side="bottom" align="center" gutter={8} modal={false} defaultOpen={false}>
		<DsPopover.Trigger>
			<DsButtonV3 variant="secondary">London</DsButtonV3>
		</DsPopover.Trigger>
		<DsPopover.Panel>
			<DsPopover.Header icon={<DsIcon icon="location_on" color="action-secondary" />}>
				London
			</DsPopover.Header>
			<DsPopover.Content>
				<DsPopover.ContentItem>
					<img style={imageStyle} src={PLACEHOLDER_IMAGE} alt="Map of London" />
				</DsPopover.ContentItem>
			</DsPopover.Content>
		</DsPopover.Panel>
	</DsPopover.Root>
);

export const CustomAnchor = () => (
	<DsPopover.Root side="bottom" gutter={8} modal={false} defaultOpen={false} align="start" matchAnchorWidth>
		<DsPopover.Anchor>
			<div style={anchorFieldStyle}>
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
);

export const WithTooltip = () => {
	const [open, setOpen] = useState(false);

	return (
		<DsPopover.Root
			side="bottom"
			align="center"
			gutter={8}
			modal={false}
			defaultOpen={false}
			onOpenChange={setOpen}
		>
			<DsPopover.Trigger>
				<DsTooltip content="Provision edge · v2.3.4 · Active" disabled={open}>
					<DsButtonV3 variant="secondary" icon="account_tree">
						Provision edge
					</DsButtonV3>
				</DsTooltip>
			</DsPopover.Trigger>
			<DsPopover.Panel>
				<DsPopover.Header
					icon={<DsIcon icon="account_tree" color="action-secondary" />}
					actions={<DsPopover.CloseTrigger />}
				>
					Provision edge
				</DsPopover.Header>
				<DsPopover.Content>
					<DsPopover.ContentItem status={<DsStatusBadgeV2 phase="active" label="Active" size="small" />}>
						Provisions a new edge device and attaches it to the selected site, including the full description
						that the preview truncates.
					</DsPopover.ContentItem>
					<DsDivider />
					<DsPopover.ContentItem headline="Version">2.3.4 (latest)</DsPopover.ContentItem>
				</DsPopover.Content>
				<DsPopover.Footer>
					<DsButtonV3 variant="secondary" size="small" icon="open_in_new">
						Open in catalog
					</DsButtonV3>
				</DsPopover.Footer>
			</DsPopover.Panel>
		</DsPopover.Root>
	);
};
