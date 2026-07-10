// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=39525-181
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-site-node
// component=DsSiteNode
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('State', {
	Default: 'default',
	Selected: 'selected',
	Muted: 'muted',
	Overflow: 'overflow',
});

const tier = instance.getString('Tier');
const siteCode = instance.getString('Site code');
const overflowLabel = instance.getString('Overflow label');

export default {
	example:
		state === 'overflow'
			? figma.code`<DsSiteNode state="${state}" overflowLabel="${overflowLabel}" />`
			: figma.code`<DsSiteNode state="${state}" tier="${tier}" siteCode="${siteCode}" />`,
	imports: ["import { DsSiteNode } from '@drivenets/design-system'"],
	id: 'ds-site-node',
	metadata: { nestable: true },
};
