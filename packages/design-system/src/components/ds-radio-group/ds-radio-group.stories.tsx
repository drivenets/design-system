import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsRadioGroup } from './ds-radio-group';
import styles from './ds-radio-group.stories.module.scss';

const meta: Meta = {
	title: 'Components/RadioGroup',
	component: DsRadioGroup.Root,
	parameters: {
		layout: 'centered',
	},
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
