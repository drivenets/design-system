import { useState } from 'react';
import { DsButtonV3 } from '../../ds-button-v3';
import { DsDropdownMenu } from '../../ds-dropdown-menu';
import { DsPopover } from '../../ds-popover';
import type { DsSavedFiltersSaveProps } from '../ds-saved-filters.types';
import {
	interpolateName,
	isThenable,
	PICKER_GUTTER_PX,
	resolveLocale,
	runMaybeAsync,
} from '../ds-saved-filters.utils';
import { NameEntryFields } from './ds-saved-filters-name-entry';
import { NameModal } from './ds-saved-filters-name-modal';

const NAME_POPOVER_WIDTH_PX = 320;

/**
 * @summary Save control for the current filter document: update or save as new.
 *
 * Internal to the filters component and not exported from the package.
 */
export const DsSavedFiltersSave = ({
	items,
	value,
	locale: localeProp,
	ref,
	className,
	style,
	onUpdate,
	onSaveAs,
}: DsSavedFiltersSaveProps) => {
	const locale = resolveLocale(localeProp);
	const [nameOpen, setNameOpen] = useState(false);
	const [saveAsOpen, setSaveAsOpen] = useState(false);
	const [updating, setUpdating] = useState(false);
	const [savingAs, setSavingAs] = useState(false);
	const activeItem = items.find((item) => item.id === value);
	const saveBusy = updating || savingAs;

	const handleUpdate = async () => {
		if (saveBusy) {
			return;
		}

		await runMaybeAsync(onUpdate(), setUpdating);
	};

	const handleSaveAs = async (name: string) => {
		if (saveBusy) {
			return;
		}

		const result = onSaveAs(name);

		if (!isThenable(result)) {
			setSaveAsOpen(false);
			setNameOpen(false);

			return;
		}

		setSavingAs(true);

		try {
			await result;
			setSaveAsOpen(false);
			setNameOpen(false);
		} catch {
			// Overlay stays open; the consumer handles the error.
		} finally {
			setSavingAs(false);
		}
	};

	const saveButton = (
		<DsButtonV3
			ref={ref}
			className={className}
			style={style}
			variant="tertiary"
			size="small"
			icon="bookmark_add"
			loading={updating}
		>
			{locale.saveFilter}
		</DsButtonV3>
	);

	if (activeItem) {
		return (
			<>
				<DsDropdownMenu.Root>
					<DsDropdownMenu.Trigger asChild>{saveButton}</DsDropdownMenu.Trigger>
					<DsDropdownMenu.Content>
						<DsDropdownMenu.Item value="update" disabled={saveBusy} onClick={handleUpdate}>
							{interpolateName(locale.updateFilter, activeItem.name)}
						</DsDropdownMenu.Item>
						<DsDropdownMenu.Item value="saveAs" disabled={saveBusy} onClick={() => setSaveAsOpen(true)}>
							{locale.saveAsNew}
						</DsDropdownMenu.Item>
					</DsDropdownMenu.Content>
				</DsDropdownMenu.Root>
				{saveAsOpen ? (
					<NameModal
						title={locale.saveAsTitle}
						initialName=""
						entryKey="saveAs"
						locale={locale}
						loading={savingAs}
						onSubmit={handleSaveAs}
						onClose={() => {
							if (!savingAs) {
								setSaveAsOpen(false);
							}
						}}
					/>
				) : null}
			</>
		);
	}

	return (
		<DsPopover.Root
			open={nameOpen}
			side="bottom"
			align="start"
			gutter={PICKER_GUTTER_PX}
			onOpenChange={(next) => {
				if (savingAs) {
					return;
				}

				setNameOpen(next);
			}}
		>
			<DsPopover.Trigger>{saveButton}</DsPopover.Trigger>
			<DsPopover.Panel width={NAME_POPOVER_WIDTH_PX}>
				<DsPopover.Header>{locale.saveAsTitle}</DsPopover.Header>
				<DsPopover.Content>
					{nameOpen ? (
						<NameEntryFields
							key="save-popover"
							nameLabel={locale.nameLabel}
							confirmLabel={locale.confirm}
							cancelLabel={locale.cancel}
							loading={savingAs}
							onSubmit={handleSaveAs}
							onCancel={() => {
								if (!savingAs) {
									setNameOpen(false);
								}
							}}
						/>
					) : null}
				</DsPopover.Content>
			</DsPopover.Panel>
		</DsPopover.Root>
	);
};

DsSavedFiltersSave.displayName = 'DsSavedFilters.Save';
