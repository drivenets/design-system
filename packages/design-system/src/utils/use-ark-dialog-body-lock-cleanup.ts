import { useLayoutEffect, useRef } from 'react';
import { restoreDocumentBodyModalStyles } from './restore-document-body-modal-styles';

const activeBodyLockInstances = new Set<symbol>();

const scheduleBodyLockRestoreIfIdle = () => {
	queueMicrotask(() => {
		if (activeBodyLockInstances.size > 0) {
			return;
		}

		restoreDocumentBodyModalStyles();
	});
};

/**
 * Ensures Zag dialog body scroll-lock and modal pointer blocking are released when
 * an Ark dialog unmounts while still open (e.g. close + conditional unmount + navigate).
 */
export const useArkDialogBodyLockCleanup = (open: boolean, enabled: boolean) => {
	const instanceIdRef = useRef(Symbol('ark-dialog-body-lock'));

	useLayoutEffect(() => {
		if (!open || !enabled) {
			return;
		}

		const instanceId = instanceIdRef.current;
		activeBodyLockInstances.add(instanceId);

		return () => {
			activeBodyLockInstances.delete(instanceId);
			scheduleBodyLockRestoreIfIdle();
		};
	}, [open, enabled]);
};
