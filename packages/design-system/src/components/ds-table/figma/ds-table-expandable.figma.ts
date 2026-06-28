// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=36535-44213
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-table
// component=DsTable
//
// `DAP_Table Expandable_v03` is the expandable table on the "Table New (Data grid)"
// page. It maps to the same `DsTable` code component as the simple table, with the
// `expandable` prop enabled and a `renderExpandedRow` callback for the nested content.
// The Simple vs Expandable split exists only because of a Figma restriction (a
// component can't contain an instance of itself); in code it's one `DsTable`.
import figma from 'figma';

export default {
	example: figma.code`<DsTable columns={columns} data={data} expandable renderExpandedRow={(row) => null} />`,
	imports: ["import { DsTable } from '@drivenets/design-system'"],
	id: 'ds-table-expandable',
	metadata: { nestable: false },
} satisfies figma.Template;
