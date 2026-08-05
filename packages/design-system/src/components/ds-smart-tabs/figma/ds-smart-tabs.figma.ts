// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=34864-129238
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-smart-tabs
// component=DsSmartTabs
//
// `DsSmartTabsV1` is the smart-tabs filter row. It maps to `DsSmartTabs`, whose
// `Smart tabs slot` resolves each item via its own template (`DsSmartTabs.Tab`),
// so added/removed tabs stay in sync.
//
// `activeTab` and `onTabClick` are the controlled selection pair. Figma models
// only the row chrome — selection state is authored in code, so the snippet emits
// identifier placeholders for the developer to wire to component state.
import figma from 'figma';

const tabs = figma.selectedInstance.getSlot('Smart tabs slot');

export default {
	example: figma.code`<DsSmartTabs activeTab={activeTab} onTabClick={setActiveTab}>
	${tabs}
</DsSmartTabs>`,
	imports: ["import { DsSmartTabs } from '@drivenets/design-system';"],
	id: 'ds-smart-tabs',
	metadata: { nestable: false },
} satisfies figma.Template;
