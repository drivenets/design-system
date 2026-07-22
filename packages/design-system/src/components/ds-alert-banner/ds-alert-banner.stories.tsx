import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import DsAlertBanner from './ds-alert-banner';
import { type AlertBannerVariant, alertBannerVariants } from './ds-alert-banner.types';
import type { IconType } from '../ds-icon';
import { DsButtonV3 } from '../ds-button-v3';
import { DsStack } from '../ds-stack';

const meta: Meta<typeof DsAlertBanner> = {
	title: 'Components/AlertBanner',
	component: DsAlertBanner,
	parameters: {
		layout: 'padded',
	},
	args: {
		open: true,
		onOpenChange: fn(),
	},
	argTypes: {
		variant: { control: 'select', options: alertBannerVariants },
		inline: { control: 'boolean' },
		closable: { control: 'boolean' },
		open: { control: 'boolean' },
		icon: { control: 'text' },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsAlertBanner>;

const variantIcons: Record<AlertBannerVariant, IconType> = {
	'info-neutral': 'info',
	'info-blue': 'info',
	warning: 'warning',
	error: 'error',
	success: 'check_circle',
};

/**
 * The default inline banner: a bordered card that sits in normal document flow.
 * Compose the message from `DsAlertBanner.Title` and `DsAlertBanner.Body`.
 */
export const Default: Story = {
	args: {
		inline: true,
		variant: 'info-blue',
		icon: 'info',
	},
	render: (args) => (
		<DsAlertBanner {...args}>
			<DsAlertBanner.Title>Information</DsAlertBanner.Title>
			<DsAlertBanner.Body>This is a blue informational alert message.</DsAlertBanner.Body>
		</DsAlertBanner>
	),
};

/**
 * Low-emphasis informational tone. Use for neutral, non-urgent context that
 * should not compete with the primary content.
 */
export const InfoNeutral: Story = {
	args: {
		inline: true,
		variant: 'info-neutral',
		icon: 'info',
	},
	render: (args) => (
		<DsAlertBanner {...args}>
			<DsAlertBanner.Title>Information</DsAlertBanner.Title>
			<DsAlertBanner.Body>This is an informational alert message.</DsAlertBanner.Body>
		</DsAlertBanner>
	),
};

/**
 * Use to flag something that needs attention but is not yet a failure — for
 * example an action with side effects or a soon-to-expire state.
 */
export const Warning: Story = {
	args: {
		inline: true,
		variant: 'warning',
		icon: 'warning',
	},
	render: (args) => (
		<DsAlertBanner {...args}>
			<DsAlertBanner.Title>Warning</DsAlertBanner.Title>
			<DsAlertBanner.Body>This is a warning alert message. Please pay attention.</DsAlertBanner.Body>
		</DsAlertBanner>
	),
};

/**
 * Use for failures the user must resolve, such as a rejected submission or a
 * blocked operation.
 */
export const Error: Story = {
	args: {
		inline: true,
		variant: 'error',
		icon: 'error',
	},
	render: (args) => (
		<DsAlertBanner {...args}>
			<DsAlertBanner.Title>Error</DsAlertBanner.Title>
			<DsAlertBanner.Body>Something went wrong. Please try again.</DsAlertBanner.Body>
		</DsAlertBanner>
	),
};

/**
 * Confirms that an action completed. Reserve for positive, terminal feedback so
 * the success tone stays meaningful.
 */
export const Success: Story = {
	args: {
		inline: true,
		variant: 'success',
		icon: 'check_circle',
	},
	render: (args) => (
		<DsAlertBanner {...args}>
			<DsAlertBanner.Title>Success</DsAlertBanner.Title>
			<DsAlertBanner.Body>Your action was completed successfully!</DsAlertBanner.Body>
		</DsAlertBanner>
	),
};

/**
 * Global layout (`inline: false`) is a full-width bar designed for the top of a
 * page. The title is hidden and the body truncates, so lead with a concise
 * `DsAlertBanner.Body`.
 */
export const Global: Story = {
	render: () => (
		<DsAlertBanner inline={false} variant="info-blue" icon="info" closable open onOpenChange={() => {}}>
			<DsAlertBanner.Body>A new version is available. Refresh to update.</DsAlertBanner.Body>
		</DsAlertBanner>
	),
};

/**
 * Adding `closable` renders a close button that fires `onOpenChange(false)`.
 * Drive the `open` prop from your own state to actually dismiss the banner (see
 * the Controlled story).
 */
export const Closable: Story = {
	args: {
		inline: true,
		variant: 'info-neutral',
		icon: 'info',
		closable: true,
	},
	render: (args) => (
		<DsAlertBanner {...args}>
			<DsAlertBanner.Title>Dismissible</DsAlertBanner.Title>
			<DsAlertBanner.Body>You can close this banner with the button on the right.</DsAlertBanner.Body>
		</DsAlertBanner>
	),
};

/**
 * Attach follow-up actions with `DsAlertBanner.Actions`. Keep the primary action
 * first and limit the count so the banner stays scannable.
 */
export const WithActions: Story = {
	args: {
		inline: true,
		variant: 'warning',
		icon: 'warning',
	},
	render: (args) => (
		<DsAlertBanner {...args}>
			<DsAlertBanner.Title>Attention needed</DsAlertBanner.Title>
			<DsAlertBanner.Body>
				You successfully read this important alert message. Choose how you want to proceed.
			</DsAlertBanner.Body>
			<DsAlertBanner.Actions>
				<DsButtonV3 color="error" variant="primary" size="small">
					Proceed
				</DsButtonV3>
				<DsButtonV3 variant="secondary" size="small">
					Skip
				</DsButtonV3>
			</DsAlertBanner.Actions>
		</DsAlertBanner>
	),
};

/**
 * Without a `Title`, the inline layout vertically centers the icon against a
 * single-line body. Use for short, self-explanatory messages.
 */
export const WithoutTitle: Story = {
	args: {
		inline: true,
		variant: 'error',
		icon: 'error',
		closable: true,
	},
	render: (args) => (
		<DsAlertBanner {...args}>
			<DsAlertBanner.Body>Something went wrong. Please try again.</DsAlertBanner.Body>
		</DsAlertBanner>
	),
};

/**
 * `open` / `onOpenChange` form a controlled pair. Wire them to local state so the
 * close button hides the banner and a trigger can bring it back.
 */
export const Controlled: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: (args) => {
		const [open, setOpen] = useState(false);

		return (
			<DsStack direction="column" alignItems="flex-start" gap="var(--standard)" width="400px">
				<DsButtonV3 variant="secondary" size="small" onClick={() => setOpen(true)}>
					Show alert banner
				</DsButtonV3>
				<DsAlertBanner {...args} open={open} onOpenChange={setOpen}>
					<DsAlertBanner.Title>Attention needed</DsAlertBanner.Title>
					<DsAlertBanner.Body>Close this banner and use the button to bring it back.</DsAlertBanner.Body>
				</DsAlertBanner>
			</DsStack>
		);
	},
	args: {
		inline: true,
		variant: 'warning',
		icon: 'warning',
		closable: true,
	},
};

/**
 * Visual reference of every variant in the inline layout. Not a usage example —
 * pick a single variant per banner in product code.
 */
export const AllVariants: Story = {
	tags: ['!manifest'],
	parameters: {
		docs: { canvas: { sourceState: 'none' } },
	},
	args: {
		inline: true,
		closable: true,
	},
	render: (args) => (
		<DsStack direction="column" alignItems="flex-start" gap="var(--standard)" width="400px">
			{alertBannerVariants.map((variant) => (
				<DsAlertBanner key={variant} {...args} variant={variant} icon={variantIcons[variant]}>
					<DsAlertBanner.Title>{variant}</DsAlertBanner.Title>
					<DsAlertBanner.Body>Alert banner using the {variant} variant.</DsAlertBanner.Body>
				</DsAlertBanner>
			))}
		</DsStack>
	),
};
