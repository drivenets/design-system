import { createContext, use, useEffect, useState, type AriaAttributes, type MouseEvent } from 'react';
import { TreeView, useTreeViewContext, useTreeViewNodeContext } from '@ark-ui/react/tree-view';
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
} from './ds-tree-sortable';
import type {
	DsTreeBranchContentProps,
	DsTreeBranchControlProps,
	DsTreeBranchIndentGuideProps,
	DsTreeBranchIndicatorProps,
	DsTreeBranchProps,
	DsTreeBranchTextProps,
	DsTreeCheckedState,
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

interface DsTreeRowCheckbox {
	checked: DsTreeCheckedState | undefined;
}

type RegisterRowCheckbox = (checkbox: DsTreeRowCheckbox | null) => void;

const DsTreeRowCheckboxContext = createContext<RegisterRowCheckbox | null>(null);

const toAriaChecked = (checked: DsTreeCheckedState): AriaAttributes['aria-checked'] =>
	checked === 'indeterminate' ? 'mixed' : checked;

// Screen readers announce the treeitem, not its inner checkbox: a leaf's focused row, or a group's
// Branch around its focused BranchControl (a `button`, which can't be checked), where Ark puts `aria-expanded`
const useRowCheckbox = () => {
	const { checked } = useTreeViewNodeContext();
	const [checkbox, setCheckbox] = useState<DsTreeRowCheckbox | null>(null);

	return {
		register: setCheckbox,
		ariaChecked: checkbox ? toAriaChecked(checkbox.checked ?? checked) : undefined,
	};
};

const toDataState = (checked: DsTreeCheckedState): 'checked' | 'unchecked' | 'indeterminate' =>
	checked === 'indeterminate' ? 'indeterminate' : checked ? 'checked' : 'unchecked';

const DsTreeBranch = ({ className, style, children, ...rest }: DsTreeBranchProps) => {
	const sortableAttributes = useDsTreeSortableBranchAttributes();
	const rowCheckbox = useRowCheckbox();

	return (
		<DsTreeRowCheckboxContext value={rowCheckbox.register}>
			<TreeView.Branch
				{...rest}
				{...sortableAttributes}
				aria-checked={rowCheckbox.ariaChecked}
				className={classNames(styles.branch, className)}
				style={style}
			>
				{children}
			</TreeView.Branch>
		</DsTreeRowCheckboxContext>
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
	const rowCheckbox = useRowCheckbox();

	return (
		<DsTreeRowCheckboxContext value={rowCheckbox.register}>
			<Item
				{...rest}
				aria-checked={rowCheckbox.ariaChecked}
				className={classNames(styles.item, className)}
				style={style}
				onClick={onClick}
			>
				{children}
			</Item>
		</DsTreeRowCheckboxContext>
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

const checkIcon = <DsIcon icon="check_small" size="tiny" variant="outlined" aria-hidden />;
const indeterminateIcon = (
	<DsIcon icon="check_indeterminate_small" size="tiny" variant="outlined" aria-hidden />
);

const DsTreeNodeCheckbox = ({ className, style, checked, disabled = false }: DsTreeNodeCheckboxProps) => {
	const { collection } = useTreeViewContext();
	const nodeState = useTreeViewNodeContext();
	const registerRowCheckbox = use(DsTreeRowCheckboxContext);
	const name = (collection.at(nodeState.indexPath) as DsTreeNode | undefined)?.name;

	useEffect(() => {
		registerRowCheckbox?.({ checked });

		return () => registerRowCheckbox?.(null);
	}, [registerRowCheckbox, checked]);

	const overrides = {
		...(checked !== undefined && {
			'data-state': toDataState(checked),
			'aria-checked': toAriaChecked(checked),
		}),
		...(disabled && {
			'data-disabled': '',
			'aria-disabled': true,
			// Ark can only disable a whole node, so the click is stopped before its handler, which skips prevented clicks
			onClickCapture: (event: MouseEvent<HTMLSpanElement>) => {
				event.preventDefault();
				event.stopPropagation();
			},
		}),
	};

	return (
		// Ark names the checkbox from nothing, and the icons' ligature text would otherwise be read
		<TreeView.NodeCheckbox
			className={classNames(styles.nodeCheckbox, className)}
			style={style}
			aria-label={name}
			{...overrides}
		>
			<div className={styles.nodeCheckboxBox}>
				{checked === undefined ? (
					<TreeView.NodeCheckboxIndicator
						className={styles.nodeCheckboxIndicator}
						indeterminate={indeterminateIcon}
					>
						{checkIcon}
					</TreeView.NodeCheckboxIndicator>
				) : (
					<span className={styles.nodeCheckboxIndicator}>
						{checked === 'indeterminate' ? indeterminateIcon : checked && checkIcon}
					</span>
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
