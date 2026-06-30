// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=14841-11560
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-tabs
// component=DsTabs
//
// `DAP_Tabs group-vertical_v01` is the vertical tab bar. Horizontal and vertical
// are separate Figma component sets but a single code component switched by the
// `orientation` prop, so this template mirrors `ds-tabs.figma.ts` with
// `orientation="vertical"`. The `tabs slot` resolves each vertical tab item via
// its own template (`DsTabs.Tab`); `DsTabs.Content` panels are authored in code.
import figma from 'figma';

// The vertical set labels its size `Base` (= default `medium`); also accept the
// horizontal naming so a future shared variant keeps mapping to the `size` prop.
const size = figma.selectedInstance.getEnum('Size', {
	Base: 'medium',
	medium: 'medium',
	small: 'small',
});
const sizeAttr = size === 'small' ? ' size="small"' : '';

const tabs = figma.selectedInstance.getSlot('tabs slot');

export default {
	example: figma.code`<DsTabs.Root orientation="vertical"${sizeAttr}>
	<DsTabs.List>${tabs}</DsTabs.List>
	{/* Add a <DsTabs.Content value="..."> panel for each tab */}
</DsTabs.Root>`,
	imports: ["import { DsTabs } from '@drivenets/design-system'"],
	id: 'ds-tabs-vertical',
	metadata: { nestable: false },
};
