import { createContext, type ReactNode } from 'react';

interface TooltipTrigger {
	triggerId?: string;
	contentId?: string;
	content: ReactNode;
}

export const TooltipTriggerContext = createContext<TooltipTrigger | null>(null);
