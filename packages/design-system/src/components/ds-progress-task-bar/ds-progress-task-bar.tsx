import classNames from 'classnames';

import { DsIcon, type IconColor, type IconName } from '../ds-icon';
import { DsStack } from '../ds-stack';
import { DsTooltip } from '../ds-tooltip';
import { DsTypography, type TypographyColor } from '../ds-typography';

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

const statusTextColor: Record<TaskBarStatus, TypographyColor> = Object.freeze({
	completed: 'success',
	running: 'action',
	failed: 'error',
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
		<DsStack ref={ref} direction="column" gap="var(--xs)" width="100%" className={className} style={style}>
			<DsStack direction="row" alignItems="center" justifyContent="space-between">
				<DsStack direction="row" alignItems="center" gap="var(--3xs)">
					{activeStatuses.length === 0 ? (
						<DsTypography variant="body-xs-reg" color="secondary">
							0
						</DsTypography>
					) : (
						activeStatuses.map((status) => (
							<DsStack key={status} direction="row" alignItems="center" gap="var(--4xs)">
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
								<DsTypography variant="body-xs-reg" color={statusTextColor[status]}>
									{formatCount(counts[status])}
								</DsTypography>
							</DsStack>
						))
					)}
				</DsStack>

				<DsTypography variant="body-xs-reg" color="secondary" className={styles.total}>
					{mergedLocale.total(formatCount(denominator))}
				</DsTypography>
			</DsStack>

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
		</DsStack>
	);
};

export default DsProgressTaskBar;
