import { createRef, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import type {
	DsFilterCondition,
	DsFilterField,
	DsFiltersBarRootProps,
	DsFiltersBarSearchProps,
} from '../ds-filters-bar.types';

const FIELDS: ReadonlyArray<DsFilterField> = [
	{
		type: 'enum',
		id: 'status',
		label: 'Status',
		operators: [{ value: '=', label: 'equals' }],
		options: [
			{ value: 'active', label: 'Active' },
			{ value: 'pending', label: 'Pending' },
		],
	},
];

const AAA: DsFilterCondition = { kind: 'search', id: 'search-1', text: 'AAA' };
const OR_QUERY = 'status = "active" OR status = "pending"';

// Shows the document the search writes to, and clears it the way ClearAll will.
const Probe = () => {
	const bar = useDsFiltersBarContext();

	return (
		<div>
			<output aria-label="searches">
				{bar.conditions.map((condition) => (condition.kind === 'search' ? condition.text : '')).join(',')}
			</output>
			<button type="button" onClick={bar.clear}>
				clear
			</button>
		</div>
	);
};

interface SearchBarProps extends Omit<DsFiltersBarRootProps, 'children'> {
	searchProps?: DsFiltersBarSearchProps;
	withSearch?: boolean;
}

const SearchBar = ({ searchProps, withSearch = true, ...props }: SearchBarProps) => (
	<DsFiltersBar.Root defaultExpanded fields={FIELDS} {...props}>
		<Probe />
		<DsFiltersBar.Toolbar>
			{withSearch && <DsFiltersBar.Search {...searchProps} />}
			<DsFiltersBar.Conditions />
		</DsFiltersBar.Toolbar>
	</DsFiltersBar.Root>
);

const searchInput = (name = 'Search') => page.getByRole('textbox', { name });
const clearButton = (name = 'Clear search') => page.getByRole('button', { name, exact: true });
const chip = (text: string) => page.getByRole('button', { name: text, exact: true });
const removeChip = (text: string) =>
	page.getByRole('button', { name: `Remove filter: ${text}`, exact: true });
const searches = () => page.getByRole('status', { name: 'searches' });

const submit = async (text: string) => {
	await searchInput().fill(text);
	await userEvent.keyboard('{Enter}');
};

describe('DsFiltersBar.Search adding a search', () => {
	it('adds the trimmed text as a search condition on Enter and clears the input', async () => {
		const onConditionsChange = vi.fn();

		await page.render(<SearchBar onConditionsChange={onConditionsChange} />);

		await submit('  AAA  ');

		expect(onConditionsChange).toHaveBeenCalledOnce();
		expect(onConditionsChange.mock.lastCall?.[0]).toMatchObject([{ kind: 'search', text: 'AAA' }]);
		await expect.element(searchInput()).toHaveValue('');
		await expect.element(chip('AAA')).toBeVisible();
	});

	it('ignores blank text', async () => {
		const onConditionsChange = vi.fn();

		await page.render(<SearchBar onConditionsChange={onConditionsChange} />);

		await submit('   ');

		expect(onConditionsChange).not.toHaveBeenCalled();
		await expect.element(searchInput()).toHaveValue('   ');
	});

	it('clears the input without adding a search that already exists', async () => {
		const onConditionsChange = vi.fn();

		await page.render(<SearchBar defaultConditions={[AAA]} onConditionsChange={onConditionsChange} />);

		await submit('AAA ');

		expect(onConditionsChange).not.toHaveBeenCalled();
		await expect.element(searchInput()).toHaveValue('');
		expect(page.getByRole('button', { name: 'AAA', exact: true }).elements()).toHaveLength(1);
	});

	it('appends each new search after the existing conditions', async () => {
		await page.render(<SearchBar defaultConditions={[AAA]} />);

		await submit('BBB');

		await expect.element(searches()).toHaveTextContent('AAA,BBB');
	});
});

describe('DsFiltersBar.Search clear button', () => {
	it('shows only while there is pending text, and clears and refocuses the input', async () => {
		await page.render(<SearchBar />);

		await expect.element(clearButton()).not.toBeInTheDocument();

		await searchInput().fill('draft');
		await clearButton().click();

		await expect.element(searchInput()).toHaveValue('');
		await expect.element(searchInput()).toHaveFocus();
		await expect.element(clearButton()).not.toBeInTheDocument();
	});
});

describe('DsFiltersBar.Search `/` shortcut', () => {
	it('focuses the input without typing the slash', async () => {
		await page.render(<SearchBar />);

		await userEvent.keyboard('/');

		await expect.element(searchInput()).toHaveFocus();
		await expect.element(searchInput()).toHaveValue('');
	});

	it('leaves the slash to another text field', async () => {
		await page.render(
			<>
				<input aria-label="Other" />
				<SearchBar />
			</>,
		);

		const other = page.getByRole('textbox', { name: 'Other' });

		await other.click();
		await userEvent.keyboard('/');

		await expect.element(other).toHaveValue('/');
		await expect.element(searchInput()).not.toHaveFocus();
	});

	it('ignores the slash inside a dialog', async () => {
		await page.render(
			<>
				<div role="dialog" aria-label="Help">
					<button type="button">Got it</button>
				</div>
				<SearchBar />
			</>,
		);

		await page.getByRole('button', { name: 'Got it', exact: true }).click();
		await userEvent.keyboard('/');

		await expect.element(searchInput()).not.toHaveFocus();
	});

	it('ignores the slash with a modifier key', async () => {
		await page.render(<SearchBar />);

		await userEvent.keyboard('{Control>}/{/Control}');

		await expect.element(searchInput()).not.toHaveFocus();
	});

	it('does nothing while disabled', async () => {
		await page.render(<SearchBar searchProps={{ disabled: true }} />);

		await userEvent.keyboard('/');

		await expect.element(searchInput()).not.toHaveFocus();
	});
});

describe('DsFiltersBar.Search disabled', () => {
	it('is disabled by the disabled prop', async () => {
		await page.render(<SearchBar searchProps={{ disabled: true }} />);

		await expect.element(searchInput()).toBeDisabled();
	});

	it('is disabled while an Advanced query is the source, until it is cleared', async () => {
		await page.render(<SearchBar defaultQuery={OR_QUERY} />);

		await expect.element(searchInput()).toBeDisabled();

		await page.getByRole('button', { name: 'clear', exact: true }).click();

		await expect.element(searchInput()).toBeEnabled();
	});
});

describe('DsFiltersBar.Search chips', () => {
	it('removes the search with the chip remove button', async () => {
		const onConditionsChange = vi.fn();

		await page.render(<SearchBar defaultConditions={[AAA]} onConditionsChange={onConditionsChange} />);

		await removeChip('AAA').click();

		expect(onConditionsChange).toHaveBeenCalledExactlyOnceWith([]);
		await expect.element(chip('AAA')).not.toBeInTheDocument();
	});

	it('moves the text back into the input on click, replacing the pending text', async () => {
		const onConditionsChange = vi.fn();

		await page.render(<SearchBar defaultConditions={[AAA]} onConditionsChange={onConditionsChange} />);

		await searchInput().fill('draft');
		await chip('AAA').click();

		expect(onConditionsChange).toHaveBeenCalledExactlyOnceWith([]);
		await expect.element(chip('AAA')).not.toBeInTheDocument();
		await expect.element(searchInput()).toHaveValue('AAA');
		await expect.element(searchInput()).toHaveFocus();
	});

	it('only removes chips when the bar has no search input', async () => {
		await page.render(<SearchBar withSearch={false} defaultConditions={[AAA]} />);

		await chip('AAA').click();

		await expect.element(searches()).toHaveTextContent('AAA');

		await removeChip('AAA').click();

		await expect.element(searches()).toHaveTextContent('');
	});
});

describe('DsFiltersBar.Search value', () => {
	it('starts from defaultValue while uncontrolled and reports changes', async () => {
		const onValueChange = vi.fn();

		await page.render(<SearchBar searchProps={{ defaultValue: 'AA', onValueChange }} />);

		await expect.element(searchInput()).toHaveValue('AA');

		await searchInput().click();
		await userEvent.keyboard('{End}A');

		expect(onValueChange).toHaveBeenLastCalledWith('AAA');
	});

	it('follows value while controlled', async () => {
		const onValueChange = vi.fn();

		const ControlledSearchBar = () => {
			const [value, setValue] = useState('');

			return (
				<SearchBar
					searchProps={{
						value,
						onValueChange: (next) => {
							onValueChange(next);
							setValue(next.toUpperCase());
						},
					}}
				/>
			);
		};

		await page.render(<ControlledSearchBar />);

		await searchInput().fill('aaa');
		await expect.element(searchInput()).toHaveValue('AAA');

		await userEvent.keyboard('{Enter}');

		expect(onValueChange).toHaveBeenLastCalledWith('');
		await expect.element(searches()).toHaveTextContent('AAA');
	});
});

describe('DsFiltersBar.Search parts', () => {
	it('uses a custom locale', async () => {
		await page.render(
			<SearchBar
				searchProps={{
					defaultValue: 'x',
					locale: { label: 'Find', placeholder: 'Press ‘/’ to find', clear: 'Reset' },
				}}
			/>,
		);

		await expect.element(searchInput('Find')).toHaveAttribute('placeholder', 'Press ‘/’ to find');
		await expect.element(clearButton('Reset')).toBeVisible();
	});

	it('forwards ref to the input, and className and style to its wrapper', async () => {
		const ref = createRef<HTMLInputElement>();

		await page.render(<SearchBar searchProps={{ ref, className: 'custom', style: { marginLeft: '3px' } }} />);

		expect(ref.current).toBe(searchInput().element());

		const wrapper = ref.current?.closest('.custom');

		expect(wrapper).toHaveStyle({ marginLeft: '3px' });
	});

	it('writes a search into the Advanced query as a quoted string', async () => {
		await page.render(
			<DsFiltersBar.Root fields={FIELDS} defaultView="advanced">
				<DsFiltersBar.Search />
				<DsFiltersBar.View value="advanced">
					<DsFiltersBar.Query />
				</DsFiltersBar.View>
			</DsFiltersBar.Root>,
		);

		await submit('AAA');

		await expect.element(page.getByRole('textbox', { name: 'Advanced query' })).toHaveValue('"AAA"');
	});
});
