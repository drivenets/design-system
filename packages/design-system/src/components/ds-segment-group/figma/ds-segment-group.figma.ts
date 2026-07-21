// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=15094-8569
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-segment-group
// component=DsSegmentGroup.Root
import figma from 'figma';

const instance = figma.selectedInstance;

const size = instance.getEnum('Size', {
	medium: 'medium',
	small: 'small',
});

const sizeAttr = size === 'small' ? ' size="small"' : '';

export default {
	example: figma.code`<DsSegmentGroup.Root${sizeAttr}>
	<DsSegmentGroup.Item value="option-1" label="Option 1" />
	<DsSegmentGroup.Item value="option-2" label="Option 2" />
</DsSegmentGroup.Root>`,
	imports: ["import { DsSegmentGroup } from '@drivenets/design-system'"],
	id: 'ds-segment-group',
	metadata: { nestable: false },
};
