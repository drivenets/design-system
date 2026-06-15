// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=32830-9950
// source=packages/design-system/src/components/ds-split-button/ds-split-button.tsx
// component=DsSplitButton
import figma from 'figma';

const instance = figma.selectedInstance;

const isDisabled = instance.getBoolean('state', { disabled: true });

export default {
	example: figma.code`
    <DsSplitButton
      size="medium"
      disabled={${isDisabled}}
      slotProps={{
        button: { children: 'Action' },
        select: { items: [...] },
      }}
    />
  `,
	imports: ['import { DsSplitButton } from "@drivenets/design-system"'],
	id: 'ds-split-button',
};
