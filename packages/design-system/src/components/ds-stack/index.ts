import type { ComponentProps } from 'react';

import { withResponsiveProps } from '../../utils/responsive';
import { DsStack as DsStackBase } from './ds-stack';

export const DsStack = withResponsiveProps(DsStackBase, [
	'direction',
	'gap',
	'alignItems',
	'justifyContent',
	'flex',
	'flexWrap',
	'width',
]);

DsStack.displayName = 'DsStack';

export type DsStackProps = ComponentProps<typeof DsStack>;
