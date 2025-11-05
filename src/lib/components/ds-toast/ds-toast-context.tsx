import { createContext, FC, ReactNode, useContext } from 'react';
import { createToaster, CreateToasterReturn } from '@ark-ui/react';
import { DsToastGroup } from './ds-toast';
import { DsToastProps } from './ds-toast.types';

export interface DsToastProviderProps {
	/**
	 * The maximum number of toasts to display (recommended 3 - 5)
	 * @default 3
	 */
	max?: number;
	/**
	 * The children of the toast provider
	 */
	children: ReactNode;
}

export type DsToastContextType = {
	/**
	 * Create a new toast
	 */
	createToast: (toast: DsToastProps) => string;
	/**
	 * Dismiss a toast by id
	 */
	dismissToast: (id: string) => void;
	/**
	 * Dismiss all toasts
	 */
	dismissAllToasts: () => void;
	/**
	 * Get all visible toasts
	 */
	getToasts: () => DsToastProps[];
	/**
	 * Get the total number of toasts
	 */
	getToastsCount: () => number;
};

const DsToastContext = createContext<DsToastContextType | null>(null);

const createToastFactory = (toaster: CreateToasterReturn) => (toast: DsToastProps) =>
	toaster.create({
		...toast,
		type: toast.variant,
		duration: toast.persistent ? Infinity : toast.duration || 6000,
	});

export const DsToastProvider: FC<DsToastProviderProps> = ({ children, max = 3 }) => {
	const toaster = createToaster({
		placement: 'top',
		gap: 24,
		max,
	});

	const contextValue: DsToastContextType = {
		createToast: createToastFactory(toaster),
		dismissToast: toaster.dismiss,
		dismissAllToasts: () => toaster.dismiss(),
		getToasts: toaster.getVisibleToasts,
		getToastsCount: toaster.getCount,
	};

	return (
		<DsToastContext.Provider value={contextValue}>
			{children}
			<DsToastGroup toaster={toaster} />
		</DsToastContext.Provider>
	);
};

export const useToaster = (): DsToastContextType => {
	const context = useContext(DsToastContext);
	if (!context) {
		throw new Error('useToast must be used within a ToastProvider');
	}
	return context;
};
