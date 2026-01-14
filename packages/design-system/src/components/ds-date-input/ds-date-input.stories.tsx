import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { expect, screen, userEvent, within } from 'storybook/test';
import DsDateInput from './ds-date-input';
import type { DsDateInputProps } from './ds-date-input.types';
import styles from './ds-date-input.stories.module.scss';

const meta: Meta<typeof DsDateInput> = {
	title: 'Design System/DateInput',
	component: DsDateInput,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<DsDateInputProps>;

/**
 * Basic single date input with default configuration
 */
export const Default: Story = {
	render: function Render() {
		const [value, setValue] = useState<string>();

		return <DsDateInput className={styles.containerSingle} value={value} onValueChange={setValue} />;
	},
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('MM/DD/YYYY');
		const calendarButton = canvas.getByRole('button', { name: /open calendar/i });

		// 1. Open calendar and select a date (01/15/2026)
		await userEvent.click(calendarButton);
		const jan15Button = screen.getByRole('button', { name: /Choose.*January 15, 2026/i });
		await userEvent.click(jan15Button);

		// Verify input shows selected date
		await expect(input).toHaveValue('01/15/2026');

		// 2. Open calendar again and verify it shows the new date as selected
		await userEvent.click(calendarButton);
		const initialSelectedCell = screen.queryByRole('gridcell', { selected: true });
		await expect(initialSelectedCell).toBeInTheDocument();
		await expect(initialSelectedCell).toHaveAttribute('data-value', '2026-01-15');

		// 3. Type a different date into the input (01/16/2026)
		await userEvent.clear(input);
		await userEvent.type(input, '01/16/2026');

		// Verify input updated
		await expect(input).toHaveValue('01/16/2026');

		// 4. Verify calendar shows the new date as selected
		const selectedCell = screen.queryByRole('gridcell', { selected: true });
		await expect(selectedCell).toBeInTheDocument();
		await expect(selectedCell).toHaveAttribute('data-value', '2026-01-16');

		// 5. Select another date (01/17/2026)
		const jan17Button = screen.getByRole('button', { name: /Choose.*January 17, 2026/i });
		await userEvent.click(jan17Button);

		// 6. Verify input text updated
		await expect(input).toHaveValue('01/17/2026');

		// 7. Click clear button and verify input is cleared
		const clearButton = canvas.getByRole('button', { name: /clear date/i });
		await userEvent.click(clearButton);

		await expect(input).toHaveValue('');

		// 8. Verify clear button is gone after clearing
		const clearButtonAfter = canvas.queryByRole('button', { name: /clear date/i });
		await expect(clearButtonAfter).not.toBeInTheDocument();

		// Exit the calendar display
		await userEvent.keyboard('{Escape}');
	},
};

/**
 * Date range input - unified input field for start and end dates
 */
