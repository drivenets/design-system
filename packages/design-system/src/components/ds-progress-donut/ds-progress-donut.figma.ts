// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=15179-8570
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-progress-donut
// component=DsProgressDonut
import figma from 'figma';

const instance = figma.selectedInstance;

const size = instance.getEnum('Size', {
	small: 'small',
	medium: 'medium',
});
const variant = instance.getEnum('Status', {
	'fill 10%': 'default',
	'fill 20%': 'default',
	'fill 30%': 'default',
	'fill 40%': 'default',
	'fill 50%': 'default',
	'fill 60%': 'default',
	'fill 70%': 'default',
	'fill 80%': 'default',
	'fill 90%': 'default',
	Success: 'success',
	success: 'success',
	error: 'error',
	failed: 'error',
});
const value = instance.getEnum('Status', {
	'fill 10%': 10,
	'fill 20%': 20,
	'fill 30%': 30,
	'fill 40%': 40,
	'fill 50%': 50,
	'fill 60%': 60,
	'fill 70%': 70,
	'fill 80%': 80,
	'fill 90%': 90,
});
const valueProp = typeof value === 'number' ? ` value={${String(value)}}` : '';

export default {
	example: figma.code`<DsProgressDonut variant="${variant}" size="${size}"${valueProp} />`,
	imports: ["import { DsProgressDonut } from '@drivenets/design-system'"],
	id: 'ds-progress-donut',
	metadata: { nestable: false },
};
