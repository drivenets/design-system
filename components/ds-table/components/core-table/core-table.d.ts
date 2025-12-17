import { HTMLAttributes, Ref, TdHTMLAttributes, ThHTMLAttributes } from '../../../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
type TableProps = HTMLAttributes<HTMLTableElement> & {
    ref?: Ref<HTMLTableElement>;
};
declare function Table({ className, ref, ...props }: TableProps): import("react/jsx-runtime").JSX.Element;
declare namespace Table {
    var displayName: string;
}
type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement> & {
    ref?: Ref<HTMLTableSectionElement>;
};
declare function TableHeader({ className, ref, ...props }: TableHeaderProps): import("react/jsx-runtime").JSX.Element;
declare namespace TableHeader {
    var displayName: string;
}
type TableBodyProps = HTMLAttributes<HTMLTableSectionElement> & {
    ref?: Ref<HTMLTableSectionElement>;
};
declare function TableBody({ className, ref, ...props }: TableBodyProps): import("react/jsx-runtime").JSX.Element;
declare namespace TableBody {
    var displayName: string;
}
type TableRowProps = HTMLAttributes<HTMLTableRowElement> & {
    ref?: Ref<HTMLTableRowElement>;
};
declare function TableRow({ className, ref, ...props }: TableRowProps): import("react/jsx-runtime").JSX.Element;
declare namespace TableRow {
    var displayName: string;
}
type TableHeadProps = ThHTMLAttributes<HTMLTableCellElement> & {
    ref?: Ref<HTMLTableCellElement>;
};
declare function TableHead({ className, ref, ...props }: TableHeadProps): import("react/jsx-runtime").JSX.Element;
declare namespace TableHead {
    var displayName: string;
}
type TableCellProps = TdHTMLAttributes<HTMLTableCellElement> & {
    ref?: Ref<HTMLTableCellElement>;
};
declare function TableCell({ className, ref, ...props }: TableCellProps): import("react/jsx-runtime").JSX.Element;
declare namespace TableCell {
    var displayName: string;
}
export { Table, TableBody, TableCell, TableHead, TableHeader, TableRow };
//# sourceMappingURL=core-table.d.ts.map