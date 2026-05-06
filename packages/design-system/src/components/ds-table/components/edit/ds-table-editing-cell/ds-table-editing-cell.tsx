import { useEffect, useRef, type FormEvent } from 'react';
import { flexRender } from '@tanstack/react-table';
import { DsButton } from '../../../../ds-button';
import { DsStack } from '../../../../ds-stack';
import { useDsTableContext } from '../../../context/ds-table-context';
import styles from './ds-table-editing-cell.module.scss';
import type { DsTableEditingCellProps } from './ds-table-editing-cell.types';

export const DsTableEditingCell = <TData, TValue>({ cell }: DsTableEditingCellProps<TData, TValue>) => {
	const { commit, cancel } = useDsTableContext<TData, TValue>();
	const columnDef = cell.column.columnDef;
	const editAnchorRef = useRef<HTMLDivElement>(null);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.stopPropagation();
		commit();
	};

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key !== 'Escape') {
				return;
			}
			const anchor = editAnchorRef.current;
			if (!anchor?.contains(document.activeElement)) {
				return;
			}
			event.preventDefault();
			event.stopPropagation();
			cancel();
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [cancel]);

	return (
		<div ref={editAnchorRef} className={styles.editAnchor}>
			<form className={styles.overlay} onSubmit={handleSubmit}>
				<DsStack direction="row" gap="var(--3xs)" alignItems="flex-start" width="100%" className={styles.row}>
					<DsStack flex="1 1 auto" className={styles.slot}>
						{columnDef.editCell ? flexRender(columnDef.editCell, cell.getContext()) : null}
					</DsStack>
					<DsStack direction="row" gap="var(--3xs)" className={styles.actions}>
						<DsButton
							type="button"
							variant="tertiary"
							size="small"
							icon="close"
							aria-label="Cancel edit"
							onClick={(event) => {
								event.stopPropagation();
								cancel();
							}}
							style={{ color: 'var(--icon-error)' }}
						/>
						<DsButton
							type="submit"
							variant="tertiary"
							size="small"
							icon="check"
							aria-label="Confirm edit"
							onClick={(event) => {
								event.stopPropagation();
							}}
							style={{ color: 'var(--icon-success)' }}
						/>
					</DsStack>
				</DsStack>
			</form>
		</div>
	);
};
