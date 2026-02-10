import classnames from 'classnames';
import styles from './progress-infographic.module.scss';

export const ProgressInfographic = ({ value }: { value: number }) => {
	const barClass = classnames(styles.bar, {
		[styles['bar--high']]: value > 70,
		[styles['bar--medium']]: value > 40 && value <= 70,
		[styles['bar--low']]: value <= 40,
	});

	return (
		<div className={styles.progressInfographic}>
			<div className={barClass} style={{ width: `${String(value)}%` }}>
				{value}%
			</div>
		</div>
	);
};
