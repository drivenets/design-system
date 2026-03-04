import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DsCheckbox from '../ds-checkbox';

describe('DsCheckbox', () => {
	it('should toggle checked state when clicked', async () => {
		// Arrange.
		render(<DsCheckbox label="label" labelInfo="labelInfo" className="custom-checkbox" />);

		const checkbox = screen.getByRole('checkbox');

		// Assert.
		expect(checkbox).not.toBeChecked();
		expect(screen.getByText('labelInfo')).toBeInTheDocument();

		// Act & Assert.
		await userEvent.click(checkbox);
		expect(checkbox).toBeChecked();

		// Act & Assert.
		await userEvent.click(checkbox);
		expect(checkbox).not.toBeChecked();
	});

	it('should render in indeterminate state', () => {
		// Arrange.
		function IndeterminateCheckbox() {
			const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');

			return (
				<DsCheckbox
					label="label"
					labelInfo="labelInfo"
					checked={checked}
					onCheckedChange={(newState) => setChecked(newState)}
				/>
			);
		}

		// Act.
		render(<IndeterminateCheckbox />);

		// Assert.
		const checkbox = screen.getByRole('checkbox');

		expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
	});

	it('should support disabled state', async () => {
		// Arrange.
		render(<DsCheckbox label="label" labelInfo="labelInfo" disabled />);

		const checkbox = screen.getByRole('checkbox');

		// Assert.
		expect(checkbox).toBeDisabled();
		expect(screen.getByText('labelInfo')).toBeInTheDocument();

		// Act & Assert.
		await userEvent.click(checkbox);
		expect(checkbox).not.toBeChecked();
	});
});
