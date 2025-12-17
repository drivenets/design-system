import { default as React } from '../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
import { IconPrefix, materialIcons } from './material-icons';
export declare const iconSizes: readonly ["tiny", "small", "medium", "large", "extra-large"];
export type IconSize = (typeof iconSizes)[number];
export declare const iconVariants: readonly ["outlined", "rounded"];
export type IconVariant = (typeof iconVariants)[number];
export type IconName = {
    [K in keyof typeof materialIcons]: K extends `${IconPrefix}::${infer Name}` ? Name : never;
}[keyof typeof materialIcons];
export type IconType = IconName | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
export interface DsIconProps {
    /**
     * The icon to display. This can be a Material Icon name (e.g., 'home') or an SVG component.
     */
    icon: IconType;
    /**
     * The size of the icon
     * @default 'medium'
     */
    size?: IconSize;
    /**
     * The variant of the Material Icon
     * @default 'outlined'
     */
    variant?: IconVariant;
    /**
     * Whether the icon should be filled
     * @default false
     */
    filled?: boolean;
    /**
     * Additional CSS class names
     */
    className?: string;
    /**
     * Additional styles to apply to the icon
     */
    style?: React.CSSProperties;
    /**
     * Optional click handler
     */
    onClick?: (event: React.MouseEvent<HTMLSpanElement | SVGSVGElement>) => void;
}
//# sourceMappingURL=ds-icon.types.d.ts.map