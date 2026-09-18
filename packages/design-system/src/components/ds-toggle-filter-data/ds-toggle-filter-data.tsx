import type { MouseEvent } from 'react';
import classNames from 'classnames';
import styles from './ds-toggle-filter-data.module.scss';
import type { DsToggleFilterDataProps } from './ds-toggle-filter-data.types';
import { DsTypography } from '../ds-typography';

/**
 * @summary Data pill that toggles on and off, pairing a label with its value, for filter rows
 * above a table or list.
 *
 * Internal to the filters component and not exported from the package.
 *
 * A real `<button type="button">`, so `aria-pressed`, Enter/Space activation, the disabled state
 * and the focus ring are all native. Selection is controlled: the pill reports the next `active`
 * value through `onActiveChange` and never toggles itself.
 */
const DsToggleFilterData = ({
	ref,
	label,
	value,
	active,
	disabled = false,
	className,
	style,
	onActiveChange,
	onClick,
}: DsToggleFilterDataProps) => {
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		onClick?.(event);
		onActiveChange?.(!active);
	};

	return (
		<button
			ref={ref}
			type="button"
			className={classNames(styles.pill, { [styles.active]: active }, className)}
			style={style}
			disabled={disabled}
			aria-pressed={active}
			onClick={handleClick}
		>
			<DsTypography variant="body-xs-md" className={styles.label}>
				{label}
			</DsTypography>
			<DsTypography variant="body-xs-reg" className={styles.value}>
				{value}
			</DsTypography>
		</button>
	);
};

DsToggleFilterData.displayName = 'DsToggleFilterData';

export default DsToggleFilterData;
