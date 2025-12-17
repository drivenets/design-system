import { CSSProperties, KeyboardEvent, MouseEvent, Ref } from '../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
import { IconType } from '../ds-icon';
export declare const chipSizes: readonly ["medium", "small"];
export type ChipSize = (typeof chipSizes)[number];
export interface DsChipProps {
    /**
     * Ref to the chip element
     */
    ref?: Ref<HTMLElement>;
    /**
     * The label text to display in the chip
     */
    label: string;
    /**
     * Additional CSS class names
     */
    className?: string;
    /**
     * Additional styles to apply to the component
     */
    style?: CSSProperties;
    /**
     * Optional click handler
     */
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    /**
     * Callback function when delete icon is clicked
     */
    onDelete?: (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => void;
    /**
     * Size of the chip
     * @default 'medium'
     */
    size?: ChipSize;
    /**
     * Custom delete icon element
     */
    deleteIcon?: IconType;
    /**
     * Whether the chip is in a selected/pressed state
     * @default false
     */
    selected?: boolean;
}
//# sourceMappingURL=ds-chip.types.d.ts.map