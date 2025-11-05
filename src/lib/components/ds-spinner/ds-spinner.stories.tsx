import type { Meta, StoryObj } from '@storybook/react';
import DsSpinner from './ds-spinner';
import { spinnerSizes } from './ds-spinner.types';
import styles from './ds-spinner.stories.module.scss';

const meta: Meta<typeof DsSpinner> = {
	title: 'Design System/Spinner',
	component: DsSpinner,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: spinnerSizes,
			description: 'The size of the spinner',
		},
		className: {
			control: 'text',
			description: 'Additional CSS class names',
		},
		style: {
			control: 'object',
			description: 'Inline styles to apply to the component',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsSpinner>;

export const Default: Story = {
	args: {},
};

export const AllSizes: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
				<DsSpinner size="small" />
				<span>Small</span>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
				<DsSpinner size="medium" />
				<span>Default</span>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
				<DsSpinner size="large" />
				<span>Large</span>
			</div>
		</div>
	),
};

export const ModalLoading: Story = {
	render: () => (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				<DsSpinner />
				<div className={styles.modalText}>
					<p className={styles.modalTextPrimary}>Explanation text will describe the process.</p>
					<p className={styles.modalTextSecondary}>Two lines will be aimed for this.</p>
				</div>
			</div>
		</div>
	),
};
