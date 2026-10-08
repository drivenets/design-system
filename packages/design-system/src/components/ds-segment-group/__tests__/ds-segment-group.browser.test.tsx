import { createRef, useState } from 'react';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { DsIcon } from '../../ds-icon';
import { DsSegmentGroup } from '../ds-segment-group';

// Ark renders the radio as a visually hidden input outside the viewport, so fire
// a native click on the element directly instead of a Playwright pointer click.
function clickRadio(locator: ReturnType<typeof page.getByRole>) {
	(locator.element() as HTMLElement).click();
}

describe('DsSegmentGroup', () => {
	it('moves selection between items on click', async () => {
		function Controlled() {
			const [value, setValue] = useState<string | null>('react');

			return (
				<DsSegmentGroup.Root value={value} onValueChange={setValue}>
					<DsSegmentGroup.Item value="react" label="React" />
					<DsSegmentGroup.Item value="vue" label="Vue" />
					<DsSegmentGroup.Item value="angular" label="Angular" />
				</DsSegmentGroup.Root>
			);
		}

		await page.render(<Controlled />);

		const react = page.getByRole('radio', { name: 'React' });
		const vue = page.getByRole('radio', { name: 'Vue' });
		const angular = page.getByRole('radio', { name: 'Angular' });

		await expect.element(react).toBeChecked();

		clickRadio(vue);
		await expect.element(vue).toBeChecked();
		await expect.element(react).not.toBeChecked();

		clickRadio(angular);
		await expect.element(angular).toBeChecked();
		await expect.element(vue).not.toBeChecked();
	});

	it('names an icon-only item and the group by their aria-label', async () => {
		await page.render(
			<DsSegmentGroup.Root defaultValue="list" aria-label="Layout">
				<DsSegmentGroup.Item value="list" aria-label="List">
					<DsIcon icon="view_list" size="tiny" aria-hidden />
				</DsSegmentGroup.Item>
				<DsSegmentGroup.Item value="grid" aria-label="Grid">
					<DsIcon icon="grid_view" size="tiny" aria-hidden />
				</DsSegmentGroup.Item>
			</DsSegmentGroup.Root>,
		);

		await expect.element(page.getByRole('radiogroup', { name: 'Layout' })).toBeInTheDocument();
		await expect.element(page.getByRole('radio', { name: 'List', exact: true })).toBeChecked();
		await expect.element(page.getByRole('radio', { name: 'Grid', exact: true })).not.toBeChecked();
	});

	it('describes an item by its aria-describedby', async () => {
		await page.render(
			<DsSegmentGroup.Root defaultValue="list">
				<span id="grid-hint">Not available for this data</span>
				<DsSegmentGroup.Item value="list" label="List" />
				<DsSegmentGroup.Item value="grid" label="Grid" aria-describedby="grid-hint" disabled />
			</DsSegmentGroup.Root>,
		);

		await expect
			.element(page.getByRole('radio', { name: 'Grid' }))
			.toHaveAccessibleDescription('Not available for this data');
		await expect.element(page.getByRole('radio', { name: 'List' })).not.toHaveAccessibleDescription();
	});

	it('forwards ref to the group', async () => {
		const ref = createRef<HTMLDivElement>();

		await page.render(
			<DsSegmentGroup.Root ref={ref} aria-label="Layout">
				<DsSegmentGroup.Item value="list" label="List" />
			</DsSegmentGroup.Root>,
		);

		expect(ref.current).toBe(page.getByRole('radiogroup', { name: 'Layout' }).element());
	});

	it('does not change selection when a disabled item is clicked', async () => {
		function Controlled() {
			const [value, setValue] = useState<string | null>('available');

			return (
				<DsSegmentGroup.Root value={value} onValueChange={setValue}>
					<DsSegmentGroup.Item value="disabled" label="Disabled" disabled />
					<DsSegmentGroup.Item value="available" label="Available" />
				</DsSegmentGroup.Root>
			);
		}

		await page.render(<Controlled />);

		const disabled = page.getByRole('radio', { name: 'Disabled' });
		const available = page.getByRole('radio', { name: 'Available' });

		await expect.element(available).toBeChecked();

		clickRadio(disabled);

		await expect.element(disabled).not.toBeChecked();
		await expect.element(available).toBeChecked();
	});
});
