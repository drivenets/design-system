import { DsButtonV3 } from '../../ds-button-v3';
import { DsModal } from '../../ds-modal';
import { DsTypography } from '../../ds-typography';
import {
	interpolateName,
	NAME_MODAL_COLUMNS,
	type Locale,
	type NamedTarget,
} from '../ds-saved-filters.utils';

export const DeleteConfirm = ({
	target,
	locale,
	loading,
	onConfirm,
	onClose,
}: {
	target: NamedTarget;
	locale: Locale;
	loading: boolean;
	onConfirm: () => void;
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
			<DsModal.Title>{locale.deleteTitle}</DsModal.Title>
			<DsModal.CloseTrigger />
		</DsModal.Header>
		<DsModal.Body>
			<DsTypography variant="body-md-reg">{interpolateName(locale.deleteMessage, target.name)}</DsTypography>
		</DsModal.Body>
		<DsModal.Footer>
			<DsModal.Actions>
				<DsButtonV3 variant="secondary" size="small" disabled={loading} onClick={onClose}>
					{locale.cancel}
				</DsButtonV3>
				<DsButtonV3 color="error" size="small" loading={loading} onClick={onConfirm}>
					{locale.deleteConfirm}
				</DsButtonV3>
			</DsModal.Actions>
		</DsModal.Footer>
	</DsModal>
);

DeleteConfirm.displayName = 'DeleteConfirm';
