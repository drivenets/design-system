// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=36987-43620
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-progress-task-bar
// component=DsProgressTaskBar
import figma from 'figma';

const instance = figma.selectedInstance;

// Boolean property names are case-sensitive: `Running` / `Failed` are capitalized.
const zero = instance.getBoolean('zero');
const completed = instance.getBoolean('completed');
const running = instance.getBoolean('Running');
const failed = instance.getBoolean('Failed');

// Booleans only toggle a status on/off, so emit a representative count per status.
const attrs = [
	completed ? 'completed={300}' : '',
	running ? 'running={100}' : '',
	failed ? 'failed={100}' : '',
	'total={1000}',
]
	.filter(Boolean)
	.join(' ');

export default {
	example: zero ? figma.code`<DsProgressTaskBar total={999} />` : figma.code`<DsProgressTaskBar ${attrs} />`,
	imports: ["import { DsProgressTaskBar } from '@drivenets/design-system'"],
	id: 'ds-progress-task-bar',
	metadata: { nestable: false },
};
