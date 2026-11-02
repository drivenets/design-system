import { type KeyboardEvent, type MouseEvent, type ReactNode, useMemo, useState } from 'react';
import { Popover } from '@ark-ui/react/popover';
import { Portal } from '@ark-ui/react/portal';
import { DsButtonV3 } from '../../../ds-button-v3';
import { DsCheckbox } from '../../../ds-checkbox';
import { DsDivider } from '../../../ds-divider';
import { DsIcon } from '../../../ds-icon';
import { DsPinToggle } from '../../../ds-pin-toggle';
import { createDsTreeCollection, DsTree, type DsTreeRootProps } from '../../../ds-tree';
import { useDsTableContext } from '../../context/ds-table-context';
import { defaultDsTableLocale } from '../../ds-table.types';
import styles from './ds-table-column-display.module.scss';
import type {
	ColumnDisplayNode,
	ColumnDisplayToggleTarget,
	DsTableColumnDisplayProps,
} from './ds-table-column-display.types';
import {
	canDropColumnDisplayNode,
	canReorderColumnDisplayNode,
	getAllColumnsTarget,
	getCheckedState,
	getCheckedVisibilityUpdate,
	getColumnDisplayCheckedValue,
	getColumnDisplayNodes,
	getColumnOrderFromNodes,
	getGroupIds,
	getToggleVisibilityUpdate,
} from './ds-table-column-display.utils';

const POPOVER_GUTTER_PX = 4;

const NO_SELECTION: string[] = [];

// React portals bubble events through the React tree, so clicks inside the
// popover would otherwise reach the header cell's click handlers.
const stopPropagation = (event: MouseEvent) => event.stopPropagation();

// The tree turns Enter and Space on a row into a row toggle, which would swallow the pin button's own activation.
const stopKeyDownPropagation = (event: KeyboardEvent) => event.stopPropagation();

type ColumnDisplayCollection = DsTreeRootProps<ColumnDisplayNode>['collection'];

