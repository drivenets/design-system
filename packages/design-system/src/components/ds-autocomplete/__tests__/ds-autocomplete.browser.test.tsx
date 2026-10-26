import { type ReactNode, useEffect, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
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

	describe('multiple', () => {
		const tagOptions: DsAutocompleteOption[] = [
			{ value: 'production', label: 'Production' },
			{ value: 'staging', label: 'Staging' },
			{ value: 'security', label: 'Security' },
			{ value: 'compliance', label: 'Compliance' },
		];

		const TagsHarness = ({
			initialValue = [],
			creatable = true,
			disabled,
			onValueChange,
			onCreate,
		}: {
			initialValue?: string[];
			creatable?: boolean;
			disabled?: boolean;
			onValueChange?: (value: string[]) => void;
			onCreate?: (name: string) => void;
		}) => {
			const [options, setOptions] = useState(tagOptions);
			const [value, setValue] = useState(initialValue);

			return (
				<DsAutocomplete
					multiple
					options={options}
					value={value}
					disabled={disabled}
					style={{ width: '400px' }}
					onValueChange={(nextValue) => {
						setValue(nextValue);
						onValueChange?.(nextValue);
					}}
					onCreate={
						creatable
							? (name) => {
									setOptions((current) => [...current, { value: name, label: name }]);
									onCreate?.(name);
								}
							: undefined
					}
				/>
			);
		};

		const tag = (label: string) => page.getByRole('button', { name: label, exact: true });

		// DsTag's root is a `role="button"`, which hides its nested remove button from the accessibility tree.
		const removeButton = (label: string) => page.getByLabelText(`Remove ${label}`);

		it('should toggle options from the list and keep it open', async () => {
			const onValueChange = vi.fn();
			await page.render(<TagsHarness onValueChange={onValueChange} />);

			const input = page.getByRole('combobox');
			await input.click();

			await page.getByRole('option', { name: 'Staging' }).click();
			expect(onValueChange).toHaveBeenLastCalledWith(['staging']);
			await expect.element(tag('Staging')).toBeVisible();
			await expect
				.element(page.getByRole('option', { name: 'Staging' }))
				.toHaveAttribute('aria-selected', 'true');
			await expect.element(input).toHaveFocus();

			await page.getByRole('option', { name: 'Security' }).click();
			expect(onValueChange).toHaveBeenLastCalledWith(['staging', 'security']);

			await page.getByRole('option', { name: 'Staging' }).click();
			expect(onValueChange).toHaveBeenLastCalledWith(['security']);
			await expect.element(tag('Staging')).not.toBeInTheDocument();
		});

		it('should offer a create row only for text that matches no option', async () => {
			await page.render(<TagsHarness />);

			const input = page.getByRole('combobox');
			await input.click();

			await input.fill('sta');
			await expect.element(page.getByRole('option', { name: 'Staging' })).toBeVisible();
			await expect.element(page.getByRole('option', { name: 'Production' })).not.toBeInTheDocument();
			await expect.element(page.getByRole('option', { name: "Create new tag 'sta'" })).toBeVisible();

			await input.fill('STAGING');
			await expect.element(page.getByRole('option', { name: /Create new tag/ })).not.toBeInTheDocument();
		});

		it('should create a tag from the create row', async () => {
			const onValueChange = vi.fn();
			const onCreate = vi.fn();
			await page.render(<TagsHarness onValueChange={onValueChange} onCreate={onCreate} />);

			const input = page.getByRole('combobox');
			await input.click();
			await input.fill('  Nightly  ');
			await page.getByRole('option', { name: "Create new tag 'Nightly'" }).click();

			expect(onCreate).toHaveBeenCalledWith('Nightly');
			expect(onValueChange).toHaveBeenLastCalledWith(['Nightly']);
			await expect.element(tag('Nightly')).toBeVisible();
			await expect.element(input).toHaveValue('');
		});

		it('should add the matching option on Enter without a highlighted row', async () => {
			const onValueChange = vi.fn();
			const onCreate = vi.fn();
			await page.render(
				<TagsHarness initialValue={['production']} onValueChange={onValueChange} onCreate={onCreate} />,
			);

			const input = page.getByRole('combobox');
			await input.click();

			await input.fill('security');
			await userEvent.keyboard('{Enter}');
			expect(onValueChange).toHaveBeenLastCalledWith(['production', 'security']);
			await expect.element(input).toHaveValue('');

			await input.fill('PRODUCTION');
			await userEvent.keyboard('{Enter}');
			expect(onValueChange).toHaveBeenCalledTimes(1);
			await expect.element(input).toHaveValue('');

			await userEvent.keyboard('{Enter}');
			expect(onValueChange).toHaveBeenCalledTimes(1);
			expect(onCreate).not.toHaveBeenCalled();
		});

		it('should create a tag on Enter when the text matches no option', async () => {
			const onValueChange = vi.fn();
			const onCreate = vi.fn();
			await page.render(<TagsHarness onValueChange={onValueChange} onCreate={onCreate} />);

			const input = page.getByRole('combobox');
			await input.click();
			await input.fill('Nightly');
			await userEvent.keyboard('{Enter}');

			expect(onCreate).toHaveBeenCalledWith('Nightly');
			expect(onValueChange).toHaveBeenLastCalledWith(['Nightly']);
		});

		it('should select the highlighted row with the keyboard and stop at the create row', async () => {
			const onValueChange = vi.fn();
			const onCreate = vi.fn();
			await page.render(<TagsHarness onValueChange={onValueChange} onCreate={onCreate} />);

			const input = page.getByRole('combobox');
			await input.click();
			await input.fill('s');
			await userEvent.keyboard('{ArrowDown}');
			await userEvent.keyboard('{Enter}');
			expect(onValueChange).toHaveBeenLastCalledWith(['staging']);

			await input.fill('se');
			await userEvent.keyboard('{ArrowDown}{ArrowDown}{ArrowDown}{ArrowDown}');
			await userEvent.keyboard('{Enter}');
			expect(onCreate).toHaveBeenCalledWith('se');
		});

		it('should turn text before a comma into a tag and keep the rest', async () => {
			const onValueChange = vi.fn();
			await page.render(<TagsHarness onValueChange={onValueChange} />);

			const input = page.getByRole('combobox');
			await input.click();
			await input.fill('staging, Night');

			expect(onValueChange).toHaveBeenLastCalledWith(['staging']);
			await expect.element(input).toHaveValue('Night');
		});

		it('should add every pasted comma-separated name', async () => {
			const onValueChange = vi.fn();
			const onCreate = vi.fn();
			await page.render(
				<TagsHarness initialValue={['security']} onValueChange={onValueChange} onCreate={onCreate} />,
			);

			const input = page.getByRole('combobox');
			await input.click();

			const clipboardData = new DataTransfer();
			clipboardData.setData('text', 'staging, , Nightly ,SECURITY, nightly');
			input
				.element()
				.dispatchEvent(new ClipboardEvent('paste', { clipboardData, bubbles: true, cancelable: true }));

			expect(onCreate).toHaveBeenCalledExactlyOnceWith('Nightly');
			expect(onValueChange).toHaveBeenLastCalledWith(['security', 'staging', 'Nightly']);
			await expect.element(input).toHaveValue('');
		});

		it('should only pick existing options without onCreate', async () => {
			const onValueChange = vi.fn();
			await page.render(<TagsHarness creatable={false} onValueChange={onValueChange} />);

			const input = page.getByRole('combobox');
			await input.click();
			await input.fill('Nightly');

			await expect.element(page.getByText('No matching tags')).toBeVisible();
			await userEvent.keyboard('{Enter}');
			await input.fill('Nightly, other');

			expect(onValueChange).not.toHaveBeenCalled();
		});

		it('should remove tags with the remove button and Backspace', async () => {
			const onValueChange = vi.fn();
			await page.render(
				<TagsHarness initialValue={['production', 'staging', 'security']} onValueChange={onValueChange} />,
			);

			await tag('Staging').hover();
			await removeButton('Staging').click();
			expect(onValueChange).toHaveBeenLastCalledWith(['production', 'security']);
			await expect.element(page.getByRole('listbox')).not.toBeInTheDocument();

			await page.getByRole('combobox').click();
			await userEvent.keyboard('{Backspace}');
			expect(onValueChange).toHaveBeenLastCalledWith(['production']);
		});

		it('should keep the list open when removing a tag while it is open', async () => {
			const onValueChange = vi.fn();
			await page.render(
				<TagsHarness initialValue={['production', 'staging']} onValueChange={onValueChange} />,
			);

			await page.getByRole('combobox').click();
			await expect.element(page.getByRole('listbox')).toBeVisible();

			await tag('Staging').hover();
			await removeButton('Staging').click();

			expect(onValueChange).toHaveBeenLastCalledWith(['production']);
			await expect.element(page.getByRole('listbox')).toBeVisible();
		});

		it('should clear the text and close the list on Escape, keeping focus', async () => {
			await page.render(<TagsHarness />);

			const input = page.getByRole('combobox');
			await input.click();
			await input.fill('sta');
			await expect.element(page.getByRole('listbox')).toBeVisible();

			await userEvent.keyboard('{Escape}');

			await expect.element(input).toHaveValue('');
			await expect.element(input).toHaveFocus();
			await expect.element(page.getByRole('listbox')).not.toBeInTheDocument();
		});

		it('should not allow changes while disabled', async () => {
			await page.render(<TagsHarness initialValue={['production']} disabled />);

			await expect.element(page.getByRole('combobox')).toBeDisabled();
			await expect.element(tag('Production')).toBeVisible();
			await expect.element(removeButton('Production')).not.toBeInTheDocument();
		});
	});
});
