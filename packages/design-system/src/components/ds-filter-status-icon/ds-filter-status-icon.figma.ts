// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=27983-34074
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-filter-status-icon
// component=DsFilterStatusIcon
import figma from 'figma';

const instance = figma.selectedInstance;

const status = instance.getEnum('type', {
	running: 'running',
	warning: 'warning',
	failed: 'failed',
	paused: 'paused',
});
const active = instance.getEnum('state', { active: true, 'non-active': false });
const activeProp = active ? '' : ' active={false}';

export default {
	example: figma.code`<DsFilterStatusIcon status="${status}"${activeProp} />`,
	imports: ["import { DsFilterStatusIcon } from '@drivenets/design-system'"],
	id: 'ds-filter-status-icon',
	metadata: { nestable: true },
};
