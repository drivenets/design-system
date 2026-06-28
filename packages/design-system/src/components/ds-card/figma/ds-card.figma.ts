// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=25703-1142
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-card
// component=DsCard
//
// `DAP_Card_v01` is the compound card. It maps to the composed `DsCard.Root` and
// resolves its `card header` / `card content` / `card footer` sections dynamically
// via their own Code Connect templates, so a section that is removed or restyled
// stays in sync. Sections are always present in the current design, but resolving
// them keeps a single source of truth for each slot.
import figma from 'figma';

const instance = figma.selectedInstance;

const size =
	instance.getEnum('Size', {
		Large: 'large',
		Medium: 'medium',
		Small: 'small',
	}) ?? 'medium';

const state = instance.getEnum('State', {
	default: 'default',
	hover: 'default',
	focus: 'default',
	selected: 'selected',
	'selected blue': 'highlighted',
	disabled: 'disabled',
});

const selected = state === 'selected' || state === 'highlighted';
const highlightSelected = state === 'highlighted';
const disabled = state === 'disabled';

// A card is only selectable when it carries a selection state. Disabled is an
// independent modifier, so it must not imply `selectable` on its own.
const selectable = selected;

const flags = [
	selectable && 'selectable',
	selected && 'selected',
	highlightSelected && 'highlightSelected',
	disabled && 'disabled',
]
	.filter(Boolean)
	.join(' ');

const flagsAttr = flags ? ` ${flags}` : '';

const header = instance.findInstance('card header', { traverseInstances: true });
let headerCode: figma.ResultSection[] | undefined;
if (header.type === 'INSTANCE') {
	headerCode = header.executeTemplate().example;
}

const content = instance.findInstance('card content', { traverseInstances: true });
let contentCode: figma.ResultSection[] | undefined;
if (content.type === 'INSTANCE') {
	contentCode = content.executeTemplate().example;
}

const footer = instance.findInstance('card footer', { traverseInstances: true });
let footerCode: figma.ResultSection[] | undefined;
if (footer.type === 'INSTANCE') {
	footerCode = footer.executeTemplate().example;
}

export default {
	example: figma.code`<DsCard.Root size="${size}"${flagsAttr}>${headerCode}${contentCode}${footerCode}</DsCard.Root>`,
	imports: ["import { DsCard } from '@drivenets/design-system'"],
	id: 'ds-card',
	metadata: { nestable: false },
};
