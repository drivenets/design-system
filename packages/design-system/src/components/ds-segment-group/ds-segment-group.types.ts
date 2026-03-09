import { type ReactNode } from 'react';
import {
	type SegmentGroupItemProps,
	type SegmentGroupItemTextProps,
	type SegmentGroupRootProps,
} from '@ark-ui/react/segment-group';

/**
 * Size variants for the segment group
 */
export type DsSegmentGroupSize = 'small' | 'default';

/**
 * Props for the DsSegmentGroup Root component
 */
export interface DsSegmentGroupRootProps extends Pick<
	SegmentGroupRootProps,
	'value' | 'defaultValue' | 'disabled' | 'name' | 'className' | 'style' | 'children'
> {
	/**
	 * Size variant of the segment group
	 * @default 'default'
	 */
	size?: DsSegmentGroupSize;
	/**
	 * Event handler called when the selected value changes
	 */
	onValueChange?: (value: string | null) => void;
}

/**
 * Props for the DsSegmentGroup Item component
 */
export type DsSegmentGroupItemProps = Pick<
	SegmentGroupItemProps,
	'id' | 'value' | 'disabled' | 'className' | 'style'
> &
	(
		| {
				/**
				 * The segment group item content
				 */
				children: ReactNode;
				/**
				 * Optional label text for the segment item
				 */
				label?: never;
		  }
		| {
				/**
				 * The segment group item content
				 */
				children?: never;
				/**
				 * Optional label text for the segment item
				 */
				label: string;
		  }
	);

/**
 * Props for the DsSegmentGroup ItemText component
 */
export type DsSegmentGroupItemTextProps = Pick<SegmentGroupItemTextProps, 'className' | 'style' | 'children'>;
