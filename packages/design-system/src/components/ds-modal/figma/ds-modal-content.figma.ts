// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=34877-158343
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-modal
// component=DsModal.Body
//
// `DAP_modal-content_v02` maps to `DsModal.Body`. Its freeform `Modal content slot`
// becomes the body children.
import figma from 'figma';

const instance = figma.selectedInstance;

const content = instance.getSlot('Modal content slot');

export default {
	example: figma.code`<DsModal.Body>${content}</DsModal.Body>`,
	imports: ["import { DsModal } from '@drivenets/design-system'"],
	id: 'ds-modal-content',
	metadata: { nestable: true },
} satisfies figma.Template;
