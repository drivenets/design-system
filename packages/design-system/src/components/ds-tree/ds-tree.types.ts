import type { CSSProperties, MouseEvent, ReactNode, Ref } from 'react';
import type { TreeView as ArkTreeView } from '@ark-ui/react/tree-view';
import type { IconType } from '../ds-icon';
import type { FilterStatus } from '../ds-filter-status-icon';

export interface DsTreeNode {
	/**
	 * Stable identifier for the node. Used as the key in selection, expansion, and
	 * checked-state arrays.
	 */
	id: string;
	/**
	 * Display name rendered for the node
	 */
	name: string;
	/**
	 * Whether the node is disabled and cannot be selected, expanded, or checked.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * Optional icon rendered before the node name
	 */
	icon?: IconType;
	/**
	 * Optional status indicator shown next to the node (e.g., active/inactive filter).
	 */
	status?: FilterStatus;
	/**
	 * Child nodes rendered under this node when it is expanded. Leaf nodes omit this.
	 */
	children?: DsTreeNode[];
}

export const dsTreeSizes = ['medium', 'small'] as const;
export type DsTreeSize = (typeof dsTreeSizes)[number];

export interface DsTreeBaseProps {
	className?: string;
	style?: CSSProperties;
}

export interface DsTreeBasePropsWithChildren extends DsTreeBaseProps {
	children?: ReactNode;
}

export interface DsTreeRootProps<T extends DsTreeNode = DsTreeNode> extends DsTreeBasePropsWithChildren {
	/**
	 * Ark UI tree collection describing the node hierarchy. Build it with
	 * `createTreeCollection` and pass the resulting collection in.
	 */
	collection: ArkTreeView.RootProps<T>['collection'];
	/**
	 * Controls visual density of tree rows.
	 * @default medium
	 */
	size?: DsTreeSize;
	/**
	 * Ref forwarded to the tree root element
	 */
	ref?: Ref<HTMLDivElement>;

	/**
	 * Ids of currently selected nodes (controlled). Use with `onSelectionChange`.
	 */
	selectedValue?: string[];
	/**
	 * Ids of nodes selected initially when uncontrolled.
	 */
	defaultSelectedValue?: string[];
	/**
	 * Called when node selection changes. Receives the Ark selection details
	 * including the new `selectedValue` array.
	 */
	onSelectionChange?: ArkTreeView.RootProps<T>['onSelectionChange'];
	/**
	 * Whether only one node can be selected at a time (`single`) or multiple
	 * selections are allowed (`multiple`).
	 * @default single
	 */
	selectionMode?: 'single' | 'multiple';

	/**
	 * Ids of currently expanded branch nodes (controlled). Use with `onExpandedChange`.
	 */
	expandedValue?: string[];
	/**
	 * Ids of branch nodes expanded initially when uncontrolled.
	 */
	defaultExpandedValue?: string[];
	/**
	 * Called when the set of expanded nodes changes. Receives the Ark expansion
	 * details including the new `expandedValue` array.
	 */
	onExpandedChange?: ArkTreeView.RootProps<T>['onExpandedChange'];
	/**
	 * Whether clicking anywhere on a branch row toggles its expansion in addition
	 * to clicking the branch indicator.
	 * @default false
	 */
	expandOnClick?: boolean;

	/**
	 * Ids of nodes currently in the "checked" state (for checkbox trees). Use with
	 * `onCheckedChange`.
	 */
	checkedValue?: string[];
	/**
	 * Ids of nodes initially checked when uncontrolled.
	 */
	defaultCheckedValue?: string[];
	/**
	 * Called when the set of checked nodes changes. Receives the Ark checked-change
	 * details including the new `checkedValue` array.
	 */
	onCheckedChange?: ArkTreeView.RootProps<T>['onCheckedChange'];

	/**
	 * Whether to enable typeahead navigation — typing characters focuses matching nodes.
	 */
	typeahead?: boolean;
	/**
	 * Whether to defer mounting of branch content until a branch is first expanded.
	 */
	lazyMount?: boolean;
	/**
	 * Whether to unmount branch content when the branch is collapsed (vs. hiding it).
	 * Pair with `lazyMount` to control mounting strategy.
	 */
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
	/**
	 * Called when the leaf item is clicked. Receives the native mouse event.
	 */
	onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export type DsTreeItemTextProps = DsTreeBasePropsWithChildren;

export type DsTreeItemIndicatorProps = DsTreeBaseProps;

export type DsTreeNodeCheckboxProps = DsTreeBaseProps;

export interface DsTreeItemActionProps extends DsTreeBasePropsWithChildren {
	/**
	 * Called when the row action button is clicked. Receives the native mouse event.
	 */
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
