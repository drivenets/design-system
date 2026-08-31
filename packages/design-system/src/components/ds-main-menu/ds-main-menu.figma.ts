// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=42100-7474
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-main-menu
// component=DsMainMenu
import figma from 'figma';

export default {
	example: figma.code`<DsMainMenu
  trigger={/* header trigger */}
  items={items}
  utilityLinks={utilityLinks}
  selectedId={selectedId}
  onItemSelect={onItemSelect}
/>`,
	imports: ["import { DsMainMenu } from '@drivenets/design-system';"],
	id: 'ds-main-menu',
	metadata: { nestable: false },
} satisfies figma.Template;
