import type { CSSProperties, MouseEvent, ReactNode, Ref } from 'react';
import type { TreeView as ArkTreeView } from '@ark-ui/react/tree-view';
import type { IconType } from '../ds-icon';
import type { FilterStatus } from '../ds-filter-status-icon';

export interface DsTreeNode {
	id: string;
	name: string;
	disabled?: boolean;
	icon?: IconType;
	status?: FilterStatus;
	children?: DsTreeNode[];
}

type ArkRootProps = ArkTreeView.RootProps<DsTreeNode>;

export const dsTreeSizes = ['medium', 'small'] as const;
export type DsTreeSize = (typeof dsTreeSizes)[number];

interface DsTreeBaseProps {
	className?: string;
	style?: CSSProperties;
}

interface DsTreeBasePropsWithChildren extends DsTreeBaseProps {
	children?: ReactNode;
}

export interface DsTreeRootProps extends DsTreeBasePropsWithChildren {
	collection: ArkRootProps['collection'];
	size?: DsTreeSize;
	ref?: Ref<HTMLDivElement>;

	selectedValue?: string[];
	defaultSelectedValue?: string[];
	onSelectionChange?: ArkRootProps['onSelectionChange'];
	selectionMode?: 'single' | 'multiple';

	expandedValue?: string[];
	defaultExpandedValue?: string[];
	onExpandedChange?: ArkRootProps['onExpandedChange'];
	expandOnClick?: boolean;

	checkedValue?: string[];
	defaultCheckedValue?: string[];
	onCheckedChange?: ArkRootProps['onCheckedChange'];

	typeahead?: boolean;
	lazyMount?: boolean;
	unmountOnExit?: boolean;
}

export type DsTreeTreeProps = DsTreeBasePropsWithChildren;

export type DsTreeBranchProps = DsTreeBasePropsWithChildren;

export type DsTreeBranchControlProps = DsTreeBasePropsWithChildren;

export type DsTreeBranchIndicatorProps = DsTreeBasePropsWithChildren;

export type DsTreeBranchTextProps = DsTreeBasePropsWithChildren;

export type DsTreeBranchContentProps = DsTreeBasePropsWithChildren;

export type DsTreeBranchIndentGuideProps = DsTreeBaseProps;

export interface DsTreeItemProps extends DsTreeBasePropsWithChildren {
	onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export type DsTreeItemTextProps = DsTreeBasePropsWithChildren;

export type DsTreeItemIndicatorProps = DsTreeBaseProps;

export type DsTreeNodeCheckboxProps = DsTreeBaseProps;

export interface DsTreeItemActionProps extends DsTreeBasePropsWithChildren {
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
