import classNames from 'classnames';
import { DsFormControl } from '../ds-form-control';
import { DsButton } from '../ds-button';
import { DsIcon } from '../ds-icon';
import { useControlled } from '../../utils/use-controlled';
import type { DateRangeValue, DsDateRangePickerProps } from './ds-date-range-picker.types';
import styles from './ds-date-range-picker.module.scss';
import { earlierDate, laterDate } from './ds-date-range-picker.utils';

const DsDateRangePicker = ({
	value: valueProp,
	defaultValue,
	onChange,
	min,
	max,
	withTime = false,
	orientation = 'horizontal',
	hideClearAll = false,
	closeOnSelect = true,
	disabled,
	readOnly,
	className,
	disablePortal,
	locale,
	slotProps,
}: DsDateRangePickerProps) => {
	const [value, setValue] = useControlled<DateRangeValue>(valueProp, onChange, defaultValue ?? DEFAULT_VALUE);

	const [startDate, endDate] = value;

	const handleStartChange = (date: Date | null) => {
		setValue([date, endDate]);
	};

	const handleEndChange = (date: Date | null) => {
		setValue([startDate, date]);
	};

	const handleClearAll = () => {
		setValue([null, null]);
	};

	const effectiveStartMax = earlierDate(max, endDate ?? undefined);
	const effectiveEndMin = laterDate(min, startDate ?? undefined);

	const showClearAll = !hideClearAll && !disabled && !readOnly && (!!startDate || !!endDate);

	return (
		<div className={classNames(styles.root, styles[orientation], className)}>
			<DsFormControl
				label="Start date"
				{...slotProps?.startFormControl}
				className={classNames(styles.formControl, slotProps?.startFormControl?.className)}
			>
				<DsFormControl.DatePicker
					value={startDate}
					onChange={handleStartChange}
					min={min}
					max={effectiveStartMax}
					withTime={withTime}
					closeOnSelect={closeOnSelect}
					disabled={disabled}
					readOnly={readOnly}
					disablePortal={disablePortal}
					{...slotProps?.startDatePicker}
				/>
			</DsFormControl>

			<DsFormControl
				label="End date"
				{...slotProps?.endFormControl}
				className={classNames(styles.formControl, slotProps?.startFormControl?.className)}
			>
				<DsFormControl.DatePicker
					value={endDate}
					onChange={handleEndChange}
					min={effectiveEndMin}
					max={max}
					withTime={withTime}
					closeOnSelect={closeOnSelect}
					disabled={disabled}
					readOnly={readOnly}
					disablePortal={disablePortal}
					{...slotProps?.endDatePicker}
				/>
			</DsFormControl>

			{showClearAll && (
				<DsButton design="v1.2" buttonType="tertiary" className={styles.clearButton} onClick={handleClearAll}>
					<DsIcon icon="close" size="small" />
					{locale?.clearAllLabel ?? 'Clear all'}
				</DsButton>
			)}
		</div>
	);
};

export default DsDateRangePicker;

const DEFAULT_VALUE: DateRangeValue = [null, null];
