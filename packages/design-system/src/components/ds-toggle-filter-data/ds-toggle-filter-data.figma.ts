// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=42586-42142
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-toggle-filter-data
// component=DsToggleFilterData
//
// `Active` maps to the code `active` boolean and `State=disabled` to `disabled`. The other three
// `State` values are interaction states with no code prop: `hover` and `focus` are CSS
// pseudo-states on the underlying `<button>`, so they collapse onto `State=default`.
//
// Read off the instance NAME, not variant properties, and deliberately so. Node `42586:42142` is a
// plain frame holding 8 standalone components named
// `Part_ToggleFilterDataV1/State=<state>, Active=<bool>` — the slash prefix is a name folder, so
// these are 8 discrete components rather than one component set. The sibling
// `Part_ToggleFilterStatusV1` (`28684:14520`) is named bare (`State=default, Active=true`) and is a
// real set. Because this node has no `Active`/`State` variant properties, `getEnum` would return
// `undefined` for both and emit a confidently wrong `active={false}` on every instance while never
// emitting `disabled` — and `figma:lint` only parses, so CI would never catch it.
//
// Caveat: a designer who renames an instance breaks the match, and we fall back to the resting pill
// (inactive, enabled) rather than guessing. The durable fix is design-side — combine the 8 symbols
// into a proper component set, as Category and Status already are, then switch this file back to
// `getEnum` and repin `url=` to the set. Tracked as an open question on AR-88117.
//
// Both text layers in this node are named `Lorem`, so only the first — the leading `label` segment
// — can be resolved by name; `value` is emitted as a placeholder. The node also carries a
// `DsFilterStatusIconV1` instance that is hidden in all 8 symbols, and the pill exposes no icon
// slot, so it is not mapped.
import figma from 'figma';

const instance = figma.selectedInstance;

const variantName = instance.name;
const active = /Active=true/.test(variantName);
const disabled = /State=disabled/.test(variantName);

const labelNode = instance.findText('Lorem', { traverseInstances: true });
const label = labelNode.type === 'TEXT' ? labelNode.textContent : 'Toggle';

const attrs = [
	`label="${label}"`,
	'value="#"',
	active ? 'active' : 'active={false}',
	disabled ? 'disabled' : '',
]
	.filter(Boolean)
	.join(' ');

export default {
	example: figma.code`<DsToggleFilterData ${attrs} />`,
	imports: ["import { DsToggleFilterData } from '@drivenets/design-system';"],
	id: 'ds-toggle-filter-data',
	metadata: { nestable: true },
} satisfies figma.Template;
