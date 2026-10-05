// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=42725-280565
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-tabs
// component=DsTabs
//
// `DsTabsVerticalV2` is the vertical tab bar. Figma documents it as its own
// component, and Code Connect maps it onto `DsTabs` with `orientation="vertical"`
// (the same code component as the horizontal set). `Slot` is homogeneous
// `Part_TabsVerticalItemV2` instances; each child's template is inlined so the
// snippet shows `DsTabs.Tab` rather than a "Slot" label. `DsTabs.Content` panels
// are authored in code.
import figma from 'figma';

const instance = figma.selectedInstance;

const size = instance.getEnum('Property 1', {
	medium: 'medium',
	small: 'small',
});
const sizeAttr = size === 'small' ? ' size="small"' : '';

const slot = instance.getSlot('Slot');
const items = (slot?.connectedInstances ?? []).map((item) => item.executeTemplate().example);

export default {
	example: figma.code`<DsTabs.Root orientation="vertical"${sizeAttr}>
	<DsTabs.List>
		${items}
	</DsTabs.List>
	{/* Add a <DsTabs.Content value="..."> panel for each tab */}
</DsTabs.Root>`,
	imports: ["import { DsTabs } from '@drivenets/design-system';"],
	id: 'ds-tabs-vertical',
	metadata: { nestable: false },
} satisfies figma.Template;
