import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsRadioGroup } from '../ds-radio-group';

function clickRadio(locator: ReturnType<typeof page.getByRole>) {
	(locator.element() as HTMLElement).click();
}

describe('DsRadioGroup', () => {
	it('should select a radio item when clicked', async () => {
		function Controlled() {
			const [value, setValue] = useState<string | null>('option2');

			return (
				<DsRadioGroup.Root value={value} onValueChange={setValue}>
					<DsRadioGroup.Item value="option1" label="Option 1" />
					<DsRadioGroup.Item value="option2" label="Option 2" />
					<DsRadioGroup.Item value="option3" label="Option 3" />
				</DsRadioGroup.Root>
			);
		}

		await page.render(<Controlled />);

		const option1 = page.getByRole('radio', { name: /Option 1/i });
		const option2 = page.getByRole('radio', { name: /Option 2/i });
		const option3 = page.getByRole('radio', { name: /Option 3/i });

		await expect.element(option2).toBeChecked();

		clickRadio(option3);
		await expect.element(option2).not.toBeChecked();
		await expect.element(option3).toBeChecked();

		clickRadio(option1);
		await expect.element(option1).toBeChecked();
		await expect.element(option3).not.toBeChecked();
	});

	it('should not select a disabled item when clicked', async () => {
		function Controlled() {
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
		}

		await page.render(<Controlled />);

		const option1 = page.getByRole('radio', { name: /Disabled Option/i });
		const option2 = page.getByRole('radio', { name: /Option 2/i });

		await expect.element(option2).toBeChecked();

		clickRadio(option1);
		await expect.element(option1).not.toBeChecked();
		await expect.element(option2).toBeChecked();
	});

	it('should call onValueChange when selection changes', async () => {
		const onValueChange = vi.fn();

		await page.render(
			<DsRadioGroup.Root onValueChange={onValueChange}>
				<DsRadioGroup.Item value="a" label="A" />
				<DsRadioGroup.Item value="b" label="B" />
			</DsRadioGroup.Root>,
		);

		clickRadio(page.getByRole('radio', { name: /B/i }));
		await expect.element(page.getByRole('radio', { name: /B/i })).toBeChecked();
		expect(onValueChange).toHaveBeenCalledWith('b');
	});
});
