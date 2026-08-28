// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=34851-93874
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-bulk-actions
// component=DsBulkActions
//
// `DsBulkActionsV2` is the floating toolbar shown when one or more table/tree rows are
// multi-selected. The Figma component exposes no properties, and each action in the
// "Action buttons slot" is a placeholder `Part_ActionBtnItemV2` with no click/menu
// semantics — so this is a representative usage of the compound `Item` API rather than
// a slot mapping.
import figma from 'figma';

export default {
	example: figma.code`<DsBulkActions
	selectedCount={3}
	onClearSelection={() => {}}
>
	<DsBulkActions.Item icon="alarm" label="Notify" onClick={() => {}} />
	<DsBulkActions.Item
		icon="share"
		label="Share"
		menu={[{ value: 'email', label: 'Email', onSelect: () => {} }]}
	/>
	<DsBulkActions.Item icon="delete_outline" label="Delete" onClick={() => {}} />
</DsBulkActions>`,
	imports: ["import { DsBulkActions } from '@drivenets/design-system';"],
	id: 'ds-bulk-actions',
	metadata: { nestable: false },
} satisfies figma.Template;
