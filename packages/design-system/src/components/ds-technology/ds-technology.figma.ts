// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=44787-158304
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-technology
// component=DsTechnology
import figma from 'figma';

const instance = figma.selectedInstance;

const type = instance.getEnum('type', {
	OCH: 'och',
	ODU: 'odu',
	OMS: 'oms',
	OTS: 'ots',
	'FBB-GPON': 'fbb-gpon',
	'FBB-PON-access': 'fbb-pon-access',
	'FBB-PON-network': 'fbb-pon-network',
	'Carrier-Ethernet-customer': 'carrier-ethernet-customer',
	'Carrier-Ethernet-Infra': 'carrier-ethernet-infra',
	'Network-management': 'network-management',
});

const selected = instance.getEnum('state', {
	default: false,
	hover: false,
	focus: false,
	selected: true,
});

const structure = instance.findInstance('Structure_Technology', { traverseInstances: true });
const stage =
	structure.type === 'INSTANCE'
		? structure.getEnum('stage', {
				deployed: 'deployed',
				planned: 'planned',
				designed: 'designed',
			})
		: 'deployed';

const attrs = [
	type ? `type="${type}"` : '',
	stage && stage !== 'deployed' ? `stage="${stage}"` : '',
	selected ? 'selected' : '',
]
	.filter(Boolean)
	.join(' ');

export default {
	example: figma.code`<DsTechnology ${attrs} />`,
	imports: ["import { DsTechnology } from '@drivenets/design-system';"],
	id: 'ds-technology',
	metadata: { nestable: true },
} satisfies figma.Template;
