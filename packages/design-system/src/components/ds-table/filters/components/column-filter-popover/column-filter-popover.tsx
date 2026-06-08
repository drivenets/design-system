import { type MouseEvent, useState } from 'react';
import { Popover } from '@ark-ui/react/popover';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import styles from './column-filter-popover.module.scss';
import type { DsTableColumnFilterPopoverProps } from './column-filter-popover.types';
import { DsIcon } from '../../../../ds-icon';
import { DsButtonV3 } from '../../../../ds-button-v3';

// React portals bubble events through the React tree, so clicks inside the
// popover would otherwise reach the parent `<TableHead onClick={sortHandler}>`
// and toggle column sorting when applying or clearing the filter.
const stopPropagation = (event: MouseEvent) => event.stopPropagation();

/**
 * Per-column filter popover anchored to a header cell: funnel trigger,
 * adapter UI as the body, Clear / Save footer wired to `useTableFilters`.
 */
export const DsTableColumnFilterPopover = ({
	children,
	hasActiveFilter,
	onApply,
	onClear,
	onCancel,
	locale,
	className,
}: DsTableColumnFilterPopoverProps) => {
	const { triggerAriaLabel = 'Filter column', clearLabel = 'Clear', saveLabel = 'Save' } = locale ?? {};

	const [open, setOpen] = useState(false);

	const handleOpenChange = (details: { open: boolean }) => {
		if (open && !details.open) {
			onCancel();
		}
		setOpen(details.open);
	};

	const handleSave = () => {
		onApply();
		setOpen(false);
	};

	const handleClear = () => {
		onClear();
		setOpen(false);
	};

	return (
		<Popover.Root
			open={open}
			onOpenChange={handleOpenChange}
			positioning={{ placement: 'bottom-end', gutter: 4 }}
		>
			<Popover.Trigger asChild>
				<DsButtonV3
					variant="tertiary"
					size="tiny"
					className={classNames(
						styles.trigger,
						hasActiveFilter && styles.triggerActive,
						open && styles.triggerOpen,
					)}
					aria-label={triggerAriaLabel}
					data-active={hasActiveFilter ? 'true' : undefined}
					onClick={(event) => event.stopPropagation()}
				>
					<DsIcon icon="filter_alt" variant="outlined" filled={hasActiveFilter} size="tiny" />
				</DsButtonV3>
			</Popover.Trigger>

			<Portal>
				<Popover.Positioner>
					<Popover.Content className={classNames(styles.content, className)} onClick={stopPropagation}>
						<div className={styles.body}>{children}</div>
						<div className={styles.footer}>
							<DsButtonV3 variant="secondary" size="small" onClick={handleClear}>
								{clearLabel}
							</DsButtonV3>
							<DsButtonV3 variant="primary" size="small" onClick={handleSave}>
								{saveLabel}
							</DsButtonV3>
						</div>
					</Popover.Content>
				</Popover.Positioner>
			</Portal>
		</Popover.Root>
	);
};
