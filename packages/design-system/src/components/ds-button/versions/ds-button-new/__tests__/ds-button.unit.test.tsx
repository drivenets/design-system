import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DsButton from '../ds-button-new';

describe('DsButton', () => {
	it('should trigger onClick handler when clicked', async () => {
		// Arrange.
		const onClick = vi.fn();

		render(<DsButton onClick={onClick}>Click me</DsButton>);

		// Act.
		await userEvent.click(screen.getByRole('button', { name: 'Click me' }));

		// Assert.
		expect(onClick).toHaveBeenCalled();
	});

	it('should support disabled state', async () => {
		// Arrange.
		const onClick = vi.fn();

		render(
			<DsButton onClick={onClick} disabled>
				Click me
			</DsButton>,
		);

		const button = screen.getByRole('button', { name: 'Click me' });

		// Act.
		await userEvent.click(button);

		// Assert.
		expect(onClick).not.toHaveBeenCalled();
		expect(button).toBeDisabled();
	});

	it('should support custom class names', () => {
		// Arrange.
		const className = 'custom-class';

		// Act.
		render(<DsButton className={className}>Click me</DsButton>);

		// Assert.
		expect(screen.getByRole('button', { name: 'Click me' })).toHaveClass(className);
	});
});
