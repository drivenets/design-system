import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { DsCard } from './index';
import { cardSizes } from './ds-card.types';
import { DsStatusBadge } from '../ds-status-badge';
import { DsTypography } from '../ds-typography';
import { DsIcon } from '../ds-icon';
import styles from './ds-card.stories.module.scss';
import { DsStack } from '../ds-stack';

const meta: Meta<typeof DsCard.Root> = {
	title: 'Components/Card',
	component: DsCard.Root,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		size: {
			control: 'select',
			options: cardSizes,
		},
		selectable: {
			control: 'boolean',
		},
		selected: {
			control: 'boolean',
		},
		highlightSelected: {
			control: 'boolean',
		},
		disabled: {
			control: 'boolean',
		},
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		onClick: { table: { disable: true } },
		onKeyDown: { table: { disable: true } },
		onFocus: { table: { disable: true } },
		onBlur: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsCard.Root>;

/**
 * Default card is a static display container with no interactions.
 */
export const Default: Story = {
	args: {
		size: 'medium',
	},
	render: (args) => (
		<DsCard.Root {...args}>
			<DsCard.Header>Card Title</DsCard.Header>
			<DsCard.Body>Card content goes here</DsCard.Body>
		</DsCard.Root>
	),
};

/**
 * Small width (224px). Use for compact lists or side panels.
 */
export const Small: Story = {
	args: {
		size: 'small',
	},
	render: (args) => (
		<DsCard.Root {...args}>
			<DsCard.Header>Small Card</DsCard.Header>
			<DsCard.Body>Compact content area</DsCard.Body>
		</DsCard.Root>
	),
};

/**
 * Large width (368px). Use for detail panels and metric-heavy layouts.
 */
export const Large: Story = {
	args: {
		size: 'large',
	},
	render: (args) => (
		<DsCard.Root {...args}>
			<DsCard.Header>Large Card</DsCard.Header>
			<DsCard.Body>Room for richer content and multiple sections</DsCard.Body>
		</DsCard.Root>
	),
};

/**
 * Visual reference of all three card widths. Pick one size per card in product code.
 */
export const Sizes: Story = {
	tags: ['!manifest'],
	parameters: {
		docs: { canvas: { sourceState: 'none' } },
	},
	render: () => (
		<DsStack direction="row" gap="var(--lg)" alignItems="flex-start">
			<DsCard.Root size="small">
				<DsCard.Header>Small Card</DsCard.Header>
				<DsCard.Body>Small content</DsCard.Body>
			</DsCard.Root>

			<DsCard.Root size="medium">
				<DsCard.Header>Medium Card</DsCard.Header>
				<DsCard.Body>Medium content</DsCard.Body>
			</DsCard.Root>

			<DsCard.Root size="large">
				<DsCard.Header>Large Card</DsCard.Header>
				<DsCard.Body>Large content</DsCard.Body>
			</DsCard.Root>
		</DsStack>
	),
};

/**
 * Compose header, body, and footer slots for structured card layouts.
 * `styles.*` classes are story-only layout helpers — not part of the DsCard API.
 */
export const WithHeaderAndFooter: Story = {
	args: {
		size: 'large',
	},
	render: (args) => (
		<DsCard.Root {...args}>
			<DsCard.Header className={styles.headerRow}>
				<DsTypography variant="heading3">Card Title</DsTypography>
				<DsStatusBadge icon="check_circle" status="active" ghost />
			</DsCard.Header>
			<DsCard.Body>
				<DsStack direction="column" gap="var(--3xs)">
					<DsTypography variant="body-md-bold">12 of 12 Devices</DsTypography>
					<DsTypography variant="body-sm-reg">Success 10 | Failed 1 | Skipped 1</DsTypography>
				</DsStack>
			</DsCard.Body>
			<DsCard.Footer className={styles.footer}>
				<DsTypography variant="body-sm-reg">Last updated: 2 min ago</DsTypography>
			</DsCard.Footer>
		</DsCard.Root>
	),
};

/**
 * A realistic step card showing deployment status with detailed metrics.
 * `styles.*` classes are story-only layout helpers — not part of the DsCard API.
 */
export const StepCard: Story = {
	args: {
		size: 'large',
	},
	render: (args) => (
		<DsCard.Root {...args}>
			<DsCard.Header className={styles.headerRow}>
				<DsTypography variant="heading3">Canary</DsTypography>
				<DsStatusBadge icon="check_circle" status="active" label="Complete" />
			</DsCard.Header>
			<DsCard.Body>
				<DsStack direction="column" gap="var(--3xs)">
					<DsTypography variant="body-md-bold">12 of 12 Devices</DsTypography>
					<DsTypography variant="body-sm-reg" color="secondary">
						Success 10 | Failed 1 | Skipped 1
					</DsTypography>
				</DsStack>
			</DsCard.Body>
			<DsCard.Body className={styles.dataList}>
				<DsTypography variant="body-sm-reg">Config Push</DsTypography>
				<DsTypography variant="body-sm-reg" color="success">
					Complete
				</DsTypography>
				<DsTypography variant="body-sm-reg">Dwell Time (60 min.)</DsTypography>
				<DsTypography variant="body-sm-reg" color="success">
					Complete
				</DsTypography>
				<DsTypography variant="body-sm-reg">Failed</DsTypography>
				<DsTypography variant="body-sm-reg" color="secondary">
					1 (8%)
				</DsTypography>
				<DsTypography variant="body-sm-reg">Failure threshold</DsTypography>
				<DsTypography variant="body-sm-reg" color="secondary">
					5 or 10%
				</DsTypography>
				<DsTypography variant="body-sm-reg">Threshold state</DsTypography>
				<DsTypography variant="body-sm-reg" color="secondary">
					Normal
				</DsTypography>
			</DsCard.Body>
		</DsCard.Root>
	),
};

/**
 * Selectable cards act as buttons. Pair `selectable` with a controlled `selected` prop
 * and wire `onClick` to update selection — see Selectable Controlled.
 */
export const Selectable: Story = {
	args: {
		selectable: true,
		selected: false,
	},
	render: (args) => (
		<DsCard.Root {...args}>
			<DsCard.Header>Selectable Card</DsCard.Header>
			<DsCard.Body>Click to select this card</DsCard.Body>
		</DsCard.Root>
	),
};

/**
 * When `highlightSelected` is true, selected cards display a highlighted background color.
 */
export const HighlightSelected: Story = {
	args: {
		selectable: true,
		selected: true,
		highlightSelected: true,
	},
	render: (args) => (
		<DsCard.Root {...args}>
			<DsCard.Header>Highlighted Card</DsCard.Header>
			<DsCard.Body>This card has a highlighted background when selected</DsCard.Body>
		</DsCard.Root>
	),
};

/**
 * Wire `selected` and `onClick` to local state for a controlled selectable card.
 * MCP snippet shows the evaluated render body — use that pattern in product code.
 */
export const SelectableControlled: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: () => {
		const [selected, setSelected] = useState(false);

		return (
			<DsCard.Root selectable selected={selected} onClick={() => setSelected(!selected)}>
				<DsCard.Header>Controlled Card</DsCard.Header>
				<DsCard.Body>{selected ? 'Selected! Click to deselect.' : 'Click to select.'}</DsCard.Body>
			</DsCard.Root>
		);
	},
};

