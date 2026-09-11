// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=42657-2125
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-segment-group
// component=DsSegmentGroup.Item
//
// Figma `Part_SegmentItemV2` maps onto `DsSegmentGroup.Item` (see
// ds-segment-group-item.figma.ts for the V1 part). Hover / pressed / focus are
// visual-only and have no matching props.
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('state', {
	default: 'default',
	hover: 'hover',
	pressed: 'pressed',
	focus: 'focus',
	disabled: 'disabled',
});

const structure = instance.findInstance('Structure_SegmentItemV2', { traverseInstances: true });

const iconOnly =
	structure.type === 'INSTANCE' ? structure.getEnum('icon-only', { true: true, false: false }) : false;
const withIcon = structure.type === 'INSTANCE' ? structure.getBoolean('withIcon') : false;

const mediumLabel = structure.type === 'INSTANCE' ? structure.findText('SegBtn') : undefined;
const smallLabel = structure.type === 'INSTANCE' ? structure.findText('Button') : undefined;
const label =
	mediumLabel?.type === 'TEXT'
		? mediumLabel.textContent
		: smallLabel?.type === 'TEXT'
			? smallLabel.textContent
			: 'Option';

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

const iconNode =
	structure.type === 'INSTANCE'
		? structure
				.findConnectedInstances((node) => node.codeConnectId()?.startsWith('ds-icon-') ?? false, {
					traverseInstances: true,
				})
				.find((node): node is figma.InstanceHandle => node.type === 'INSTANCE')
		: undefined;
const icon = iconNode ? resolveIcon(iconNode) : undefined;

const slug = label
	.toLowerCase()
	.replace(/[^a-z0-9]+/g, '-')
	.replace(/^-+|-+$/g, '');
const value = slug || 'option';

const disabledAttr = state === 'disabled' ? ' disabled' : '';
const showIcon = Boolean(icon && (iconOnly || withIcon));

export default {
	example:
		iconOnly && icon
			? figma.code`<DsSegmentGroup.Item value="${value}" aria-label="${label}"${disabledAttr}>
	<DsIcon icon="${icon}" size="tiny" color="main" />
</DsSegmentGroup.Item>`
			: showIcon && icon
				? figma.code`<DsSegmentGroup.Item value="${value}"${disabledAttr}>
	<DsIcon icon="${icon}" size="tiny" color="main" />
	<DsSegmentGroup.ItemText>${label}</DsSegmentGroup.ItemText>
</DsSegmentGroup.Item>`
				: figma.code`<DsSegmentGroup.Item value="${value}" label="${label}"${disabledAttr} />`,
	imports:
		showIcon || iconOnly
			? ["import { DsIcon, DsSegmentGroup } from '@drivenets/design-system';"]
			: ["import { DsSegmentGroup } from '@drivenets/design-system';"],
	id: 'ds-segment-group-v2-item',
	metadata: { nestable: true },
} satisfies figma.Template;
