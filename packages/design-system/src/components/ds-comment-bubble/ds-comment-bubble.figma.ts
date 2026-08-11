// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=27305-30079
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-comment-bubble
// component=DsCommentBubble
//
// `DAP_comment bubble` is the floating comment bubble. Its Figma `type` axis
// (`start typing` vs a populated thread) selects between the empty compose state and
// a thread; in code this is driven by whether the `comment` prop is present, so the
// snippet emits `comment` / `currentUser` identifier placeholders for the developer to
// wire to state. The `action required` axis maps to `hideActionRequired` (the
// `no checkbox` variant hides the control); `State` is visual only and has no prop.
import figma from 'figma';

const instance = figma.selectedInstance;

const bubbleType =
	instance.getEnum('type', {
		'start typing': 'compose',
		typing: 'compose',
		'with comments': 'thread',
		comment: 'thread',
		comments: 'thread',
	}) ?? 'compose';

const hideActionRequired =
	instance.getEnum('action required', {
		'no checkbox': true,
		checkbox: false,
	}) ?? false;

const hideActionRequiredAttr = hideActionRequired ? '\n\thideActionRequired' : '';

export default {
	example:
		bubbleType === 'thread'
			? figma.code`<DsCommentBubble
	comment={comment}
	currentUser={currentUser}
	value={value}
	onValueChange={setValue}
	onSend={handleSend}
	onClose={handleClose}${hideActionRequiredAttr}
/>`
			: figma.code`<DsCommentBubble
	currentUser={currentUser}
	value={value}
	onValueChange={setValue}
	onSend={handleSend}
	onClose={handleClose}${hideActionRequiredAttr}
/>`,
	imports: ["import { DsCommentBubble } from '@drivenets/design-system';"],
	id: 'ds-comment-bubble',
	metadata: { nestable: true },
} satisfies figma.Template;
