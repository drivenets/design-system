// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=14860-11893
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-avatar
// component=DsAvatar
//
// `Size` and `Type` map to the code props. Figma's boolean `Placeholder` variant has no
// code equivalent — initials-vs-photo is automatic (required `name` drives initials, an
// optional `src` drives the photo) — so it is ignored. `name` is content, not derivable
// from Figma, so it is emitted as a placeholder (see `ds-user-card.figma.ts`).
import figma from 'figma';

const instance = figma.selectedInstance;

const size =
	instance.getEnum('Size', {
		'XSM - 18': 'xsm',
		'SM - 24': 'sm',
		'Regular - 32': 'regular',
		'MD - 48': 'md',
		'LG - 80': 'lg',
		'XL - 144': 'xl',
	}) ?? 'regular';

const type = instance.getEnum('Type', { Circle: 'circle', Rounded: 'rounded' }) ?? 'circle';

export default {
	example: figma.code`<DsAvatar name="Full Name" size="${size}" type="${type}" />`,
	imports: ["import { DsAvatar } from '@drivenets/design-system'"],
	id: 'ds-avatar',
	metadata: { nestable: true },
};
