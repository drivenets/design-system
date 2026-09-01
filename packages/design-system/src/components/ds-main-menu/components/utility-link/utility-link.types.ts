import type { DsMainMenuProps, DsMainMenuUtilityLink } from '../../ds-main-menu.types';

export interface UtilityLinkProps {
	link: DsMainMenuUtilityLink;
	onItemSelect?: DsMainMenuProps['onItemSelect'];
	onClose: () => void;
}
