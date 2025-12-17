import { IconType } from '../ds-icon';
import { DsTextInputProps } from '../ds-text-input';
export interface DsExpandableTextInputProps extends Omit<DsTextInputProps, 'tabIndex' | 'slots'> {
    /**
     * The icon to display inside the expandable input trigger button
     */
    icon: IconType;
    /**
     * Callback fired when the clear action is triggered
     */
    onClear?: () => void;
    /**
     * Callback fired when the expanded state changes
     */
    onExpandChange?: (expanded: boolean) => void;
}
//# sourceMappingURL=ds-expandable-text-input.types.d.ts.map