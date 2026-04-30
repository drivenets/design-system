import { useState, type CSSProperties, type ReactNode } from 'react';
import { describe, expect, it } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import DsSelect from '../ds-select';
import type { DsSelectOption } from '../ds-select.types';
import { DsTag } from '../../ds-tag';
import { DsIcon } from '../../ds-icon';
import { type DsStatus, DsStatusBadge } from '../../ds-status-badge';
import styles from '../ds-select.stories.module.scss';

const mockOptions = [
	{ value: 'apple', label: 'Apple' },
	{ value: 'banana', label: 'Banana' },
	{ value: 'cherry', label: 'Cherry' },
	{ value: 'date', label: 'Date' },
	{ value: 'elderberry', label: 'Elderberry' },
	{ value: 'fig', label: 'Fig' },
	{ value: 'grape', label: 'Grape' },
	{ value: 'honeydew', label: 'Honeydew' },
	{ value: 'indian-fig', label: 'Indian fig' },
	{ value: 'jackfruit', label: 'Jackfruit' },
	{ value: 'kiwi', label: 'Kiwi' },
	{ value: 'lemon', label: 'Lemon' },
	{ value: 'melon', label: 'Melon' },
] satisfies DsSelectOption[];

const countryOptions: DsSelectOption[] = [
	{ value: 'us', label: 'United States' },
	{ value: 'gb', label: 'United Kingdom' },
	{ value: 'de', label: 'Germany' },
	{ value: 'jp', label: 'Japan' },
	{ value: 'fr', label: 'France' },
];

const versionOptions: DsSelectOption[] = [
	{ value: 'v0.8', label: 'v0.8' },
	{ value: 'v1.0', label: 'v1.0' },
	{ value: 'v1.4', label: 'v1.4' },
	{ value: 'v2.3', label: 'v2.3' },
	{ value: 'v3.6', label: 'v3.6' },
	{ value: 'v4.1', label: 'v4.1' },
];

const versionStatusMap: Record<string, { status: DsStatus; label: string }> = {
	'v0.8': { status: 'active', label: 'Live' },
	'v1.0': { status: 'active', label: 'Live' },
	'v1.4': { status: 'running', label: 'Running' },
	'v2.3': { status: 'pending', label: 'Pending' },
	'v3.6': { status: 'draft', label: 'Draft' },
	'v4.1': { status: 'failed', label: 'Failed' },
};

const renderCountryOption = (option: DsSelectOption) => (
	<span className={styles.customOption}>
		<DsTag label={option.value.toUpperCase()} size="small" />
		{option.label}
	</span>
);

const PLACEHOLDER = 'Click to select a value';

const exactAriaName = (label: string) => new RegExp(`^${label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`);

function ControlledSelectHarness({
	options,
	style,
	multiple,
	renderOption,
	renderValue,
}: {
	options: DsSelectOption[];
	style?: CSSProperties;
	multiple?: true;
	renderOption?: (option: DsSelectOption) => ReactNode;
	renderValue?: ((selected: DsSelectOption) => ReactNode) | ((selected: DsSelectOption[]) => ReactNode);
}) {
	const [value, setValue] = useState<string | string[]>(multiple ? [] : '');

	if (multiple) {
		return (
			<DsSelect
				options={options}
				value={value as string[]}
				onValueChange={setValue}
				style={style}
				multiple
				clearable
				renderOption={renderOption}
				renderValue={renderValue as (selected: DsSelectOption[]) => ReactNode}
			/>
		);
	}

	return (
		<DsSelect
			options={options}
			value={value as string}
			onValueChange={setValue}
			style={style}
			clearable
			renderOption={renderOption}
			renderValue={renderValue as (selected: DsSelectOption) => ReactNode}
		/>
	);
}

