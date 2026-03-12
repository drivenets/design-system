import classNames from 'classnames';
import { TimeItem } from '../time-item';
import type { TimePeriod, TimeScrollerProps } from './time-scroller.types';
import styles from './time-scroller.module.scss';
import { useScrollToSelected } from './time-scroller.utils';

const HOURS = [12, ...Array.from({ length: 11 }, (_, i) => i + 1)];
const MINUTES = Array.from({ length: 60 }, (_, i) => i);
const PERIODS: TimePeriod[] = ['AM', 'PM'];

export const TimeScroller = ({
	open,
	hour,
	minute,
	period,
	isHourDisabled,
	isMinuteDisabled,
	isPeriodDisabled,
	onHourChange,
	onMinuteChange,
	onPeriodChange,
	className,
}: TimeScrollerProps) => {
	const hourScroll = useScrollToSelected(hour, open);
	const minuteScroll = useScrollToSelected(minute, open);

	return (
		<div className={classNames(styles.container, className)}>
			<div ref={hourScroll.columnRef} className={styles.column} role="listbox" aria-label="Hour">
				{HOURS.map((h) => (
					<TimeItem
						key={h}
						ref={h === hour ? hourScroll.selectedRef : undefined}
						label={String(h).padStart(2, '0')}
						selected={h === hour}
						disabled={isHourDisabled?.(h)}
						onClick={() => onHourChange?.(h)}
					/>
				))}
			</div>

			<div ref={minuteScroll.columnRef} className={styles.column} role="listbox" aria-label="Minute">
				{MINUTES.map((m) => (
					<TimeItem
						key={m}
						ref={m === minute ? minuteScroll.selectedRef : undefined}
						label={String(m).padStart(2, '0')}
						selected={m === minute}
						disabled={isMinuteDisabled?.(m)}
						onClick={() => onMinuteChange?.(m)}
					/>
				))}
			</div>

			<div className={styles.column} role="listbox" aria-label="AM/PM">
				{PERIODS.map((p) => (
					<TimeItem
						key={p}
						label={p}
						selected={p === period}
						disabled={isPeriodDisabled?.(p)}
						onClick={() => onPeriodChange?.(p)}
					/>
				))}
			</div>
		</div>
	);
};
