// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=25703-1142
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-card
// component=DsCard
//
// `DAP_Card_v01` is the compound card. It maps to the composed `DsCard.Root` with
// `DsCard.Header` / `DsCard.Body` / `DsCard.Footer` slots (freeform placeholders in
// Figma, arbitrary children in code).
import figma from 'figma';

const instance = figma.selectedInstance;

const size = instance.getEnum('Size', {
	Large: 'large',
	Medium: 'medium',
	Small: 'small',
});

const state = instance.getEnum('State', {
	default: 'default',
	hover: 'default',
	focus: 'default',
	selected: 'selected',
	'selected blue': 'highlighted',
	disabled: 'disabled',
});

const selectable = state !== 'default';
const selected = state === 'selected' || state === 'highlighted';
const highlightSelected = state === 'highlighted';
const disabled = state === 'disabled';

export default {
	example: figma.code`<DsCard.Root size="${size}" ${selectable ? 'selectable' : ''} ${selected ? 'selected' : ''} ${highlightSelected ? 'highlightSelected' : ''} ${disabled ? 'disabled' : ''}><DsCard.Header>Card title</DsCard.Header><DsCard.Body>Card content</DsCard.Body><DsCard.Footer>Card footer</DsCard.Footer></DsCard.Root>`,
	imports: ["import { DsCard } from '@drivenets/design-system'"],
	id: 'ds-card',
	metadata: { nestable: false },
};
