import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import type {
	DsFilterCondition,
	DsFilterDocument,
	DsFilterField,
	DsFiltersBarProps,
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

const withAAA: DsFilterDocument = { conditions: [AAA], query: null };

const SearchBar = (props: DsFiltersBarProps) => <DsFiltersBar defaultExpanded fields={FIELDS} {...props} />;

const searchInput = (name = 'Search') => page.getByRole('textbox', { name });
const clearButton = (name = 'Clear search') => page.getByRole('button', { name, exact: true });
const chip = (text: string) => page.getByRole('button', { name: text, exact: true });
const removeChip = (text: string) =>
	page.getByRole('button', { name: `Remove filter: ${text}`, exact: true });
const clearAll = () => page.getByRole('button', { name: 'Clear all', exact: true });

const searchTexts = (document: DsFilterDocument | undefined) =>
	document?.conditions.map((condition) => (condition.kind === 'search' ? condition.text : ''));

const submit = async (text: string) => {
	await searchInput().fill(text);
	await userEvent.keyboard('{Enter}');
};

describe('DsFiltersBar search adding a search', () => {
	it('adds the trimmed text as a search condition on Enter and clears the input', async () => {
		const onValueChange = vi.fn<(value: DsFilterDocument) => void>();

		await page.render(<SearchBar onValueChange={onValueChange} />);

		await submit('  AAA  ');

		expect(onValueChange).toHaveBeenCalledExactlyOnceWith({
			conditions: [expect.objectContaining({ kind: 'search', text: 'AAA' })],
			query: null,
		});
		await expect.element(searchInput()).toHaveValue('');
		await expect.element(chip('AAA')).toBeVisible();
	});

	it('ignores blank text', async () => {
		const onValueChange = vi.fn<(value: DsFilterDocument) => void>();

		await page.render(<SearchBar onValueChange={onValueChange} />);

		await submit('   ');

		expect(onValueChange).not.toHaveBeenCalled();
		await expect.element(searchInput()).toHaveValue('   ');
	});

	it('clears the input without adding a search that already exists', async () => {
		const onValueChange = vi.fn<(value: DsFilterDocument) => void>();

		await page.render(<SearchBar defaultValue={withAAA} onValueChange={onValueChange} />);

		await submit('AAA ');

		expect(onValueChange).not.toHaveBeenCalled();
		await expect.element(searchInput()).toHaveValue('');
		expect(chip('AAA').elements()).toHaveLength(1);
	});

	it('appends each new search after the existing conditions', async () => {
		const onValueChange = vi.fn<(value: DsFilterDocument) => void>();

		await page.render(<SearchBar defaultValue={withAAA} onValueChange={onValueChange} />);

		await submit('BBB');

		expect(searchTexts(onValueChange.mock.lastCall?.[0])).toEqual(['AAA', 'BBB']);
	});

	it('writes a search into the Advanced query as a quoted string', async () => {
		await page.render(<SearchBar defaultView="advanced" />);

		await submit('AAA');

		await expect.element(page.getByRole('textbox', { name: 'Advanced query' })).toHaveValue('"AAA"');
	});
});

describe('DsFiltersBar search clear button', () => {
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

describe('DsFiltersBar search `/` shortcut', () => {
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
		await page.render(<SearchBar slotProps={{ search: { disabled: true } }} />);

		await userEvent.keyboard('/');

		await expect.element(searchInput()).not.toHaveFocus();
	});
});

describe('DsFiltersBar search disabled', () => {
	it('is disabled by slotProps.search.disabled', async () => {
		await page.render(<SearchBar slotProps={{ search: { disabled: true } }} />);

		await expect.element(searchInput()).toBeDisabled();
	});

	it('is disabled while an Advanced query is the source, until it is cleared', async () => {
		await page.render(<SearchBar defaultValue={{ conditions: [], query: OR_QUERY }} />);

		await expect.element(searchInput()).toBeDisabled();

		await clearAll().click();

		await expect.element(searchInput()).toBeEnabled();
	});
});

describe('DsFiltersBar search chips', () => {
	it('removes the search with the chip remove button', async () => {
		const onValueChange = vi.fn<(value: DsFilterDocument) => void>();

		await page.render(<SearchBar defaultValue={withAAA} onValueChange={onValueChange} />);

		await removeChip('AAA').click();

		expect(onValueChange).toHaveBeenCalledExactlyOnceWith({ conditions: [], query: null });
		await expect.element(chip('AAA')).not.toBeInTheDocument();
	});

	it('moves the text back into the input on click, replacing the pending text', async () => {
		const onValueChange = vi.fn<(value: DsFilterDocument) => void>();

		await page.render(<SearchBar defaultValue={withAAA} onValueChange={onValueChange} />);

		await searchInput().fill('draft');
		await chip('AAA').click();

		expect(onValueChange).toHaveBeenCalledExactlyOnceWith({ conditions: [], query: null });
		await expect.element(chip('AAA')).not.toBeInTheDocument();
		await expect.element(searchInput()).toHaveValue('AAA');
		await expect.element(searchInput()).toHaveFocus();
	});

	it('hands the chip text to the latest onValueChange', async () => {
		const onSearchChange = vi.fn();

		// The handler reads this render's value, so a handle kept from the first render would report ''.
		const ControlledSearchBar = () => {
			const [value, setValue] = useState('');

			return (
				<SearchBar
					defaultValue={withAAA}
					slotProps={{
						search: {
							value,
							onValueChange: (next) => {
								onSearchChange({ next, previous: value });
								setValue(next);
							},
						},
					}}
				/>
			);
		};

		await page.render(<ControlledSearchBar />);

		await searchInput().fill('draft');
		await chip('AAA').click();

		expect(onSearchChange).toHaveBeenLastCalledWith({ next: 'AAA', previous: 'draft' });
		await expect.element(searchInput()).toHaveValue('AAA');
	});
});

describe('DsFiltersBar search pending text', () => {
	it('starts from slotProps.search.defaultValue while uncontrolled and reports changes', async () => {
		const onSearchChange = vi.fn();

		await page.render(
			<SearchBar slotProps={{ search: { defaultValue: 'AA', onValueChange: onSearchChange } }} />,
		);

		await expect.element(searchInput()).toHaveValue('AA');

		await searchInput().click();
		await userEvent.keyboard('{End}A');

		expect(onSearchChange).toHaveBeenLastCalledWith('AAA');
	});

	it('follows slotProps.search.value while controlled', async () => {
		const onSearchChange = vi.fn();
		const onValueChange = vi.fn<(value: DsFilterDocument) => void>();

		const ControlledSearchBar = () => {
			const [value, setValue] = useState('');

			return (
				<SearchBar
					onValueChange={onValueChange}
					slotProps={{
						search: {
							value,
							onValueChange: (next) => {
								onSearchChange(next);
								setValue(next.toUpperCase());
							},
						},
					}}
				/>
			);
		};

		await page.render(<ControlledSearchBar />);

		await searchInput().fill('aaa');
		await expect.element(searchInput()).toHaveValue('AAA');

		await userEvent.keyboard('{Enter}');

		expect(onSearchChange).toHaveBeenLastCalledWith('');
		expect(searchTexts(onValueChange.mock.lastCall?.[0])).toEqual(['AAA']);
	});
});

describe('DsFiltersBar search locale', () => {
	it('takes its strings from locale.search', async () => {
		await page.render(
			<SearchBar
				locale={{ search: { label: 'Find', placeholder: 'Press ‘/’ to find', clear: 'Reset' } }}
				slotProps={{ search: { defaultValue: 'x' } }}
			/>,
		);

		await expect.element(searchInput('Find')).toHaveAttribute('placeholder', 'Press ‘/’ to find');
		await expect.element(clearButton('Reset')).toBeVisible();
	});
});
