import { type ChangeEvent, Fragment, useEffect, useRef, useState } from 'react';
import { DatePicker, type DateValue } from '@ark-ui/react/date-picker';
import { Portal } from '@ark-ui/react/portal';
import type { DsDatePickerProps } from './ds-date-picker.types';
import {
	formatDate,
	fromIntlDate,
	isSameDay,
	parseDate,
	toIntlDate,
	validateDateString,
} from './ds-date-picker.utils';
import { DsTimePicker } from '../ds-time-picker';
import { DsIcon } from '../ds-icon';
import styles from './ds-date-picker.module.scss';
import { useControlled } from '../../utils/use-controlled';
import { DsTextInput } from '../ds-text-input';
import { DsButton } from '../ds-button';
import { DayView } from './components/day-view';
import { MonthView } from './components/month-view';
import { YearView } from './components/year-view';

const DsDatePicker = ({
	placeholder,
	className,
	withTime = false,
	closeOnSelect = true,
	disablePortal = false,
	hideClearButton = false,
	locale,
	slotProps,
	onChange,
	onOpenChange,
	value: _value,
	defaultValue: _defaultValue,
	min: _min,
	max: _max,
	disabled,
	readOnly,
	id,
	...restProps
}: DsDatePickerProps) => {
	const defaultValue = toIntlDate(_defaultValue);

	const [value, setValue] = useControlled<DateValue | null>(
		toIntlDate(_value),
		onChange ? (v) => onChange(fromIntlDate(v)) : undefined,
		defaultValue ?? null,
	);

	const min = toIntlDate(_min);
	const max = toIntlDate(_max);

	const [isFocused, setIsFocused] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const inputRef = useRef<HTMLInputElement>(null);

	const formattedValue = formatDate(value, withTime);

	// Reformat on value change, but skip while focused to avoid disrupting typing
	useEffect(() => {
		if (!isFocused && inputRef.current) {
			inputRef.current.value = formattedValue;
		}
	}, [isFocused, formattedValue]);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;

		const isValid = validateDateString({ text, min, max, withTime });

		if (isValid) {
			const parsedValue = parseDate(text);
			setValue(parsedValue);
		}
	};

	const resetInput = () => {
		if (inputRef.current) {
			inputRef.current.value = value ? formattedValue : '';
		}
	};

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);

		const text = inputRef.current?.value || '';
		const isValid = validateDateString({ text, min, max, withTime });

		if (isValid) {
			setValue(parseDate(text));
		} else {
			resetInput();
		}
	};

	const showClearButton = !hideClearButton && !disabled && !readOnly && !!value;
	const Wrapper = disablePortal ? Fragment : Portal;

	return (
		<DatePicker.Root
			className={className}
			value={value ? [value] : undefined}
			defaultValue={defaultValue ? [defaultValue] : undefined}
			onValueChange={(details) => {
				setValue(details.value[0] ?? null);
			}}
			selectionMode="single"
			positioning={{ placement: 'bottom-start', gutter: 4 }}
			closeOnSelect={withTime ? false : closeOnSelect}
			min={min}
			max={max}
			disabled={disabled}
			readOnly={readOnly}
			open={isOpen}
			onOpenChange={(details) => {
				if (!isFocused) {
					setIsOpen(details.open);
					onOpenChange?.(details.open);
				}
			}}
			{...restProps}
		>
			<DatePicker.Control className={styles.control}>
				<DsTextInput
					ref={inputRef}
					id={id}
					placeholder={placeholder ?? (withTime ? 'mm/dd/yyyy, hh:mm AM/PM' : 'mm/dd/yyyy')}
					defaultValue={formattedValue}
					onChange={handleInputChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					disabled={disabled}
					readOnly={readOnly}
					{...slotProps?.input}
					slots={{
						...slotProps?.input?.slots,
						endAdornment: (
							<>
								{showClearButton && (
									<DatePicker.ClearTrigger asChild onClick={() => setValue(null)}>
										<DsButton
											design="v1.2"
											size="tiny"
											buttonType="tertiary"
											disabled={disabled}
											aria-label={locale?.clearLabel ?? 'Clear date'}
										>
											<DsIcon icon="close" size="tiny" />
										</DsButton>
									</DatePicker.ClearTrigger>
								)}
								<DatePicker.Trigger asChild>
									<DsButton
										design="v1.2"
										size="tiny"
										buttonType="tertiary"
										disabled={disabled}
										aria-label={locale?.openCalendarLabel ?? 'Open calendar'}
									>
										<DsIcon icon="calendar_today" size="tiny" />
									</DsButton>
								</DatePicker.Trigger>
							</>
						),
					}}
				/>
			</DatePicker.Control>

			<Wrapper>
				<DatePicker.Positioner className={styles.positioner}>
					<DatePicker.Content className={styles.content}>
						<DayView>
							{withTime && (
								<DsTimePicker
									value={fromIntlDate(value)}
									onChange={(v) => {
										setValue(toIntlDate(v));
									}}
									min={isSameDay(value, min) ? _min : undefined}
									max={isSameDay(value, max) ? _max : undefined}
									disabled={disabled || !value}
									readOnly={readOnly}
									{...slotProps?.timePicker}
									slotProps={{
										popover: {
											...slotProps?.timePicker?.slotProps?.popover,
											className: styles.timePickerPopoverContent,
										},
										...slotProps?.timePicker?.slotProps,
									}}
								/>
							)}
						</DayView>
						<MonthView />
						<YearView />
					</DatePicker.Content>
				</DatePicker.Positioner>
			</Wrapper>
		</DatePicker.Root>
	);
};

export default DsDatePicker;
