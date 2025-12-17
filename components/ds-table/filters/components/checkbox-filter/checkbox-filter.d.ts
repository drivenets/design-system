import { ReactNode } from '../../../../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
export interface CheckboxFilterItem<TValue = string> {
    value: TValue;
    label: string;
    metadata?: Record<string, unknown>;
}
export interface CheckboxFilterProps<TValue> {
    items: CheckboxFilterItem<TValue>[];
    renderer?: (item: CheckboxFilterItem<TValue>) => ReactNode;
    selectedItems: CheckboxFilterItem<TValue>[];
    onSelectionChange: (selectedItems: CheckboxFilterItem<TValue>[]) => void;
}
export declare const CheckboxFilter: <TValue>({ items, renderer, selectedItems, onSelectionChange, }: CheckboxFilterProps<TValue>) => import("react/jsx-runtime").JSX.Element[];
//# sourceMappingURL=checkbox-filter.d.ts.map