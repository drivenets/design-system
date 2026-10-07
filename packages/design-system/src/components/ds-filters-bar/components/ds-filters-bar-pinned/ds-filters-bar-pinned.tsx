import classNames from 'classnames';
import { useId } from 'react';
import { DsIcon } from '../../../ds-icon';
import { DsToggleFilterData } from '../../../ds-toggle-filter-data';
import { DsTypography } from '../../../ds-typography';
import { useDsFiltersBarContext } from '../../ds-filters-bar.context';
import styles from './ds-filters-bar-pinned.module.scss';
import type { DsFilterPin, DsFiltersBarPinnedSlotProps } from '../../ds-filters-bar.types';
import { isSamePin, toPinnedGroups, type DsFiltersBarPinnedGroup } from '../../ds-filters-bar.utils';

interface PinnedToggleProps {
	pin: DsFilterPin;
	label: string;
}

/**
 * Disabled at a zero count unless switched on, so an active toggle can always be turned off
 */
const PinnedToggle = ({ pin, label }: PinnedToggleProps) => {
	const { activeToggles, getPinCount, setActiveToggles } = useDsFiltersBarContext();
	const count = getPinCount?.(pin);
	const active = activeToggles.some((toggle) => isSamePin(toggle, pin));

	const handleActiveChange = (next: boolean) =>
		setActiveToggles(
			next ? [...activeToggles, pin] : activeToggles.filter((toggle) => !isSamePin(toggle, pin)),
		);

	return (
		<DsToggleFilterData
			label={label}
			value={count}
			active={active}
			disabled={count === 0 && !active}
			onActiveChange={handleActiveChange}
		/>
	);
};

const PinnedGroup = ({ label, toggles }: DsFiltersBarPinnedGroup) => {
	const labelId = useId();

	return (
		<div role="group" aria-labelledby={labelId} className={styles.pinnedGroup}>
			<span id={labelId} className={styles.pinnedGroupLabel}>
				<DsTypography variant="body-xs-md" color="secondary">
					{label}
				</DsTypography>
			</span>
			<div className={styles.pinnedToggles}>
				{toggles.map(({ pin, label: toggleLabel }) => (
					<PinnedToggle key={pin.value} pin={pin} label={toggleLabel} />
				))}
			</div>
		</div>
	);
};

/**
 * Quick-toggle row, shown in both collapsed and expanded states, built from the pins and the
 * fields. Toggles narrow the results the document already produced; they never widen them.
 */
export const Pinned = ({ ref, className, style }: DsFiltersBarPinnedSlotProps) => {
	const { fields, pins, locale } = useDsFiltersBarContext();
	const groups = toPinnedGroups(fields, pins);

	if (!groups.length) {
		return null;
	}

	return (
		<div ref={ref} className={classNames(styles.pinned, className)} style={style}>
			<span className={styles.pinnedLabel}>
				<DsIcon icon="keep" size="tiny" filled aria-hidden />
				<DsTypography variant="body-xs-md">{locale.pinned.label}</DsTypography>
			</span>
			{groups.map((group) => (
				<PinnedGroup key={group.field} {...group} />
			))}
		</div>
	);
};
