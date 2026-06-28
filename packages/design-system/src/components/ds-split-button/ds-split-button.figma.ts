// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=32830-9950
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-split-button
// component=DsSplitButton
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('state', {
	default: 'default',
	hover: 'hover',
	select: 'select',
	focus: 'focus',
	disabled: 'disabled',
	running: 'running',
});
const disabled = state === 'disabled';
const loading = state === 'running';

const button = instance.findInstance('DAP_Button_v03', { traverseInstances: true });
const size =
	button.type === 'INSTANCE'
		? button.getEnum('Size', { tiny: 'small', small: 'small', medium: 'medium', large: 'medium' })
		: 'medium';

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

// The split button's button slot is intended for an icon-only button, so emit
// `icon` (and `loading`) rather than a text `children` label.
// While loading, a spinner replaces the icon, so omit it
// (the leading icon is the component's default placeholder in that state).
const buttonProps = [
	!loading && showIcon && icon ? `icon: '${icon}'` : undefined,
	loading ? 'loading: true' : undefined,
]
	.filter(Boolean)
	.join(', ');

export default {
	example: figma.code`<DsSplitButton size="${size}"${disabled ? ' disabled' : ''} slotProps={{ button: { ${buttonProps} }, select: { options: [], value: '' } }} />`,
	imports: ["import { DsSplitButton } from '@drivenets/design-system';"],
	id: 'ds-split-button',
	metadata: { nestable: false },
} satisfies figma.Template;
