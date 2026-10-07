import classNames from 'classnames';
import { mergeRefs } from '../../../../utils/merge-refs';
import { DsButtonV3 } from '../../../ds-button-v3';
import { DsIcon } from '../../../ds-icon';
import { useDsFiltersBarContext } from '../../ds-filters-bar.context';
import styles from './ds-filters-bar-disclosure.module.scss';
import type { DsFiltersBarDisclosureSlotProps } from '../../ds-filters-bar.types';

/**
 * Renders in both states, so focus stays on it across the toggle.
 */
export const Disclosure = ({ ref, className, style }: DsFiltersBarDisclosureSlotProps) => {
	const { expanded, toolbarId, locale, setExpanded, disclosureRef } = useDsFiltersBarContext();

	return (
		<DsButtonV3
			ref={mergeRefs(disclosureRef, ref)}
			variant="secondary"
			size="small"
			icon="special-adv-filters"
			// A disclosure, not a toggle button: `aria-expanded` carries the state.
			aria-pressed={undefined}
			aria-expanded={expanded}
			aria-controls={toolbarId}
			aria-label={expanded ? locale.collapse : locale.expand}
			data-scope="filters-bar"
			data-part="disclosure"
			className={classNames(styles.disclosure, className)}
			style={style}
			onClick={() => setExpanded(!expanded)}
		>
			<DsIcon icon="keyboard_arrow_down" size="tiny" className={styles.disclosureChevron} aria-hidden />
		</DsButtonV3>
	);
};
