// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=19208-6889
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-comment-indicator
// component=DsCommentIndicator
//
// The linked node is `Structure_CommentIndicatorV1`, the inner structure shared by the
// indicator variants. The `type` axis (placeholder / default / action-required) maps
// directly to the `type` prop; on the bare structure node it has no value, so it falls
// back to `default`. For the `placeholder` state no avatar is shown; the `default` /
// `action-required` states carry the initiator's avatar. `avatarSrc` is a photo URL
// and `avatarName` is content — neither is derivable from Figma — so `avatarName` is
// emitted as a placeholder for the developer to fill in (see `ds-avatar.figma.ts`).
import figma from 'figma';

const instance = figma.selectedInstance;

const type =
	instance.getEnum('type', {
		placeholder: 'placeholder',
		default: 'default',
		'action-required': 'action-required',
		'action required': 'action-required',
	}) ?? 'default';

export default {
	example:
		type === 'placeholder'
			? figma.code`<DsCommentIndicator type="placeholder" onClick={() => {}} />`
			: figma.code`<DsCommentIndicator type="${type}" avatarName="Full Name" onClick={() => {}} />`,
	imports: ["import { DsCommentIndicator } from '@drivenets/design-system';"],
	id: 'ds-comment-indicator',
	metadata: { nestable: true },
} satisfies figma.Template;
