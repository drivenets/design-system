// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=15015-2480
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-breadcrumb
// component=DsBreadcrumb
//
// `DAP_Breadcrumbs-nav_v01` maps to `DsBreadcrumb`. Its `steps`/`icons`/`back` variants do
// not map to props: the trail is built from a single `items` array (Figma's fixed
// `steps=1..7` variants only exist because a component can't repeat an array), the per-item
// icon lives in each `items` entry, and there is no back-navigation feature in code. `items`
// is required data, so it is emitted as an empty placeholder (see `ds-select.figma.ts`). The
// single-crumb atom `DAP_Breadcrumbs-item_v01` has no public export and is intentionally not
// connected.
import figma from 'figma';

export default {
	example: figma.code`<DsBreadcrumb items={[]} />`,
	imports: ["import { DsBreadcrumb } from '@drivenets/design-system'"],
	id: 'ds-breadcrumb',
	metadata: { nestable: true },
};
