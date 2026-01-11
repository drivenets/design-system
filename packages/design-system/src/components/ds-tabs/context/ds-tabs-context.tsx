import { createContext, useContext } from 'react';
import type { DsTabsContextType } from './ds-tabs-context.types';

const TabsContext = createContext<DsTabsContextType>({
	orientation: 'horizontal',
	size: 'medium',
});

export const useTabsContext = (): DsTabsContextType => useContext(TabsContext);

export default TabsContext;
