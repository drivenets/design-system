import type { KeyboardEvent, MouseEvent } from 'react';
import type { DsMainMenuItem, DsMainMenuProps } from './ds-main-menu.types';

export const isNonActivatable = (state: DsMainMenuItem['state']) =>
	state === 'disabled' || state === 'comingSoon';

export const handleActivatableClick = (
	event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
	id: string,
	href: string | undefined,
	onItemSelect: DsMainMenuProps['onItemSelect'],
	onClose: () => void,
) => {
	if (!href) {
		event.preventDefault();
	}

	onItemSelect?.(id);
	onClose();
};

export const handleActivatableKeyDown = (
	event: KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>,
	id: string,
	href: string | undefined,
	onItemSelect: DsMainMenuProps['onItemSelect'],
	onClose: () => void,
) => {
	if (event.key !== 'Enter' && event.key !== ' ') {
		return;
	}

	event.preventDefault();
	onItemSelect?.(id);
	onClose();

	if (href) {
		(event.currentTarget as HTMLAnchorElement).click();
	}
};
