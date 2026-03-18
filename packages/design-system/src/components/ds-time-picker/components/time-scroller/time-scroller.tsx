import classNames from 'classnames';
import { TimeItem } from '../time-item';
import type { TimePeriod, TimeScrollerProps } from './time-scroller.types';
import styles from './time-scroller.module.scss';
import { useScrollToSelected } from './time-scroller.utils';

/**
 * In AM/PM mode, hours start from 12 and then go from to 1 to 11.
 * e.g. 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
 */
const HOURS = [12, ...Array.from({ length: 11 }, (_, i) => i + 1)];

const MINUTES = Array.from({ length: 60 }, (_, i) => i);
const PERIODS: TimePeriod[] = ['AM', 'PM'];

export const TimeScroller = ({ open, slotProps: { hour, minute, period }, className }: TimeScrollerProps) => {
	const hourScroll = useScrollToSelected(hour.value, open);
	const minuteScroll = useScrollToSelected(minute.value, open);

	return (
		<div className={classNames(styles.container, className)}>
			<div ref={hourScroll.columnRef} className={styles.column} role="listbox" aria-label="Hour">
				{HOURS.map((h) => (
					<TimeItem
						key={h}
						ref={h === hour.value ? hourScroll.selectedRef : undefined}
						label={String(h).padStart(2, '0')}
						selected={h === hour.value}
						disabled={hour.isDisabled?.(h)}
						onClick={() => hour.onChange?.(h)}
					/>
				))}
			</div>

			<div ref={minuteScroll.columnRef} className={styles.column} role="listbox" aria-label="Minute">
				{MINUTES.map((m) => (
					<TimeItem
						key={m}
						ref={m === minute.value ? minuteScroll.selectedRef : undefined}
						label={String(m).padStart(2, '0')}
						selected={m === minute.value}
						disabled={minute.isDisabled?.(m)}
						onClick={() => minute.onChange?.(m)}
					/>
				))}
			</div>

			<div className={styles.column} role="listbox" aria-label="AM/PM">
				{PERIODS.map((p) => (
					<TimeItem
						key={p}
						label={p}
						selected={p === period.value}
						disabled={period.isDisabled?.(p)}
						onClick={() => period.onChange?.(p)}
					/>
				))}
			</div>
		</div>
	);
};
