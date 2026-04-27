import type { ComponentProps } from 'react';

import { withResponsiveProps } from '../../utils/responsive';
import { DsGridBase, DsGridItemBase } from './ds-grid';

export const DsGrid = withResponsiveProps(DsGridBase, ['gutter', 'margin']);
export const DsGridItem = withResponsiveProps(DsGridItemBase, ['colSpan', 'rowSpan']);

export type DsGridProps = ComponentProps<typeof DsGrid>;
export type DsGridItemProps = ComponentProps<typeof DsGridItem>;
