import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import {
	emptyFilterDocument,
	type DsFilterCondition,
	type DsFilterDocument,
	type DsFilterField,
	type DsFiltersBarProps,
	type DsFiltersBarSavedFilter,
	type DsFiltersBarSavedFiltersConfig,
} from '../ds-filters-bar.types';

const FIELDS: ReadonlyArray<DsFilterField> = [
	{
		type: 'enum',
		id: 'status',
		label: 'Status',
		operators: [{ value: '=', label: 'equals' }],
		options: [
			{ value: 'active', label: 'Active' },
			{ value: 'failed', label: 'Failed' },
		],
	},
];

const ACTIVE: DsFilterCondition = {
	kind: 'field',
	id: 'active-1',
	field: 'status',
	operator: '=',
	value: ['active'],
};
const FAILED: DsFilterCondition = {
	kind: 'field',
	id: 'failed-1',
	field: 'status',
	operator: '=',
	value: ['failed'],
};
const ROUTER: DsFilterCondition = { kind: 'search', id: 'router-1', text: 'router' };
const OR_QUERY = 'status = "active" OR status = "failed"';

const NIGHT: DsFiltersBarSavedFilter = {
	id: 'night',
	name: 'Night shift',
	document: { conditions: [ACTIVE], query: null },
};
const FAILED_RUNS: DsFiltersBarSavedFilter = {
	id: 'failed',
	name: 'Failed runs',
	document: { conditions: [FAILED, ROUTER], query: null },
};
const EITHER: DsFiltersBarSavedFilter = {
	id: 'either',
	name: 'Either',
	document: { conditions: [], query: OR_QUERY },
};
const ITEMS = [NIGHT, FAILED_RUNS, EITHER];

const createDeferred = <T,>() => {
	let resolve!: (value: T) => void;
	const promise = new Promise<T>((res) => {
		resolve = res;
	});

	return { promise, resolve };
};

type SavedFiltersBarProps = Omit<DsFiltersBarProps, 'savedFilters'> & {
	savedFilters?: Partial<DsFiltersBarSavedFiltersConfig>;
};

// The product side: keeps the items and adds, renames and removes them as the callbacks report.
const SavedFiltersBar = ({ savedFilters: config = {}, ...props }: SavedFiltersBarProps) => {
	const [items, setItems] = useState(config.items ?? ITEMS);

	const handleSaveAs = (name: string, document: DsFilterDocument) => {
		const add = (id: string) => {
			setItems((current) => [...current, { id, name, document }]);

			return id;
		};
		const result = config.onSaveAs?.(name, document) ?? name.toLowerCase();

		return typeof result === 'string' ? add(result) : result.then(add);
	};

	return (
		<DsFiltersBar
			fields={FIELDS}
			defaultExpanded
			{...props}
			savedFilters={{
				...config,
				items,
				onSaveAs: handleSaveAs,
				onUpdate: config.onUpdate ?? vi.fn(),
				onRename: (id, name) => {
					setItems((current) => current.map((item) => (item.id === id ? { ...item, name } : item)));

					return config.onRename?.(id, name);
				},
				onDelete: (id) => {
					setItems((current) => current.filter((item) => item.id !== id));

					return config.onDelete?.(id);
				},
			}}
		/>
	);
};

const tag = (name: string) => page.getByRole('button', { name, exact: true });
const saveButton = () => page.getByRole('button', { name: 'Save filter', exact: true });
const confirmButton = () => page.getByRole('button', { name: /^Save$/ });
const picker = () => page.getByRole('dialog', { name: 'Saved filters' });
const row = (name: string) => picker().getByRole('button', { name: `bookmark ${name}` });
// A row's count sits next to its button.
const rowMeta = (name: string) => page.elementLocator(row(name).element().parentElement as HTMLElement);

// The tag is named by the Active saved filter while there is one.
const openPicker = async (tagName = 'Saved filters') => {
	await tag(tagName).click();
	await expect.element(picker()).toBeVisible();
};

