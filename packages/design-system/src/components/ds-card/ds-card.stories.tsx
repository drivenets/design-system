import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { DsCard } from './index';
import { cardSizes } from './ds-card.types';

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
			<DsCard.Header>
				<DsCard.Title>Card Title</DsCard.Title>
			</DsCard.Header>
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
		<div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
			<DsCard.Root size="small">
				<DsCard.Header>
					<DsCard.Title>Small Card</DsCard.Title>
				</DsCard.Header>
				<DsCard.Body>Small content</DsCard.Body>
			</DsCard.Root>

			<DsCard.Root size="medium">
				<DsCard.Header>
					<DsCard.Title>Medium Card</DsCard.Title>
				</DsCard.Header>
				<DsCard.Body>Medium content</DsCard.Body>
			</DsCard.Root>

			<DsCard.Root size="large">
				<DsCard.Header>
					<DsCard.Title>Large Card</DsCard.Title>
				</DsCard.Header>
				<DsCard.Body>Large content</DsCard.Body>
			</DsCard.Root>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Small Card')).toBeInTheDocument();
		await expect(canvas.getByText('Medium Card')).toBeInTheDocument();
		await expect(canvas.getByText('Large Card')).toBeInTheDocument();
	},
};

export const CustomHeaderLayout: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Header accepts any children - not limited to Title/Extra structure.',
			},
		},
	},
	render: () => (
		<DsCard.Root size="large">
			<DsCard.Header style={{ justifyContent: 'center' }}>
				<span style={{ fontWeight: 'bold', fontSize: '18px' }}>Centered Custom Header</span>
			</DsCard.Header>
			<DsCard.Body>The header can contain any custom layout</DsCard.Body>
		</DsCard.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Centered Custom Header')).toBeInTheDocument();
	},
};
