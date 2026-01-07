import type { CSSProperties, ReactNode } from 'react';

export interface DsTabsContentProps {
	value: string;
	className?: string;
	style?: CSSProperties;
	children: ReactNode;
}
