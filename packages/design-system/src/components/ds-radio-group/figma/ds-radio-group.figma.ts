// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=34864-124515
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-radio-group
// component=DsRadioGroup.Root
import figma from 'figma';

export default {
	example: figma.code`<DsRadioGroup.Root>
	<DsRadioGroup.Item value="option-1" label="Option 1" />
	<DsRadioGroup.Item value="option-2" label="Option 2" />
</DsRadioGroup.Root>`,
	imports: ["import { DsRadioGroup } from '@drivenets/design-system'"],
	id: 'ds-radio-group',
	metadata: { nestable: false },
};
