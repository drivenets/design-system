import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import type { DsFiltersBarRootProps, DsFiltersBarViewSwitchProps } from '../ds-filters-bar.types';

// Setting and clearing the query are other parts' jobs, so a probe drives them here.
const Probe = () => {
	const bar = useDsFiltersBarContext();

	return (
		<div>
			<output aria-label="view">{bar.view}</output>
			<button type="button" onClick={() => bar.setQuery('status = "A" OR status = "B"')}>
				query
			</button>
			<button type="button" onClick={bar.clear}>
				clear
			</button>
		</div>
	);
};

interface HarnessProps extends Omit<DsFiltersBarRootProps, 'children'> {
	switchProps?: DsFiltersBarViewSwitchProps;
}

const renderSwitch = ({ switchProps, ...props }: HarnessProps = {}) =>
	page.render(
		<DsFiltersBar.Root {...props}>
			<Probe />
			<DsFiltersBar.ViewSwitch {...switchProps} />
		</DsFiltersBar.Root>,
	);

const viewItem = (name: string) => page.getByRole('radio', { name, exact: true });
const shownView = () => page.getByRole('status', { name: 'view' });

// Ark renders the radio as a visually hidden input outside the viewport, so fire a native click
// on the element directly instead of a Playwright pointer click.
const select = (name: string) => {
	(viewItem(name).element() as HTMLElement).click();
};

describe('DsFiltersBar.ViewSwitch', () => {
	it('renders one item per view, named by the default locale, with the shown view checked', async () => {
		await renderSwitch({ defaultView: 'builder' });

		await expect.element(page.getByRole('radiogroup', { name: 'Filter view' })).toBeVisible();
		expect(page.getByRole('radio').elements()).toHaveLength(3);
		await expect.element(viewItem('Filters')).not.toBeChecked();
		await expect.element(viewItem('Query builder')).toBeChecked();
		await expect.element(viewItem('Advanced query')).not.toBeChecked();
	});

	it('changes the view when an item is selected', async () => {
		const onViewChange = vi.fn();

		await renderSwitch({ onViewChange });

		select('Advanced query');

		await expect.element(shownView()).toHaveTextContent('advanced');
		await expect.element(viewItem('Advanced query')).toBeChecked();
		expect(onViewChange).toHaveBeenCalledExactlyOnceWith('advanced');
	});

	it('disables the filters and builder items while an Advanced query is the source', async () => {
		const onViewChange = vi.fn();

		await renderSwitch({ defaultView: 'builder', onViewChange });

		await page.getByRole('button', { name: 'query', exact: true }).click();

		await expect.element(viewItem('Filters')).toBeDisabled();
		await expect.element(viewItem('Query builder')).toBeDisabled();
		await expect.element(viewItem('Advanced query')).toBeEnabled();
		await expect.element(viewItem('Advanced query')).toBeChecked();

		select('Filters');

		await expect.element(shownView()).toHaveTextContent('advanced');
		expect(onViewChange).not.toHaveBeenCalled();

		await page.getByRole('button', { name: 'clear' }).click();

		await expect.element(viewItem('Filters')).toBeEnabled();
		await expect.element(viewItem('Query builder')).toBeChecked();
	});

	it('explains a locked item with the lockedView tooltip', async () => {
		await renderSwitch({ defaultQuery: 'status = "A" OR status = "B"' });

		const lockedItem = page.elementLocator(viewItem('Filters').element().closest('label') as HTMLElement);

		await lockedItem.hover();

		await expect
			.element(page.getByRole('tooltip', { name: 'Clear the advanced query to switch views' }))
			.toBeVisible();
	});

	it('describes a locked item by the lockedView reason until the query is cleared', async () => {
		await renderSwitch({ defaultQuery: 'status = "A" OR status = "B"' });

		await expect
			.element(viewItem('Filters'))
			.toHaveAccessibleDescription('Clear the advanced query to switch views');
		await expect
			.element(viewItem('Query builder'))
			.toHaveAccessibleDescription('Clear the advanced query to switch views');
		await expect.element(viewItem('Advanced query')).not.toHaveAccessibleDescription();

		await page.getByRole('button', { name: 'clear' }).click();

		await expect.element(viewItem('Filters')).not.toHaveAccessibleDescription();
		await expect.element(viewItem('Query builder')).not.toHaveAccessibleDescription();
	});

	it('takes names and the tooltip from a custom locale, keeping defaults for the rest', async () => {
		await renderSwitch({
			defaultQuery: 'status = "A" OR status = "B"',
			switchProps: {
				locale: { label: 'Mode', views: { advanced: 'Code' }, lockedView: 'Locked by the query' },
			},
		});

		await expect.element(page.getByRole('radiogroup', { name: 'Mode' })).toBeVisible();
		await expect.element(viewItem('Code')).toBeChecked();
		await expect.element(viewItem('Filters')).toBeDisabled();

		await page.elementLocator(viewItem('Query builder').element().closest('label') as HTMLElement).hover();

		await expect.element(page.getByRole('tooltip', { name: 'Locked by the query' })).toBeVisible();
		await expect.element(viewItem('Filters')).toHaveAccessibleDescription('Locked by the query');
	});

	it('forwards ref, className and style to the group', async () => {
		const ref = createRef<HTMLDivElement>();

		await renderSwitch({ switchProps: { ref, className: 'custom', style: { marginLeft: '3px' } } });

		const group = page.getByRole('radiogroup', { name: 'Filter view' });

		await expect.element(group).toHaveClass('custom');
		await expect.element(group).toHaveStyle({ marginLeft: '3px' });
		expect(ref.current).toBe(group.element());
	});
});
