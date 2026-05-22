import { createContext, useContext } from 'react';

export interface DsCatalogLayoutContextValue {
	hasSideMenu: boolean;
	registerSideMenu: () => void;
	unregisterSideMenu: () => void;
}

export const DsCatalogLayoutContext = createContext<DsCatalogLayoutContextValue | null>(null);

export const useDsCatalogLayoutContext = () => {
	const context = useContext(DsCatalogLayoutContext);

	if (!context) {
		throw new Error('DsCatalogLayout compound components must be used within DsCatalogLayout');
	}

	return context;
};
