import { useMemo, type Ref, type MouseEvent, type KeyboardEvent } from 'react';
import classNames from 'classnames';
import styles from './ds-tag.module.scss';
import type { DsTagProps } from './ds-tag.types';
import { DsIcon, type IconType } from '../ds-icon';
import { DsTypography } from '../ds-typography';

/**
 * Design system Tag component
 */
const DsTag = ({
	ref,
	label,
	className,
	style = {},
	onClick,
	onDelete,
	size = 'medium',
	selected = false,
	variant = 'default',
	disabled = false,
}: DsTagProps) => {
	const tagClass = classNames(
		styles.tag,
		{
			[styles.clickable]: onClick !== undefined && !disabled,
			[styles.selected]: selected && !disabled,
			[styles.include]: variant === 'include',
			[styles.exclude]: variant === 'exclude',
			[styles.disabled]: disabled,
		},
		className,
	);

	const handleDeleteClick = (event: MouseEvent<HTMLElement>) => {
		event.stopPropagation();
		onDelete?.(event);
	};

	const handleKeyDownTag = (event: KeyboardEvent<HTMLElement>) => {
		if (onClick && (event.key === 'Enter' || event.key === ' ')) {
			event.preventDefault();
			onClick(event as KeyboardEvent<HTMLDivElement>);
		}
	};

	const handleKeyDownDelete = (event: KeyboardEvent<HTMLElement>) => {
		event.stopPropagation();

		if (onDelete && (event.key === 'Enter' || event.key === ' ')) {
			event.preventDefault();
			onDelete(event);
		}
	};

	const handleClick = (event: MouseEvent<HTMLElement>) => {
		if (onClick) {
			event.preventDefault();
			onClick(event as MouseEvent<HTMLDivElement>);
		}
	};

	const variantIconName = useMemo((): IconType | null => {
		if (variant === 'include') {
			return 'check_circle';
		}

		if (variant === 'exclude') {
			return 'do_not_disturb_on';
		}

		return null;
	}, [variant]);

	return (
		<div
			ref={ref as Ref<HTMLDivElement>}
			className={tagClass}
			style={style}
			onClick={disabled ? undefined : handleClick}
			onKeyDown={disabled ? undefined : handleKeyDownTag}
			role={onClick || onDelete ? 'button' : undefined}
			tabIndex={disabled || (!onClick && !onDelete) ? undefined : 0}
			aria-label={label}
			aria-pressed={onClick && selected && !disabled ? 'true' : undefined}
			aria-disabled={disabled}
		>
			{variantIconName && <DsIcon icon={variantIconName} size="tiny" className={styles.variantIcon} />}
			<DsTypography variant={size === 'small' ? 'body-xs-reg' : 'body-sm-reg'} className={styles.label}>
				{label}
			</DsTypography>
			{onDelete && !disabled && (
				<button
					type="button"
					className={styles.deleteButton}
					onClick={handleDeleteClick}
					onKeyDown={handleKeyDownDelete}
					aria-label="Delete tag"
					tabIndex={0}
				>
					<DsIcon icon="close" size="tiny" />
				</button>
			)}
		</div>
	);
};

export default DsTag;
