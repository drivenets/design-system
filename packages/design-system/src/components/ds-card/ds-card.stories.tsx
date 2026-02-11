import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';

import { DsCard } from './index';
import { cardSizes } from './ds-card.types';
import DsStatusBadge from '../ds-status-badge/ds-status-badge';
import DsTypography from '../ds-typography/ds-typography';
import { DsIcon } from '../ds-icon';
import styles from './ds-card.stories.module.scss';

const meta: Meta<typeof DsCard.Root> = {
	title: 'Design System/Card',
	component: DsCard.Root,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
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
	args: {},
};

export default meta;
type Story = StoryObj<typeof DsCard.Root>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Default card is a static display container with no interactions.',
			},
		},
	},
	args: {
		size: 'medium',
	},
	render: (args) => (
		<DsCard.Root {...args}>
			<DsCard.Header>Card Title</DsCard.Header>
			<DsCard.Body>Card content goes here</DsCard.Body>
		</DsCard.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Card Title')).toBeInTheDocument();
		await expect(canvas.getByText('Card content goes here')).toBeInTheDocument();

		// Default card should not be a button
		await expect(canvas.queryByRole('button')).not.toBeInTheDocument();
	},
};

export const Sizes: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Card comes in three sizes: small (224px), medium (264px), and large (368px).',
			},
		},
	},
	render: () => (
		<div className={styles.container}>
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
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const smallCard = canvas.getByText('Small Card').closest('[data-size]');
		const mediumCard = canvas.getByText('Medium Card').closest('[data-size]');
		const largeCard = canvas.getByText('Large Card').closest('[data-size]');

		await expect(smallCard).toHaveAttribute('data-size', 'small');
		await expect(mediumCard).toHaveAttribute('data-size', 'medium');
		await expect(largeCard).toHaveAttribute('data-size', 'large');
	},
};

export const WithHeaderAndFooter: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Card with header, body, and footer sections.',
			},
		},
	},
	render: () => (
		<DsCard.Root size="large">
			<DsCard.Header className={styles.headerRow}>
				<DsTypography variant="heading3">Card Title</DsTypography>
				<DsStatusBadge icon="check_circle" status="active" ghost />
			</DsCard.Header>
			<DsCard.Body className={styles.statsBlock}>
				<DsTypography variant="body-md-bold">12 of 12 Devices</DsTypography>
				<DsTypography variant="body-sm-reg">Success 10 | Failed 1 | Skipped 1</DsTypography>
			</DsCard.Body>
			<DsCard.Footer className={styles.footer}>
				<DsTypography variant="body-sm-reg">Last updated: 2 min ago</DsTypography>
			</DsCard.Footer>
		</DsCard.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Card Title')).toBeInTheDocument();
		await expect(canvas.getByText('12 of 12 Devices')).toBeInTheDocument();
		await expect(canvas.getByText('Last updated: 2 min ago')).toBeInTheDocument();
	},
};

export const StepCard: Story = {
	parameters: {
		docs: {
			description: {
				story: 'A realistic step card example showing deployment status with detailed metrics.',
			},
		},
	},
	render: () => (
		<DsCard.Root size="large">
			<DsCard.Header className={styles.headerRow}>
				<DsTypography variant="heading3">Canary</DsTypography>
				<DsStatusBadge icon="check_circle" status="active" label="Complete" />
			</DsCard.Header>
			<DsCard.Body className={styles.statsBlock}>
				<DsTypography variant="body-md-bold">12 of 12 Devices</DsTypography>
				<DsTypography variant="body-sm-reg" className={styles.textSecondary}>
					Success 10 | Failed 1 | Skipped 1
				</DsTypography>
			</DsCard.Body>
			<DsCard.Body className={styles.dataList}>
				<DsTypography variant="body-sm-reg">Config Push</DsTypography>
				<DsTypography variant="body-sm-reg" className={styles.textSuccess}>
					Complete
				</DsTypography>
				<DsTypography variant="body-sm-reg">Dwell Time (60 min.)</DsTypography>
				<DsTypography variant="body-sm-reg" className={styles.textSuccess}>
					Complete
				</DsTypography>
				<DsTypography variant="body-sm-reg">Failed</DsTypography>
				<DsTypography variant="body-sm-reg" className={styles.textSecondary}>
					1 (8%)
				</DsTypography>
				<DsTypography variant="body-sm-reg">Failure threshold</DsTypography>
				<DsTypography variant="body-sm-reg" className={styles.textSecondary}>
					5 or 10%
				</DsTypography>
				<DsTypography variant="body-sm-reg">Threshold state</DsTypography>
				<DsTypography variant="body-sm-reg" className={styles.textSecondary}>
					Normal
				</DsTypography>
			</DsCard.Body>
		</DsCard.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Canary')).toBeInTheDocument();
		await expect(canvas.getByText('12 of 12 Devices')).toBeInTheDocument();
		await expect(canvas.getByText('Config Push')).toBeInTheDocument();
	},
};

