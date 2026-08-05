// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=40298-1117
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-tag-filter
// component=DsTagFilter
//
// Figma's `Type` variant (less/all) maps to the component's internal `expanded` state (driven by
// useTagOverflowCalculation, surfaced only via `onExpand`) — there is no settable code prop, so it
// is intentionally not represented. `items` is content, not derivable from Figma, so a placeholder
// array is emitted for the developer to fill in.
import figma from 'figma';

export default {
	example: figma.code`<DsTagFilter items={[{ id: '1', label: 'Status: Active' }, { id: '2', label: 'Version: 1.0.0' }]} />`,
	imports: ["import { DsTagFilter } from '@drivenets/design-system';"],
	id: 'ds-tag-filter',
	metadata: { nestable: true },
} satisfies figma.Template;
