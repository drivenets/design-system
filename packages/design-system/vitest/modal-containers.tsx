import type { ReactNode } from 'react';
import { DsDialog } from '../src/components/ds-dialog';
import { DsModal } from '../src/components/ds-modal';

interface ModalContainerProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	children: ReactNode;
}

/** `describe.each` cases rendering content inside a `DsModal` and a `DsDialog`. */
export const modalContainers = [
	{
		container: 'DsModal',
		Container: ({ open, onOpenChange, children }: ModalContainerProps) => (
			<DsModal open={open} onOpenChange={onOpenChange}>
				<DsModal.Body>{children}</DsModal.Body>
			</DsModal>
		),
	},
	{
		container: 'DsDialog',
		Container: ({ open, onOpenChange, children }: ModalContainerProps) => (
			<DsDialog open={open} onOpenChange={onOpenChange} title="Dialog">
				{children}
			</DsDialog>
		),
	},
];
