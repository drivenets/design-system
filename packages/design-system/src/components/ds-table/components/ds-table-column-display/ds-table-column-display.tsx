import { type MouseEvent, useId, useState } from 'react';
import { Popover } from '@ark-ui/react/popover';
import { Portal } from '@ark-ui/react/portal';
import { DsButtonV3 } from '../../../ds-button-v3';
import { DsCheckbox } from '../../../ds-checkbox';
import { DsDivider } from '../../../ds-divider';
import { DsIcon } from '../../../ds-icon';
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
	const { searchColumns, allColumns } = { ...defaultDsTableLocale, ...locale };
	const searchId = useId();
	const [query, setQuery] = useState('');

	const tree = getColumnDisplayTree(table.getAllColumns(), columnVisibility);
	const allColumnsTarget = getAllColumnsTarget(tree, columnVisibility);
	const visibleTree = filterColumnDisplayTree(tree, query);

	const toggle = (target: ColumnDisplayToggleTarget) => {
		const update = getToggleVisibilityUpdate(target);
		table.setColumnVisibility((old) => ({ ...old, ...update }));
	};

	const renderNode = (node: ColumnDisplayNode) => (
		<li key={node.id} className={styles.item}>
			<DsCheckbox
				label={node.label}
				checked={node.checked}
				disabled={node.locked}
				actions={node.locked ? <DsIcon icon="lock" size="tiny" color="secondary" aria-hidden /> : undefined}
				onCheckedChange={() => toggle(node)}
			/>
			{node.children.length > 0 && <ul className={styles.children}>{node.children.map(renderNode)}</ul>}
		</li>
	);

	return (
		<>
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
			{visibleTree.length > 0 && <ul className={styles.list}>{visibleTree.map(renderNode)}</ul>}
			<DsDivider className={styles.divider} />
			<DsCheckbox
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
 * column with a checkbox, plus a search field and an "All columns" toggle.
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
					variant="tertiary"
					size="tiny"
					icon="view_column"
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
