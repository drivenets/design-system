// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=36566-107407
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-tag
// component=DsTag
//
// Figma "Type" maps to code `variant`, "Size" to `size`, "State" to the `selected`/`disabled`
// booleans (hover/focus are interaction states with no code prop). Figma's `Type=include-exclude`
// is a single variant backed by an internal, non-exposed include/exclude sub-toggle, so it can
// only be surfaced as one code value — it maps to `variant="include"`; switch to `variant="exclude"`
// for the exclude case. `label` is content, pulled from the tag text when present, otherwise a
// placeholder; `value` (required only for `key-value`) is emitted as a placeholder.
import figma from 'figma';

const instance = figma.selectedInstance;

const variant =
	instance.getEnum('Type', {
		default: 'default',
		'include-exclude': 'include',
		'key-value': 'key-value',
	}) ?? 'default';

const size = instance.getEnum('Size', { medium: 'medium', small: 'small' }) ?? 'medium';

const state = instance.getEnum('State', {
	default: 'default',
	hover: 'hover',
	focus: 'focus',
	selected: 'selected',
	disabled: 'disabled',
});

const labelNode = instance.findText('Tag-name', { traverseInstances: true });
const label = labelNode.type === 'TEXT' ? labelNode.textContent : 'Label';

const attrs = [
	`label="${label}"`,
	variant !== 'default' ? `variant="${variant}"` : '',
	variant === 'key-value' ? 'value="Value"' : '',
	size === 'small' ? 'size="small"' : '',
	state === 'selected' ? 'selected' : '',
	state === 'disabled' ? 'disabled' : '',
]
	.filter(Boolean)
	.join(' ');

export default {
	example: figma.code`<DsTag ${attrs} />`,
	imports: ["import { DsTag } from '@drivenets/design-system';"],
	id: 'ds-tag',
	metadata: { nestable: true },
} satisfies figma.Template;
