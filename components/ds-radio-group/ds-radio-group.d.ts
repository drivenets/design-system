import { default as React } from '../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
import { DsRadioGroupItemProps, DsRadioGroupLegacyProps, DsRadioGroupRootProps } from './ds-radio-group.types';
/**
 * DEPRECATED: Legacy DsRadioGroup component with options array
 * Use compound component pattern instead: DsRadioGroup.Root + DsRadioGroup.Item
 * @deprecated
 */
export declare const DsRadioGroupLegacy: React.FC<DsRadioGroupLegacyProps>;
/**
 * Design system RadioGroup component
 *
 * @example
 * <DsRadioGroup.Root value={value} onValueChange={setValue}>
 *   <DsRadioGroup.Item value="option1" label="Option 1" />
 *   <DsRadioGroup.Item value="option2" label="Option 2" />
 * </DsRadioGroup.Root>
 */
export declare const DsRadioGroup: {
    Root: React.FC<DsRadioGroupRootProps>;
    Item: React.FC<DsRadioGroupItemProps>;
};
//# sourceMappingURL=ds-radio-group.d.ts.map