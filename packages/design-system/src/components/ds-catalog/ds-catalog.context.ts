import { createContext, useContext } from 'react';

export interface DsCatalogContextValue {
	hasSideMenu: boolean;
	registerSideMenu: () => void;
	unregisterSideMenu: () => void;
}

export const DsCatalogContext = createContext<DsCatalogContextValue | null>(null);

export const useDsCatalogContext = () => {
	const context = useContext(DsCatalogContext);

	if (!context) {
		throw new Error('DsCatalog compound components must be used within DsCatalog');
	}

	return context;
};
