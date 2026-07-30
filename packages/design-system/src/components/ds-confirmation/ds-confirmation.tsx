import { DsModal } from '../ds-modal';
import type { DsConfirmationProps } from './ds-confirmation.types';

const DsConfirmationRoot = (props: DsConfirmationProps) => (
	<DsModal columns={4} closeOnEscape closeOnInteractOutside {...props} />
);

/**
 * @deprecated DsConfirmation is deprecated. Use DsModal instead.
 * @see {@link ../ds-modal} for the replacement component.
 */
export const DsConfirmation = Object.assign(DsConfirmationRoot, {
	displayName: 'DsConfirmation',
	Header: DsModal.Header,
	Title: DsModal.Title,
	CloseTrigger: DsModal.CloseTrigger,
	Body: DsModal.Body,
	Footer: DsModal.Footer,
	Actions: DsModal.Actions,
});
