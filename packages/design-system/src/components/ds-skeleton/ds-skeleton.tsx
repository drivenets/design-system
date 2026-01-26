import type { DsSkeletonProps } from './ds-skeleton.types';
import DsSkeletonText from './ds-skeleton-text';
import DsSkeletonCircle from './ds-skeleton-circle';
import DsSkeletonRect from './ds-skeleton-rect';

/**
 * Base DsSkeleton component
 * Renders a 3-line paragraph skeleton by default
 * Supports a loading wrapper pattern to conditionally render children
 */
const DsSkeleton = ({
	loading = true,
	children,
	lines = 3,
	color = 'grey',
	radius = 'default',
	className,
	style,
}: DsSkeletonProps) => {
	if (!loading && children) {
		return children;
	}

	return <DsSkeletonText color={color} lines={lines} radius={radius} className={className} style={style} />;
};

DsSkeleton.Text = DsSkeletonText;
DsSkeleton.Circle = DsSkeletonCircle;
DsSkeleton.Rect = DsSkeletonRect;

export default DsSkeleton;
