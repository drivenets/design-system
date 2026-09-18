import { createContext, useContext } from 'react';
import type { HoverIntent } from './ds-popover.hover-intent';

export interface DsPopoverContextValue {
	matchAnchorWidth: boolean;
	registerAnchor: (el: HTMLElement | null) => void;
	registerContentId: (id: string | undefined) => void;
	hoverIntent: HoverIntent | null;
}

export const DsPopoverContext = createContext<DsPopoverContextValue>({
	matchAnchorWidth: false,
	registerAnchor: () => undefined,
	registerContentId: () => undefined,
	hoverIntent: null,
});

export const useDsPopoverContext = () => useContext(DsPopoverContext);
