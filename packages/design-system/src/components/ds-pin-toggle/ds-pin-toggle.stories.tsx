import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { DsPinToggle } from './index';
import { DsCheckbox } from '../ds-checkbox';
import { DsStack } from '../ds-stack';
import styles from './ds-pin-toggle.stories.module.scss';

const meta: Meta<typeof DsPinToggle> = {
	title: 'Components/PinToggle',
	component: DsPinToggle,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		itemLabel: {
			control: 'text',
			description: 'Row name composed into the accessible name as `Pin {itemLabel}`',
		},
		pinned: {
			control: 'boolean',
			description: 'Controlled pinned state, reported as `aria-pressed`',
		},
		disabled: {
			control: 'boolean',
			description: 'Disables the pin, preventing user interaction',
		},
		locale: {
			control: false,
			description: 'Override for the `Pin` verb in the accessible name',
		},
		onPinnedChange: {
			description: 'Called on activation with the negation of `pinned`',
		},
		className: {
			table: { disable: true },
			control: false,
		},
		style: {
			table: { disable: true },
			control: false,
		},
		ref: {
			table: { disable: true },
			control: false,
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsPinToggle>;

export const Default: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [pinned, setPinned] = useState(false);

		return <DsPinToggle itemLabel="Notifications" pinned={pinned} onPinnedChange={setPinned} />;
	},
};

export const Pinned: Story = {
	args: {
		itemLabel: 'Notifications',
		pinned: true,
	},
};

export const Disabled: Story = {
	args: {
		itemLabel: 'Notifications',
		pinned: true,
		disabled: true,
	},
};

export const Localized: Story = {
	args: {
		itemLabel: 'Notifications',
		locale: { pin: 'Keep' },
	},
};

export const States: Story = {
	tags: ['!manifest'],
	parameters: {
		docs: {
			canvas: { sourceState: 'none' },
		},
	},
	render: () => (
		<DsStack direction="row" gap="var(--xs)">
			<DsPinToggle itemLabel="unpinned row" />
			<DsPinToggle itemLabel="pinned row" pinned />
			<DsPinToggle itemLabel="disabled row" disabled />
			<DsPinToggle itemLabel="disabled pinned row" pinned disabled />
		</DsStack>
	),
};

export const InCheckboxRow: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const rows = ['Active', 'Deprecated', 'Inactive', 'Pending', 'Draft'];
		const [pinned, setPinned] = useState<string[]>(['Active']);

		const isPinned = (row: string) => pinned.includes(row);

		// Stable partition, so pinning a row lifts it to the top without
		// reshuffling the rows around it.
		const ordered = [...rows.filter(isPinned), ...rows.filter((row) => !isPinned(row))];

		return (
			<DsStack gap="var(--3xs)" className={styles.checkboxRows}>
				{ordered.map((row) => (
					<DsCheckbox
						key={row}
						label={row}
						actions={
							<DsPinToggle
								itemLabel={row}
								pinned={isPinned(row)}
								onPinnedChange={(next) =>
									setPinned((current) => (next ? [...current, row] : current.filter((name) => name !== row)))
								}
							/>
						}
					/>
				))}
			</DsStack>
		);
	},
};
