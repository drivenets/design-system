// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=17353-7836
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-expandable-text-input
// component=DsExpandableTextInput
import figma from 'figma';

const instance = figma.selectedInstance;

const type = instance.getEnum('Type', {
	Persistent: 'persistent',
	Expandable: 'expandable',
});

const isExpandable = type !== 'persistent';

const component = isExpandable ? 'DsExpandableTextInput' : 'DsAutocomplete';

export default {
	example: isExpandable
		? figma.code`<DsExpandableTextInput icon="search" />`
		: figma.code`<DsAutocomplete options={[]} showTrigger={false} />`,
	imports: [`import { ${component} } from '@drivenets/design-system'`],
	id: 'ds-expandable-text-input',
	metadata: { nestable: true },
};
