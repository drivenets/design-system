// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=31065-2352
// source=packages/design-system/src/components/ds-button-v3/ds-button-v3.tsx
// component=DsButtonV3
import figma from 'figma';

const instance = figma.selectedInstance;

const variant = instance.getEnum('Variant', {
	primary: 'primary',
	secondary: 'secondary',
	tertiary: 'tertiary',
});

const color = instance.getEnum('Color', {
	default: 'default',
	error: 'error',
});

const isLight = instance.getBoolean('light');

const size = instance.getEnum('Size', {
	large: 'large',
	medium: 'medium',
	small: 'small',
	tiny: 'tiny',
});

const isDisabled = instance.getBoolean('State', { disabled: true });
const isSelected = instance.getBoolean('State', { selected: true });

export default isLight
	? {
			example: figma.code`
    <DsButtonV3
      variant={${variant}}
      color="light"
      size={${size}}
      disabled={${isDisabled}}
      selected={${isSelected}}
    >
      Label
    </DsButtonV3>
  `,
			imports: ['import { DsButtonV3 } from "@drivenets/design-system"'],
			id: 'ds-button-v3',
		}
	: {
			example: figma.code`
    <DsButtonV3
      variant={${variant}}
      color={${color}}
      size={${size}}
      disabled={${isDisabled}}
      selected={${isSelected}}
    >
      Label
    </DsButtonV3>
  `,
			imports: ['import { DsButtonV3 } from "@drivenets/design-system"'],
			id: 'ds-button-v3',
		};
