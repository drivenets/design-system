// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=39666-40247
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-button-v3
// component=DsButtonV3
import figma from 'figma';

// Figma ships several button generations; the `DsButtonV4` component set maps onto the
// same code component as `DsButtonV3` (see ds-button-v3.figma.ts for the older set).
const instance = figma.selectedInstance;

const variant = instance.getEnum('variant', {
	primary: 'primary',
	'primary-subtle': 'primary-subtle',
	secondary: 'secondary',
	tertiary: 'tertiary',
});
const color = instance.getEnum('color', {
	default: 'default',
	error: 'error',
	light: 'light',
});
const state = instance.getEnum('state', {
	default: 'default',
	hover: 'hover',
	focus: 'focus',
	active: 'active',
	disabled: 'disabled',
	isLoading: 'isLoading',
});

const disabled = state === 'disabled';
const loading = state === 'isLoading';

const structure = instance.findInstance('Part_ButtonStructureV2', { traverseInstances: true });

const size =
	structure.type === 'INSTANCE'
		? (structure.getEnum('size', {
				large: 'large',
				medium: 'medium',
				small: 'small',
				tiny: 'tiny',
			}) ?? 'medium')
		: 'medium';

const iconOnly =
	structure.type === 'INSTANCE' ? structure.getEnum('icon-only', { True: true, False: false }) : false;

const showIcon = structure.type === 'INSTANCE' ? structure.getBoolean('isIconBefore') : false;

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

const leadingIcon = structure.type === 'INSTANCE' ? structure.getInstanceSwap('iconBefore') : undefined;
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
const disabledProp = disabled ? ' disabled' : '';
const loadingProp = loading ? ' loading' : '';

export default {
	example: iconOnly
		? figma.code`<DsButtonV3 variant="${variant}" color="${color}" size="${size}"${disabledProp}${loadingProp}${iconProp} aria-label="${label}" />`
		: showIcon && icon
			? figma.code`<DsButtonV3 variant="${variant}" color="${color}" size="${size}"${disabledProp}${loadingProp} icon="${icon}">${label}</DsButtonV3>`
			: figma.code`<DsButtonV3 variant="${variant}" color="${color}" size="${size}"${disabledProp}${loadingProp}>${label}</DsButtonV3>`,
	imports: ["import { DsButtonV3 } from '@drivenets/design-system';"],
	id: 'ds-button-v4',
	metadata: { nestable: true },
} satisfies figma.Template;
