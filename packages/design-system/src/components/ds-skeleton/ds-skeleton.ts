import DsSkeletonText from './ds-skeleton-text';
import DsSkeletonCircle from './ds-skeleton-circle';
import DsSkeletonRect from './ds-skeleton-rect';

const DsSkeleton = {
	Text: DsSkeletonText,
	Circle: DsSkeletonCircle,
	Rect: DsSkeletonRect,
};

DsSkeleton.Text.displayName = 'DsSkeleton.Text';
DsSkeleton.Circle.displayName = 'DsSkeleton.Circle';
DsSkeleton.Rect.displayName = 'DsSkeleton.Rect';

export default DsSkeleton;
