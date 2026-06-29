// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=14829-217
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-tabs
// component=DsTabs.Tab
//
// `DAP_Tab item - horizontal_v01` maps to `DsTabs.Tab`. It resolves inside the
// horizontal `tabs slot` (nestable).
//
// Variant divergence — these Figma axes intentionally have no `DsTabs.Tab` prop:
//   • `State` (Default/Hover/Pressed) — visual only, driven by CSS.
//   • `Selected` (Yes/No) — selection is owned by `DsTabs.Root` (`value`), not the tab.
//   • `Size` (Base) — size lives on `DsTabs.Root` (`size`), not the tab.
import figma from 'figma';

const instance = figma.selectedInstance;

const label = instance.getString('Tab Name');
const showIcon = instance.getBoolean('Show leading icon');
const showBadge = instance.getBoolean('Show Badge');
const hasMenu = instance.getBoolean('Menu Actions');

// `value` is required by `DsTabsTabProps` but is data, not derivable from Figma.
// Slugify the label as a sensible default for the developer to confirm/replace.
const value = label
	? label
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-+|-+$/g, '')
	: 'tab';

// The leading icon maps to `DsTabs.Tab.icon` (an icon-name string). It is a
// connected ds-icon instance: read its Code Connect id (`ds-icon-o-`/`-s-`) and
// fall back to the layer name when it is unavailable.
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

// The badge count is freeform nested text (`DAP_Tab badge_v01`), not a component
// property, so read it from the badge instance when shown.
const resolveBadge = (): string | undefined => {
	const badge = instance.findInstance('DAP_Tab badge_v01', { traverseInstances: true });
	if (badge.type !== 'INSTANCE') {
		return undefined;
	}
	return badge.children.find((c): c is figma.TextHandle => c.type === 'TEXT')?.textContent;
};

const badge = showBadge ? resolveBadge() : undefined;
const badgeAttr = badge ? (/^\d+$/.test(badge) ? `badge={${badge}}` : `badge="${badge}"`) : '';

const attrs = [
	`value="${value}"`,
	`label="${label}"`,
	icon ? `icon="${icon}"` : '',
	badgeAttr,
	hasMenu ? 'menuActionItems={[]} onMenuActionSelect={() => {}}' : '',
]
	.filter(Boolean)
	.join(' ');

export default {
	example: figma.code`<DsTabs.Tab ${attrs} />`,
	imports: ["import { DsTabs } from '@drivenets/design-system'"],
	id: 'ds-tabs-tab',
	metadata: { nestable: true },
};
