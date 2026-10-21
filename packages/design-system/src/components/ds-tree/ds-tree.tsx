import { TreeView, useTreeViewNodeContext } from '@ark-ui/react/tree-view';
import type { MouseEvent } from 'react';
import classNames from 'classnames';

import { DsIcon } from '../ds-icon';
import styles from './ds-tree.module.scss';
import {
	DsTreeDragHandle,
	DsTreeSortable,
	DsTreeSortableBranchControl,
	DsTreeSortableItem,
	useDsTreeSortableBranchAttributes,
	useDsTreeSortableContext,
	useDsTreeViewContext,
} from './ds-tree-sortable';
import type {
	DsTreeBranchContentProps,
	DsTreeBranchControlProps,
	DsTreeBranchIndentGuideProps,
	DsTreeBranchIndicatorProps,
	DsTreeBranchProps,
	DsTreeBranchTextProps,
	DsTreeItemActionProps,
	DsTreeItemIndicatorProps,
	DsTreeItemProps,
	DsTreeItemTextProps,
	DsTreeNode,
	DsTreeNodeCheckboxProps,
	DsTreeRootProps,
	DsTreeTreeProps,
} from './ds-tree.types';

const DsTreeRoot = <T extends DsTreeNode = DsTreeNode>({
	collection,
	size = 'medium',
	ref,
	className,
	style,
	children,
	selectedValue,
	defaultSelectedValue,
	onSelectionChange,
	selectionMode = 'single',
	expandedValue,
	defaultExpandedValue,
	onExpandedChange,
	expandOnClick = true,
	checkedValue,
	defaultCheckedValue,
	onCheckedChange,
	focusedValue,
	defaultFocusedValue,
	onFocusChange,
	typeahead = true,
	lazyMount = true,
	unmountOnExit,
}: DsTreeRootProps<T>) => (
	<TreeView.Root
		ref={ref}
		collection={collection}
		selectedValue={selectedValue}
		defaultSelectedValue={defaultSelectedValue}
		onSelectionChange={onSelectionChange}
		selectionMode={selectionMode}
		expandedValue={expandedValue}
		defaultExpandedValue={defaultExpandedValue}
		onExpandedChange={onExpandedChange}
		expandOnClick={expandOnClick}
		checkedValue={checkedValue}
		defaultCheckedValue={defaultCheckedValue}
		onCheckedChange={onCheckedChange}
		focusedValue={focusedValue}
		defaultFocusedValue={defaultFocusedValue}
		onFocusChange={onFocusChange}
		typeahead={typeahead}
		lazyMount={lazyMount}
		unmountOnExit={unmountOnExit}
		className={classNames(styles.root, className)}
		style={style}
		data-size={size}
	>
		{children}
	</TreeView.Root>
);

const DsTreeTree = ({ className, style, children }: DsTreeTreeProps) => (
	<TreeView.Tree className={classNames(styles.tree, className)} style={style}>
		{children}
	</TreeView.Tree>
);

const DsTreeBranch = ({ className, style, children, ...rest }: DsTreeBranchProps) => {
	const sortableAttributes = useDsTreeSortableBranchAttributes();

	return (
		<TreeView.Branch
			{...rest}
			{...sortableAttributes}
			className={classNames(styles.branch, className)}
			style={style}
		>
			{children}
		</TreeView.Branch>
	);
};

const DsTreeBranchControl = ({ className, style, children, ...rest }: DsTreeBranchControlProps) => {
	const Control = useDsTreeSortableContext() ? DsTreeSortableBranchControl : TreeView.BranchControl;

	return (
		<Control {...rest} className={classNames(styles.branchControl, className)} style={style}>
			{children}
		</Control>
	);
};

const DsTreeBranchIndicator = ({ className, style, children }: DsTreeBranchIndicatorProps) => (
	<TreeView.BranchIndicator className={classNames(styles.branchIndicator, className)} style={style}>
		{children ?? <DsIcon icon="keyboard_arrow_right" size="tiny" />}
	</TreeView.BranchIndicator>
);

const DsTreeBranchText = ({ className, style, children, ...rest }: DsTreeBranchTextProps) => (
	<TreeView.BranchText {...rest} className={classNames(styles.branchText, className)} style={style}>
		{children}
	</TreeView.BranchText>
);

const DsTreeBranchContent = ({ className, style, children }: DsTreeBranchContentProps) => (
	<TreeView.BranchContent className={classNames(styles.branchContent, className)} style={style}>
		{children}
	</TreeView.BranchContent>
);

const DsTreeBranchIndentGuide = ({ className, style }: DsTreeBranchIndentGuideProps) => (
	<TreeView.BranchIndentGuide className={classNames(styles.branchIndentGuide, className)} style={style} />
);

