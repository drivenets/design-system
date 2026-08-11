// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=18946-29117
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-comment-card
// component=DsCommentCard
//
// `CommentCardV1` composes the inner `Structure_CommentCardV1`. Its `overflow` axis
// maps directly to the `overflow` prop. The `type` axis is interaction state
// (default/hover/focus are visual and CSS-driven — only `disabled` maps to a prop),
// mirroring `ds-card.figma.ts`. The `action required` axis is encoded in the `comment`
// data (`isActionRequired`), not a prop. `comment` is a data object that is not
// derivable from Figma, so it is emitted as an identifier placeholder for the
// developer to wire (see `ds-smart-tabs.figma.ts`).
import figma from 'figma';

const instance = figma.selectedInstance;

const state =
	instance.getEnum('type', {
		default: 'default',
		hover: 'default',
		focus: 'default',
		pressed: 'default',
		disabled: 'disabled',
	}) ?? 'default';

const overflow =
	instance.getEnum('overflow', {
		hidden: 'hidden',
		displayed: 'displayed',
	}) ?? 'hidden';

const disabledAttr = state === 'disabled' ? ' disabled' : '';

export default {
	example: figma.code`<DsCommentCard comment={comment} overflow="${overflow}"${disabledAttr} />`,
	imports: ["import { DsCommentCard } from '@drivenets/design-system';"],
	id: 'ds-comment-card',
	metadata: { nestable: true },
} satisfies figma.Template;
