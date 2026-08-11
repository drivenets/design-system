// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=15707-16204
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-smart-tabs
// component=DsSmartTabs.Tab
//
// `Part_SmartTabV1` maps to `DsSmartTabs.Tab`, resolved inside the group's
// `Smart tabs slot` (nestable). Each item = colored icon badge + label + count.
//
// Variant divergence — the Figma `state` axis (selected/unselected/hover/focus)
// is mostly visual: selection is owned by `DsSmartTabs` (`activeTab`), and
// hover/focus are driven by CSS. Only `disabled` maps to a `DsSmartTabs.Tab` prop.
//
// `color` is intentionally not emitted: it is a fixed semantic per-category value
// (encoded in the nested badge's `category` variant, not a tab-level property) and
// the category→color mapping is owned by the design system, so the developer sets
// it explicitly. `value` is data, not derivable from Figma, so slugify the label
// as a sensible default for the developer to confirm/replace.
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('state', {
	selected: 'selected',
	unselected: 'unselected',
	hover: 'hover',
	focus: 'focus',
	disabled: 'disabled',
});

// Label and count are plain text layers (not component properties): the first
// text child is the label, the second is the right-aligned count.
const texts = instance.children.filter((child): child is figma.TextHandle => child.type === 'TEXT');
const label = texts[0]?.textContent.trim() || 'Label';
const count = texts[1]?.textContent.trim() ?? '';

const value = label
	.toLowerCase()
	.replace(/[^a-z0-9]+/g, '-')
	.replace(/^-+|-+$/g, '');

// The badge glyph maps to `DsSmartTabs.Tab.icon` (an icon-name string). Prefer a
// connected ds-icon's Code Connect id and fall back to the glyph layer name.
const resolveIcon = (): string => {
	const node = instance
		.findConnectedInstances((n) => n.codeConnectId()?.startsWith('ds-icon-') ?? false, {
			traverseInstances: true,
		})
		.find((n): n is figma.InstanceHandle => n.type === 'INSTANCE');

	const id = node?.codeConnectId();
	if (id?.startsWith('ds-icon-o-')) {
		return id.slice('ds-icon-o-'.length);
	}
	if (id?.startsWith('ds-icon-s-')) {
		return id.slice('ds-icon-s-'.length);
	}

	return (node?.name ?? 'circle')
		.replace(/^DAP_GM_[OS]_/, '')
		.replace(/^DAP_/, '')
		.replace(/[\s/]+/g, '_')
		.toLowerCase();
};

// `content` is number|string and is not auto-formatted: emit a numeric literal for
// a plain integer, otherwise keep the pre-formatted string (e.g. "1,273").
const contentAttr = /^\d+$/.test(count) ? `content={${count}}` : `content="${count}"`;

const attrs = [
	`value="${value}"`,
	`label="${label}"`,
	`icon="${resolveIcon()}"`,
	contentAttr,
	state === 'disabled' ? 'disabled' : '',
]
	.filter(Boolean)
	.join(' ');

export default {
	example: figma.code`<DsSmartTabs.Tab ${attrs} />`,
	imports: ["import { DsSmartTabs } from '@drivenets/design-system';"],
	id: 'ds-smart-tabs-tab',
	metadata: { nestable: true },
} satisfies figma.Template;
