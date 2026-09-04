// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=40935-37071
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-bot-button
// component=DsBotButton
//
// Figma models the six looks as one `state` enum; the code API is the three booleans it implies,
// since hover and focus belong to the browser. The label is read off the instance and emitted
// through `locale` only when it has drifted from the fixed bot name.
//
// The nested `Part_ButtonStructureV2` props Dev Mode lists are deliberately not mapped: `size`,
// `icon-only` and `high-emphasis` are constants handed to `DsButtonV3`, and the icon/dropdown
// slots are internals of a part whose own description calls it "not for standalone use".
import figma from 'figma';

const instance = figma.selectedInstance;

const state = instance.getEnum('state', {
	default: 'default',
	hover: 'default',
	focus: 'default',
	selected: 'selected',
	disabled: 'disabled',
	isLoading: 'isLoading',
});

const selectedProp = state === 'selected' ? ' selected' : '';
const disabledProp = state === 'disabled' ? ' disabled' : '';
const loadingProp = state === 'isLoading' ? ' loading' : '';

const labelNode = instance.findText('NetGen', { traverseInstances: true });
const label = labelNode.type === 'TEXT' ? labelNode.textContent : 'NetGen';
const localeProp = label === 'NetGen' ? '' : ` locale={{ label: '${label}' }}`;

export default {
	example: figma.code`<DsBotButton${selectedProp}${disabledProp}${loadingProp}${localeProp} />`,
	imports: ["import { DsBotButton } from '@drivenets/design-system';"],
	id: 'ds-bot-button',
	metadata: { nestable: true },
} satisfies figma.Template;