const loadSavedFilter = async (name: string, tagName?: string) => {
	await openPicker(tagName);
	await row(name).click();
};

const search = async (text: string) => {
	await page.getByRole('textbox', { name: 'Search' }).fill(text);
	await userEvent.keyboard('{Enter}');
};

const saveAsNew = async (name: string) => {
	await saveButton().click();
	await page.getByLabelText('Filter name').fill(name);
	await confirmButton().click();
};

const openRowAction = async (name: string, action: RegExp, tagName?: string) => {
	await openPicker(tagName);
	await page.getByRole('button', { name: `Filter actions: ${name}` }).click();
	await page.getByRole('menuitem', { name: action }).click();
};

describe('DsFiltersBar without savedFilters', () => {
	it('renders neither the picker nor the save button', async () => {
		await page.render(<DsFiltersBar fields={FIELDS} defaultExpanded defaultValue={NIGHT.document} />);

		await expect.element(page.getByRole('textbox', { name: 'Search' })).toBeVisible();
		await expect.element(tag('Saved filters')).not.toBeInTheDocument();
		await expect.element(saveButton()).not.toBeInTheDocument();
	});
});

describe('DsFiltersBar saved filters picker', () => {
	it('loads the chosen item into the document and makes it the Active saved filter', async () => {
		const onValueChange = vi.fn();
		const onActiveIdChange = vi.fn();

		await page.render(<SavedFiltersBar savedFilters={{ onActiveIdChange }} onValueChange={onValueChange} />);

		await loadSavedFilter('Failed runs');

		expect(onValueChange).toHaveBeenCalledExactlyOnceWith(FAILED_RUNS.document);
		expect(onActiveIdChange).toHaveBeenCalledExactlyOnceWith('failed');
		await expect.element(tag('Failed runs')).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Remove filter: router' })).toBeVisible();

		await page.getByRole('button', { name: 'Hide filters' }).click();

		await expect
			.element(page.getByRole('region', { name: 'Filters' }))
			.toMatchTextContent(/Filter: Failed runs/);
	});

	it('shows each item’s condition count, and none for an Advanced query', async () => {
		await page.render(<SavedFiltersBar />);

		await openPicker();

		await expect.element(rowMeta('Night shift').getByText('1', { exact: true })).toBeVisible();
		await expect.element(rowMeta('Failed runs').getByText('2', { exact: true })).toBeVisible();
		await expect.element(rowMeta('Either').getByText(/^\d+$/)).not.toBeInTheDocument();
	});

	it('marks the Active saved filter dirty once the document differs, and clean once it matches again', async () => {
		await page.render(<SavedFiltersBar />);

		await loadSavedFilter('Night shift');
		await expect.element(tag('Night shift')).toBeVisible();

		await search('edge');

		await expect.element(tag('Night shift, Unsaved changes')).toBeVisible();

		await page.getByRole('button', { name: 'Remove filter: edge' }).click();

		await expect.element(tag('Night shift')).toBeVisible();
	});

	it('loads a saved Advanced query into the advanced view', async () => {
		await page.render(<SavedFiltersBar />);

		await loadSavedFilter('Either');

		await expect.element(page.getByRole('textbox', { name: 'Advanced query' })).toHaveValue(OR_QUERY);
		await expect.element(page.getByRole('radio', { name: 'Filters', exact: true })).toBeDisabled();
	});

	it('clears the document and the Active saved filter from the tag', async () => {
		const onValueChange = vi.fn();
		const onActiveIdChange = vi.fn();

		await page.render(
			<SavedFiltersBar
				defaultValue={NIGHT.document}
				savedFilters={{ defaultActiveId: 'night', onActiveIdChange }}
				onValueChange={onValueChange}
			/>,
		);

		await page.getByRole('button', { name: 'Clear filters', exact: true }).click();

		expect(onValueChange).toHaveBeenCalledExactlyOnceWith(emptyFilterDocument);
		expect(onActiveIdChange).toHaveBeenCalledExactlyOnceWith(null);
		await expect.element(tag('Saved filters')).toBeVisible();
	});

	it('starts from the document of defaultActiveId when no value is given', async () => {
		const onValueChange = vi.fn();

		await page.render(
			<SavedFiltersBar savedFilters={{ defaultActiveId: 'failed' }} onValueChange={onValueChange} />,
		);

		await expect.element(tag('Failed runs')).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Remove filter: router' })).toBeVisible();
		await expect
			.element(page.getByRole('button', { name: 'Remove filter: Status equals Failed' }))
			.toBeVisible();
		expect(onValueChange).not.toHaveBeenCalled();
	});

	it('keeps defaultValue over the document of defaultActiveId', async () => {
		await page.render(
			<SavedFiltersBar defaultValue={NIGHT.document} savedFilters={{ defaultActiveId: 'failed' }} />,
		);

		await expect.element(tag('Failed runs, Unsaved changes')).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Remove filter: router' })).not.toBeInTheDocument();
	});

	it('follows a controlled activeId', async () => {
		const onActiveIdChange = vi.fn();

		await page.render(
			<SavedFiltersBar
				defaultValue={NIGHT.document}
				savedFilters={{ activeId: 'night', onActiveIdChange }}
			/>,
		);

		await expect.element(tag('Night shift')).toBeVisible();

		await loadSavedFilter('Failed runs', 'Night shift');

		expect(onActiveIdChange).toHaveBeenCalledExactlyOnceWith('failed');
		await expect.element(tag('Night shift, Unsaved changes')).toBeVisible();
	});
});

