import type { SelectSize } from '../ds-select';
import type { SplitButtonSize } from './ds-split-button.types';

export const getSelectSize = (size: SplitButtonSize): SelectSize => {
	return size === 'medium' ? 'default' : 'small';
};
