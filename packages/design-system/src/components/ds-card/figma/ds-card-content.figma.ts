// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=28122-12357
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-card
// component=DsCard.Body
//
// `card content` maps to `DsCard.Body`. The section exposes no named slot — its
// content is a freeform `DAP_Content placeholder_v01` marker — so the children are
// a static placeholder. Expose a Figma slot on the section to forward real content.
import figma from 'figma';

export default {
	example: figma.code`<DsCard.Body>Card content</DsCard.Body>`,
	imports: ["import { DsCard } from '@drivenets/design-system'"],
	id: 'ds-card-content',
	metadata: { nestable: true },
};
