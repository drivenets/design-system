import './types/column-group-meta.augmentation';

export type { DsColumnGroupMeta } from './types/column-group.types';
export { useColumnGroups } from './hooks/use-column-groups';
export {
	getGroupBoundaryColumnIds,
	getGroupColumnSizeStyle,
	startsAtGroupBoundary,
} from './utils/column-group';