const ColumnDisplayPanel = <TData,>({ table }: DsTableColumnDisplayProps<TData>) => {
	const { locale, columnVisibility, columnOrder, reorderableColumns } = useDsTableContext<TData, unknown>();
	const { allColumns, stickyColumn } = { ...defaultDsTableLocale, ...locale };

	const allTableColumns = table.getAllColumns();
	const stickyLeafIds = table.getState().columnPinning.left;
	const nodes = useMemo(
		() =>
			getColumnDisplayNodes(allTableColumns, {
				columnOrder,
				stickyLeafIds: stickyLeafIds ?? [],
				stickyFirst: Boolean(reorderableColumns),
			}),
		[allTableColumns, columnOrder, stickyLeafIds, reorderableColumns],
	);
	const collection = useMemo(() => createDsTreeCollection(nodes), [nodes]);
	const groupIds = useMemo(() => getGroupIds(nodes), [nodes]);
	const checkedValue = useMemo(
		() => getColumnDisplayCheckedValue(nodes, columnVisibility),
		[nodes, columnVisibility],
	);
	const allColumnsTarget = getAllColumnsTarget(nodes, columnVisibility);

	const toggle = (target: ColumnDisplayToggleTarget) => {
		const update = getToggleVisibilityUpdate(target);
		table.setColumnVisibility((old) => ({ ...old, ...update }));
	};

	const toggleNode = (id: string) => {
		const node = collection.findNode(id);

		if (node && !node.locked) {
			toggle({ ...node, checked: getCheckedState(node.leafIdsToToggle, columnVisibility) });
		}
	};

	const handleCheckedChange = (nextCheckedValue: string[]) => {
		const update = getCheckedVisibilityUpdate(nodes, checkedValue, nextCheckedValue);
		table.setColumnVisibility((old) => ({ ...old, ...update }));
	};

	const handleCollectionChange = (next: ColumnDisplayCollection) => {
		table.setColumnOrder(getColumnOrderFromNodes(next.rootNode.children ?? []));
	};

	// Only top-level rows get the toggle: making any leaf sticky makes its whole
	// top-level group sticky.
	const renderStickyToggle = (node: ColumnDisplayNode) => {
		const column = table.getColumn(node.id);

		if (!column?.getCanPin()) {
			return null;
		}

		return (
			<DsPinToggle
				className={styles.stickyToggle}
				itemLabel={node.name}
				locale={{ pin: stickyColumn }}
				pinned={column.getIsPinned() !== false}
				onClick={stopPropagation}
				onKeyDown={stopKeyDownPropagation}
				onPinnedChange={(sticky) => column.pin(sticky ? 'left' : false)}
			/>
		);
	};

	const renderRowContent = (
		node: ColumnDisplayNode,
		isTopLevel: boolean,
		canReorder: boolean,
		text: ReactNode,
	) => (
		<>
			<DsTree.DragHandle disabled={!canReorder} />
			<DsTree.NodeCheckbox
				className={styles.checkbox}
				{...(node.locked && { checked: getCheckedState(node.leafIds, columnVisibility), disabled: true })}
			/>
			{text}
			{isTopLevel && renderStickyToggle(node)}
			{node.locked && <DsIcon icon="lock" size="tiny" color="secondary" aria-hidden />}
		</>
	);

	const renderNode = (
		node: ColumnDisplayNode,
		indexPath: number[],
		siblings: ColumnDisplayNode[],
		parent: ColumnDisplayNode | null,
	): ReactNode => {
		const isTopLevel = indexPath.length === 1;
		const canReorder = canReorderColumnDisplayNode(node, siblings, parent);

		return (
			<DsTree.NodeProvider key={node.id} node={node} indexPath={indexPath}>
				{node.children ? (
					<DsTree.Branch>
						<DsTree.BranchControl className={styles.row}>
							{renderRowContent(
								node,
								isTopLevel,
								canReorder,
								<DsTree.BranchText className={styles.label}>{node.name}</DsTree.BranchText>,
							)}
						</DsTree.BranchControl>
						<DsTree.BranchContent>
							{node.children.map((child, index, children) =>
								renderNode(child, [...indexPath, index], children, node),
							)}
						</DsTree.BranchContent>
					</DsTree.Branch>
				) : (
					<DsTree.Item className={styles.row}>
						{renderRowContent(
							node,
							isTopLevel,
							canReorder,
							<DsTree.ItemText className={styles.label}>{node.name}</DsTree.ItemText>,
						)}
					</DsTree.Item>
				)}
			</DsTree.NodeProvider>
		);
	};

	const tree = (
		<DsTree.Tree>{nodes.map((node, index) => renderNode(node, [index], nodes, null))}</DsTree.Tree>
	);

	return (
		<>
			{nodes.length > 0 && (
				<DsTree.Root
					className={styles.list}
					collection={collection}
					expandedValue={groupIds}
					expandOnClick={false}
					selectedValue={NO_SELECTION}
					checkedValue={checkedValue}
					onCheckedChange={(details) => handleCheckedChange(details.checkedValue)}
					onSelectionChange={({ selectedValue }) => selectedValue.forEach(toggleNode)}
				>
					{reorderableColumns ? (
						<DsTree.Sortable canDrop={canDropColumnDisplayNode} onCollectionChange={handleCollectionChange}>
							{tree}
						</DsTree.Sortable>
					) : (
						tree
					)}
				</DsTree.Root>
			)}
			<DsDivider className={styles.divider} />
			<DsCheckbox
				size="large"
				className={styles.allColumns}
				label={allColumns}
				checked={allColumnsTarget.checked}
				disabled={allColumnsTarget.locked}
				onCheckedChange={() => toggle(allColumnsTarget)}
			/>
		</>
	);
};

/**
 * Column display control: a tertiary icon-only button whose popup lists every
 * column in a tree with a checkbox, a sticky toggle per top-level row and,
 * with `reorderableColumns`, a drag handle per row, plus an "All columns"
 * toggle.
 */
export const DsTableColumnDisplay = <TData,>({ table }: DsTableColumnDisplayProps<TData>) => {
	const { locale } = useDsTableContext<TData, unknown>();
	const label = { ...defaultDsTableLocale, ...locale }.columns;
	const [open, setOpen] = useState(false);

	return (
		<Popover.Root
			open={open}
			onOpenChange={(details) => setOpen(details.open)}
			positioning={{ placement: 'bottom-end', gutter: POPOVER_GUTTER_PX }}
			lazyMount
			unmountOnExit
		>
			<Popover.Trigger asChild>
				<DsButtonV3
					className={styles.trigger}
					variant="tertiary"
					size="small"
					icon="width_normal"
					selected={open}
					aria-pressed={undefined}
					aria-label={label}
					onClick={stopPropagation}
				/>
			</Popover.Trigger>

			<Portal>
				<Popover.Positioner>
					<Popover.Content className={styles.content} aria-label={label} onClick={stopPropagation}>
						<ColumnDisplayPanel table={table} />
					</Popover.Content>
				</Popover.Positioner>
			</Portal>
		</Popover.Root>
	);
};

DsTableColumnDisplay.displayName = 'DsTableColumnDisplay';
