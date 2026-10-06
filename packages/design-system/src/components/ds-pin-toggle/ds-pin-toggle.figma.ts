// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=42863-16495
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-pin-toggle
// component=DsPinToggle
import figma from 'figma';

const instance = figma.selectedInstance;

// `Part_PinnedIcon` is a `Part_*` node, which we normally do not mirror. It is
// mapped here because, unlike `Part_CheckboxBtnV3`, it has a real exported
// counterpart in code — the rule exists to stop us inventing components for
// markup, not to hide ones that exist.
const active = instance.getEnum('active', {
	true: 'true',
	false: 'false',
});

// `itemLabel` has no Figma source — the pin carries no text, and the name it
// needs comes from the row it sits in. The snippet emits a placeholder so the
// required prop is visible rather than silently missing.
const attrs = ['itemLabel="Label"', active === 'true' ? 'pinned' : ''].filter(Boolean).join(' ');

export default {
	example: figma.code`<DsPinToggle ${attrs} />`,
	imports: ["import { DsPinToggle } from '@drivenets/design-system';"],
	id: 'ds-pin-toggle',
	metadata: { nestable: true },
} satisfies figma.Template;
