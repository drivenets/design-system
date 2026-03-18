import { type ChangeEvent, Fragment, useEffect, useRef, useState } from 'react';
import { Popover } from '@ark-ui/react/popover';
import { Portal } from '@ark-ui/react/portal';
import type { DsTimePickerProps } from './ds-time-picker.types';
import { clampTime, formatTime, parseTime, timeScrollerAdapter } from './ds-time-picker.utils';
import { TimeScroller } from './components/time-scroller/time-scroller';
import { DsIcon } from '../ds-icon';
import { DsButton } from '../ds-button';
import { DsTextInput } from '../ds-text-input';
import { useControlled } from '../../utils/use-controlled';

const DsTimePicker = (props: DsTimePickerProps) => {
	const {
		id,
		ref,
		className,
		placeholder,
		min,
		max,
		disabled,
		readOnly,
		disablePortal = false,
		locale,
		slotProps,
	} = props;
	const [value, setValue] = useControlled(props.value, props.onChange, props.defaultValue ?? null);
	const [isOpen, setIsOpen] = useControlled(props.open, props.onOpenChange, props.defaultOpen ?? false);
	const [isFocused, setIsFocused] = useState(false);

	const inputRef = useRef<HTMLInputElement>(null);

	const formattedValue = formatTime(value);

	// If the time is before the min or after the max, immediately clamp it to the min or max
	if (value) {
		const clamped = clampTime(value, min, max);

		if (clamped !== value) {
			setValue(clamped);
		}
	}

	// Reformat on value change, but skip while focused to avoid disrupting typing
	useEffect(() => {
		if (!isFocused && inputRef.current) {
			inputRef.current.value = formattedValue;
		}
	}, [isFocused, formattedValue]);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputVal = e.target.value;

		if (!inputVal) {
			setValue(null);
			return;
		}

		const parsed = parseTime(inputVal);

		if (parsed) {
			const newDate = value ? new Date(value) : new Date();
			newDate.setHours(parsed.hours, parsed.minutes, 0, 0);
			setValue(newDate);
		}
	};

	const handleFocus = () => {
		setIsFocused(true);
	};

	const resetInput = () => {
		if (inputRef.current) {
			inputRef.current.value = value ? formattedValue : '';
		}
	};

	const handleBlur = () => {
		setIsFocused(false);

		const inputVal = inputRef.current?.value ?? '';

		if (!inputVal) {
			setValue(null);
			return;
		}

		const parsed = parseTime(inputVal);

		if (parsed) {
			const newDate = value ? new Date(value) : new Date();
			newDate.setHours(parsed.hours, parsed.minutes, 0, 0);
			setValue(newDate);
		} else {
			resetInput();
		}
	};

	const handleOpenChange = (details: Popover.OpenChangeDetails) => {
		if (disabled || readOnly) {
			return;
		}

		setIsOpen(details.open);
	};

	const Wrapper = disablePortal ? Fragment : Portal;

	return (
		<Popover.Root
			open={isOpen}
			onOpenChange={handleOpenChange}
			positioning={{ placement: 'bottom-start', gutter: 4 }}
		>
			<Popover.Anchor asChild>
				<div ref={ref} className={className}>
					<DsTextInput
						ref={inputRef}
						id={id}
						placeholder={placeholder ?? 'hh:mm AM/PM'}
						defaultValue={formattedValue}
						onChange={handleInputChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						readOnly={readOnly}
						disabled={disabled}
						{...slotProps?.input}
						slots={{
							endAdornment: slotProps?.input?.slots?.endAdornment ?? (
								<Popover.Trigger asChild>
									<DsButton
										design="v1.2"
										size="tiny"
										buttonType="tertiary"
										disabled={disabled || readOnly}
										aria-label={locale?.openLabel ?? 'Open time picker'}
									>
										<DsIcon icon="schedule" variant="outlined" size="tiny" />
									</DsButton>
								</Popover.Trigger>
							),
							...slotProps?.input?.slots,
						}}
					/>
				</div>
			</Popover.Anchor>

			<Wrapper>
				<Popover.Positioner>
					<Popover.Content {...slotProps?.popover}>
						<TimeScroller open={isOpen} {...timeScrollerAdapter(value, setValue, min, max)} />
					</Popover.Content>
				</Popover.Positioner>
			</Wrapper>
		</Popover.Root>
	);
};

export default DsTimePicker;
