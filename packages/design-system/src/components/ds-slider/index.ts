import type { ComponentProps } from 'react';

import { withResponsiveProps } from '../../utils/responsive';
import DsSliderBase from './ds-slider';

export const DsSlider = withResponsiveProps(DsSliderBase, ['size', 'step', 'thumbLabels']);

DsSlider.displayName = 'DsSlider';

export type DsSliderProps = ComponentProps<typeof DsSlider>;
export type { DsSliderValue, DsSliderType, DsSliderSize } from './ds-slider.types';
