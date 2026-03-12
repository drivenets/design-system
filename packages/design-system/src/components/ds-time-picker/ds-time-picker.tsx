import { type ChangeEvent, Fragment, useRef, useState } from 'react';
import { Popover } from '@ark-ui/react/popover';
import { Portal } from '@ark-ui/react/portal';
import type { DsTimePickerProps } from './ds-time-picker.types';
import { clampTime, formatTime, parseTime, timeScrollerAdapter } from './ds-time-picker.utils';
import { TimeScroller } from './components/time-scroller/time-scroller';
import { DsIcon } from '../ds-icon';
import styles from './ds-time-picker.module.scss';
import { DsButton } from '../ds-button';
import { DsTextInput } from '../ds-text-input';
import { useControlled } from '../../utils/use-controlled';

const DsTimePicker = (props: DsTimePickerProps) => {
	const {
		ref,
		className,
		min,
		max,
		disabled,
		readOnly,
		disablePortal = false,
		locale,
		slotProps,
		onOpenChange,
	} = props;
	const [value, setValue] = useControlled(props.value, props.onChange, props.defaultValue);
	const [isOpen, setIsOpen] = useState(false);
	const [isFocused, setIsFocused] = useState(false);

	const inputRef = useRef<HTMLInputElement>(null);
	const prevValue = useRef<string | null>(null);

	if (value) {
		const clamped = clampTime(value, min, max);

		if (clamped !== value) {
			setValue(clamped);
		}
	}

	// Reformat the input when the value changes externally and the field is not focused
	if (!isFocused && prevValue.current !== formatTime(value)) {
		prevValue.current = formatTime(value);

		if (inputRef.current) {
			inputRef.current.value = formatTime(value);
		}
	}

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
			inputRef.current.value = value ? formatTime(value) : '';
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
			setValue(clampTime(newDate, min, max));
		} else {
			resetInput();
		}
	};

	const handleOpenChange = (details: { open: boolean }) => {
		if (disabled || readOnly) {
			return;
		}

		setIsOpen(details.open);
		onOpenChange?.(details.open);
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
						placeholder={locale?.placeholder ?? 'hh:mm AM/PM'}
						className={styles.input}
						defaultValue={formatTime(value)}
						onChange={handleInputChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						readOnly={readOnly}
						disabled={disabled}
						slots={{
							...slotProps?.input,
							endAdornment: slotProps?.input?.endAdornment ?? (
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
