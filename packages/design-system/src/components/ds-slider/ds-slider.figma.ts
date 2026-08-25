// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=29879-165
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-slider
// component=DsSlider
import figma from 'figma';

const instance = figma.selectedInstance;

const type = instance.getEnum('type', {
	value: 'value',
	range: 'range',
});

const isRange = type === 'range';

const attrs = [
	'label="Input label"',
	isRange ? 'type="range"' : '',
	isRange ? 'defaultValue={[36, 60]}' : 'defaultValue={36}',
	isRange ? "thumbLabels={['Minimum', 'Maximum']}" : '',
]
	.filter(Boolean)
	.join(' ');

export default {
	example: figma.code`<DsSlider ${attrs} />`,
	imports: ["import { DsSlider } from '@drivenets/design-system';"],
	id: 'ds-slider',
	metadata: { nestable: false },
} satisfies figma.Template;
