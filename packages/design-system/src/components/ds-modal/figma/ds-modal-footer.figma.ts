// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=32014-16402
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-modal
// component=DsModal.Footer
//
// `DAP_modal-footer_v02` maps to `DsModal.Footer` > `DsModal.Actions`. The
// `right side buttons` slot resolves its `DAP_Button_v03` instances via the
// existing `ds-button-v3` Code Connect.
import figma from 'figma';
import { defineFigmaTemplate } from '../../../utils/define-figma-template';

const instance = figma.selectedInstance;

const rightButtons = instance.getSlot('right side buttons');

export default defineFigmaTemplate({
	example: figma.code`<DsModal.Footer><DsModal.Actions>${rightButtons}</DsModal.Actions></DsModal.Footer>`,
	imports: ["import { DsModal } from '@drivenets/design-system'"],
	id: 'ds-modal-footer',
	metadata: { nestable: true },
});
