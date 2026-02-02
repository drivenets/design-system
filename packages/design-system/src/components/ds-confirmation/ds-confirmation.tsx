import DsModal from '../ds-modal/ds-modal';
import type { DsConfirmationProps } from './ds-confirmation.types';

/**
 * @deprecated DsConfirmation is deprecated. Use DsModal instead.
 * @see {@link ../ds-modal} for the replacement component.
 */
export const DsConfirmation = (props: DsConfirmationProps) => (
	<DsModal columns={4} closeOnEscape closeOnInteractOutside {...props} />
);

DsConfirmation.Header = DsModal.Header;
DsConfirmation.Title = DsModal.Title;
DsConfirmation.CloseTrigger = DsModal.CloseTrigger;
DsConfirmation.Body = DsModal.Body;
DsConfirmation.Footer = DsModal.Footer;
DsConfirmation.Actions = DsModal.Actions;
