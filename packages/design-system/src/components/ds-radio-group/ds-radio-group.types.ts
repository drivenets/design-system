import { type RadioGroupItemProps, type RadioGroupRootProps } from '@ark-ui/react/radio-group';

/**
 * Props for the DsRadioGroup Root component
 */
export interface DsRadioGroupRootProps extends Pick<
	RadioGroupRootProps,
	'id' | 'value' | 'defaultValue' | 'disabled' | 'name' | 'className' | 'style' | 'orientation' | 'children'
> {
	/**
	 * Currently selected radio value (controlled). Pair with `onValueChange`.
	 */
	value?: RadioGroupRootProps['value'];
	/**
	 * Initially selected radio value when uncontrolled.
	 */
	defaultValue?: RadioGroupRootProps['defaultValue'];
	/**
	 * Whether the entire radio group is disabled.
	 * @default false
	 */
	disabled?: RadioGroupRootProps['disabled'];
	/**
	 * HTML name attribute applied to each radio input, used in form submissions.
	 */
	name?: RadioGroupRootProps['name'];
	/**
	 * Layout orientation of the radio items.
	 * @default vertical
	 */
	orientation?: RadioGroupRootProps['orientation'];
	/**
	 * Event handler called when the selected value changes
	 */
	onValueChange?: (value: string | null) => void;
}

/**
 * Props for the DsRadioGroup Item component
 */
export interface DsRadioGroupItemProps extends Pick<
	RadioGroupItemProps,
	'value' | 'disabled' | 'className' | 'style' | 'children'
> {
	/**
	 * Underlying value submitted when this item is selected.
	 */
	value: RadioGroupItemProps['value'];
	/**
	 * Whether this radio item is disabled. Takes precedence over the group-level
	 * `disabled` when the group is enabled.
	 * @default false
	 */
	disabled?: RadioGroupItemProps['disabled'];
	/**
	 * Optional label text for the radio item
	 */
	label?: string;
	/**
	 * Optional additional info text displayed below the label
	 */
	labelInfo?: string;
}
