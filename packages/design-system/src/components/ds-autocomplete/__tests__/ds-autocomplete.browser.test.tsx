import { type ReactNode, useEffect, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsAutocomplete } from '../ds-autocomplete';
import type { DsAutocompleteOption } from '../ds-autocomplete.types';
import { DsIcon } from '../../ds-icon';
import { DsModal } from '../../ds-modal';
import { DsDialog } from '../../ds-dialog';

const mockOptions: DsAutocompleteOption[] = [
	{ value: 'apple', label: 'Apple' },
	{ value: 'banana', label: 'Banana' },
	{ value: 'cherry', label: 'Cherry' },
	{ value: 'date', label: 'Date' },
	{ value: 'elderberry', label: 'Elderberry' },
];

const countries: DsAutocompleteOption[] = [
	{ value: 'us', label: 'United States' },
	{ value: 'uk', label: 'United Kingdom' },
	{ value: 'ca', label: 'Canada' },
	{ value: 'au', label: 'Australia' },
	{ value: 'fr', label: 'France' },
	{ value: 'jp', label: 'Japan' },
];

describe('DsAutocomplete', () => {
	it('should open dropdown via trigger and select an option', async () => {
		const onValueChange = vi.fn();
		const onInputValueChange = vi.fn();

		await page.render(
			<DsAutocomplete
				options={mockOptions}
				onValueChange={onValueChange}
				onInputValueChange={onInputValueChange}
				style={{ width: '300px' }}
			/>,
		);

		const input = page.getByRole('combobox');
		const trigger = page.getByRole('button', { name: /toggle dropdown/i });

		await trigger.click();
		await expect.element(page.getByRole('option', { name: /Apple/i })).toBeVisible();

		await input.click();
		await input.fill('b');
		await expect.element(page.getByRole('option', { name: /Apple/i })).not.toBeInTheDocument();
		await expect.element(page.getByRole('option', { name: /Banana/i })).toBeVisible();
		expect(onInputValueChange).toHaveBeenLastCalledWith('b');

		await page.getByRole('option', { name: /Banana/i }).click();
		expect(onInputValueChange).toHaveBeenLastCalledWith('Banana');
		expect(onValueChange).toHaveBeenCalledWith('banana');
	});

	it('should call onValueChange with empty string on clear', async () => {
		const onValueChange = vi.fn();
		const onInputValueChange = vi.fn();

		await page.render(
			<DsAutocomplete
				options={mockOptions}
				onValueChange={onValueChange}
				onInputValueChange={onInputValueChange}
				style={{ width: '300px' }}
			/>,
		);

		const input = page.getByRole('combobox');

		await input.click();
		await input.fill('b');
		await page.getByRole('option', { name: /Banana/i }).click();
		expect(onValueChange).toHaveBeenCalledWith('banana');

		const clearButton = page.getByRole('button', { name: 'Clear' });
		await clearButton.click();

		expect(onValueChange).toHaveBeenCalledWith('');
		expect(onInputValueChange).toHaveBeenCalledWith('');
	});

	it('should work in search mode without trigger', async () => {
		const onValueChange = vi.fn();
		const onInputValueChange = vi.fn();

		await page.render(
			<DsAutocomplete
				options={mockOptions}
				showTrigger={false}
				onValueChange={onValueChange}
				onInputValueChange={onInputValueChange}
				style={{ width: '300px' }}
			/>,
		);

		await expect.element(page.getByRole('button', { name: /toggle dropdown/i })).not.toBeInTheDocument();

		const input = page.getByRole('combobox');
		await input.click();
		await input.fill('a');
		expect(onInputValueChange).toHaveBeenLastCalledWith('a');

		const appleOption = page.getByRole('option', { name: /Apple/i });
		await expect.element(appleOption).toBeVisible();

		await appleOption.click();
		expect(onValueChange).toHaveBeenCalledWith('apple');
		expect(onInputValueChange).toHaveBeenLastCalledWith('Apple');

		await page.getByRole('button', { name: 'Clear' }).click();
		expect(onValueChange).toHaveBeenCalledWith('');
		expect(onInputValueChange).toHaveBeenCalledWith('');
	});

	it('should display start adornment and select an option', async () => {
		const onValueChange = vi.fn();
		const onInputValueChange = vi.fn();

		await page.render(
			<DsAutocomplete
				options={countries}
				showTrigger={false}
				startAdornment={<DsIcon icon="search" size="medium" aria-label="search icon" />}
				onValueChange={onValueChange}
				onInputValueChange={onInputValueChange}
				style={{ width: '300px' }}
			/>,
		);

		await expect.element(page.getByLabelText('search icon')).toBeVisible();

		const input = page.getByRole('combobox');
		await input.fill('Sta');
		expect(onInputValueChange).toHaveBeenLastCalledWith('Sta');

		const usOption = page.getByRole('option', { name: /United States/i });
		await expect.element(usOption).toBeVisible();

		await usOption.click();
		expect(onInputValueChange).toHaveBeenCalledWith('United States');
		expect(onValueChange).toHaveBeenCalledWith('us');
		await expect.element(input).toHaveValue('United States');
	});

	it('should filter options based on input', async () => {
		await page.render(<DsAutocomplete options={mockOptions} style={{ width: '300px' }} />);

		const input = page.getByRole('combobox');
		await input.fill('ch');

		await expect.element(page.getByRole('option', { name: /Cherry/i })).toBeVisible();
		await expect.element(page.getByRole('option', { name: /Apple/i })).not.toBeInTheDocument();
		await expect.element(page.getByRole('option', { name: /Banana/i })).not.toBeInTheDocument();
	});

	it('should show no matches message when no options match', async () => {
		await page.render(<DsAutocomplete options={mockOptions} style={{ width: '300px' }} />);

		const input = page.getByRole('combobox');
		await input.fill('zzz');

		await expect.element(page.getByText('No matches found')).toBeVisible();
	});

	it('should support disabled state', async () => {
		await page.render(<DsAutocomplete options={mockOptions} disabled style={{ width: '300px' }} />);

		await expect.element(page.getByRole('combobox')).toBeDisabled();
	});

	it('should support invalid state', async () => {
		await page.render(<DsAutocomplete options={mockOptions} invalid style={{ width: '300px' }} />);

		const input = page.getByRole('combobox');
		await expect.element(input).not.toBeDisabled();
		await expect.element(input).toHaveAttribute('aria-invalid', 'true');
	});

	describe('async search', () => {
		const ASYNC_DELAY_MS = 100;

		const fetchCountries = async (query: string) => {
			await new Promise((resolve) => setTimeout(resolve, ASYNC_DELAY_MS));
			return countries.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));
		};

		function AsyncSearchAutocomplete({
			onValueChange,
			onInputValueChange,
		}: {
			onValueChange?: (value: string) => void;
			onInputValueChange?: (value: string) => void;
		}) {
			const [options, setOptions] = useState<DsAutocompleteOption[]>([]);
			const [loading, setLoading] = useState(false);

			const handleInputValueChange = async (value: string) => {
				onInputValueChange?.(value);

				if (!value) {
					setOptions([]);
					return;
				}

				setLoading(true);
				const results = await fetchCountries(value);
				setOptions(results);
				setLoading(false);
			};

			return (
				<DsAutocomplete
					options={options}
					loading={loading}
					onInputValueChange={handleInputValueChange}
					onValueChange={onValueChange}
					showTrigger={false}
					startAdornment={<DsIcon icon="search" size="medium" aria-label="search icon" />}
					locale={{ noMatches: 'No results found' }}
					style={{ width: '300px' }}
				/>
			);
		}

		it('should search, select, and clear', async () => {
			const onValueChange = vi.fn();
			const onInputValueChange = vi.fn();

			await page.render(
				<AsyncSearchAutocomplete onValueChange={onValueChange} onInputValueChange={onInputValueChange} />,
			);

			const input = page.getByRole('combobox');
			await input.fill('Uni');

			await expect.element(page.getByRole('option', { name: /United States/i })).toBeVisible();
			await expect.element(page.getByRole('option', { name: /United Kingdom/i })).toBeVisible();
			expect(onInputValueChange).toHaveBeenLastCalledWith('Uni');

			await page.getByRole('option', { name: /United States/i }).click();
			expect(onValueChange).toHaveBeenCalledWith('us');
			expect(onInputValueChange).toHaveBeenLastCalledWith('United States');
			await expect.element(input).toHaveValue('United States');

			await page.getByRole('button', { name: 'Clear' }).click();
			expect(onValueChange).toHaveBeenCalledWith('');
			expect(onInputValueChange).toHaveBeenLastCalledWith('');
			await expect.element(input).toHaveValue('');
		});

		it('should show no results for unmatched query', async () => {
			await page.render(<AsyncSearchAutocomplete />);

			const input = page.getByRole('combobox');
			await input.fill('zzz');

			await expect.element(page.getByText('No results found')).toBeVisible();
		});

		it('should refine results on further typing', async () => {
			await page.render(<AsyncSearchAutocomplete />);

			const input = page.getByRole('combobox');
			await input.fill('an');

			await expect.element(page.getByRole('option', { name: /Canada/i })).toBeVisible();
			await expect.element(page.getByRole('option', { name: /France/i })).toBeVisible();

			await input.fill('canada');

			await expect.element(page.getByRole('option', { name: /Canada/i })).toBeVisible();
			await expect.element(page.getByRole('option', { name: /France/i })).not.toBeInTheDocument();
		});
	});

	describe('async pre-loaded options', () => {
		const ASYNC_DELAY_MS = 100;

		const fetchAllCountries = async () => {
			await new Promise((resolve) => setTimeout(resolve, ASYNC_DELAY_MS));
			return countries;
		};

		function AsyncOptionsAutocomplete({ onValueChange }: { onValueChange?: (value: string) => void }) {
			const [options, setOptions] = useState<DsAutocompleteOption[]>([]);
			const [loading, setLoading] = useState(true);

			useEffect(() => {
				void fetchAllCountries().then((results) => {
					setOptions(results);
					setLoading(false);
				});
			}, []);

			return (
				<DsAutocomplete
					options={options}
					loading={loading}
					onValueChange={onValueChange}
					style={{ width: '300px' }}
				/>
			);
		}

		it('should load options and allow selection', async () => {
			const onValueChange = vi.fn();

			await page.render(<AsyncOptionsAutocomplete onValueChange={onValueChange} />);

			const input = page.getByRole('combobox');
			const trigger = page.getByRole('button', { name: /toggle dropdown/i });

			await trigger.click();

			await expect.element(page.getByRole('option', { name: /United States/i })).toBeVisible();
			await expect.element(page.getByRole('option', { name: /Japan/i })).toBeVisible();

			await input.fill('Un');
			await expect.element(page.getByRole('option', { name: /United States/i })).toBeVisible();
			await expect.element(page.getByRole('option', { name: /United Kingdom/i })).toBeVisible();
			await expect.element(page.getByRole('option', { name: /Japan/i })).not.toBeInTheDocument();

			await page.getByRole('option', { name: /United States/i }).click();
			expect(onValueChange).toHaveBeenCalledWith('us');
		});
	});

	// Modal dialogs aria-hide everything outside themselves when they open, so a dropdown
	// portalled to <body> must not be in the DOM yet or its options become unreachable by role.
	describe.each([
		{
			container: 'DsModal',
			renderIn: (children: ReactNode) => (
				<DsModal open onOpenChange={() => {}}>
					<DsModal.Body>{children}</DsModal.Body>
				</DsModal>
			),
		},
		{
			container: 'DsDialog',
			renderIn: (children: ReactNode) => (
				<DsDialog open onOpenChange={() => {}} title="Pick a fruit">
					{children}
				</DsDialog>
			),
		},
	])('inside $container', ({ renderIn }) => {
		it('should expose the listbox options by role and select one', async () => {
			const onValueChange = vi.fn();

			await page.render(renderIn(<DsAutocomplete options={mockOptions} onValueChange={onValueChange} />));

			const input = page.getByRole('combobox');
			await input.click();
			await input.fill('b');

			await expect.element(page.getByRole('listbox')).toBeVisible();
			await page.getByRole('option', { name: /Banana/i }).click();

			expect(onValueChange).toHaveBeenCalledWith('banana');
		});
	});

	it('should keep options reachable by role after a DsModal is closed and reopened', async () => {
		const ModalHarness = () => {
			const [open, setOpen] = useState(true);

			return (
				<>
					<button type="button" onClick={() => setOpen(true)}>
						Open modal
					</button>
					<DsModal open={open} onOpenChange={setOpen}>
						<DsModal.Body>
							<DsAutocomplete options={mockOptions} />
							<button type="button" onClick={() => setOpen(false)}>
								Close modal
							</button>
						</DsModal.Body>
					</DsModal>
				</>
			);
		};

		await page.render(<ModalHarness />);

		await page.getByRole('combobox').click();
		await page.getByRole('combobox').fill('b');
		await page.getByRole('option', { name: /Banana/i }).click();

		await page.getByRole('button', { name: 'Close modal' }).click();
		await expect.element(page.getByRole('dialog')).not.toBeInTheDocument();
		await page.getByRole('button', { name: 'Open modal' }).click();

		await page.getByRole('combobox').fill('c');
		await page.getByRole('option', { name: /Cherry/i }).click();

		await expect.element(page.getByRole('combobox')).toHaveValue('Cherry');
	});
});
