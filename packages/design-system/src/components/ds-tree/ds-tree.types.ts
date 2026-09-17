import type {
	AriaAttributes,
	CSSProperties,
	FocusEventHandler,
	KeyboardEventHandler,
	MouseEvent,
	MouseEventHandler,
	PointerEventHandler,
	ReactNode,
	Ref,
} from 'react';
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
	 * @default true
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
	 * Id of the node with keyboard focus (controlled). Use with `onFocusChange`.
	 * When `null`, Ark treats the first node as focused for roving-tabindex purposes.
	 */
	focusedValue?: string | null;
	/**
	 * Id of the node focused initially when uncontrolled. When `null` (the Ark
	 * default), the first node receives focus for roving-tabindex purposes.
	 */
	defaultFocusedValue?: string | null;
	/**
	 * Called when the focused node changes. Receives the Ark focus-change details
	 * including the new `focusedValue` (or `null` when nothing is focused).
	 */
	onFocusChange?: ArkTreeView.RootProps<T>['onFocusChange'];

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

/**
 * Props a wrapping `asChild` trigger (`DsPopover.Trigger`, `DsTooltip`) injects onto
 * the element it wraps. Row parts forward these so wrapping a row actually wires up
 * instead of silently doing nothing.
 */
export interface DsTreeRowTriggerProps<T extends HTMLElement = HTMLElement> {
	id?: string;
	ref?: Ref<T>;
	tabIndex?: number;
	'aria-haspopup'?: AriaAttributes['aria-haspopup'];
	'aria-expanded'?: AriaAttributes['aria-expanded'];
	'aria-controls'?: string;
	'data-state'?: string;
	onClick?: MouseEventHandler<T>;
	onPointerDown?: PointerEventHandler<T>;
	onPointerEnter?: PointerEventHandler<T>;
	onPointerLeave?: PointerEventHandler<T>;
	onFocus?: FocusEventHandler<T>;
	onBlur?: FocusEventHandler<T>;
	onKeyDown?: KeyboardEventHandler<T>;
}

export type DsTreeBranchProps = DsTreeBasePropsWithChildren & DsTreeRowTriggerProps<HTMLDivElement>;

export type DsTreeBranchControlProps = DsTreeBasePropsWithChildren & DsTreeRowTriggerProps<HTMLDivElement>;

export type DsTreeBranchIndicatorProps = DsTreeBasePropsWithChildren;

export type DsTreeBranchTextProps = DsTreeBasePropsWithChildren & DsTreeRowTriggerProps<HTMLSpanElement>;

export type DsTreeBranchContentProps = DsTreeBasePropsWithChildren;

export type DsTreeBranchIndentGuideProps = DsTreeBaseProps;

export interface DsTreeItemProps
	extends DsTreeBasePropsWithChildren, Omit<DsTreeRowTriggerProps<HTMLDivElement>, 'onClick'> {
	/**
	 * Called when the leaf item is clicked. Receives the native mouse event.
	 */
	onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export type DsTreeItemTextProps = DsTreeBasePropsWithChildren & DsTreeRowTriggerProps<HTMLSpanElement>;

export type DsTreeItemIndicatorProps = DsTreeBaseProps;

export type DsTreeNodeCheckboxProps = DsTreeBaseProps;

export interface DsTreeItemActionProps extends DsTreeBasePropsWithChildren {
	/**
	 * Called when the row action button is clicked. Receives the native mouse event.
	 */
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
