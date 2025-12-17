import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { DsConfirmation } from './ds-confirmation';
import DsButton from '../ds-button/ds-button';
import { DsIcon } from '../ds-icon';
import styles from './ds-confirmation.stories.module.scss';

const meta: Meta<typeof DsConfirmation> = {
	title: 'Design System/Confirmation',
	component: DsConfirmation,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		open: {
			control: { type: 'boolean' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsConfirmation>;

export const Default: Story = {
	render: function Render() {
		const [open, setOpen] = useState(false);
		return (
			<>
				<DsButton onClick={() => setOpen(true)}>Open Confirmation</DsButton>
				<DsConfirmation open={open} onOpenChange={setOpen}>
					<DsConfirmation.Header>
						<DsIcon style={{ color: 'var(--color-icon-information-secondary)' }} icon="info" size="small" />
						<DsConfirmation.Title>Confirm Action</DsConfirmation.Title>
						<DsConfirmation.CloseTrigger />
					</DsConfirmation.Header>
					<DsConfirmation.Body>Are you sure you want to proceed with this action?</DsConfirmation.Body>
					<DsConfirmation.Footer>
						<DsConfirmation.Actions>
							<DsButton
								design="v1.2"
								buttonType="secondary"
								size="large"
								onClick={() => {
									console.log('Reject clicked');
									setOpen(false);
								}}
							>
								No
							</DsButton>
							<DsButton
								design="v1.2"
								variant="filled"
								size="large"
								onClick={() => {
									console.log('Accept clicked');
									setOpen(false);
								}}
							>
								Yes
							</DsButton>
						</DsConfirmation.Actions>
					</DsConfirmation.Footer>
				</DsConfirmation>
			</>
		);
	},
};

export const WithCancel: Story = {
	render: function Render() {
		const [open, setOpen] = useState(false);
		return (
			<>
				<DsButton onClick={() => setOpen(true)}>Open Confirmation</DsButton>
				<DsConfirmation open={open} onOpenChange={setOpen}>
					<DsConfirmation.Header>
						<DsIcon style={{ color: 'var(--color-icon-warning)' }} icon="error" size="small" />
						<DsConfirmation.Title>Save Changes</DsConfirmation.Title>
						<DsConfirmation.CloseTrigger />
					</DsConfirmation.Header>
					<DsConfirmation.Body>Do you want to save your changes before closing?</DsConfirmation.Body>
					<DsConfirmation.Footer>
						<DsButton
							design="v1.2"
							buttonType="tertiary"
							size="large"
							onClick={() => {
								console.log('Cancel clicked');
								setOpen(false);
							}}
						>
							Cancel
						</DsButton>
						<DsConfirmation.Actions>
							<DsButton
								design="v1.2"
								buttonType="secondary"
								size="large"
								onClick={() => {
									console.log('Discard clicked');
									setOpen(false);
								}}
							>
								Discard
							</DsButton>
							<DsButton
								design="v1.2"
								variant="filled"
								size="large"
								onClick={() => {
									console.log('Save clicked');
									setOpen(false);
								}}
							>
								Save
							</DsButton>
						</DsConfirmation.Actions>
					</DsConfirmation.Footer>
				</DsConfirmation>
			</>
		);
	},
};

export const Danger: Story = {
	render: function Render() {
		const [open, setOpen] = useState(false);
		return (
			<>
				<DsButton onClick={() => setOpen(true)}>Open Confirmation</DsButton>
				<DsConfirmation open={open} onOpenChange={setOpen}>
					<DsConfirmation.Header>
						<DsIcon style={{ color: 'var(--color-icon-danger)' }} icon="cancel" size="small" />
						<DsConfirmation.Title>Delete Item</DsConfirmation.Title>
						<DsConfirmation.CloseTrigger />
					</DsConfirmation.Header>
					<DsConfirmation.Body>
						Are you sure you want to delete this item? This action cannot be undone.
					</DsConfirmation.Body>
					<DsConfirmation.Footer>
						<DsConfirmation.Actions>
							<DsButton
								design="v1.2"
								buttonType="secondary"
								size="large"
								onClick={() => {
									console.log('Cancel clicked');
									setOpen(false);
								}}
							>
								Cancel
							</DsButton>
							<DsButton
								design="v1.2"
								variant="danger"
								size="large"
								onClick={() => {
									console.log('Delete clicked');
									setOpen(false);
								}}
							>
								Delete
							</DsButton>
						</DsConfirmation.Actions>
					</DsConfirmation.Footer>
				</DsConfirmation>
			</>
		);
	},
};

export const CustomBody: Story = {
	render: function Render() {
		const [open, setOpen] = useState(false);
		const [selectedOption, setSelectedOption] = useState('option1');

		return (
			<>
				<DsButton onClick={() => setOpen(true)}>Open Custom Confirmation</DsButton>
				<DsConfirmation style={{ maxBlockSize: 'none' }} open={open} onOpenChange={setOpen}>
					<DsConfirmation.Header>
						<DsIcon style={{ color: 'var(--color-icon-information-secondary)' }} icon="info" size="small" />
						<DsConfirmation.Title>Advanced Configuration</DsConfirmation.Title>
						<DsConfirmation.CloseTrigger />
					</DsConfirmation.Header>
					<DsConfirmation.Body>
						<div className={styles.customBodyContainer}>
							<p className={styles.customBodyText}>Please select your preferred configuration option:</p>
							<div className={styles.radioGroup}>
								<label className={styles.radioLabel}>
									<input
										type="radio"
										name="config-option"
										value="option1"
										checked={selectedOption === 'option1'}
										onChange={(e) => setSelectedOption(e.target.value)}
									/>
									<span>Standard configuration (recommended)</span>
								</label>
								<label className={styles.radioLabel}>
									<input
										type="radio"
										name="config-option"
										value="option2"
										checked={selectedOption === 'option2'}
										onChange={(e) => setSelectedOption(e.target.value)}
									/>
									<span>Advanced configuration with custom settings</span>
								</label>
								<label className={styles.radioLabel}>
									<input
										type="radio"
										name="config-option"
										value="option3"
										checked={selectedOption === 'option3'}
										onChange={(e) => setSelectedOption(e.target.value)}
									/>
									<span>Custom configuration (manual setup)</span>
								</label>
							</div>
							<div className={styles.infoNote}>
								<strong>Note:</strong> This action will apply the selected configuration to your current
								project. You can change this setting later in the project settings.
							</div>
						</div>
					</DsConfirmation.Body>
					<DsConfirmation.Footer>
						<DsConfirmation.Actions>
							<DsButton
								design="v1.2"
								buttonType="secondary"
								size="large"
								onClick={() => {
									console.log('Cancel clicked');
									setOpen(false);
								}}
							>
								Cancel
							</DsButton>
							<DsButton
								design="v1.2"
								variant="filled"
								size="large"
								onClick={() => {
									console.log('Apply configuration:', selectedOption);
									setOpen(false);
								}}
							>
								Apply Configuration
							</DsButton>
						</DsConfirmation.Actions>
					</DsConfirmation.Footer>
				</DsConfirmation>
			</>
		);
	},
};
