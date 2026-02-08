import classNames from 'classnames';
import styles from './ds-comment-indicator.module.scss';
import type { DsCommentIndicatorProps } from './ds-comment-indicator.types';

export const DsCommentIndicator = ({
	type = 'placeholder',
	avatarSrc,
	onClick,
	className,
	style,
}: DsCommentIndicatorProps) => {
	const isPlaceholder = type === 'placeholder';
	const isActionRequired = type === 'action-required';

	const getAriaLabel = () => {
		if (isPlaceholder) {
			return 'Add comment';
		}
		return 'View comment';
	};

	return (
		<button
			type="button"
			className={classNames(
				styles.indicator,
				{
					[styles.placeholder]: isPlaceholder,
					[styles.actionRequired]: isActionRequired,
				},
				className,
			)}
			style={style}
			onClick={onClick}
			aria-label={getAriaLabel()}
		>
			{isPlaceholder ? (
				<span className={styles.plusIcon}>+</span>
			) : (
				<img src={avatarSrc} alt="" className={styles.avatar} />
			)}
		</button>
	);
};
