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

// `DsButtonV3.icon` is an icon-name string. Swapped icons keep the placeholder layer
// name (e.g. `DAP_GM_O_check_circle`), so resolve via Code Connect ID or metadata.
const toIconName = (name: string): string =>
	name
		.replace(/^DAP_DAP_/, 'DAP_')
		.replace(/^DAP_GM_[OS]_/, '')
		.replace(/^DAP_outline_icon\//, '')
		.replace(/^DAP_/, '')
		.replace(/^\/+/, '')
		.replace(/[\s/]+/g, '_')
		.toLowerCase();

const iconNameFromCodeConnectId = (id: string | null): string | undefined => {
	if (!id) {
		return undefined;
	}
	if (id.startsWith('ds-icon-o-')) {
		return id.slice('ds-icon-o-'.length);
	}
	if (id.startsWith('ds-icon-s-')) {
		return id.slice('ds-icon-s-'.length);
	}
	return undefined;
};

const resolveIcon = (iconInstance: figma.InstanceHandle): string | undefined => {
	const fromCcId = iconNameFromCodeConnectId(iconInstance.codeConnectId());
	if (fromCcId) {
		return fromCcId;
	}

	const iconFromMetadata = iconInstance.executeTemplate().metadata?.props?.icon;
	if (typeof iconFromMetadata === 'string') {
		return iconFromMetadata;
	}

	return toIconName(iconInstance.name);
};

const leadingIcon = structure.type === 'INSTANCE' ? structure.getInstanceSwap('Leading icon') : undefined;
const iconFromSwap = leadingIcon?.type === 'INSTANCE' ? resolveIcon(leadingIcon) : undefined;
const iconFromChild =
	structure.type === 'INSTANCE'
		? structure
				.findConnectedInstances((node) => node.codeConnectId()?.startsWith('ds-icon-') ?? false, {
					traverseInstances: true,
				})
				.find((node): node is figma.InstanceHandle => node.type === 'INSTANCE')
		: undefined;
const icon = iconFromSwap ?? (iconFromChild ? resolveIcon(iconFromChild) : undefined);

const labelNode = instance.findText('Button', { traverseInstances: true });
const label = labelNode.type === 'TEXT' ? labelNode.textContent : 'Button';

const iconProp = icon ? figma.code` icon="${icon}"` : '';

export default {
	example: iconOnly
		? figma.code`<DsButtonV3 variant="${variant}" color="${color}" size="${size}" ${disabled ? 'disabled' : ''}${iconProp} aria-label="${label}" />`
		: showIcon && icon
			? figma.code`<DsButtonV3 variant="${variant}" color="${color}" size="${size}" ${disabled ? 'disabled' : ''} icon="${icon}">${label}</DsButtonV3>`
			: figma.code`<DsButtonV3 variant="${variant}" color="${color}" size="${size}" ${disabled ? 'disabled' : ''}>${label}</DsButtonV3>`,
	imports: ["import { DsButtonV3 } from '@drivenets/design-system';"],
	id: 'ds-button-v3',
	metadata: { nestable: true },
} satisfies figma.Template;
