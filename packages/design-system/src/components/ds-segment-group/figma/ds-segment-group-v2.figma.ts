// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=42663-2224
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-segment-group
// component=DsSegmentGroup.Root
//
// Figma ships `DsSegmentGroupV2` alongside `DsSegmentGroupV1`. Both map onto the
// same code component (see ds-segment-group.figma.ts for the older set).
import figma from 'figma';

const instance = figma.selectedInstance;

const size = instance.getEnum('Size', {
	medium: 'medium',
	small: 'small',
});

const sizeAttr = size === 'small' ? ' size="small"' : '';

// `Slot` is homogeneous `Part_SegmentItemV2` instances. Interpolating the slot
// object itself renders a clickable "Slot" label; execute each child's template
// so the parent snippet inline `DsSegmentGroup.Item`.
const slot = instance.getSlot('Slot');
const items = (slot?.connectedInstances ?? []).map((item) => item.executeTemplate().example);

export default {
	example: figma.code`<DsSegmentGroup.Root${sizeAttr}>
	${items}
</DsSegmentGroup.Root>`,
	imports: ["import { DsSegmentGroup } from '@drivenets/design-system';"],
	id: 'ds-segment-group-v2',
	metadata: { nestable: false },
} satisfies figma.Template;
