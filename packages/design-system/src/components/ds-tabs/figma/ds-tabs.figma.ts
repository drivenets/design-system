// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=14841-11053
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-tabs
// component=DsTabs
//
// `DAP_Tabs group-horizontal_v01` is the horizontal tab bar. It maps to the
// composed `DsTabs.Root` + `DsTabs.List`. The `tabs slot` resolves each tab item
// via its own Code Connect template (`DsTabs.Tab`), so added/removed tabs stay in
// sync. Figma only models the tab bar — the `DsTabs.Content` panels have no Figma
// equivalent and are authored in code, so the snippet emits a hint instead.
import figma from 'figma';

const instance = figma.selectedInstance;

// Figma's group `Size` is the code `size` prop; `medium` is the default so only
// `small` is emitted.
const size = instance.getEnum('Size', { medium: 'medium', small: 'small' });
const sizeAttr = size === 'small' ? ' size="small"' : '';

const tabs = instance.getSlot('tabs slot');

export default {
	example: figma.code`<DsTabs.Root orientation="horizontal"${sizeAttr}>
	<DsTabs.List>${tabs}</DsTabs.List>
	{/* Add a <DsTabs.Content value="..."> panel for each tab */}
</DsTabs.Root>`,
	imports: ["import { DsTabs } from '@drivenets/design-system'"],
	id: 'ds-tabs',
	metadata: { nestable: false },
};
