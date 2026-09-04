// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=27983-34300
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-illustration
// component=DsIllustration
import figma from 'figma';

const instance = figma.selectedInstance;

const variant =
	instance.getEnum('Property 1', {
		Done: 'done',
		EmptyInbox: 'empty-inbox',
		Error: 'error',
		NoConnection: 'no-connection',
		NoCreditCard: 'no-credit-card',
		NoDocuments: 'no-documents',
		NoGPS: 'no-gps',
		NoImages: 'no-images',
		NoItemsCart: 'no-items-cart',
		NoMessages: 'no-messages',
		NoSearchResult: 'no-search-result',
		NoTasks: 'no-tasks',
		'No Device': 'no-device',
		'Go Filter': 'go-filter',
		Device: 'device',
		Site: 'site',
		configuration: 'configuration',
	}) ?? 'no-tasks';

export default {
	example: figma.code`<DsIllustration variant="${variant}" />`,
	imports: ["import { DsIllustration } from '@drivenets/design-system';"],
	id: 'ds-illustration',
	metadata: { nestable: true },
} satisfies figma.Template;
