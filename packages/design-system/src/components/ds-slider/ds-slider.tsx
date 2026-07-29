import { Slider, type SliderValueChangeDetails } from '@ark-ui/react/slider';
import classNames from 'classnames';
import { useControlled } from '../../utils/use-controlled';
import { DsTypography } from '../ds-typography';
import type { DsSliderProps, DsSliderValue } from './ds-slider.types';
import { toArray } from './ds-slider.utils';
import styles from './ds-slider.module.scss';

/**
 * @summary Selects a numeric value or a numeric interval by dragging thumbs along a track.
 *
 * Use for picking a number or interval from a known continuous range where visual
 * adjustment beats typing (filter ranges, thresholds, capacity limits). For exact
 * numeric entry use DsNumberInput; for a few discrete options use DsSegmentGroup.
 */
const DsSlider = ({
	ref,
	className,
	style,
	label,
	type = 'value',
	size = 'medium',
	min = 0,
	max = 100,
	step = 1,
	value,
	defaultValue,
	name,
	disabled = false,
	thumbLabels,
	formatValue = String,
	onValueChange,
	onValueChangeEnd,
}: DsSliderProps) => {
	const isRange = type === 'range';

	const controlledValue = toArray(value);
	const fallbackValue = isRange ? [min, max] : [min];

	const toPublicValue = (next: number[]): DsSliderValue =>
		isRange ? [next[0] ?? min, next[1] ?? max] : (next[0] ?? min);

	const [values, setValues] = useControlled<number[]>(
		controlledValue,
		controlledValue !== undefined ? (next) => onValueChange?.(toPublicValue(next)) : undefined,
		toArray(defaultValue) ?? fallbackValue,
	);

	const handleValueChange = (details: SliderValueChangeDetails) => {
		setValues(details.value);

		if (controlledValue === undefined) {
			onValueChange?.(toPublicValue(details.value));
		}
	};

	const valueText = isRange
		? `${formatValue(values[0] ?? min)}-${formatValue(values[1] ?? max)}`
		: formatValue(values[0] ?? min);

	const textColor = disabled ? 'disabled' : 'main';

	const thumbAriaLabels = isRange ? thumbLabels : label ? [label] : thumbLabels;

	const rootClass = classNames(
		styles.root,
		{
			[styles.small]: size === 'small',
			[styles.large]: size === 'large',
		},
		className,
	);

	return (
		<Slider.Root
			ref={ref}
			className={rootClass}
			style={style}
			value={values}
			min={min}
			max={max}
			step={step}
			name={name}
			disabled={disabled}
			aria-label={thumbAriaLabels}
			onValueChange={handleValueChange}
			onValueChangeEnd={(details) => onValueChangeEnd?.(toPublicValue(details.value))}
		>
			<div className={styles.header}>
				{label && (
					<DsTypography variant="body-sm-md" color={textColor}>
						{label}
					</DsTypography>
				)}

				<DsTypography variant="body-sm-md" color={textColor} className={styles.valueText}>
					{valueText}
				</DsTypography>
			</div>

			<Slider.Control className={styles.control}>
				<Slider.Track className={styles.track}>
					<Slider.Range className={styles.range} />
				</Slider.Track>

				{values.map((_, index) => (
					<Slider.Thumb key={index} index={index} className={styles.thumb}>
						<Slider.HiddenInput />
					</Slider.Thumb>
				))}
			</Slider.Control>
		</Slider.Root>
	);
};

DsSlider.displayName = 'DsSlider';

export default DsSlider;
