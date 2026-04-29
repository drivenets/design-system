import type { ComponentPropsWithoutRef } from 'react';
import { type Checkbox } from '@ark-ui/react/checkbox';

export type DsCheckboxGroupOrientation = 'vertical' | 'horizontal';

export interface DsCheckboxGroupProps extends ComponentPropsWithoutRef<typeof Checkbox.Group> {
	orientation?: DsCheckboxGroupOrientation;
}
