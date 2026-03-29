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
	defaultValue = [null, null],
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
	const [value, setValue] = useControlled<DateRangeValue>(valueProp, onChange, defaultValue);

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

	// max allowed date for the "Start date" is the earliest of "max" and the selected "endDate"
	const effectiveStartMax = earlierDate(max, endDate ?? undefined);

	// min allowed date for the "End date" is the later of "min" and the selected "startDate"
	const effectiveEndMin = laterDate(min, startDate ?? undefined);

	const showClearAll = !hideClearAll && !disabled && !readOnly && (!!startDate || !!endDate);

	return (
		<div className={classNames(styles.root, styles[orientation], className)}>
			<DsFormControl
				label="Start date"
				{...slotProps?.startDateFormControl}
				className={classNames(styles.formControl, slotProps?.startDateFormControl?.className)}
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
				{...slotProps?.endDateFormControl}
				className={classNames(styles.formControl, slotProps?.startDateFormControl?.className)}
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
