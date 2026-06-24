// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=31065-2352
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-button-v3
// component=DsButtonV3
import figma from 'figma';

const instance = figma.selectedInstance;

const variant = instance.getEnum('Variant', {
	primary: 'primary',
	secondary: 'secondary',
	tertiary: 'tertiary',
});
const size = instance.getEnum('Size', {
	tiny: 'tiny',
	small: 'small',
	medium: 'medium',
	large: 'large',
});
const colorVariant = instance.getEnum('Color', { default: 'default', error: 'error' });
const isLight = instance.getEnum('light', { true: true, false: false });
const color = isLight ? 'light' : colorVariant;
const disabled = instance.getEnum('State', {
	default: false,
	hover: false,
	focus: false,
	active: false,
	disabled: true,
});
const iconOnly = instance.getEnum('Icon', { 'icon-only': true, text: false });

const structure = instance.findInstance('.button-structure', { traverseInstances: true });
const showIcon = structure.type === 'INSTANCE' ? structure.getBoolean('Show icon') : false;

const labelNode = instance.findText('Button', { traverseInstances: true });
const label = labelNode.type === 'TEXT' ? labelNode.textContent : 'Button';

export default {
	example: iconOnly
		? figma.code`<DsButtonV3 variant="${variant}" color="${color}" size="${size}" ${disabled ? 'disabled' : ''} icon="check_circle" aria-label="${label}" />`
		: showIcon
			? figma.code`<DsButtonV3 variant="${variant}" color="${color}" size="${size}" ${disabled ? 'disabled' : ''} icon="check_circle">${label}</DsButtonV3>`
			: figma.code`<DsButtonV3 variant="${variant}" color="${color}" size="${size}" ${disabled ? 'disabled' : ''}>${label}</DsButtonV3>`,
	imports: ["import { DsButtonV3 } from '@drivenets/design-system'"],
	id: 'ds-button-v3',
	metadata: { nestable: true },
};