describe('DsSelect', () => {
	it('should select options and clear value (Default story)', async () => {
		await page.render(<ControlledSelectHarness options={mockOptions} style={{ width: '200px' }} />);

		const trigger = page.getByRole('combobox');
		const firstOption = mockOptions[0];
		const secondOption = mockOptions[1];

		if (!firstOption || !secondOption) {
			throw new Error('mockOptions must have at least 2 items');
		}

		await trigger.click();

		const option1 = page.getByRole('option', { name: firstOption.label });
		await expect.element(option1).not.toHaveAttribute('data-state', 'checked');

		await option1.click();
		await expect.element(trigger).toHaveTextContent(firstOption.label);

		await trigger.click();

		const option2 = page.getByRole('option', { name: secondOption.label });
		await option2.click();
		await expect.element(trigger).toHaveTextContent(secondOption.label);

		await trigger.click();

		const updatedOption1 = page.getByRole('option', { name: firstOption.label });
		await expect.element(updatedOption1).not.toHaveAttribute('data-state', 'checked');

		const updatedOption2 = page.getByRole('option', { name: secondOption.label });
		await expect.element(updatedOption2).toHaveAttribute('data-state', 'checked');

		await trigger.click();

		const closeButton = page.getByRole('button', { name: 'Clear value' });
		await closeButton.click();

		await expect.element(trigger).toHaveTextContent(PLACEHOLDER);
	});

	it('should select options when items have icons (WithIcons story)', async () => {
		const optionsWithIcons = mockOptions.slice(0, 3).map((item) => ({
			...item,
			icon: 'nutrition' as const,
		}));

		await page.render(<ControlledSelectHarness options={optionsWithIcons} style={{ width: '200px' }} />);

		const trigger = page.getByRole('combobox');
		const firstOption = optionsWithIcons[0];
		const secondOption = optionsWithIcons[1];

		if (!firstOption || !secondOption) {
			throw new Error('options must have at least 2 items');
		}

		await trigger.click();

		const option1 = page.getByRole('option', { name: firstOption.label });
		await expect.element(option1).not.toHaveAttribute('data-state', 'checked');

		await option1.click();
		await expect.element(trigger).toHaveTextContent(firstOption.label);

		await trigger.click();

		const option2 = page.getByRole('option', { name: secondOption.label });
		await option2.click();
		await expect.element(trigger).toHaveTextContent(secondOption.label);

		await trigger.click();

		const updatedOption1 = page.getByRole('option', { name: firstOption.label });
		await expect.element(updatedOption1).not.toHaveAttribute('data-state', 'checked');

		const updatedOption2 = page.getByRole('option', { name: secondOption.label });
		await expect.element(updatedOption2).toHaveAttribute('data-state', 'checked');

		await trigger.click();

		await page.getByRole('button', { name: 'Clear value' }).click();

		await expect.element(trigger).toHaveTextContent(PLACEHOLDER);
	});

	it('should select all, expand +N chip, delete chip, and clear all (MultiSelect story)', async () => {
		await page.render(<ControlledSelectHarness options={mockOptions} multiple style={{ width: '250px' }} />);

		const trigger = page.getByRole('combobox');

		await trigger.click();

		await page.getByRole('option', { name: 'All' }).click();

		const expandChip = page.getByRole('button', { name: /^\+\d+$/ });
		await expandChip.click();

		for (const option of mockOptions) {
			const chip = page.getByRole('button', { name: exactAriaName(option.label) });
			await expect.element(chip).toBeInTheDocument();
		}

		await trigger.click();

		for (const option of mockOptions) {
			await expect.element(trigger).toHaveTextContent(option.label);
		}

		await trigger.click();

		const firstOption = mockOptions[0] as DsSelectOption;
		const firstOptionChip = page.getByRole('button', { name: exactAriaName(firstOption.label) });
		const deleteButton = firstOptionChip.getByRole('button', { name: 'Delete chip' });
		await deleteButton.click();

		await expect.element(firstOptionChip).not.toBeInTheDocument();

		await page.getByRole('button', { name: 'Clear All' }).click();

		await trigger.click();

		await expect.element(trigger).toHaveTextContent(PLACEHOLDER);
	});

	it('should filter via search, select multiple, and clear via Backspace (MultiSelectWithSearch story)', async () => {
		const options = [
			...mockOptions,
			{
				value: 'nectarine',
				label: 'Nectarine',
			},
		] satisfies DsSelectOption[];

		await page.render(<ControlledSelectHarness options={options} multiple style={{ width: '250px' }} />);

		const trigger = page.getByRole('combobox');

		await trigger.click();

		const searchInput = page.getByPlaceholder('Search');
		await expect.element(searchInput).toBeInTheDocument();

		await searchInput.fill('berry');

		await expect.element(page.getByRole('option', { name: 'Elderberry' })).toBeInTheDocument();
		await expect.element(page.getByRole('option', { name: 'Apple' })).not.toBeInTheDocument();
		await expect.element(page.getByRole('option', { name: 'Banana' })).not.toBeInTheDocument();
		await expect.element(page.getByRole('option', { name: 'Date' })).not.toBeInTheDocument();

		await searchInput.clear();

		await page.getByRole('option', { name: 'Apple' }).click();
		await page.getByRole('option', { name: 'Banana' }).click();
		await page.getByRole('option', { name: 'Cherry' }).click();

		await expect.element(trigger).toHaveTextContent('Apple');
		await expect.element(trigger).toHaveTextContent('Banana');
		await expect.element(trigger).toHaveTextContent('Cherry');

		await userEvent.keyboard('{Escape}');
		await userEvent.keyboard('{Backspace}');

		await expect.element(trigger).toHaveTextContent(PLACEHOLDER);
		await expect.element(trigger).not.toHaveTextContent('Apple');
		await expect.element(trigger).not.toHaveTextContent('Banana');
		await expect.element(trigger).not.toHaveTextContent('Cherry');
	});

	it('should select options rendered with custom markup (CustomRenderOption story)', async () => {
		await page.render(
			<ControlledSelectHarness
				options={countryOptions}
				renderOption={renderCountryOption}
				style={{ width: '250px' }}
			/>,
		);

		const trigger = page.getByRole('combobox');

		await trigger.click();

		const usOption = page.getByRole('option', { name: /United States/ });
		await expect.element(usOption).toBeInTheDocument();

		await usOption.click();
		await expect.element(trigger).toHaveTextContent('United States');

		await trigger.click();

		await page.getByRole('option', { name: /France/ }).click();
		await expect.element(trigger).toHaveTextContent('France');
	});

	it('should render selected items as chips with custom option markup (CustomRenderOptionMultiSelect story)', async () => {
		await page.render(
			<ControlledSelectHarness
				options={countryOptions}
				renderOption={renderCountryOption}
				multiple
				style={{ width: '300px' }}
			/>,
		);

		const trigger = page.getByRole('combobox');

		await trigger.click();

		await page.getByRole('option', { name: /United States/ }).click();
		await page.getByRole('option', { name: /United Kingdom/ }).click();

		await expect.element(page.getByRole('button', { name: 'United States' })).toBeInTheDocument();
		await expect.element(page.getByRole('button', { name: 'United Kingdom' })).toBeInTheDocument();
	});

	it('should filter and select custom-rendered options via search (CustomRenderOptionWithSearch story)', async () => {
		await page.render(
			<ControlledSelectHarness
				options={[...mockOptions, ...countryOptions]}
				renderOption={(option) => (
					<span className={styles.customOption}>
						<DsIcon icon="public" size="tiny" />
						{option.label}
					</span>
				)}
				style={{ width: '300px' }}
			/>,
		);

		const trigger = page.getByRole('combobox');

		await trigger.click();

		const searchInput = page.getByPlaceholder('Search');
		await searchInput.fill('United');

		await expect.element(page.getByRole('option', { name: /United States/ })).toBeInTheDocument();
		await expect.element(page.getByRole('option', { name: /United Kingdom/ })).toBeInTheDocument();
		await expect.element(page.getByRole('option', { name: /Apple/ })).not.toBeInTheDocument();
		await expect.element(page.getByRole('option', { name: /Germany/ })).not.toBeInTheDocument();

		await searchInput.clear();

		await searchInput.fill('Japan');
		await page.getByRole('option', { name: /Japan/ }).click();

		await expect.element(trigger).toHaveTextContent('Japan');
	});

	it('should render selected value with custom markup in trigger (CustomRenderValue story)', async () => {
		function CustomRenderValueHarness() {
			const [value, setValue] = useState('');

			const renderValue = (selected: DsSelectOption) => {
				const info = versionStatusMap[selected.value];

				return (
					<span className={styles.customOption}>
						{selected.label}
						{info && (
							<DsStatusBadge status={info.status} label={info.label} size="small" ghost icon="check_circle" />
						)}
					</span>
				);
			};

			return (
				<DsSelect
					options={versionOptions}
					value={value}
					onValueChange={setValue}
					renderValue={renderValue}
					clearable
					style={{ width: '250px' }}
				/>
			);
		}

		await page.render(<CustomRenderValueHarness />);

		const trigger = page.getByRole('combobox');

		await expect.element(trigger).toHaveTextContent(PLACEHOLDER);

		await trigger.click();

		await page.getByRole('option', { name: 'v0.8' }).click();

		await expect.element(trigger).toHaveTextContent('v0.8');
		await expect.element(trigger).toHaveTextContent('Live');

		await trigger.click();

		await page.getByRole('option', { name: 'v2.3' }).click();

		await expect.element(trigger).toHaveTextContent('v2.3');
		await expect.element(trigger).toHaveTextContent('Pending');
	});

	it('should render multi selection with custom value markup (CustomRenderValueMultiSelect story)', async () => {
		function CustomRenderValueMultiSelectHarness() {
			const [value, setValue] = useState<string[]>([]);

			const renderOption = (option: DsSelectOption) => (
				<span className={styles.customOption}>
					<DsTag label={option.value.toUpperCase()} size="small" />
					{option.label}
				</span>
			);

			const renderValue = (selected: DsSelectOption[]) => (
				<span className={styles.customOption}>
					{selected.map((opt) => (
						<DsTag key={opt.value} label={opt.value.toUpperCase()} size="small" />
					))}
				</span>
			);

			return (
				<DsSelect
					options={countryOptions}
					value={value}
					onValueChange={setValue}
					renderOption={renderOption}
					renderValue={renderValue}
					multiple
					clearable
					style={{ width: '300px' }}
				/>
			);
		}

		await page.render(<CustomRenderValueMultiSelectHarness />);

		const trigger = page.getByRole('combobox');

		await trigger.click();

		await page.getByRole('option', { name: /United States/ }).click();
		await page.getByRole('option', { name: /Germany/ }).click();

		await expect.element(trigger).toHaveTextContent('US');
		await expect.element(trigger).toHaveTextContent('DE');
	});

	it('should render both options and value with custom markup (CustomRenderValueAndOption story)', async () => {
		function CustomRenderValueAndOptionHarness() {
			const [value, setValue] = useState('');

			const renderOption = (option: DsSelectOption) => {
				const info = versionStatusMap[option.value];

				if (!info) {
					return option.label;
				}

				return (
					<span className={styles.customOption}>
						{option.label}
						<DsStatusBadge status={info.status} label={info.label} size="small" ghost icon="check_circle" />
					</span>
				);
			};

			const renderValue = (selected: DsSelectOption) => {
				const info = versionStatusMap[selected.value];

				return (
					<span className={styles.customOption}>
						{selected.label}
						{info && (
							<DsStatusBadge status={info.status} label={info.label} size="small" ghost icon="check_circle" />
						)}
					</span>
				);
			};

			return (
				<DsSelect
					options={versionOptions}
					value={value}
					onValueChange={setValue}
					renderOption={renderOption}
					renderValue={renderValue}
					clearable
					style={{ width: '250px' }}
				/>
			);
		}

		await page.render(<CustomRenderValueAndOptionHarness />);

		const trigger = page.getByRole('combobox');

		await expect.element(trigger).toHaveTextContent(PLACEHOLDER);

		await trigger.click();

		const v08 = page.getByRole('option', { name: /v0.8/ });
		await expect.element(v08).toHaveTextContent('Live');
		await v08.click();

		await expect.element(trigger).toHaveTextContent('v0.8');
		await expect.element(trigger).toHaveTextContent('Live');

		await trigger.click();

		const v14 = page.getByRole('option', { name: /v1.4/ });
		await expect.element(v14).toHaveTextContent('Running');
		await v14.click();

		await expect.element(trigger).toHaveTextContent('v1.4');
		await expect.element(trigger).toHaveTextContent('Running');
	});

	it('should render multi selection with both custom render fns (CustomRenderValueAndOptionMultiSelect story)', async () => {
		function CustomRenderValueAndOptionMultiSelectHarness() {
			const [value, setValue] = useState<string[]>([]);

			const renderOption = (option: DsSelectOption) => {
				const info = versionStatusMap[option.value];

				if (!info) {
					return option.label;
				}

				return (
					<span className={styles.customOption}>
						{option.label}
						<DsStatusBadge status={info.status} label={info.label} size="small" ghost icon="check_circle" />
					</span>
				);
			};

			const renderValue = (selected: DsSelectOption[]) => {
				const option = selected[0];
				const info = option ? versionStatusMap[option.value] : undefined;

				return (
					<span className={styles.customOption}>
						{option?.label}
						{info && (
							<DsStatusBadge status={info.status} label={info.label} size="small" ghost icon="check_circle" />
						)}
						{selected.length > 1 && ` +${String(selected.length - 1)}`}
					</span>
				);
			};

			return (
				<DsSelect
					options={versionOptions}
					value={value}
					onValueChange={setValue}
					renderOption={renderOption}
					renderValue={renderValue}
					multiple
					clearable
					style={{ width: '300px' }}
				/>
			);
		}

		await page.render(<CustomRenderValueAndOptionMultiSelectHarness />);

		const trigger = page.getByRole('combobox');

		await trigger.click();

		const v08 = page.getByRole('option', { name: /v0.8/ });
		await expect.element(v08).toHaveTextContent('Live');
		await v08.click();

		await expect.element(trigger).toHaveTextContent('v0.8');
		await expect.element(trigger).toHaveTextContent('Live');

		const v36 = page.getByRole('option', { name: /v3.6/ });
		await expect.element(v36).toHaveTextContent('Draft');
		await v36.click();

		await expect.element(trigger).toHaveTextContent('v0.8');
		await expect.element(trigger).toHaveTextContent('+1');
	});

	it('should clear via Backspace, Delete, and allow Space in search (KeyboardInteractions story)', async () => {
		const options = [
			...mockOptions,
			{
				value: 'nectarine',
				label: 'Nectarine',
			},
		] satisfies DsSelectOption[];

		await page.render(<ControlledSelectHarness options={options} style={{ width: '250px' }} />);

		const trigger = page.getByRole('combobox');

		await trigger.click();

		await page.getByRole('option', { name: 'Apple' }).click();
		await expect.element(trigger).toHaveTextContent('Apple');

		await userEvent.keyboard('{Escape}');
		await userEvent.keyboard('{Backspace}');

		await expect.element(trigger).toHaveTextContent(PLACEHOLDER);

		await trigger.click();

		await page.getByRole('option', { name: 'Banana' }).click();
		await expect.element(trigger).toHaveTextContent('Banana');

		await userEvent.keyboard('{Escape}');
		await userEvent.keyboard('{Delete}');

		await expect.element(trigger).toHaveTextContent(PLACEHOLDER);

		await trigger.click();

		const searchInput = page.getByPlaceholder('Search');
		await searchInput.click();

		await searchInput.fill('indian fig');

		await expect.element(searchInput).toHaveValue('indian fig');

		await expect.element(page.getByRole('option', { name: 'Indian fig' })).toBeInTheDocument();

		await searchInput.clear();
		await userEvent.keyboard('{Escape}');
	});
});
