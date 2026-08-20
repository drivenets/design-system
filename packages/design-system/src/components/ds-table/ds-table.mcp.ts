export const mcp = Object.freeze({
	import: "import { DsTable } from '@drivenets/design-system';",
	related: ['createColumnHelper', 'DsTableEditableCell'],
	avoid: [
		'Do not pass a TanStack `Table` instance. Pass `columns` and `data`.',
		'Every row must include an `id: string`.',
		'Do not reference story-local identifiers (`columns`, `defaultData`) — inline them.',
	],
	example: `<DsTable
  columns={[
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'status', header: 'Status' },
  ]}
  data={[{ id: '1', name: 'Node A', status: 'Up' }]}
/>`,
});
