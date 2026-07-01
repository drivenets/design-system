// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=32030-12809
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-modal
// component=DsModal.Header
//
// `DAP_modal-header_v02` maps to the composed `DsModal.Header` (title + close
// trigger). The `Type=drill-down` variant (back breadcrumb) and the optional
// booleans (status badge, description, tags, etc.) have no code-component prop and
// are omitted.
import figma from 'figma';

const instance = figma.selectedInstance;

const titleNode = instance.findText('Left side', { traverseInstances: true });
const title = titleNode.type === 'TEXT' ? titleNode.textContent : 'Modal title';

export default {
	example: figma.code`<DsModal.Header><DsModal.Title>${title}</DsModal.Title><DsModal.CloseTrigger /></DsModal.Header>`,
	imports: ["import { DsModal } from '@drivenets/design-system';"],
	id: 'ds-modal-header',
	metadata: { nestable: true },
} satisfies figma.Template;
