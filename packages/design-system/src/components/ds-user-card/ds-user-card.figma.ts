// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=38540-44159
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-user-card
// component=DsUserCard
//
// `DAP_user-menu-header_v01` (#38540:44159) is a plain composed instance with no
// variant props, so it maps directly to `DsUserCard`. `name` and `subtitle` are text
// content and `src` is a photo URL — none are derivable from Figma — so they are
// emitted as placeholders for the developer to fill in (see `ds-select.figma.ts`).
import figma from 'figma';

export default {
	example: figma.code`<DsUserCard name="Full Name" subtitle="subtitle" />`,
	imports: ["import { DsUserCard } from '@drivenets/design-system'"],
	id: 'ds-user-card',
	metadata: { nestable: true },
};
