import { createContext, useContext } from 'react';

export interface DsWorkspaceLayoutContextValue {
	hasLeftSidePanel: boolean;
	registerLeftSidePanel: () => void;
	unregisterLeftSidePanel: () => void;
}

export const DsWorkspaceLayoutContext = createContext<DsWorkspaceLayoutContextValue | null>(null);

export const useDsWorkspaceLayoutContext = () => {
	const context = useContext(DsWorkspaceLayoutContext);

	if (!context) {
		throw new Error('DsWorkspaceLayout compound components must be used within DsWorkspaceLayout');
	}

	return context;
};
