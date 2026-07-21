// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=15128-184303
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-file-upload
// component=DsFileUpload
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('State', {
	Default: 'default',
	Error: 'error',
	Disabled: 'disabled',
	Focus: 'focus',
	'Drop Hover': 'dropHover',
});

const attrs = [
	'adapter={adapter}',
	state === 'disabled' ? 'disabled' : '',
	state === 'error' ? 'errorText="Upload failed"' : '',
]
	.filter(Boolean)
	.join(' ');

export default {
	example: figma.code`<DsFileUpload ${attrs} />`,
	imports: ["import { DsFileUpload } from '@drivenets/design-system'"],
	id: 'ds-file-upload',
	metadata: { nestable: false },
};
