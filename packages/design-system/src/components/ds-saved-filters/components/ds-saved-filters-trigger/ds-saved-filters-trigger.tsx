import { useRef, useState } from 'react';
import { DsButtonV3 } from '../../../ds-button-v3';
import { DsEmptyState } from '../../../ds-empty-state';
import { DsIcon } from '../../../ds-icon';
import { DsPopover } from '../../../ds-popover';
import { DsSpinner } from '../../../ds-spinner';
import { DsTag } from '../../../ds-tag';
import styles from './ds-saved-filters-trigger.module.scss';
import type { DsSavedFiltersTriggerProps } from '../../ds-saved-filters.types';
import {
	isThenable,
	PICKER_GUTTER_PX,
	resolveLocale,
	runMaybeAsync,
	type NamedTarget,
} from '../../ds-saved-filters.utils';
import { usePickerOutsideDismiss } from '../../hooks';
import { DeleteConfirm } from '../ds-saved-filters-delete-confirm';
import { NameModal } from '../ds-saved-filters-name-modal';
import { SavedFilterRow } from '../ds-saved-filters-row';

const PICKER_WIDTH_PX = 320;

/**
 * @summary Tag and picker for named filter snapshots, including rename and delete.
 *
 * Internal to the filters component and not exported from the package.
 */
export const DsSavedFiltersTrigger = ({
	items,
	value,
	dirty,
	locale: localeProp,
	ref,
	className,
	style,
	onValueChange,
	onClear,
	onRename,
	onDelete,
}: DsSavedFiltersTriggerProps) => {
	const locale = resolveLocale(localeProp);
	const [open, setOpen] = useState(false);
	const [renameTarget, setRenameTarget] = useState<NamedTarget | null>(null);
	const [deleteTarget, setDeleteTarget] = useState<NamedTarget | null>(null);
	const [clearing, setClearing] = useState(false);
	const [renaming, setRenaming] = useState(false);
	const [deleting, setDeleting] = useState(false);
	const triggerWrapRef = useRef<HTMLDivElement>(null);
	const activeItem = items.find((item) => item.id === value);
	const label = activeItem?.name ?? locale.savedFilters;
	const hasItems = items.length > 0;
	const triggerBusy = clearing || renaming || deleting;

	usePickerOutsideDismiss(open, triggerWrapRef, () => setOpen(false));

	const togglePicker = () => {
		if (triggerBusy) {
			return;
		}

		setOpen((current) => !current);
	};

	const handleApply = (id: string) => {
		if (triggerBusy) {
			return;
		}

		onValueChange(id);
		setOpen(false);
	};

	const handleClear = async () => {
		if (triggerBusy) {
			return;
		}

		await runMaybeAsync(onClear(), setClearing);
	};

	const handleRename = async (name: string) => {
		if (!renameTarget || triggerBusy) {
			return;
		}

		const target = renameTarget;
		const result = onRename(target.id, name);

		if (!isThenable(result)) {
			setRenameTarget(null);

			return;
		}

		setRenaming(true);

		try {
			await result;
			setRenameTarget(null);
		} catch {
			// Overlay stays open; the consumer handles the error.
		} finally {
			setRenaming(false);
		}
	};

	const handleDelete = async () => {
		if (!deleteTarget || triggerBusy) {
			return;
		}

		const target = deleteTarget;
		const result = onDelete(target.id);

		if (!isThenable(result)) {
			setDeleteTarget(null);

			return;
		}

		setDeleting(true);

		try {
			await result;
			setDeleteTarget(null);
		} catch {
			// Overlay stays open; the consumer handles the error.
		} finally {
			setDeleting(false);
		}
	};

	const tag = (
		<DsTag
			ref={ref}
			className={className}
			style={style}
			label={label}
			selected={Boolean(activeItem)}
			warning={dirty}
			slots={{
				icon: clearing ? (
					<DsSpinner size="small" />
				) : (
					<DsIcon icon="bookmark" size="small" filled={Boolean(activeItem)} />
				),
			}}
			locale={{
				deleteAriaLabel: locale.clearAriaLabel,
				expandAriaLabel: locale.expandAriaLabel,
				warningAriaLabel: locale.unsavedChanges,
			}}
			onClick={togglePicker}
			onDelete={activeItem ? handleClear : undefined}
			onExpandClick={hasItems ? togglePicker : undefined}
		/>
	);

	return (
		<>
			<DsPopover.Root
				open={open}
				side="bottom"
				align="start"
				gutter={PICKER_GUTTER_PX}
				onInteractOutside={(event) => event.preventDefault()}
				onOpenChange={setOpen}
			>
				<DsPopover.Anchor>
					<div ref={triggerWrapRef}>{tag}</div>
				</DsPopover.Anchor>
				<DsPopover.Panel width={PICKER_WIDTH_PX}>
					<div className={styles.pickerHeader}>
						<DsPopover.Header className={styles.pickerTitle}>{locale.savedFilters}</DsPopover.Header>
						<DsButtonV3
							className={styles.pickerClose}
							variant="tertiary"
							size="small"
							icon="close"
							aria-label={locale.close}
							onClick={() => setOpen(false)}
						/>
					</div>
					<DsPopover.Content className={styles.pickerContent}>
						{hasItems ? (
							items.map((item) => (
								<SavedFilterRow
									key={item.id}
									item={item}
									selected={item.id === value}
									blocked={triggerBusy}
									locale={locale}
									onRename={setRenameTarget}
									onDelete={setDeleteTarget}
									onApply={handleApply}
								/>
							))
						) : (
							<DsEmptyState variant="noData" message={locale.noSavedFilters} />
						)}
					</DsPopover.Content>
				</DsPopover.Panel>
			</DsPopover.Root>
			{renameTarget ? (
				<NameModal
					title={locale.renameTitle}
					initialName={renameTarget.name}
					entryKey={`rename-${renameTarget.id}`}
					locale={locale}
					loading={renaming}
					onSubmit={handleRename}
					onClose={() => {
						if (!renaming) {
							setRenameTarget(null);
						}
					}}
				/>
			) : null}
			{deleteTarget ? (
				<DeleteConfirm
					target={deleteTarget}
					locale={locale}
					loading={deleting}
					onConfirm={handleDelete}
					onClose={() => {
						if (!deleting) {
							setDeleteTarget(null);
						}
					}}
				/>
			) : null}
		</>
	);
};

DsSavedFiltersTrigger.displayName = 'DsSavedFilters.Trigger';
