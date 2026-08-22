// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=4804-92563
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-bulk-actions
// component=DsBulkActions
//
// `DsBulkActionsV2` is the floating toolbar shown when one or more table/tree rows are
// multi-selected. Figma models each action as `Part_ActionBtnV1`; code exposes a flat
// `actions` array, so the snippet is a representative usage.
import figma from 'figma';

const instance = figma.selectedInstance;

const countNode = instance.findText('count', { traverseInstances: true });
const selectedCount = countNode.type === 'TEXT' ? Number.parseInt(countNode.textContent, 10) || 1 : 1;

export default {
	example: figma.code`<DsBulkActions
	selectedCount={${selectedCount}}
	actions={[
		{ icon: 'alarm', label: 'Notify', onClick: () => {} },
		{ icon: 'delete_outline', label: 'Delete', onClick: () => {} },
	]}
	onClearSelection={() => {}}
/>`,
	imports: ["import { DsBulkActions } from '@drivenets/design-system';"],
	id: 'ds-bulk-actions',
	metadata: { nestable: false },
} satisfies figma.Template;
