import { DsVerticalTabsContentProps, DsVerticalTabsListProps, DsVerticalTabsRootProps, DsVerticalTabsTabProps } from './ds-vertical-tabs.types';
/**
 * Design system vertical tabs component - compound component for flexible vertical navigation
 *
 * @example
 * ```tsx
 * <DsVerticalTabs value={selected} onValueChange={handleChange}>
 *   <DsVerticalTabs.List>
 *     <DsVerticalTabs.Tab value="status">
 *       <span>Status</span>
 *       <span className={styles.badge}>5</span>
 *     </DsVerticalTabs.Tab>
 *     <DsVerticalTabs.Tab value="date">Date</DsVerticalTabs.Tab>
 *   </DsVerticalTabs.List>
 *   <DsVerticalTabs.Content value="status">Status filters...</DsVerticalTabs.Content>
 *   <DsVerticalTabs.Content value="date">Date filters...</DsVerticalTabs.Content>
 * </DsVerticalTabs>
 * ```
 */
declare const DsVerticalTabs: {
    ({ value, onValueChange, className, style, children }: DsVerticalTabsRootProps): import("react/jsx-runtime").JSX.Element;
    List: ({ className, children }: DsVerticalTabsListProps) => import("react/jsx-runtime").JSX.Element;
    Tab: ({ value, disabled, className, children }: DsVerticalTabsTabProps) => import("react/jsx-runtime").JSX.Element;
    Content: ({ value, className, children }: DsVerticalTabsContentProps) => import("react/jsx-runtime").JSX.Element;
};
export default DsVerticalTabs;
//# sourceMappingURL=ds-vertical-tabs.d.ts.map