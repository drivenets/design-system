// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=37891-84942
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-popover
// component=DsPopover
import figma from 'figma';

const instance = figma.selectedInstance;

const header = instance.findInstance('DAP_popover-header_v01', { traverseInstances: true });
let headerCode: figma.ResultSection[] | undefined;
if (header.type === 'INSTANCE') {
	headerCode = header.executeTemplate().example;
}

const content = instance.findInstance('DAP_popover-content_v01', { traverseInstances: true });
let contentCode: figma.ResultSection[] | undefined;
if (content.type === 'INSTANCE') {
	contentCode = content.executeTemplate().example;
}

const footer = instance.findInstance('DAP_popover-footer_v01', { traverseInstances: true });
let footerCode: figma.ResultSection[] | undefined;
if (footer.type === 'INSTANCE') {
	footerCode = footer.executeTemplate().example;
}

export default {
	example: figma.code`<DsPopover.Root>
	<DsPopover.Trigger>{/* trigger element */}</DsPopover.Trigger>
	<DsPopover.Panel>${headerCode}${contentCode}${footerCode}</DsPopover.Panel>
</DsPopover.Root>`,
	imports: ["import { DsPopover } from '@drivenets/design-system'"],
	id: 'ds-popover',
	metadata: { nestable: false },
};