export const RangeMode: Story = {
	render: function Render() {
		const [value, setValue] = useState<[string, string]>();

		return <DsDateInput className={styles.containerRange} value={value} onValueChange={setValue} range />;
	},
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('MM/DD/YYYY - MM/DD/YYYY');
		const calendarButton = canvas.getByRole('button', { name: /open calendar/i });

		// 1. Open calendar and select range [01/15/2026 - 01/17/2026]
		await userEvent.click(calendarButton);

		// Click start date (01/15/2026)
		const jan15Button = screen.getByRole('button', { name: /Choose.*January 15, 2026/i });
		await userEvent.click(jan15Button);

		// Click end date (01/17/2026)
		const jan17Button = screen.getByRole('button', { name: /Choose.*January 17, 2026/i });
		await userEvent.click(jan17Button);

		// 2. Check calendar shows the selection correctly (both dates marked as selected)
		const allCells = screen.queryAllByRole('gridcell');
		const jan15Cell = allCells.find((cell) => cell.getAttribute('data-value') === '2026-01-15');
		const jan17Cell = allCells.find((cell) => cell.getAttribute('data-value') === '2026-01-17');

		await expect(jan15Cell).toBeInTheDocument();
		await expect(jan17Cell).toBeInTheDocument();
		await expect(jan15Cell).toHaveAttribute('aria-selected', 'true');
		await expect(jan17Cell).toHaveAttribute('aria-selected', 'true');

		// 3. Check input text is updated correctly
		await expect(input).toHaveValue('01/15/2026 - 01/17/2026');

		// 4. Type a new range [01/14/2026 - 01/18/2026]
		await userEvent.clear(input);
		await userEvent.type(input, '01/14/2026 - 01/18/2026');
		await userEvent.tab(); // Trigger blur to validate

		// Verify input updated
		await expect(input).toHaveValue('01/14/2026 - 01/18/2026');

		// Wait a moment for the internal state to sync
		await new Promise((resolve) => setTimeout(resolve, 100));

		// 5. Check calendar is updated correctly
		await userEvent.click(calendarButton);

		// Check the new selected dates
		const allTheCells = screen.queryAllByRole('gridcell');
		const jan14Cell = allTheCells.find((cell) => cell.getAttribute('data-value') === '2026-01-14');
		const jan18Cell = allTheCells.find((cell) => cell.getAttribute('data-value') === '2026-01-18');

		await expect(jan14Cell).toBeInTheDocument();
		await expect(jan18Cell).toBeInTheDocument();
		await expect(jan14Cell).toHaveAttribute('aria-selected', 'true');
		await expect(jan18Cell).toHaveAttribute('aria-selected', 'true');

		// 6. Click clear button and verify input is cleared
		const clearButton = canvas.getByRole('button', { name: /clear date/i });
		await userEvent.click(clearButton);

		await expect(input).toHaveValue('');

		// Verify clear button is gone after clearing
		const clearButtonAfter = canvas.queryByRole('button', { name: /clear date/i });
		await expect(clearButtonAfter).not.toBeInTheDocument();

		// Exit the calendar display
		await userEvent.keyboard('{Escape}');
	},
};

/**
 * Single date input with pre-filled value
 */
export const WithDefaultValue: Story = {
	args: {
		className: styles.containerSingle,
		defaultValue: '2024-12-25',
	},
};

/**
 * Range input with pre-filled values
 */
export const RangeWithDefaultValue: Story = {
	args: {
		className: styles.containerRange,
		defaultValue: ['2024-12-01', '2024-12-31'],
		range: true,
	},
};

/**
 * Date input with min and max constraints
 */
export const WithMinMax: Story = {
	render: function Render() {
		const [value, setValue] = useState<string>();
		const today = new Date();
		const minDate = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split('T')[0];
		const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, 0).toISOString().split('T')[0];

		return (
			<div className={styles.containerSingle}>
				<DsDateInput
					value={value}
					onValueChange={setValue}
					placeholder="MM/DD/YYYY"
					min={minDate}
					max={maxDate}
				/>
				<p className={styles.helperText}>Allowed: Current month to next 3 months only</p>
			</div>
		);
	},
};

/**
 * Disabled date input
 */
export const Disabled: Story = {
	args: {
		className: styles.containerSingle,
		value: '2024-12-25',
		disabled: true,
	},
};

/**
 * Read-only date input
 */
export const ReadOnly: Story = {
	args: {
		className: styles.containerSingle,
		value: '2024-12-25',
		readOnly: true,
	},
};

/**
 * Controlled open state
 */
export const ControlledOpen: Story = {
	render: function Render() {
		const [value, setValue] = useState<string>();
		const [open, setOpen] = useState(false);

		return (
			<div className={styles.containerSingle}>
				<div className={styles.buttonContainer}>
					<button onClick={() => setOpen(!open)}>{open ? 'Close' : 'Open'} Calendar</button>
				</div>
				<DsDateInput value={value} onValueChange={setValue} open={open} onOpenChange={setOpen} />
			</div>
		);
	},
};

/**
 * Uncontrolled with defaultValue
 */
export const Uncontrolled: Story = {
	render: function Render() {
		return (
			<div className={styles.containerSingle}>
				<DsDateInput defaultValue="2024-12-25" />
			</div>
		);
	},
};

/**
 * Manual typing demonstration
 */
export const ManualTyping: Story = {
	render: function Render() {
		const [value, setValue] = useState<[string, string]>();

		return (
			<div className={styles.containerRange}>
				<DsDateInput value={value} onValueChange={setValue} range />
				<div className={styles.infoContainer}>
					<p>Try typing: &#34;12/01/2024 - 12/31/2024&#34;</p>
					<p>Validation happens on blur</p>
					<p>Invalid format resets to empty</p>
					<p>Current value: {JSON.stringify(value)}</p>
				</div>
			</div>
		);
	},
};
