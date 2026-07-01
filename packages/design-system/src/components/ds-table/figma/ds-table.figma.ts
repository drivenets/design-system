// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=36354-1965
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-table
// component=DsTable
//
// `DAP_Table Simple_v03` is the non-expandable table on the "Table New (Data grid)"
// page. Figma models the table as separate components (header/row/cell),
// while code exposes a single declarative `DsTable` driven by `columns`/`data`,
// so the snippet is a representative usage that references those consts.
import figma from 'figma';

export default {
	example: figma.code`<DsTable columns={columns} data={data} />`,
	imports: ["import { DsTable } from '@drivenets/design-system';"],
	id: 'ds-table',
	metadata: { nestable: false },
} satisfies figma.Template;
