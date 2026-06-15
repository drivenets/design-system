import './types/column-group-meta.augmentation';

export type { DsColumnGroupMeta } from './types/column-group.types';
export { useColumnGroups } from './hooks/use-column-groups';
export {
	getGroupColumnSizeStyle,
	isFirstLeafColumnOfGroup,
	getCollapsedColumnVisibility,
	getInitialCollapsedGroups,
} from './utils/column-group';
