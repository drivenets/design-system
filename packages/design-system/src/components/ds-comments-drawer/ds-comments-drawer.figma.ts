// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=19346-10511
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-comments-drawer
// component=DsCommentsDrawer
//
// `DsCommentsDrawerV1` is the comments side panel. Unlike `ds-drawer` / `ds-modal` it
// does not compose its children through slots: the toolbar, search, and the comment
// list are all internal, and the cards are rendered from the `comments` data array.
// There is therefore nothing to resolve via `executeTemplate` — the snippet emits
// `comments` / `onOpenChange` identifier placeholders for the developer to wire to
// state. The Figma `Type` axis (`Default` / `Regular`) has no `DsCommentsDrawer` prop
// equivalent — both render the same composition.
import figma from 'figma';

export default {
	example: figma.code`<DsCommentsDrawer open comments={comments} onOpenChange={() => {}} />`,
	imports: ["import { DsCommentsDrawer } from '@drivenets/design-system';"],
	id: 'ds-comments-drawer',
	metadata: { nestable: false },
} satisfies figma.Template;
