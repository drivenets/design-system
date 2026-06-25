// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=34428-16204
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-status-badge-v2
// component=DsStatusBadgeV2
import figma from 'figma';
import { defineFigmaTemplate } from '../../utils/define-figma-template';

const instance = figma.selectedInstance;

const phase = instance.getEnum('status', {
	'not-started': 'not-started',
	temporary: 'temporary',
	'in-review': 'in-review',
	pending: 'pending',
	active: 'active',
	execution: 'execution',
	'result-succeeded': 'result-succeeded',
	'result-warning': 'result-warning',
	'result-failed': 'result-failed',
	deprecated: 'deprecated',
});
const variant = instance.getEnum('variant', { primary: 'primary', secondary: 'secondary' });
const size = instance.getEnum('Size', { medium: 'medium', small: 'small' });
const structure = instance.getEnum('structure', {
	'icon+text': 'icon+text',
	'icon-only': 'icon-only',
	'text-only': 'text-only',
});

const labelNode = instance.findText('Active', { traverseInstances: true });
const label = labelNode.type === 'TEXT' ? labelNode.textContent : 'Active';

export default defineFigmaTemplate({
	example:
		structure === 'icon-only'
			? figma.code`<DsStatusBadgeV2 phase="${phase}" label="${label}" variant="${variant}" size="${size}" iconOnly />`
			: structure === 'text-only'
				? figma.code`<DsStatusBadgeV2 phase="${phase}" label="${label}" variant="${variant}" size="${size}" icon={null} />`
				: figma.code`<DsStatusBadgeV2 phase="${phase}" label="${label}" variant="${variant}" size="${size}" />`,
	imports: ["import { DsStatusBadgeV2 } from '@drivenets/design-system'"],
	id: 'ds-status-badge-v2',
	metadata: { nestable: true },
});
