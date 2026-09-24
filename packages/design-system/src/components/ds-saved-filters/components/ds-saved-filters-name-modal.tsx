import { DsModal } from '../../ds-modal';
import { NAME_MODAL_COLUMNS, type Locale } from '../ds-saved-filters.utils';
import { NameEntryFields } from './ds-saved-filters-name-entry';

export const NameModal = ({
	title,
	initialName,
	entryKey,
	locale,
	loading,
	onSubmit,
	onClose,
}: {
	title: string;
	initialName: string;
	entryKey: string;
	locale: Locale;
	loading: boolean;
	onSubmit: (name: string) => void;
	onClose: () => void;
}) => (
	<DsModal
		open
		columns={NAME_MODAL_COLUMNS}
		onOpenChange={(next) => {
			if (!next && !loading) {
				onClose();
			}
		}}
	>
		<DsModal.Header>
			<DsModal.Title>{title}</DsModal.Title>
			<DsModal.CloseTrigger />
		</DsModal.Header>
		<DsModal.Body>
			<NameEntryFields
				key={entryKey}
				initialName={initialName}
				nameLabel={locale.nameLabel}
				confirmLabel={locale.confirm}
				cancelLabel={locale.cancel}
				loading={loading}
				onSubmit={onSubmit}
				onCancel={onClose}
			/>
		</DsModal.Body>
	</DsModal>
);

NameModal.displayName = 'NameModal';
