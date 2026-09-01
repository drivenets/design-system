import type { DsMainMenuItem, DsMainMenuProps } from '../../ds-main-menu.types';

export interface TileLinkProps {
	item: DsMainMenuItem;
	isSelected: boolean;
	onItemSelect?: DsMainMenuProps['onItemSelect'];
	onClose: () => void;
}
