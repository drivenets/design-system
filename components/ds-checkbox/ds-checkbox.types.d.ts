import { ComponentPropsWithoutRef, ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
import { Root } from '@radix-ui/react-checkbox';
export interface DsCheckboxProps extends ComponentPropsWithoutRef<typeof Root> {
    /**
     * Label for the checkbox
     */
    label?: ReactNode;
    /**
     * Additional label info for the checkbox
     */
    labelInfo?: ReactNode;
    /**
     * The controlled checked state of the checkbox
     */
    checked?: boolean | 'indeterminate';
    /**
     * The default checked state of the checkbox
     */
    defaultChecked?: boolean | 'indeterminate';
    /**
     * Event handler called when the checked state of the checkbox changes.
     *
     * @param checked
     */
    onCheckedChange?: (checked: boolean | 'indeterminate') => void;
}
//# sourceMappingURL=ds-checkbox.types.d.ts.map