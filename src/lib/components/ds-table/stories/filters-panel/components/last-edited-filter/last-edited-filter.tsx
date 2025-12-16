import { useState } from 'react';
import { UserAvatar } from '../user-avatar/user-avatar';
import type { CheckboxFilterItem } from '../../../../filters/components/checkbox-filter';
import { CheckboxFilter } from '../../../../filters/components/checkbox-filter';
import styles from './last-edited-filter.module.scss';
import { DsTypography } from '../../../../../ds-typography';
import { DsButton } from '../../../../../ds-button';
import { DsIcon } from '../../../../../ds-icon';
import { DsTextInput } from '../../../../../ds-text-input';

export interface LastEditedFilterValue {
	editors: string[];
	timeRange: '24h' | 'week' | 'month' | '3months' | 'custom' | null;
	customFrom?: string;
	customTo?: string;
}

export interface LastEditedFilterProps {
	value: LastEditedFilterValue;
	onChange: (value: LastEditedFilterValue) => void;
	availableEditors: Array<{ name: string; colorIndex: number }>;
}

const timeRangeOptions = [
	{ value: '24h', label: '24 hours' },
	{ value: 'week', label: 'Last week' },
	{ value: 'month', label: 'Last month' },
	{ value: '3months', label: 'Last 3 months' },
	{ value: 'custom', label: 'Custom' },
] as const;

export const LastEditedFilter = ({ value, onChange, availableEditors }: LastEditedFilterProps) => {
	const [searchQuery, setSearchQuery] = useState('');

	// Filter editors based on search
	const filteredEditors = availableEditors.filter((editor) =>
		editor.name.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	// Convert to CheckboxFilterItem format
	const editorItems: CheckboxFilterItem[] = filteredEditors.map((editor) => ({
		value: editor.name,
		label: editor.name,
		metadata: { colorIndex: editor.colorIndex },
	}));

	const selectedEditorItems = editorItems.filter((item) => value.editors.includes(item.value as string));

	const handleEditorChange = (selected: CheckboxFilterItem[]) => {
		onChange({
			...value,
			editors: selected.map((item) => item.value as string),
		});
	};

	const handleTimeRangeChange = (range: string) => {
		onChange({
			...value,
			timeRange: range as LastEditedFilterValue['timeRange'],
			// Clear custom dates if switching away from custom
			...(range !== 'custom' && { customFrom: undefined, customTo: undefined }),
		});
	};

	const handleClearEditors = () => {
		onChange({
			...value,
			editors: [],
		});
		setSearchQuery('');
	};

	const handleClearTimeRange = () => {
		onChange({
			...value,
			timeRange: null,
			customFrom: undefined,
			customTo: undefined,
		});
	};

	return (
		<div className={styles.container}>
			{/* Editor Section */}
			<div className={styles.section}>
				<div className={styles.header}>
					<DsTypography variant="body-md-md">Editor</DsTypography>
					{value.editors.length > 0 && (
						<DsButton design="v1.2" buttonType="tertiary" size="small" onClick={handleClearEditors}>
							Clear
						</DsButton>
					)}
				</div>
				<div className={styles.searchWrapper}>
					<div className={styles.searchIcon}>
						<DsIcon icon="search" size="tiny" />
					</div>
					<DsTextInput
						placeholder="Search"
						value={searchQuery}
						onValueChange={setSearchQuery}
						size="default"
						className={styles.searchInput}
					/>
				</div>
				<div className={styles.editorList}>
					<CheckboxFilter
						items={editorItems}
						selectedItems={selectedEditorItems}
						onSelectionChange={handleEditorChange}
						renderer={(item) => (
							<div className={styles.editorItem}>
								<UserAvatar
									name={item.label}
									size="small"
									colorIndex={(item.metadata?.colorIndex as number) || 0}
								/>
								<DsTypography variant="body-sm-reg">{item.label}</DsTypography>
							</div>
						)}
					/>
				</div>
			</div>

			{/* Last Edited Section */}
			<div className={styles.section}>
				<div className={styles.header}>
					<DsTypography variant="body-md-md">Last edited</DsTypography>
					{value.timeRange && (
						<DsButton design="v1.2" buttonType="tertiary" size="small" onClick={handleClearTimeRange}>
							Clear
						</DsButton>
					)}
				</div>
				<div className={styles.timeRangeOptions}>
					{timeRangeOptions.map((option) => (
						<label key={option.value} className={styles.radioOption}>
							<input
								type="radio"
								name="timeRange"
								value={option.value}
								checked={value.timeRange === option.value}
								onChange={() => handleTimeRangeChange(option.value)}
							/>
							<DsTypography variant="body-sm-reg">{option.label}</DsTypography>
						</label>
					))}
				</div>
				{value.timeRange === 'custom' && (
					<div className={styles.customDateRange}>
						<div className={styles.dateInput}>
							<DsTypography variant="body-sm-reg">From</DsTypography>
							<DsTextInput
								type="date"
								value={value.customFrom || ''}
								onValueChange={(val) => onChange({ ...value, customFrom: val })}
								size="default"
							/>
						</div>
						<div className={styles.dateInput}>
							<DsTypography variant="body-sm-reg">To</DsTypography>
							<DsTextInput
								type="date"
								value={value.customTo || ''}
								onValueChange={(val) => onChange({ ...value, customTo: val })}
								size="default"
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
