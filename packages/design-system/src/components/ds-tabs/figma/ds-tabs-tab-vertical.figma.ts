// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=42725-280519
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-tabs
// component=DsTabs.Tab
//
// `Part_TabsVerticalItemV2` maps to `DsTabs.Tab`, resolved inside the vertical
// group's `Slot` (nestable). Content flags live on the nested
// `Structure_TabsVerticalContent`: leading icon, selected count, total badge,
// and pin.
//
// Variant divergence — `active` and `state` (default / hover / focus) have no
// `DsTabs.Tab` prop. Selection is owned by `DsTabs.Root`, and hover / focus are
// CSS. Only `state=disabled` maps to `disabled`.
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('state', {
	default: 'default',
	hover: 'hover',
	focus: 'focus',
	disabled: 'disabled',
});

const structure = instance.findInstance('Structure_TabsVerticalContent', { traverseInstances: true });

const hasIcon = structure.type === 'INSTANCE' ? structure.getBoolean('hasIcon') : false;
const hasPin = structure.type === 'INSTANCE' ? structure.getBoolean('hasPin') : false;
const hasSelectCount = structure.type === 'INSTANCE' ? structure.getBoolean('hasSelectCount') : false;
const hasTotalCount = structure.type === 'INSTANCE' ? structure.getBoolean('hasTotalCount') : false;

const labelNode = instance.findText('Tab item', { traverseInstances: true });
const label = labelNode.type === 'TEXT' ? labelNode.textContent.trim() : 'Tab item';

const value =
	label
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '') || 'tab';

const resolveIcon = (): string | undefined => {
	if (structure.type !== 'INSTANCE') {
		return undefined;
	}

	const node = structure
		.findConnectedInstances((candidate) => candidate.codeConnectId()?.startsWith('ds-icon-') ?? false, {
			traverseInstances: true,
		})
		.find((candidate): candidate is figma.InstanceHandle => candidate.type === 'INSTANCE');

	if (!node) {
		return undefined;
	}

	const id = node.codeConnectId();
	if (id?.startsWith('ds-icon-o-')) {
		return id.slice('ds-icon-o-'.length);
	}
	if (id?.startsWith('ds-icon-s-')) {
		return id.slice('ds-icon-s-'.length);
	}

	return node.name
		.replace(/^DAP_GM_[OS]_/, '')
		.replace(/^DAP_/, '')
		.replace(/[\s/]+/g, '_')
		.toLowerCase();
};

const icon = hasIcon ? resolveIcon() : undefined;

const resolveBadge = (): string | undefined => {
	if (structure.type !== 'INSTANCE') {
		return undefined;
	}

	const badge = structure.findInstance('Part_TabsBadgeV1', { traverseInstances: true });
	if (badge.type !== 'INSTANCE') {
		return undefined;
	}

	return badge.children.find((child): child is figma.TextHandle => child.type === 'TEXT')?.textContent.trim();
};

const badge = hasTotalCount ? resolveBadge() : undefined;

const resolveSelectedCount = (totalCount: string | undefined): string | undefined => {
	if (structure.type !== 'INSTANCE') {
		return undefined;
	}

	const countText = structure
		.findLayers((node): node is figma.TextHandle => node.type === 'TEXT', { traverseInstances: true })
		.find(
			(node): node is figma.TextHandle =>
				node.type === 'TEXT' && node.name !== 'Tab item' && node.textContent.trim() !== totalCount,
		);

	return countText?.type === 'TEXT' ? countText.textContent.trim() : undefined;
};

const selectedCount = hasSelectCount ? resolveSelectedCount(badge) : undefined;
const selectedCountAttr =
	selectedCount && /^\d+$/.test(selectedCount) ? `selectedCount={${selectedCount}}` : '';
const badgeAttr = badge ? (/^\d+$/.test(badge) ? `badge={${badge}}` : `badge="${badge}"`) : '';

const attrs = [
	`value="${value}"`,
	`label="${label}"`,
	icon ? `icon="${icon}"` : '',
	selectedCountAttr,
	badgeAttr,
	hasPin ? 'pinned' : '',
	state === 'disabled' ? 'disabled' : '',
]
	.filter(Boolean)
	.join(' ');

export default {
	example: figma.code`<DsTabs.Tab ${attrs} />`,
	imports: ["import { DsTabs } from '@drivenets/design-system';"],
	id: 'ds-tabs-tab-vertical',
	metadata: { nestable: true },
} satisfies figma.Template;
