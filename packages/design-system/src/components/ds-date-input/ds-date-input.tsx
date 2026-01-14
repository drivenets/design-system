import { type ChangeEvent, Fragment, useRef, useState } from 'react';
import { DatePicker } from '@ark-ui/react/date-picker';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import type { DsDateInputProps } from './ds-date-input.types';
import {
	dateValuesToStrings,
	formatDateInputValue,
	isoStringToDateValue,
	parseInputText,
	stringToDateValue,
	validateDateString,
} from './ds-date-input.utils';
import { DsIcon } from '../ds-icon';
import { DsTypography } from '../ds-typography';
import styles from './ds-date-input.module.scss';

/**
 * Design system date input component with integrated calendar picker.
 *
 * Supports both single date and date range selection with a single text input field.
 * Features built-in validation, manual text entry, and calendar selection.
 */
const DsDateInput = ({
	range = false,
	placeholder,
	style,
	className,
	disablePortal = false,
	onValueChange,
	onOpenChange,
	value: _value,
	defaultValue: _defaultValue,
	min: _min,
	max: _max,
	disabled,
	readOnly,
	id,
	...datePickerProps
}: DsDateInputProps) => {
	const min = _min ? isoStringToDateValue(_min) : undefined;
	const max = _max ? isoStringToDateValue(_max) : undefined;

	// Convert public API (string | [string, string]) to internal API (DateValue[])
	const value = _value ? stringToDateValue(_value) : [];
	const defaultValue = _defaultValue ? stringToDateValue(_defaultValue) : [];

	// Local state for manual text editing
	const [isFocused, setIsFocused] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const prevValue = useRef<string | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	// Reformat the input value on every value change
	// We don't format when the input is focused since the date value might get updated while the user is typing
	// but we don't want to reformat the input text for him while he's typing.
	if (!isFocused && prevValue.current !== JSON.stringify(value)) {
		prevValue.current = JSON.stringify(value);

		if (inputRef.current) {
			inputRef.current.value = formatDateInputValue(value, range);
		}
	}

	const clear = () => {
		if (inputRef.current) {
			inputRef.current.value = '';
		}

		onValueChange?.(undefined);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;

		// Try to parse and validate as the user types
		const validation = validateDateString({ text, range, min, max });

		if (validation.isValid) {
			const parsedValue = parseInputText(text, range);
			onValueChange?.(dateValuesToStrings(parsedValue, range) as never);
		}
	};

	const handleBlur = () => {
		setIsFocused(false);

		const text = inputRef.current?.value || '';
		const validation = validateDateString({ text, range, min, max });

		// Clear invalid input on blur
		if (!validation.isValid) {
			clear();
			return;
		}

		const parsedValue = parseInputText(text, range);

		onValueChange?.(dateValuesToStrings(parsedValue, range) as never);
	};

	const showClearButton = !disabled && !readOnly && !!(value.length > 0 ? value : defaultValue).length;
	const Wrapper = disablePortal ? Fragment : Portal;

	return (
		<DatePicker.Root
			value={value}
			defaultValue={defaultValue}
			onValueChange={(details) => {
				onValueChange?.(dateValuesToStrings(details.value, range) as never);
			}}
			selectionMode={range ? 'range' : 'single'}
			positioning={{ placement: 'bottom-start', gutter: 4 }}
			closeOnSelect={!range}
			min={min}
			max={max}
			disabled={disabled}
			readOnly={readOnly}
			open={isOpen}
			onOpenChange={(details) => {
				// Don't close the calendar when the user is typing
				if (!isFocused) {
					setIsOpen(details.open);
					onOpenChange?.(details.open);
				}
			}}
			{...datePickerProps}
		>
			<DatePicker.Control
				style={style}
				className={classNames(
					styles.dateInputControl,
					disabled && styles.disabled,
					readOnly && styles.readOnly,
					className,
				)}
			>
				<DatePicker.Trigger asChild>
					<button
						type="button"
						className={styles.dateInputButton}
						disabled={disabled}
						aria-label="Open calendar"
					>
						<DsIcon icon="calendar_month" size="small" />
					</button>
				</DatePicker.Trigger>

				<input
					ref={inputRef}
					id={id}
					type="text"
					className={styles.input}
					placeholder={placeholder ?? (range ? 'MM/DD/YYYY - MM/DD/YYYY' : 'MM/DD/YYYY')}
					defaultValue={formatDateInputValue(value.length > 0 ? value : defaultValue, range)}
					onChange={handleInputChange}
					onBlur={handleBlur}
					onFocus={() => setIsFocused(true)}
					disabled={disabled}
					readOnly={readOnly}
				/>

				{showClearButton && (
					<button
						type="button"
						className={styles.dateInputButton}
						onClick={clear}
						aria-label={range ? 'Clear date range' : 'Clear date'}
					>
						<DsIcon icon="close" size="small" />
					</button>
				)}
			</DatePicker.Control>

			<Wrapper>
				<DatePicker.Positioner className={styles.positioner}>
					<DatePicker.Content className={styles.content}>
						<CalendarViewControl />
						<div className={styles.calendarView}>
							<DayView />
							<MonthView />
							<YearView />
						</div>
					</DatePicker.Content>
				</DatePicker.Positioner>
			</Wrapper>
		</DatePicker.Root>
	);
};