describe('DsFiltersBar saving filters', () => {
	it('disables the save button while the document is empty', async () => {
		await page.render(<SavedFiltersBar />);

		await expect.element(saveButton()).toBeDisabled();

		await search('router');

		await expect.element(saveButton()).toBeEnabled();
	});

	it('enables the save button while an Advanced query is the source', async () => {
		await page.render(<SavedFiltersBar defaultValue={EITHER.document} />);

		await expect.element(saveButton()).toBeEnabled();
	});

	it('follows slotProps.saveFilter.disabled over the empty document', async () => {
		await page.render(<SavedFiltersBar slotProps={{ saveFilter: { disabled: false } }} />);

		await expect.element(saveButton()).toBeEnabled();
	});

	it('saves the document as a new filter, which becomes the Active saved filter', async () => {
		const onSaveAs = vi.fn(() => 'morning-id');
		const onActiveIdChange = vi.fn();

		await page.render(
			<SavedFiltersBar defaultValue={NIGHT.document} savedFilters={{ onSaveAs, onActiveIdChange }} />,
		);

		await saveAsNew('Morning');

		expect(onSaveAs).toHaveBeenCalledExactlyOnceWith('Morning', NIGHT.document);
		expect(onActiveIdChange).toHaveBeenCalledExactlyOnceWith('morning-id');
		await expect.element(tag('Morning')).toBeVisible();
	});

	it('keeps the confirm button loading until an async onSaveAs settles, then activates the returned id', async () => {
		const deferred = createDeferred<string>();
		const onActiveIdChange = vi.fn();

		await page.render(
			<SavedFiltersBar
				defaultValue={NIGHT.document}
				savedFilters={{ onSaveAs: () => deferred.promise, onActiveIdChange }}
			/>,
		);

		await saveAsNew('Morning');

		await expect.element(confirmButton()).toHaveAttribute('aria-busy', 'true');
		expect(onActiveIdChange).not.toHaveBeenCalled();

		deferred.resolve('morning-id');

		await expect.element(tag('Morning')).toBeVisible();
		expect(onActiveIdChange).toHaveBeenCalledExactlyOnceWith('morning-id');
	});

	it('updates the Active saved filter with the current document', async () => {
		const onUpdate = vi.fn();

		await page.render(<SavedFiltersBar savedFilters={{ onUpdate }} />);

		await loadSavedFilter('Night shift');
		await search('edge');
		await saveButton().click();
		await page.getByRole('menuitem', { name: 'Update “Night shift”' }).click();

		expect(onUpdate).toHaveBeenCalledExactlyOnceWith('night', {
			conditions: [ACTIVE, expect.objectContaining({ kind: 'search', text: 'edge' })],
			query: null,
		});
	});

	it('keeps the save button loading until an async onUpdate settles', async () => {
		const deferred = createDeferred<undefined>();

		await page.render(
			<SavedFiltersBar
				defaultValue={FAILED_RUNS.document}
				savedFilters={{ defaultActiveId: 'night', onUpdate: () => deferred.promise }}
			/>,
		);

		await saveButton().click();
		await page.getByRole('menuitem', { name: 'Update “Night shift”' }).click();

		await expect.element(saveButton()).toHaveAttribute('aria-busy', 'true');

		deferred.resolve(undefined);

		await expect.element(saveButton()).not.toHaveAttribute('aria-busy');
	});
});

