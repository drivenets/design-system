# Upgrading `DsTable` to TanStack Table v9

`DsTable` now runs on `@tanstack/react-table` v9. This guide lists every change you may need to make in your code, with a `before` → `after` example for each.

## Column definitions

### Type column defs with `DsColumnDef`

In v9, TanStack's `ColumnDef`, `CellContext`, and `createColumnHelper` take the table's features as their first type argument. Use the `DsTable` aliases so you don't have to pass it:

```tsx
// before
import type { CellContext, ColumnDef } from '@tanstack/react-table';
import { createColumnHelper } from '@drivenets/design-system';

const columns: ColumnDef<Person>[] = [...];
const editCell = (info: CellContext<Person, string>) => ...;
const columnHelper = createColumnHelper<Person>();

// after
import { createDsColumnHelper, type DsCellContext, type DsColumnDef } from '@drivenets/design-system';

const columns: DsColumnDef<Person>[] = [...];
const editCell = (info: DsCellContext<Person, string>) => ...;
const columnHelper = createDsColumnHelper<Person>();
```

For any other TanStack type, such as `Row` or `Table`, pass `typeof dsTableFeatures` as the first type argument:

```tsx
// before
import type { Row } from '@tanstack/react-table';

const renderName = (row: Row<Person>) => row.original.name;

// after
import type { Row } from '@tanstack/react-table';
import type { dsTableFeatures } from '@drivenets/design-system';

const renderName = (row: Row<typeof dsTableFeatures, Person>) => row.original.name;
```

### Build helper columns with `columnHelper.columns`

In v9, column types are strict about the cell value type, so an array of `accessor` columns with different value types no longer fits `DsColumnDef<Person>[]`. Wrap the array in `columnHelper.columns`:

```tsx
// before
const columns: ColumnDef<Person, any>[] = [
  columnHelper.accessor('name', { header: 'Name' }),
  columnHelper.accessor('age', { header: 'Age' }),
];

// after
const columns = columnHelper.columns([
  columnHelper.accessor('name', { header: 'Name' }),
  columnHelper.accessor('age', { header: 'Age' }),
]);
```

### Rename `sortingFn` to `sortFn`

```tsx
// before
{ accessorKey: 'name', sortingFn: 'alphanumeric' }

// after
{ accessorKey: 'name', sortFn: 'alphanumeric' }
```

### Pass sort and filter functions you name directly

`DsTable` registers only these names:

- **Sort:** `alphanumeric`, `text`, `datetime`, `basic`
- **Filter:** `includesString`, `inNumberRange`, `equals`, `arrIncludes`, `inDateRange`, `weakEquals`

Any other name, such as `textCaseSensitive` or `arrIncludesSome`, is not registered. A filter with an unregistered name filters nothing. Import the function and pass it instead:

```tsx
// before
{ accessorKey: 'name', sortingFn: 'textCaseSensitive', filterFn: 'arrIncludesSome' }

// after
import { filterFn_arrIncludesSome, sortFn_textCaseSensitive } from '@tanstack/react-table';

{ accessorKey: 'name', sortFn: sortFn_textCaseSensitive, filterFn: filterFn_arrIncludesSome }
```

### Your own `ColumnMeta` keys are no longer typed

`column.meta` on a `DsColumnDef` is typed by `DsTable` only, so keys you added by augmenting TanStack's `ColumnMeta` (or `ColumnDefBase`) no longer type-check. They still reach the table at runtime.

## State types

### Rename `VisibilityState` to `ColumnVisibilityState`

```tsx
// before
import type { VisibilityState } from '@tanstack/react-table';

const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

// after
import type { ColumnVisibilityState } from '@tanstack/react-table';

const [columnVisibility, setColumnVisibility] = useState<ColumnVisibilityState>({});
```

### Constrain generic row types

Generic code that passes an unconstrained row type to `DsDataTableProps`, `DsTableApi`, or `DsColumnDef` no longer type-checks. Constrain it the way `DsTable` does:

```tsx
// before
type MyTableApi<TData> = DsTableApi<TData>;

// after
type MyTableApi<TData extends { id: string }> = DsTableApi<TData>;
```

## The table instance (`onTableCreated`)

### Pin columns to `start` and `end`

```tsx
// before
column.pin('left');
table.getState().columnPinning.left;
table.getLeftVisibleLeafColumns();

// after
column.pin('start');
table.store.state.columnPinning.start;
table.getStartVisibleLeafColumns();
```

`right` becomes `end` the same way.

### Read state from `table.store.state`

```tsx
// before
table.getState().sorting;
table.getState().columnSizingInfo;

// after
table.store.state.sorting;
table.store.state.columnResizing;
```

### Only `DsTable`'s features are available

The instance only has the APIs of the features `DsTable` registers:

- column sizing, resizing, visibility, pinning, and filtering
- row sorting, expanding, and selection

APIs from other TanStack features, such as pagination, row pinning, faceting, global filtering, column ordering, and grouping, no longer exist on it.
