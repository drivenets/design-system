import classNames from 'classnames';
import styles from './ds-pin-toggle.module.scss';
import type { DsPinToggleProps } from './ds-pin-toggle.types';
import { DsIcon } from '../ds-icon';

const DEFAULT_LOCALE = Object.freeze({ pin: 'Pin' });

/**
 * Bare pushpin for "keep this at the top" affordances.
 */
const DsPinToggle = ({
	ref,
	className,
	style,
	itemLabel,
	pinned = false,
	disabled = false,
	locale,
	onPinnedChange,
	onClick,
	...rest
}: DsPinToggleProps) => (
	<button
		{...rest}
		ref={ref}
		type="button"
		disabled={disabled}
		aria-pressed={pinned}
		aria-label={`${locale?.pin ?? DEFAULT_LOCALE.pin} ${itemLabel}`}
		className={classNames(styles.root, className)}
		style={style}
		onClick={(event) => {
			onClick?.(event);
			onPinnedChange?.(!pinned);
		}}
	>
		<DsIcon icon="keep" size="tiny" variant="rounded" filled aria-hidden />
	</button>
);

DsPinToggle.displayName = 'DsPinToggle';

export default DsPinToggle;
