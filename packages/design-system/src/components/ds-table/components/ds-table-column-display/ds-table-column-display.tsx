import { type MouseEvent, useId, useState } from 'react';
import { Popover } from '@ark-ui/react/popover';
import { Portal } from '@ark-ui/react/portal';
import { DsButtonV3 } from '../../../ds-button-v3';
import { DsCheckbox } from '../../../ds-checkbox';
import { DsDivider } from '../../../ds-divider';
import { DsIcon } from '../../../ds-icon';
import { DsPinToggle } from '../../../ds-pin-toggle';
import { DsTextInput } from '../../../ds-text-input';
import { useDsTableContext } from '../../context/ds-table-context';
import { defaultDsTableLocale } from '../../ds-table.types';
import styles from './ds-table-column-display.module.scss';
import type {
	ColumnDisplayNode,
	ColumnDisplayToggleTarget,
	DsTableColumnDisplayProps,
} from './ds-table-column-display.types';
import {
	filterColumnDisplayTree,
	getAllColumnsTarget,
	getColumnDisplayTree,
	getToggleVisibilityUpdate,
} from './ds-table-column-display.utils';

const POPOVER_GUTTER_PX = 4;

// React portals bubble events through the React tree, so clicks inside the
// popover would otherwise reach the header cell's click handlers.
const stopPropagation = (event: MouseEvent) => event.stopPropagation();

const ColumnDisplayPanel = <TData,>({ table }: DsTableColumnDisplayProps<TData>) => {
	const { locale, columnVisibility } = useDsTableContext<TData, unknown>();
	const { searchColumns, allColumns, stickyColumn } = { ...defaultDsTableLocale, ...locale };
	const searchId = useId();
	const [query, setQuery] = useState('');

	const tree = getColumnDisplayTree(table.getAllColumns(), columnVisibility);
	const allColumnsTarget = getAllColumnsTarget(tree, columnVisibility);
	const visibleTree = filterColumnDisplayTree(tree, query);

	const toggle = (target: ColumnDisplayToggleTarget) => {
		const update = getToggleVisibilityUpdate(target);
		table.setColumnVisibility((old) => ({ ...old, ...update }));
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
				itemLabel={node.label}
				locale={{ pin: stickyColumn }}
				pinned={column.getIsPinned() !== false}
				onPinnedChange={(sticky) => column.pin(sticky ? 'left' : false)}
			/>
		);
	};

	const renderNode = (node: ColumnDisplayNode, isTopLevel: boolean) => {
		const stickyToggle = isTopLevel ? renderStickyToggle(node) : null;
		const lock = node.locked ? <DsIcon icon="lock" size="tiny" color="secondary" aria-hidden /> : null;

		return (
			<li key={node.id} className={styles.item}>
				<DsCheckbox
					size="large"
					className={styles.row}
					label={node.label}
					checked={node.checked}
					disabled={node.locked}
					actions={
						stickyToggle || lock ? (
							<>
								{stickyToggle}
								{lock}
							</>
						) : undefined
					}
					onCheckedChange={() => toggle(node)}
				/>
				{node.children.length > 0 && (
					<ul className={styles.children}>{node.children.map((child) => renderNode(child, false))}</ul>
				)}
			</li>
		);
	};

	return (
		<>
			<div className={styles.header}>
				<label htmlFor={searchId} className={styles.visuallyHidden}>
					{searchColumns}
				</label>
				<DsTextInput
					id={searchId}
					placeholder={searchColumns}
					value={query}
					onValueChange={setQuery}
					slots={{ startAdornment: <DsIcon icon="search" size="tiny" aria-hidden /> }}
				/>
			</div>
			{visibleTree.length > 0 && (
				<ul className={styles.list}>{visibleTree.map((node) => renderNode(node, true))}</ul>
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
 * column with a checkbox and a sticky toggle per top-level row, plus a search
 * field and an "All columns" toggle.
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
