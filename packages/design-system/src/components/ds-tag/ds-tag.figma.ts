// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=36566-107407
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-tag
// component=DsTag
//
// Figma "Type" maps to code `variant`, "Size" to `size`, "State" to the `selected`/`disabled`
// booleans (hover/focus are interaction states with no code prop). Figma's `Type=include-exclude`
// is a single variant backed by an internal, non-exposed include/exclude sub-toggle, so it can
// only be surfaced as one code value — it maps to `variant="include"`; switch to `variant="exclude"`
// for the exclude case. `label` is content, pulled from the tag text when present, otherwise a
// placeholder; `value` (required by `key-value`, `operator-filter` and `query-filter`) is emitted
// as a placeholder.
//
// Three code props are deliberately not derived from this node:
// - `shape` — the pill radius is not modelled in Figma at all, so `shape="round"` is a code-side
//   choice.
// - `warning` / `onExpandClick` — the warning ellipse and `Part_expandCollapseBtn_v01` are hidden
//   layers in every variant of this node, so the emitted example leaves both off; add them in code
//   when the design that consumes the tag shows them.
//
// `operator-filter` nests a `DsButtonV4` trigger that does not exist in code. The trigger is a
// consumer-owned slot, so the example emits a `DsSelect` placeholder for the developer to wire.
import figma from 'figma';

const instance = figma.selectedInstance;

const variant =
	instance.getEnum('Type', {
		default: 'default',
		'include-exclude': 'include',
		'key-value': 'key-value',
		'operator-filter': 'operator-filter',
		'query-filter': 'query-filter',
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

const requiresValue = variant === 'key-value' || variant === 'operator-filter' || variant === 'query-filter';

const attrs = [
	`label="${label}"`,
	variant !== 'default' ? `variant="${variant}"` : '',
	requiresValue ? 'value="Value"' : '',
	variant === 'operator-filter' ? 'slots={{ operator: <DsSelect options={[]} value="" /> }}' : '',
	size === 'small' ? 'size="small"' : '',
	state === 'selected' ? 'selected' : '',
	state === 'disabled' ? 'disabled' : '',
]
	.filter(Boolean)
	.join(' ');

export default {
	example: figma.code`<DsTag ${attrs} />`,
	imports: [
		variant === 'operator-filter'
			? "import { DsSelect, DsTag } from '@drivenets/design-system';"
			: "import { DsTag } from '@drivenets/design-system';",
	],
	id: 'ds-tag',
	metadata: { nestable: true },
} satisfies figma.Template;
