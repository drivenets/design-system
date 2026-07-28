import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import DsNumberInput from '../ds-number-input';
import { DsFormControl } from '../../ds-form-control';

describe('DsNumberInput id forwarding', () => {
	it('forwards an explicit id to the underlying input', async () => {
		await page.render(<DsNumberInput id="ports" placeholder="Enter number" />);

		await expect.element(page.getByPlaceholder('Enter number')).toHaveAttribute('id', 'ports');
	});

	it('associates the DsFormControl label with the input', async () => {
		await page.render(
			<DsFormControl id="number-of-ports" label="Number of ports">
				<DsFormControl.NumberInput placeholder="Enter number" />
			</DsFormControl>,
		);

		const input = page.getByLabelText('Number of ports');
		await expect.element(input).toBeVisible();
		await expect.element(input).toHaveAttribute('id', 'number-of-ports');
	});
});
