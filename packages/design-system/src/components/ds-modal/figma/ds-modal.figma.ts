// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=34877-158966
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-modal
// component=DsModal
//
// `DAP_modal_v02` is the full modal. It composes the header, content, and footer
// parts, each of which has its own Code Connect template; resolve them dynamically
// so swapped variants stay in sync. The `Type` variant (confirmation/form) has no
// `DsModal` prop equivalent — both render the same composition.
import figma from 'figma';

const instance = figma.selectedInstance;

const header = instance.findInstance('DAP_modal-header_v02', { traverseInstances: true });
let headerCode: figma.ResultSection[] | undefined;
if (header.type === 'INSTANCE') {
	headerCode = header.executeTemplate().example;
}

const content = instance.findInstance('DAP_modal-content_v02', { traverseInstances: true });
let contentCode: figma.ResultSection[] | undefined;
if (content.type === 'INSTANCE') {
	contentCode = content.executeTemplate().example;
}

const footer = instance.findInstance('DAP_modal-footer_v02', { traverseInstances: true });
let footerCode: figma.ResultSection[] | undefined;
if (footer.type === 'INSTANCE') {
	footerCode = footer.executeTemplate().example;
}

export default {
	example: figma.code`<DsModal open columns={6} onOpenChange={() => {}}>${headerCode}${contentCode}${footerCode}</DsModal>`,
	imports: ["import { DsModal } from '@drivenets/design-system'"],
	id: 'ds-modal',
	metadata: { nestable: false },
} satisfies figma.Template;
