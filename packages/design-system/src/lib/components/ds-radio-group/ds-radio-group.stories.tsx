import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { DsRadioGroup } from './ds-radio-group';
import styles from './ds-radio-group.stories.module.scss';

const meta: Meta = {
	title: 'Design System/RadioGroup',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DsRadioGroup>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'A basic radio group with labels. Uses the compound component pattern where users compose Root and Item components.',
			},
		},
	},
	render: function Render() {
		const [value, setValue] = useState<string | null>('option2');

		return (
			<DsRadioGroup.Root value={value} onValueChange={setValue}>
				<DsRadioGroup.Item value="option1" label="Option 1" />
				<DsRadioGroup.Item value="option2" label="Option 2" />
				<DsRadioGroup.Item value="option3" label="Option 3" />
			</DsRadioGroup.Root>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Locate the radio buttons by their role
		const option1 = await canvas.findByRole('radio', { name: /Option 1/i });
		const option2 = await canvas.findByRole('radio', { name: /Option 2/i });
		const option3 = await canvas.findByRole('radio', { name: /Option 3/i });

		// Assert that Option 2 is initially selected
		await expect(option2).toBeChecked();

		// Click on Option 3
		await userEvent.click(option3);

		// Assert that Option 2 is no longer selected
		await expect(option2).not.toBeChecked();

		// Assert that Option 3 is now selected
		await expect(option3).toBeChecked();

		// Click on Option 1
		await userEvent.click(option1);

		// Assert that Option 1 is now selected
		await expect(option1).toBeChecked();
		await expect(option3).not.toBeChecked();
	},
};

export const WithDisabledItems: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Radio items can be disabled to prevent user interaction.',
			},
		},
	},
	render: function Render() {
		const [value, setValue] = useState<string | null>('option2');

		return (
			<DsRadioGroup.Root value={value} onValueChange={setValue}>
				<DsRadioGroup.Item
					value="option1"
					label="Disabled Option"
					labelInfo="This option is disabled"
					disabled
				/>
				<DsRadioGroup.Item value="option2" label="Option 2" labelInfo="Available option" />
				<DsRadioGroup.Item value="option3" label="Option 3" />
			</DsRadioGroup.Root>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Locate the radio buttons
		const option1 = await canvas.findByRole('radio', { name: /Disabled Option/i });
		const option2 = await canvas.findByRole('radio', { name: /Option 2/i });

		// Assert that Option 2 is initially selected
		await expect(option2).toBeChecked();

		// Assert that label info is displayed
		await expect(canvas.getByText('This option is disabled')).toBeInTheDocument();
		await expect(canvas.getByText('Available option')).toBeInTheDocument();

		// Attempt to click the disabled Option 1
		await userEvent.click(option1, { pointerEventsCheck: 0 });

		// Assert that Option 1 remains unchecked
		await expect(option1).not.toBeChecked();
		// Assert that Option 2 is still selected
		await expect(option2).toBeChecked();
	},
};

export const CustomComposition: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'For maximum flexibility, Item components can accept children for custom layouts. Useful for complex layouts or integration with other components.',
			},
		},
	},
	render: function Render() {
		const [value, setValue] = useState<string | null>('custom2');

		return (
			<DsRadioGroup.Root value={value} onValueChange={setValue}>
				<DsRadioGroup.Item value="custom1" className={styles.customItem}>
					<div className={styles.customLabel}>
						<div className={styles.customLabelTitle}>Custom Layout 1</div>
						<div className={styles.customLabelDescription}>With custom HTML structure</div>
					</div>
				</DsRadioGroup.Item>
				<DsRadioGroup.Item value="custom2" className={styles.customItem}>
					<div className={styles.customLabel}>
						<div className={styles.customLabelTitle}>Custom Layout 2</div>
						<div className={styles.customLabelDescription}>Complete control over rendering</div>
					</div>
				</DsRadioGroup.Item>
			</DsRadioGroup.Root>
		);
	},
};