export const Selectable: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Selectable cards act as buttons and can be clicked to toggle selection. Use `selectable` prop to enable.',
			},
		},
	},
	args: {
		selectable: true,
		selected: false,
		onClick: fn(),
	},
	render: (args) => (
		<DsCard.Root {...args}>
			<DsCard.Header>Selectable Card</DsCard.Header>
			<DsCard.Body>Click to select this card</DsCard.Body>
		</DsCard.Root>
	),
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);

		const card = canvas.getByRole('button');
		await expect(card).toBeInTheDocument();
		await expect(card).toHaveAttribute('aria-pressed', 'false');

		// Click interaction
		await userEvent.click(card);
		await expect(args.onClick).toHaveBeenCalledTimes(1);
	},
};

export const HighlightSelected: Story = {
	parameters: {
		docs: {
			description: {
				story: 'When `highlightSelected` is true, selected cards display a highlighted background color.',
			},
		},
	},
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
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const card = canvas.getByRole('button');
		await expect(card).toHaveAttribute('aria-pressed', 'true');
		await expect(card).toHaveAttribute('data-highlight', 'true');
		await expect(card).toHaveAttribute('data-selected', 'true');
	},
};

export const SelectableControlled: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Controlled selectable card with state management.',
			},
		},
	},
	render: function Render() {
		const [selected, setSelected] = useState(false);

		return (
			<DsCard.Root selectable selected={selected} onClick={() => setSelected(!selected)}>
				<DsCard.Header>Controlled Card</DsCard.Header>
				<DsCard.Body>{selected ? 'Selected! Click to deselect.' : 'Click to select.'}</DsCard.Body>
			</DsCard.Root>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const card = canvas.getByRole('button');
		await expect(card).toHaveAttribute('aria-pressed', 'false');

		await userEvent.click(card);
		await expect(card).toHaveAttribute('aria-pressed', 'true');
		await expect(canvas.getByText('Selected! Click to deselect.')).toBeInTheDocument();

		await userEvent.click(card);
		await expect(card).toHaveAttribute('aria-pressed', 'false');
	},
};

export const Disabled: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Disabled cards cannot be interacted with.',
			},
		},
	},
	args: {
		selectable: true,
		disabled: true,
		onClick: fn(),
	},
	render: (args) => (
		<DsCard.Root size="large" {...args}>
			<DsCard.Header className={styles.headerRow}>
				<DsTypography variant="heading3">Canary</DsTypography>
				<DsStatusBadge icon="check_circle" status="active" label="Complete" />
			</DsCard.Header>
			<DsCard.Body className={styles.statsBlock}>
				<DsTypography variant="body-md-bold">12 of 12 Devices</DsTypography>
				<DsTypography variant="body-sm-reg" className={styles.textSecondary}>
					Success 10 | Failed 1 | Skipped 1
				</DsTypography>
			</DsCard.Body>
			<DsCard.Body className={styles.dataList}>
				<DsTypography variant="body-sm-reg">Config Push</DsTypography>
				<DsTypography variant="body-sm-reg" className={styles.textSuccess}>
					Complete
				</DsTypography>
				<DsTypography variant="body-sm-reg">Dwell Time (60 min.)</DsTypography>
				<DsTypography variant="body-sm-reg" className={styles.textSuccess}>
					Complete
				</DsTypography>
				<DsTypography variant="body-sm-reg">Failed</DsTypography>
				<DsTypography variant="body-sm-reg" className={styles.textSecondary}>
					1 (8%)
				</DsTypography>
				<DsTypography variant="body-sm-reg">Failure threshold</DsTypography>
				<DsTypography variant="body-sm-reg" className={styles.textSecondary}>
					5 or 10%
				</DsTypography>
				<DsTypography variant="body-sm-reg">Threshold state</DsTypography>
				<DsTypography variant="body-sm-reg" className={styles.textSecondary}>
					Normal
				</DsTypography>
			</DsCard.Body>
		</DsCard.Root>
	),
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);

		const card = canvas.getByRole('button');
		await expect(card).toHaveAttribute('aria-disabled', 'true');
		await expect(card).toHaveAttribute('tabindex', '-1');

		await userEvent.click(card, { pointerEventsCheck: 0 });
		await expect(args.onClick).not.toHaveBeenCalled();

		card.focus();
		await userEvent.keyboard('{Enter}');
		await expect(args.onClick).not.toHaveBeenCalled();

		await userEvent.keyboard(' ');
		await expect(args.onClick).not.toHaveBeenCalled();
	},
};

export const Collapsible: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Collapsible card pattern using composition. Click the header to toggle body visibility. This is not built-in functionality - use local state to implement.',
			},
		},
	},
	render: function Render() {
		const [expanded, setExpanded] = useState(true);

		return (
			<DsCard.Root size="large" className={styles.collapseRoot}>
				<DsCard.Header className={styles.collapseHeader}>
					<button
						type="button"
						className={styles.collapsibleButton}
						onClick={() => setExpanded(!expanded)}
						aria-expanded={expanded}
					>
						<DsIcon
							icon="expand_more"
							style={{
								transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
								transition: 'transform 150ms ease-in-out',
							}}
						/>
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
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const toggleButton = canvas.getByRole('button');

		// Initially expanded
		await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

		// Click to collapse
		await userEvent.click(toggleButton);
		await expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

		// Click to expand again
		await userEvent.click(toggleButton);
		await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
	},
};