const DsTreeItem = ({ className, style, children, onClick, ...rest }: DsTreeItemProps) => {
	const Item = useDsTreeSortableContext() ? DsTreeSortableItem : TreeView.Item;

	return (
		<Item {...rest} className={classNames(styles.item, className)} style={style} onClick={onClick}>
			{children}
		</Item>
	);
};

const DsTreeItemText = ({ className, style, children, ...rest }: DsTreeItemTextProps) => (
	<TreeView.ItemText {...rest} className={classNames(styles.itemText, className)} style={style}>
		{children}
	</TreeView.ItemText>
);

const DsTreeItemIndicator = ({ className, style }: DsTreeItemIndicatorProps) => (
	<span className={classNames(styles.itemIndicator, className)} style={style} aria-hidden="true">
		<span className={styles.itemDot} />
	</span>
);

// Ark derives branch checked state from descendants, so an empty group would always read as checked.
const useEmptyBranchChecked = () => {
	const treeView = useDsTreeViewContext();
	const { value, indexPath, isBranch, disabled } = useTreeViewNodeContext();
	const node = treeView.collection.at(indexPath);

	if (!isBranch || !node || treeView.collection.getNodeChildren(node).length > 0) {
		return null;
	}

	const checked = treeView.checkedValue.includes(value);

	return {
		checked,
		props: {
			'data-state': checked ? 'checked' : 'unchecked',
			'aria-checked': checked,
			onClickCapture: (event: MouseEvent<HTMLSpanElement>) => {
				event.stopPropagation();

				if (!disabled) {
					treeView.toggleChecked(value, false);
				}
			},
		},
	};
};

const DsTreeNodeCheckbox = ({ className, style }: DsTreeNodeCheckboxProps) => {
	const emptyBranch = useEmptyBranchChecked();
	const checkIcon = <DsIcon icon="check_small" size="tiny" variant="outlined" />;

	return (
		<TreeView.NodeCheckbox
			{...emptyBranch?.props}
			className={classNames(styles.nodeCheckbox, className)}
			style={style}
		>
			<div className={styles.nodeCheckboxBox}>
				{emptyBranch ? (
					emptyBranch.checked && checkIcon
				) : (
					<TreeView.NodeCheckboxIndicator
						className={styles.nodeCheckboxIndicator}
						indeterminate={<DsIcon icon="check_indeterminate_small" size="tiny" variant="outlined" />}
					>
						{checkIcon}
					</TreeView.NodeCheckboxIndicator>
				)}
			</div>
		</TreeView.NodeCheckbox>
	);
};

const DsTreeItemAction = ({ className, style, children, onClick }: DsTreeItemActionProps) => (
	<button
		className={classNames(styles.itemAction, className)}
		style={style}
		type="button"
		tabIndex={-1}
		onClick={(e) => {
			e.stopPropagation();
			onClick?.(e);
		}}
	>
		{children}
	</button>
);

DsTreeRoot.displayName = 'DsTree.Root';
DsTreeTree.displayName = 'DsTree.Tree';
Object.defineProperty(TreeView.NodeProvider, 'displayName', { value: 'DsTree.NodeProvider' });
Object.defineProperty(TreeView.NodeContext, 'displayName', { value: 'DsTree.NodeContext' });
DsTreeBranch.displayName = 'DsTree.Branch';
DsTreeBranchControl.displayName = 'DsTree.BranchControl';
DsTreeBranchIndicator.displayName = 'DsTree.BranchIndicator';
DsTreeBranchText.displayName = 'DsTree.BranchText';
DsTreeBranchContent.displayName = 'DsTree.BranchContent';
DsTreeBranchIndentGuide.displayName = 'DsTree.BranchIndentGuide';
DsTreeItem.displayName = 'DsTree.Item';
DsTreeItemText.displayName = 'DsTree.ItemText';
DsTreeItemIndicator.displayName = 'DsTree.ItemIndicator';
DsTreeItemAction.displayName = 'DsTree.ItemAction';
DsTreeNodeCheckbox.displayName = 'DsTree.NodeCheckbox';

export const DsTree = {
	Root: DsTreeRoot,
	Tree: DsTreeTree,
	NodeProvider: TreeView.NodeProvider,
	NodeContext: TreeView.NodeContext,
	Branch: DsTreeBranch,
	BranchControl: DsTreeBranchControl,
	BranchIndicator: DsTreeBranchIndicator,
	BranchText: DsTreeBranchText,
	BranchContent: DsTreeBranchContent,
	BranchIndentGuide: DsTreeBranchIndentGuide,
	Item: DsTreeItem,
	ItemText: DsTreeItemText,
	ItemIndicator: DsTreeItemIndicator,
	ItemAction: DsTreeItemAction,
	NodeCheckbox: DsTreeNodeCheckbox,
	Sortable: DsTreeSortable,
	DragHandle: DsTreeDragHandle,
};
