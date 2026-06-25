import figma from 'figma';

const batch = figma.batch as { icon: string; filled: boolean; id: string };

export default {
	example: figma.code`<DsIcon icon="${batch.icon}"${batch.filled ? ' filled' : ''} />`,
	imports: ["import { DsIcon } from '@drivenets/design-system'"],
	id: batch.id,
	metadata: { nestable: true },
};
