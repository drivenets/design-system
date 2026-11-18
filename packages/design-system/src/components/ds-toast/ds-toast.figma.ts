// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=15100-3016
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-toast
// component=DsToast
import figma from 'figma';

const instance = figma.selectedInstance;

const variant = instance.getEnum('Type', {
	info: 'info',
	success: 'success',
	warning: 'warning',
	error: 'error',
});

const extended = instance.getEnum('Extended', { True: true, False: false });
const cta = instance.getEnum('CTA', { True: true, False: false });

const titleLine = extended ? `\n\ttitle: 'Title',` : '';
const secondaryAction = '<DsButtonV3 variant="secondary" color="light" size="small">Action</DsButtonV3>';
const actions = extended
	? `(\n\t\t<>\n\t\t\t<DsButtonV3 variant="tertiary" color="light" size="small">Action</DsButtonV3>\n\t\t\t${secondaryAction}\n\t\t</>\n\t)`
	: secondaryAction;
const actionsLine = cta ? `\n\tactions: ${actions},` : '';

export default {
	example: figma.code`const { createToast } = useToaster();

createToast({
	variant: '${variant}',${titleLine}
	description: 'Description',${actionsLine}
});`,
	imports: [
		"import { useToaster } from '@drivenets/design-system';",
		"import { DsButtonV3 } from '@drivenets/design-system';",
	],
	id: 'ds-toast',
	metadata: { nestable: false },
} satisfies figma.Template;
