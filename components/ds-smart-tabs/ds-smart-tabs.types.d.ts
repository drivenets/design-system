import { ReactNode, default as React } from '../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
import { IconType } from '../ds-icon/ds-icon.types';
export declare const colors: readonly ["dark-blue", "light-blue", "dark-gray", "green", "fuchsia", "blue", "gray", "red", "amber"];
export type Color = (typeof colors)[number];
export interface DsSmartTabProps {
    /**
     * The label of the tab
     */
    label: string;
    /**
     * The value of the tab (used for filtering/identification)
     */
    value: string;
    /**
     * The icon to display in the tab
     */
    icon: IconType;
    /**
     * The content to display in the tab (typically a count or text)
     */
    content: number | string;
    /**
     * Color for the tab (limited to predefined color values)
     */
    color?: Color;
    /**
     * Whether the tab is disabled
     */
    disabled?: boolean;
    /**
     * Additional CSS class names
     */
    className?: string;
    /**
     * Additional styles to apply to the tab
     */
    style?: React.CSSProperties;
}
export interface DsSmartTabsProps {
    /**
     * Currently active tab value
     */
    activeTab: string;
    /**
     * Callback function when a tab is clicked
     */
    onTabClick: (value: string) => void;
    /**
     * Additional CSS class names
     */
    className?: string;
    /**
     * Additional styles to apply to the component
     */
    style?: React.CSSProperties;
    /**
     * The tab components as children
     */
    children: ReactNode;
}
//# sourceMappingURL=ds-smart-tabs.types.d.ts.map