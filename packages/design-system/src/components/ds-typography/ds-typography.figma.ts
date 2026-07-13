// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=39324-248
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-typography
// component=DsTypography
import figma from 'figma';

const instance = figma.selectedInstance;

const variant = instance.getEnum('font-style', {
	heading1: 'heading1',
	heading2: 'heading2',
	heading3: 'heading3',
	heading4: 'heading4',
	'body-md-reg': 'body-md-reg',
	'body-md-md': 'body-md-md',
	'body-md-semi-bold': 'body-md-semi-bold',
	'body-md-bold': 'body-md-bold',
	'body-md-link': 'body-md-link',
	'body-sm-reg': 'body-sm-reg',
	'body-sm-md': 'body-sm-md',
	'body-sm-semi-bold': 'body-sm-semi-bold',
	'body-sm-bold': 'body-sm-bold',
	'body-sm-link': 'body-sm-link',
	'body-xs-reg': 'body-xs-reg',
	'body-xs-md': 'body-xs-md',
	'body-xs-semi-bold': 'body-xs-semi-bold',
	'body-xs-bold': 'body-xs-bold',
	'body-xs-link': 'body-xs-link',
	'code-sm-reg': 'code-sm-reg',
	'code-sm-semi-bold': 'code-sm-semi-bold',
	'code-xs-reg': 'code-xs-reg',
	'code-xs-semi-bold': 'code-xs-semi-bold',
});

const color = instance.getEnum('color', {
	main: 'main',
	secondary: 'secondary',
	action: 'action',
	'action-hover': 'action-hover',
	'action-secondary': 'action-secondary',
	'action-secondary-hover': 'action-secondary-hover',
	disabled: 'disabled',
	'light-disabled': 'light-disabled',
	'on-action': 'on-action',
	'on-disabled': 'on-disabled',
	placeholder: 'placeholder',
	highlight: 'highlight',
	success: 'success',
	warning: 'warning',
	error: 'error',
	code: 'code',
});

const textNode = instance.children.find((child): child is figma.TextHandle => child.type === 'TEXT');
const text = textNode?.textContent ?? 'Text';

const colorProp = color === 'main' ? '' : figma.code` color="${color}"`;

export default {
	example: figma.code`<DsTypography variant="${variant}"${colorProp}>${text}</DsTypography>`,
	imports: ["import { DsTypography } from '@drivenets/design-system'"],
	id: 'ds-typography',
	metadata: { nestable: true },
};
