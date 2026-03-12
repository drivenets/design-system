import type { RefObject } from 'react';

export interface TimeItemProps {
	ref?: RefObject<HTMLButtonElement | null>;
	className?: string;
	label: string;
	selected: boolean;
	disabled?: boolean;
	onClick: () => void;
}