describe('DsFiltersBar saved filter row actions', () => {
	it('renames an item', async () => {
		const onRename = vi.fn();

		await page.render(<SavedFiltersBar savedFilters={{ onRename }} />);

		await openRowAction('Night shift', /Rename filter/);
		await page.getByLabelText('Filter name').fill('Late shift');
		await confirmButton().click();

		expect(onRename).toHaveBeenCalledExactlyOnceWith('night', 'Late shift');
	});

	it('drops the active selection when the Active saved filter is deleted', async () => {
		const onDelete = vi.fn();
		const onActiveIdChange = vi.fn();

		await page.render(
			<SavedFiltersBar
				defaultValue={NIGHT.document}
				savedFilters={{ defaultActiveId: 'night', onDelete, onActiveIdChange }}
			/>,
		);

		await openRowAction('Night shift', /Delete filter/, 'Night shift');
		await page.getByRole('button', { name: /^Delete$/ }).click();

		expect(onDelete).toHaveBeenCalledExactlyOnceWith('night');
		expect(onActiveIdChange).toHaveBeenCalledExactlyOnceWith(null);
		await expect.element(tag('Saved filters')).toBeVisible();
	});

	it('keeps the active selection when another item is deleted', async () => {
		const onActiveIdChange = vi.fn();

		await page.render(
			<SavedFiltersBar
				defaultValue={NIGHT.document}
				savedFilters={{ defaultActiveId: 'night', onActiveIdChange }}
			/>,
		);

		await openRowAction('Failed runs', /Delete filter/, 'Night shift');
		await page.getByRole('button', { name: /^Delete$/ }).click();

		expect(onActiveIdChange).not.toHaveBeenCalled();
		await expect.element(tag('Night shift')).toBeVisible();
	});

	it('keeps the delete confirm loading and the selection until an async onDelete settles', async () => {
		const deferred = createDeferred<undefined>();
		const onActiveIdChange = vi.fn();

		await page.render(
			<SavedFiltersBar
				defaultValue={NIGHT.document}
				savedFilters={{ defaultActiveId: 'night', onDelete: () => deferred.promise, onActiveIdChange }}
			/>,
		);

		await openRowAction('Night shift', /Delete filter/, 'Night shift');
		await page.getByRole('button', { name: /^Delete$/ }).click();

		await expect.element(page.getByRole('button', { name: /^Delete$/ })).toHaveAttribute('aria-busy', 'true');
		expect(onActiveIdChange).not.toHaveBeenCalled();

		deferred.resolve(undefined);

		await expect.poll(() => onActiveIdChange.mock.calls).toEqual([[null]]);
	});
});

describe('DsFiltersBar saved filters locale', () => {
	it('takes the picker and save button strings from locale.savedFilters', async () => {
		await page.render(
			<SavedFiltersBar locale={{ savedFilters: { savedFilters: 'Views', saveFilter: 'Keep' } }} />,
		);

		await expect.element(tag('Views')).toBeVisible();
		await expect.element(tag('Keep')).toBeVisible();
	});
});
