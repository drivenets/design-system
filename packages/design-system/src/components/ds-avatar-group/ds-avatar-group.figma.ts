// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=14870-20161
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-avatar-group
// component=DsAvatarGroup
//
// `Size` maps to the code prop (note the key is `XS - 18`, unlike `ds-avatar`'s `XSM - 18`).
// `avatars` is a required data array, not derivable from Figma, so it is emitted as an empty
// placeholder for the developer to fill in (see `ds-select.figma.ts`). The Figma set only
// models `type=circle` (code also supports `rounded`) and does not expose `max`, so neither
// is mapped.
import figma from 'figma';

const instance = figma.selectedInstance;

const size =
	instance.getEnum('Size', {
		'XS - 18': 'xsm',
		'SM - 24': 'sm',
		'Regular - 32': 'regular',
		'MD - 48': 'md',
	}) ?? 'regular';

export default {
	example: figma.code`<DsAvatarGroup avatars={[]} size="${size}" />`,
	imports: ["import { DsAvatarGroup } from '@drivenets/design-system'"],
	id: 'ds-avatar-group',
	metadata: { nestable: true },
};
