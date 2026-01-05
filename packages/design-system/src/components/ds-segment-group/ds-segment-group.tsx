import type React from 'react';
import { SegmentGroup } from '@ark-ui/react/segment-group';
import classNames from 'classnames';
import styles from './ds-segment-group.module.scss';
import DsTypography from '../ds-typography/ds-typography';
import {
	type DsSegmentGroupItemProps,
	type DsSegmentGroupItemTextProps,
	type DsSegmentGroupRootProps,
} from './ds-segment-group.types';

/**
 * Root component - provides segment group context
 */
const Root: React.FC<DsSegmentGroupRootProps> = ({
	className,
	children,
	onValueChange,
	size = 'default',
	...props
}) => (
	<SegmentGroup.Root
		className={classNames(styles.segmentGroupRoot, size === 'small' && styles.small, className)}
		onValueChange={(details) => onValueChange?.(details.value)}
		{...props}
	>
		<SegmentGroup.Indicator className={styles.segmentIndicator} />
		{children}
	</SegmentGroup.Root>
);

/**
 * Item component - renders a single segment button
 */
const Item: React.FC<DsSegmentGroupItemProps> = ({ value, label, className, style, children, ...props }) => {
	return (
		<SegmentGroup.Item
			value={value}
			className={classNames(styles.segmentItem, className)}
			style={style}
			{...props}
		>
			{label ? <ItemText>{label}</ItemText> : children}
			<SegmentGroup.ItemControl />
			<SegmentGroup.ItemHiddenInput />
		</SegmentGroup.Item>
	);
};

/**
 * ItemText component - renders text content within an item
 */
const ItemText: React.FC<DsSegmentGroupItemTextProps> = ({ className, children, ...props }) => (
	<SegmentGroup.ItemText className={classNames(styles.segmentItemText, className)} {...props} asChild>
		<DsTypography variant="body-sm-reg">{children}</DsTypography>
	</SegmentGroup.ItemText>
);

/**
 * Design system SegmentGroup component
 *
 * @example
 * <DsSegmentGroup.Root value={value} onValueChange={setValue} size="default">
 *   <DsSegmentGroup.Indicator />
 *   <DsSegmentGroup.Item value="option1" label="Option 1" />
 *   <DsSegmentGroup.Item value="option2">
 *     <DsIcon icon="settings" />
 *     <DsSegmentGroup.ItemText>Option 2</DsSegmentGroup.ItemText>
 *   </DsSegmentGroup.Item>
 * </DsSegmentGroup.Root>
 */
export const DsSegmentGroup = {
	Root,
	Item,
	ItemText,
};