/**
 * Calendar view control with navigation buttons
 */
const CalendarViewControl = () => (
	<DatePicker.ViewControl className={styles.viewControl}>
		<DatePicker.PrevTrigger className={styles.prevTrigger}>
			<DsIcon icon="chevron_left" size="small" />
		</DatePicker.PrevTrigger>
		<DatePicker.ViewTrigger className={styles.viewTrigger} asChild>
			<button type="button">
				<DsTypography variant="body-md-md" asChild>
					<DatePicker.RangeText />
				</DsTypography>
			</button>
		</DatePicker.ViewTrigger>
		<DatePicker.NextTrigger className={styles.nextTrigger}>
			<DsIcon icon="chevron_right" size="small" />
		</DatePicker.NextTrigger>
	</DatePicker.ViewControl>
);

/**
 * Day view - displays calendar grid with days of the month
 */
const DayView = () => (
	<DatePicker.View view="day">
		<DatePicker.Context>
			{(datePicker) => (
				<DatePicker.Table className={styles.table}>
					<DatePicker.TableHead className={styles.tableHead}>
						<DatePicker.TableRow className={styles.tableRow}>
							{datePicker.weekDays.map((weekDay, id) => (
								<DatePicker.TableHeader key={id} className={styles.tableHeader}>
									<DsTypography variant="body-md-md">{weekDay.short}</DsTypography>
								</DatePicker.TableHeader>
							))}
						</DatePicker.TableRow>
					</DatePicker.TableHead>
					<DatePicker.TableBody className={styles.tableBody}>
						{datePicker.weeks.map((week, weekId) => (
							<DatePicker.TableRow key={weekId} className={styles.tableRow}>
								{week.map((day, dayId) => (
									<DatePicker.TableCell key={dayId} value={day}>
										<DatePicker.TableCellTrigger className={styles.tableCellTrigger}>
											<DsTypography className={styles.tableCellTriggerValue} variant="body-md-md">
												{day.day}
											</DsTypography>
										</DatePicker.TableCellTrigger>
									</DatePicker.TableCell>
								))}
							</DatePicker.TableRow>
						))}
					</DatePicker.TableBody>
				</DatePicker.Table>
			)}
		</DatePicker.Context>
	</DatePicker.View>
);

/**
 * Month view - displays grid with months of the year
 */
const MonthView = () => (
	<DatePicker.View view="month">
		<DatePicker.Context>
			{(datePicker) => (
				<DatePicker.Table className={styles.table}>
					<DatePicker.TableBody className={styles.tableBody}>
						{datePicker.getMonthsGrid({ columns: 4, format: 'short' }).map((months, rowId) => (
							<DatePicker.TableRow key={rowId} className={styles.tableRow}>
								{months.map((month, monthId) => (
									<DatePicker.TableCell key={monthId} value={month.value}>
										<DatePicker.TableCellTrigger className={styles.tableCellTrigger}>
											<DsTypography className={styles.tableCellTriggerValue} variant="body-md-md">
												{month.label}
											</DsTypography>
										</DatePicker.TableCellTrigger>
									</DatePicker.TableCell>
								))}
							</DatePicker.TableRow>
						))}
					</DatePicker.TableBody>
				</DatePicker.Table>
			)}
		</DatePicker.Context>
	</DatePicker.View>
);

/**
 * Year view - displays grid with years in a decade
 */
const YearView = () => (
	<DatePicker.View view="year">
		<DatePicker.Context>
			{(datePicker) => (
				<DatePicker.Table className={styles.table}>
					<DatePicker.TableBody className={styles.tableBody}>
						{datePicker.getYearsGrid({ columns: 4 }).map((years, rowId) => (
							<DatePicker.TableRow key={rowId} className={styles.tableRow}>
								{years.map((year, yearId) => (
									<DatePicker.TableCell key={yearId} value={year.value}>
										<DatePicker.TableCellTrigger className={styles.tableCellTrigger}>
											<DsTypography className={styles.tableCellTriggerValue} variant="body-md-md">
												{year.label}
											</DsTypography>
										</DatePicker.TableCellTrigger>
									</DatePicker.TableCell>
								))}
							</DatePicker.TableRow>
						))}
					</DatePicker.TableBody>
				</DatePicker.Table>
			)}
		</DatePicker.Context>
	</DatePicker.View>
);

export default DsDateInput;
