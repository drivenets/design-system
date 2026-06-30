import classNames from 'classnames';

import { DsIcon, type IconColor, type IconName } from '../ds-icon';
import { DsTooltip } from '../ds-tooltip';

import styles from './ds-progress-task-bar.module.scss';
import {
	type DsProgressTaskBarLocale,
	type DsProgressTaskBarProps,
	type TaskBarStatus,
	taskBarStatuses,
} from './ds-progress-task-bar.types';
import { formatCount } from './utils';

const statusIcon: Record<TaskBarStatus, IconName> = Object.freeze({
	completed: 'check_circle',
	running: 'play_circle',
	failed: 'cancel',
});

const statusIconColor: Record<TaskBarStatus, IconColor> = Object.freeze({
	completed: 'success',
	running: 'action',
	failed: 'error',
});

const statusCountClass: Record<TaskBarStatus, string> = Object.freeze({
	completed: styles.countCompleted,
	running: styles.countRunning,
	failed: styles.countFailed,
});

const statusSegmentClass: Record<TaskBarStatus, string> = Object.freeze({
	completed: styles.segmentCompleted,
	running: styles.segmentRunning,
	failed: styles.segmentFailed,
});

const defaultLocale: Required<DsProgressTaskBarLocale> = Object.freeze({
	completed: 'Completed',
	running: 'Running',
	failed: 'Failed',
	total: (total: string) => `of ${total}`,
});

const DsProgressTaskBar = ({
	completed = 0,
	running = 0,
	failed = 0,
	total,
	locale,
	className,
	style,
	ref,
}: DsProgressTaskBarProps) => {
	const counts: Record<TaskBarStatus, number> = {
		completed: Math.max(0, completed),
		running: Math.max(0, running),
		failed: Math.max(0, failed),
	};

	const sum = counts.completed + counts.running + counts.failed;
	const denominator = Math.max(total ?? sum, sum);

	const mergedLocale = { ...defaultLocale, ...locale };
	const activeStatuses = taskBarStatuses.filter((status) => counts[status] > 0);

	const segmentWidth = (status: TaskBarStatus) =>
		denominator > 0 ? `${String((counts[status] / denominator) * 100)}%` : '0%';

	return (
		<div ref={ref} className={classNames(styles.root, className)} style={style}>
			<div className={styles.values}>
				<div className={styles.legend}>
					{activeStatuses.length === 0 ? (
						<span className={styles.empty}>0</span>
					) : (
						activeStatuses.map((status) => (
							<span key={status} className={styles.status}>
								<DsTooltip content={mergedLocale[status]}>
									<span className={styles.statusIcon}>
										<DsIcon
											icon={statusIcon[status]}
											size="tiny"
											color={statusIconColor[status]}
											filled
										/>
									</span>
								</DsTooltip>
								<span className={classNames(styles.count, statusCountClass[status])}>
									{formatCount(counts[status])}
								</span>
							</span>
						))
					)}
				</div>

				<span className={styles.total}>{mergedLocale.total(formatCount(denominator))}</span>
			</div>

			<div
				className={styles.bar}
				role="progressbar"
				aria-valuemin={0}
				aria-valuemax={denominator}
				aria-valuenow={sum}
			>
				{activeStatuses.map((status) => (
					<DsTooltip key={status} content={mergedLocale[status]}>
						<span
							className={classNames(styles.segment, statusSegmentClass[status])}
							style={{ width: segmentWidth(status) }}
						/>
					</DsTooltip>
				))}
			</div>
		</div>
	);
};

export default DsProgressTaskBar;