/**
 * Disabled cards cannot be interacted with and are visually dimmed.
 */
export const Disabled: Story = {
	args: {
		selectable: true,
		selected: false,
		disabled: true,
	},
	render: (args) => (
		<DsCard.Root {...args}>
			<DsCard.Header>Unavailable step</DsCard.Header>
			<DsCard.Body>Cannot select this card.</DsCard.Body>
		</DsCard.Root>
	),
};

/**
 * Collapsible card pattern using composition. Click the header to toggle body visibility.
 * This is not built-in functionality — use local state to implement.
 * `styles.*` classes are story-only layout helpers — not part of the DsCard API.
 */
export const Collapsible: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	args: {
		size: 'large',
	},
	render: (args) => {
		const [expanded, setExpanded] = useState(true);

		return (
			<DsCard.Root {...args} className={styles.collapseRoot}>
				<DsCard.Header className={styles.collapseHeader}>
					<button
						type="button"
						className={styles.collapsibleButton}
						onClick={() => setExpanded(!expanded)}
						aria-expanded={expanded}
					>
						<DsIcon icon="expand_more" className={styles.collapsibleIcon} data-expanded={expanded} />
					</button>
					<DsTypography variant="heading3">Collapsible Card</DsTypography>
				</DsCard.Header>
				<DsCard.Body className={styles.collapsibleContent} data-collapsed={!expanded}>
					<div className={styles.collapsibleContentInner}>
						<DsTypography variant="body-md-reg">
							This content can be collapsed by clicking the header. The height animates smoothly using CSS
							Grid.
						</DsTypography>
					</div>
				</DsCard.Body>
			</DsCard.Root>
		);
	},
};
