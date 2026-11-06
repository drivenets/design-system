import { createContext, useContext, type Dispatch, type SetStateAction } from 'react';
import type { HoverIntent } from './ds-popover.hover-intent';

export interface DsPopoverContextValue {
	matchAnchorWidth: boolean;
	registerAnchor: (el: HTMLElement | null) => void;
	registerContentId: (id: string | undefined) => void;
	/** An id an outer `asChild` wrapper put on the trigger element; zag looks the trigger up by it. */
	registerTriggerId: (id: string | undefined) => void;
	hoverIntent: HoverIntent | null;
	/** Id of the rendered `DsPopover.Header` title, which names the panel. */
	titleId: string | undefined;
	/** Counts mounted `DsPopover.Header` titles. */
	registerTitle: Dispatch<SetStateAction<number>>;
}

export const DsPopoverContext = createContext<DsPopoverContextValue>({
	matchAnchorWidth: false,
	registerAnchor: () => undefined,
	registerContentId: () => undefined,
	registerTriggerId: () => undefined,
	hoverIntent: null,
	titleId: undefined,
	registerTitle: () => undefined,
});

export const useDsPopoverContext = () => useContext(DsPopoverContext);
