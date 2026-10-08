import { createContext, useContext } from 'react';

export interface DsModalContextValue {
	fullScreen: boolean;
	setFullScreen: (fullScreen: boolean) => void;
}

export const DsModalContext = createContext<DsModalContextValue | null>(null);

export const useDsModalContext = () => {
	const context = useContext(DsModalContext);

	if (!context) {
		throw new Error('DsModal parts must be rendered inside <DsModal>');
	}

	return context;
};
