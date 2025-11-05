import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import { useState } from 'react';
import DsAlertBanner from '../ds-alert-banner';
import { DsButton } from '../../ds-button';
import { alertBannerVariants } from '../ds-alert-banner.types';
import styles from './ds-alert-banner.stories.module.scss';

const meta: Meta<typeof DsAlertBanner> = {
	title: 'Design System/AlertBanner/Global',
	component: DsAlertBanner,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		open: {
			control: 'boolean',
			description: 'Controls whether the alert banner is visible',
		},
		variant: {
			control: 'select',
			options: alertBannerVariants,
			description: 'The variant of the alert banner',
		},
		closable: {
			control: 'boolean',
			description: 'Whether the alert banner can be closed with an X button',
		},
		className: {
			control: 'text',
			description: 'Additional CSS class names',
		},
		inline: {
			control: 'boolean',
			description:
				'Whether the alert banner should be inline (normal document flow) instead of global (designed for top of the page)',
		},
		style: {
			control: 'object',
			description: 'Inline styles to apply to the component',
		},
		onOpenChange: {
			action: 'onOpenChange',
			description: 'Callback fired when the alert banner should be closed',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsAlertBanner>;

export const InfoBlue: Story = {
	render: function Render() {
		const [open, setOpen] = useState(true);
		return (
			<DsAlertBanner open={open} onOpenChange={setOpen} variant="info-blue" icon="info" closable={true}>
				<DsAlertBanner.Title>Information</DsAlertBanner.Title>
				<DsAlertBanner.Body>
					Aww yeah, you successfully read this important alert message. This example text is going to run a
					bit longer so that you can see how spacing within an alert works with this kind of content.
				</DsAlertBanner.Body>
				<DsAlertBanner.Actions>
					<DsButton design="v1.2" variant="danger" size="small">
						Proceed
					</DsButton>
					<DsButton design="v1.2" buttonType="secondary" size="small">
						Skip
					</DsButton>
				</DsAlertBanner.Actions>
			</DsAlertBanner>
		);
	},
};

export const InfoNeutral: Story = {
	render: function Render() {
		const [open, setOpen] = useState(true);
		return (
			<DsAlertBanner open={open} onOpenChange={setOpen} variant="info-neutral" closable={true}>
				<DsAlertBanner.Title>Information</DsAlertBanner.Title>
				<DsAlertBanner.Body>This is an informational alert message.</DsAlertBanner.Body>
			</DsAlertBanner>
		);
	},
};

export const Warning: Story = {
	render: function Render() {
		const [open, setOpen] = useState(true);
		return (
			<DsAlertBanner open={open} onOpenChange={setOpen} variant="warning" icon="warning" closable={true}>
				<DsAlertBanner.Title>Warning</DsAlertBanner.Title>
				<DsAlertBanner.Body>This is a warning alert message. Please pay attention.</DsAlertBanner.Body>
			</DsAlertBanner>
		);
	},
};

export const Error: Story = {
	render: function Render() {
		const [open, setOpen] = useState(true);
		return (
			<DsAlertBanner open={open} onOpenChange={setOpen} variant="error" icon="error" closable={true}>
				<DsAlertBanner.Title>Error</DsAlertBanner.Title>
				<DsAlertBanner.Body>Something went wrong. Please try again.</DsAlertBanner.Body>
			</DsAlertBanner>
		);
	},
};

export const Success: Story = {
	render: function Render() {
		const [open, setOpen] = useState(true);
		return (
			<DsAlertBanner open={open} onOpenChange={setOpen} variant="success" icon="check_circle" closable={true}>
				<DsAlertBanner.Title>Success</DsAlertBanner.Title>
				<DsAlertBanner.Body>Your action was completed successfully!</DsAlertBanner.Body>
			</DsAlertBanner>
		);
	},
};

export const WithActions: Story = {
	render: function Render() {
		const [open, setOpen] = useState(false);

		return (
			<div>
				<div className={styles.globalMessages}>
					<DsAlertBanner open={open} onOpenChange={setOpen} variant="warning" icon="warning" closable={true}>
						<DsAlertBanner.Title>Attention needed</DsAlertBanner.Title>
						<DsAlertBanner.Body>
							Aww yeah, you successfully read this important alert message. This example text is going to run
							a bit longer so that you can see how spacing within an alert works with this kind of content.
						</DsAlertBanner.Body>
						<DsAlertBanner.Actions>
							<DsButton design="v1.2" variant="danger" size="small">
								Proceed
							</DsButton>
							<DsButton design="v1.2" buttonType="secondary" size="small">
								Skip
							</DsButton>
						</DsAlertBanner.Actions>
					</DsAlertBanner>
				</div>
				<DsButton className={styles.trigger} onClick={() => setOpen(true)}>
					Show Alert Banner
				</DsButton>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Click the button to show the alert banner
		const showButton = canvas.getByText('Show Alert Banner');
		await userEvent.click(showButton);

		// Verify component renders correctly
		const component = canvas.getByText('Attention needed');
		await expect(component).toBeTruthy();

		// Test close button functionality
		const closeButton = canvas.getByLabelText('Close alert');
		await expect(closeButton).toBeTruthy();

		await userEvent.click(closeButton);
		await waitFor(() => {
			// The component should be hidden after clicking close
			expect(canvas.queryByText('Attention needed')).toBeFalsy();
		});
	},
};

export const CustomBody: Story = {
	render: function Render() {
		const [open, setOpen] = useState(false);

		return (
			<div>
				<div className={styles.globalMessages}>
					<DsAlertBanner
						className={styles.customBody}
						open={open}
						onOpenChange={setOpen}
						variant="warning"
						icon="warning"
						closable
					>
						<DsAlertBanner.Title>Security Alert</DsAlertBanner.Title>
						<DsAlertBanner.Body>
							<div className={styles.customBodyContainer}>
								<p className={styles.customBodyText}>
									Multiple security vulnerabilities have been detected in your system:
								</p>
								<div className={styles.securityCardsContainer}>
									<div className={`${styles.securityCard} ${styles.securityCardCritical}`}>
										<span className={`${styles.securityCardTitle} ${styles.securityCardTitleCritical}`}>
											Critical: SQL Injection
										</span>
										<span className={styles.securityCardScore}>CVSS: 9.8</span>
									</div>
									<div className={`${styles.securityCard} ${styles.securityCardHigh}`}>
										<span className={`${styles.securityCardTitle} ${styles.securityCardTitleHigh}`}>
											High: XSS Vulnerability
										</span>
										<span className={styles.securityCardScore}>CVSS: 7.2</span>
									</div>
								</div>
								<div className={styles.recommendationsBox}>
									<strong>Recommended actions:</strong>
									<br />
									• Update all dependencies immediately
									<br />
									• Review and sanitize user inputs
									<br />• Implement additional security headers
								</div>
							</div>
						</DsAlertBanner.Body>
						<DsAlertBanner.Actions>
							<DsButton design="v1.2" variant="danger" size="small">
								Fix Now
							</DsButton>
							<DsButton design="v1.2" buttonType="secondary" size="small">
								View Details
							</DsButton>
							<DsButton design="v1.2" buttonType="secondary" size="small">
								Ignore
							</DsButton>
						</DsAlertBanner.Actions>
					</DsAlertBanner>
				</div>
				<DsButton className={styles.trigger} onClick={() => setOpen(true)}>
					Show Security Alert
				</DsButton>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'A global alert banner with complex JSX content in the body, including security vulnerability cards, styled information boxes, and multiple action buttons.',
			},
		},
	},
};
