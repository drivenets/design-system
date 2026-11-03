import { type KeyboardEvent, type MouseEvent, type ReactNode, useMemo, useRef, useState } from 'react';
import { Highlight } from '@ark-ui/react/highlight';
import { Popover } from '@ark-ui/react/popover';
import { Portal } from '@ark-ui/react/portal';
import { DsButtonV3 } from '../../../ds-button-v3';
import { DsCheckbox } from '../../../ds-checkbox';
import { DsDivider } from '../../../ds-divider';
import { DsIcon } from '../../../ds-icon';
import { DsPinToggle } from '../../../ds-pin-toggle';
import { DsTextInput } from '../../../ds-text-input';
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
	searchColumnDisplayNodes,
} from './ds-table-column-display.utils';

const POPOVER_GUTTER_PX = 4;

const NO_SELECTION: string[] = [];

// React portals bubble events through the React tree, so clicks inside the
// popover would otherwise reach the header cell's click handlers.
const stopPropagation = (event: MouseEvent) => event.stopPropagation();

// The tree turns Enter and Space on a row into a row toggle, which would swallow the pin button's own activation.
const stopKeyDownPropagation = (event: KeyboardEvent) => event.stopPropagation();

// ArrowLeft moves focus to the parent row, which would land on a read-only Reference row.
const preventFocusOnParent = (event: KeyboardEvent) => {
	if (event.key === 'ArrowLeft') {
		event.preventDefault();
	}
};

type ColumnDisplayCollection = DsTreeRootProps<ColumnDisplayNode>['collection'];

const ColumnDisplayPanel = <TData,>({ table }: DsTableColumnDisplayProps<TData>) => {
	const { locale, columnVisibility, columnOrder, reorderableColumns } = useDsTableContext<TData, unknown>();
	const { searchColumns, clearSearch, noMatchingColumns, allColumns, stickyColumn } = {
		...defaultDsTableLocale,
		...locale,
	};
	const [query, setQuery] = useState('');
	const [focusedValue, setFocusedValue] = useState<string | null>(null);
	const searchInputRef = useRef<HTMLInputElement>(null);

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
	const searchedNodes = useMemo(() => searchColumnDisplayNodes(nodes, query), [nodes, query]);
	const collection = useMemo(() => createDsTreeCollection(searchedNodes), [searchedNodes]);
	const hasRows = searchedNodes.some((node) => node.searchResult !== 'hidden');
	const highlightQuery = query.trim();
	// A row focused before the search may now be a Reference row or hidden; `null` falls back to the first match
	const tabStopValue = focusedValue && collection.findNode(focusedValue)?.disabled ? null : focusedValue;
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

	const handleClearSearch = () => {
		setQuery('');
		searchInputRef.current?.focus();
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

	const renderLabel = (node: ColumnDisplayNode) =>
		node.searchResult === 'match' ? (
			// One span, so the row text's flex gap doesn't split the label around each match
			<span className={styles.highlightedLabel}>
				<Highlight className={styles.match} text={node.name} query={highlightQuery} ignoreCase matchAll />
			</span>
		) : (
			node.name
		);

	const renderRowContent = (
		node: ColumnDisplayNode,
		isTopLevel: boolean,
		canReorder: boolean,
		text: ReactNode,
	) => {
		const isReference = node.searchResult === 'reference';

		return (
			<>
				<DsTree.DragHandle disabled={!canReorder} />
				<DsTree.NodeCheckbox
					className={styles.checkbox}
					disabled={isReference || node.locked}
					{...(node.locked && { checked: getCheckedState(node.leafIds, columnVisibility) })}
				/>
				{text}
				{isTopLevel && !isReference && renderStickyToggle(node)}
				{node.locked && <DsIcon icon="lock" size="tiny" color="secondary" aria-hidden />}
			</>
		);
	};

	const renderNode = (
		node: ColumnDisplayNode,
		indexPath: number[],
		siblings: ColumnDisplayNode[],
		parent: ColumnDisplayNode | null,
	): ReactNode => {
		if (node.searchResult === 'hidden') {
			return null;
		}

		const isTopLevel = indexPath.length === 1;
		const shownSiblings = siblings.filter((sibling) => sibling.searchResult !== 'hidden');
		const canReorder = canReorderColumnDisplayNode(node, shownSiblings, parent);
		const onKeyDown = parent?.searchResult === 'reference' ? preventFocusOnParent : undefined;

		return (
			<DsTree.NodeProvider key={node.id} node={node} indexPath={indexPath}>
				{node.children ? (
					<DsTree.Branch>
						<DsTree.BranchControl className={styles.row} onKeyDown={onKeyDown}>
							{renderRowContent(
								node,
								isTopLevel,
								canReorder,
								<DsTree.BranchText className={styles.label}>{renderLabel(node)}</DsTree.BranchText>,
							)}
						</DsTree.BranchControl>
						<DsTree.BranchContent>
							{node.children.map((child, index, children) =>
								renderNode(child, [...indexPath, index], children, node),
							)}
						</DsTree.BranchContent>
					</DsTree.Branch>
				) : (
					<DsTree.Item className={styles.row} onKeyDown={onKeyDown}>
						{renderRowContent(
							node,
							isTopLevel,
							canReorder,
							<DsTree.ItemText className={styles.label}>{renderLabel(node)}</DsTree.ItemText>,
						)}
					</DsTree.Item>
				)}
			</DsTree.NodeProvider>
		);
	};

	const tree = (
		<DsTree.Tree>
			{searchedNodes.map((node, index) => renderNode(node, [index], searchedNodes, null))}
		</DsTree.Tree>
	);

	return (
		<>
			<div className={styles.search}>
				<DsTextInput
					ref={searchInputRef}
					value={query}
					placeholder={searchColumns}
					slots={{
						startAdornment: <DsIcon icon="search" size="tiny" aria-hidden />,
						endAdornment: query ? (
							<DsButtonV3
								variant="tertiary"
								size="tiny"
								icon="close"
								aria-label={clearSearch}
								onClick={handleClearSearch}
							/>
						) : undefined,
					}}
					slotProps={{ input: { 'aria-label': searchColumns } }}
					onValueChange={setQuery}
				/>
			</div>
			{hasRows && (
				<DsTree.Root
					className={styles.list}
					collection={collection}
					expandedValue={groupIds}
					expandOnClick={false}
					focusedValue={tabStopValue}
					// Typeahead would focus Reference and hidden rows
					typeahead={!highlightQuery}
					selectedValue={NO_SELECTION}
					checkedValue={checkedValue}
					onCheckedChange={(details) => handleCheckedChange(details.checkedValue)}
					onSelectionChange={({ selectedValue }) => selectedValue.forEach(toggleNode)}
					onFocusChange={(details) => setFocusedValue(details.focusedValue)}
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
			<p className={styles.noMatches} role="status">
				{!hasRows && highlightQuery ? noMatchingColumns : null}
			</p>
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
 * with `reorderableColumns`, a drag handle per row, plus a search field and an
 * "All columns" toggle.
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
