// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=42145-46642
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-table
// component=DsTable
//
// `Part_DisplaySelection` is the table's Columns popover. Its rows, checkboxes and
// drag handles are internal to `DsTable`, reached through `columnDisplay` and
// `reorderableColumns` and never assembled by hand. The header search field isn't
// in code yet.
import figma from 'figma';

export default {
	example: figma.code`<DsTable
  columns={columns}
  data={data}
  columnDisplay
  reorderableColumns
  columnOrder={columnOrder}
  onColumnOrderChange={setColumnOrder}
/>`,
	imports: ["import { DsTable } from '@drivenets/design-system';"],
	id: 'ds-table-column-display',
	metadata: { nestable: false },
} satisfies figma.Template;
