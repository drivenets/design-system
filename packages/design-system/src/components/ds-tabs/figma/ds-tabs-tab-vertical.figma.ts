// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=14841-6024
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-tabs
// component=DsTabs.Tab
//
// `DAP_Tab item - vertical_v01` maps to `DsTabs.Tab`, resolved inside the vertical
// `tabs slot` (nestable). Same code component as the horizontal tab item; the two
// differ in Figma only by casing (`Show Leading Icon`) and by the vertical set
// having no `Menu Actions` property.
//
// Variant divergence — `State`, `Selected` and `Size` have no `DsTabs.Tab` prop
// (see `ds-tabs-tab.figma.ts` for the rationale).
import figma from 'figma';

const instance = figma.selectedInstance;

const label = instance.getString('Tab Name');
const showIcon = instance.getBoolean('Show Leading Icon');
const showBadge = instance.getBoolean('Show Badge');

// `value` is required by `DsTabsTabProps` but is data, not derivable from Figma.
const value = label
	? label
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-+|-+$/g, '')
	: 'tab';

// Leading icon → `DsTabs.Tab.icon` name, read from the connected ds-icon instance.
const resolveIcon = (): string | undefined => {
	const node = instance
		.findConnectedInstances((n) => n.codeConnectId()?.startsWith('ds-icon-') ?? false, {
			traverseInstances: true,
		})
		.find((n): n is figma.InstanceHandle => n.type === 'INSTANCE');

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

const icon = showIcon ? resolveIcon() : undefined;

// Badge count is freeform nested text, read from the badge instance when shown.
const resolveBadge = (): string | undefined => {
	const badge = instance.findInstance('DAP_Tab badge_v01', { traverseInstances: true });
	if (badge.type !== 'INSTANCE') {
		return undefined;
	}
	return badge.children.find((c): c is figma.TextHandle => c.type === 'TEXT')?.textContent;
};

const badge = showBadge ? resolveBadge() : undefined;
const badgeAttr = badge ? (/^\d+$/.test(badge) ? `badge={${badge}}` : `badge="${badge}"`) : '';

const attrs = [`value="${value}"`, `label="${label}"`, icon ? `icon="${icon}"` : '', badgeAttr]
	.filter(Boolean)
	.join(' ');

export default {
	example: figma.code`<DsTabs.Tab ${attrs} />`,
	imports: ["import { DsTabs } from '@drivenets/design-system'"],
	id: 'ds-tabs-tab-vertical',
	metadata: { nestable: true },
};
