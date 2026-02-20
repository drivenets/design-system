import { TreeView } from '@ark-ui/react/tree-view';
import classNames from 'classnames';

import { DsIcon } from '../ds-icon';
import styles from './ds-tree.module.scss';
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
	DsTreeNodeCheckboxProps,
	DsTreeRootProps,
	DsTreeTreeProps,
} from './ds-tree.types';

const DsTreeRoot = ({
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
	typeahead = true,
	lazyMount = true,
	unmountOnExit,
}: DsTreeRootProps) => (
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

const DsTreeBranch = ({ className, style, children }: DsTreeBranchProps) => (
	<TreeView.Branch className={classNames(styles.branch, className)} style={style}>
		{children}
	</TreeView.Branch>
);

const DsTreeBranchControl = ({ className, style, children }: DsTreeBranchControlProps) => (
	<TreeView.BranchControl className={classNames(styles.branchControl, className)} style={style}>
		{children}
	</TreeView.BranchControl>
);

const DsTreeBranchIndicator = ({ className, style, children }: DsTreeBranchIndicatorProps) => (
	<TreeView.BranchIndicator className={classNames(styles.branchIndicator, className)} style={style}>
		{children ?? <DsIcon icon="keyboard_arrow_right" size="tiny" />}
	</TreeView.BranchIndicator>
);

const DsTreeBranchText = ({ className, style, children }: DsTreeBranchTextProps) => (
	<TreeView.BranchText className={classNames(styles.branchText, className)} style={style}>
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

const DsTreeItem = ({ className, style, children, onClick }: DsTreeItemProps) => (
	<TreeView.Item className={classNames(styles.item, className)} style={style} onClick={onClick}>
		{children}
	</TreeView.Item>
);

const DsTreeItemText = ({ className, style, children }: DsTreeItemTextProps) => (
	<TreeView.ItemText className={classNames(styles.itemText, className)} style={style}>
		{children}
	</TreeView.ItemText>
);

const DsTreeItemIndicator = ({ className, style }: DsTreeItemIndicatorProps) => (
	<span className={classNames(styles.itemIndicator, className)} style={style} aria-hidden="true">
		<span className={styles.itemDot} />
	</span>
);

const DsTreeNodeCheckbox = ({ className, style }: DsTreeNodeCheckboxProps) => (
	<TreeView.NodeCheckbox className={classNames(styles.nodeCheckbox, className)} style={style}>
		<div className={styles.nodeCheckboxBox}>
			<TreeView.NodeCheckboxIndicator
				className={styles.nodeCheckboxIndicator}
				indeterminate={
					<DsIcon
						icon="check_indeterminate_small"
						size="tiny"
						variant="outlined"
						style={{ color: 'var(--color-secondary-white)' }}
					/>
				}
			>
				<DsIcon
					icon="check_small"
					size="tiny"
					variant="outlined"
					style={{ color: 'var(--color-secondary-white)' }}
				/>
			</TreeView.NodeCheckboxIndicator>
		</div>
	</TreeView.NodeCheckbox>
);

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
};
