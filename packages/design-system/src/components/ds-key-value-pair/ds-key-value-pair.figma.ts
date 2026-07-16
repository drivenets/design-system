// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=28373-92227
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-key-value-pair
// component=DsKeyValuePair
//
// `Direction` maps to `orientation`. `keyLabel` and `value` are content, not derivable
// from Figma, so they are emitted as placeholders for the developer to fill in (see
// `ds-user-card.figma.ts`). Read-only vs editable is consumer edit-mode state rather than
// a Figma variant, so `readOnly`/`editInput` are left at their defaults.
import figma from 'figma';

const instance = figma.selectedInstance;

const orientation =
	instance.getEnum('Direction', {
		vertical: 'vertical',
		horizontal: 'horizontal',
	}) ?? 'vertical';

export default {
	example: figma.code`<DsKeyValuePair keyLabel="Label" value="Value" orientation="${orientation}" />`,
	imports: ["import { DsKeyValuePair } from '@drivenets/design-system'"],
	id: 'ds-key-value-pair',
	metadata: { nestable: true },
};
