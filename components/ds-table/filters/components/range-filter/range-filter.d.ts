export interface RangeFilterValue {
    from?: number;
    to?: number;
}
export interface RangeFilterProps {
    label: string;
    value: RangeFilterValue;
    onChange: (value: RangeFilterValue) => void;
    onClear?: () => void;
}
export declare const RangeFilter: ({ label, value, onChange, onClear }: RangeFilterProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=range-filter.d.ts.map