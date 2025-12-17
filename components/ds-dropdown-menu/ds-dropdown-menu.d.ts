import { default as React } from '../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
import { Menu } from '@ark-ui/react/menu';
import { DsDropdownMenuActionsProps, DsDropdownMenuContentProps, DsDropdownMenuHeaderProps, DsDropdownMenuItemGroupContentProps, DsDropdownMenuItemGroupProps, DsDropdownMenuItemIndicatorProps, DsDropdownMenuItemProps, DsDropdownMenuLegacyProps, DsDropdownMenuRootProps } from './ds-dropdown-menu.types';
/**
 * DEPRECATED: Legacy DsDropdownMenu component with options array
 * Use compound component pattern instead
 * @deprecated
 */
export declare const DsDropdownMenuLegacy: React.FC<DsDropdownMenuLegacyProps>;
/**
 * Design system  DsDropdownMenu component
 *
 * @example
 * <DsDropdownMenu.Root>
 *   <DsDropdownMenu.Trigger>
 *     <button>Open</button>
 *   </DsDropdownMenu.Trigger>
 *   <DsDropdownMenu.Content>
 *     <DsDropdownMenu.Header>
 *       <DsTextInput placeholder="Search..." />
 *     </DsDropdownMenu.Header>
 *     <DsDropdownMenu.Item value="item1">
 *       Item 1
 *       <DsDropdownMenu.ItemIndicator />
 *     </DsDropdownMenu.Item>
 *     <DsDropdownMenu.ItemGroup>
 *       <DsDropdownMenu.ItemGroupLabel>Group Name</DsDropdownMenu.ItemGroupLabel>
 *       <DsDropdownMenu.ItemGroupContent>
 *         <DsDropdownMenu.Item value="item2">Item 2</DsDropdownMenu.Item>
 *       </DsDropdownMenu.ItemGroupContent>
 *     </DsDropdownMenu.ItemGroup>
 *     <DsDropdownMenu.Separator />
 *     <DsDropdownMenu.Actions>
 *       <DsButton>Cancel</DsButton>
 *       <DsButton>Apply</DsButton>
 *     </DsDropdownMenu.Actions>
 *   </DsDropdownMenu.Content>
 * </DsDropdownMenu.Root>
 */
export declare const DsDropdownMenu: {
    Root: React.FC<DsDropdownMenuRootProps>;
    Trigger: React.FC<Menu.TriggerProps>;
    Content: React.FC<DsDropdownMenuContentProps>;
    Item: React.FC<DsDropdownMenuItemProps>;
    ItemIndicator: React.FC<DsDropdownMenuItemIndicatorProps>;
    Header: React.FC<DsDropdownMenuHeaderProps>;
    Actions: React.FC<DsDropdownMenuActionsProps>;
    ItemGroup: React.FC<DsDropdownMenuItemGroupProps>;
    ItemGroupLabel: React.FC<Menu.ItemGroupLabelProps>;
    ItemGroupContent: React.FC<DsDropdownMenuItemGroupContentProps>;
    Separator: React.FC<Menu.SeparatorProps>;
};
//# sourceMappingURL=ds-dropdown-menu.d.ts.map