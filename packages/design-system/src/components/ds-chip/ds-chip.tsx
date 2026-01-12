import type React from 'react';
import classNames from 'classnames';
import styles from './ds-chip.module.scss';
import type { DsChipProps } from './ds-chip.types';
import { DsIcon } from '../ds-icon';
import { DsTypography } from '../ds-typography';

/**
 * @deprecated This component is deprecated. Use `DsTag` instead.
 * @see {@link ../ds-tag} for the replacement component.
 */
const DsChip: React.FC<DsChipProps> = ({
	ref,
	label,
	className,
	style = {},
	onClick,
	onDelete,
	size = 'medium',
	deleteIcon,
	selected = false,
}) => {
	const chipClass = classNames(
		styles.chip,
		{
			[styles.clickable]: onClick !== undefined,
			[styles.small]: size === 'small',
		},
		className,
	);

	const handleDeleteClick = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation();
		onDelete?.(event);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
		if (onDelete && (event.key === 'Backspace' || event.key === 'Delete')) {
			event.preventDefault();
			onDelete(event);
		}
	};

	return (
		<div
			ref={ref as React.Ref<HTMLDivElement>}
			className={chipClass}
			style={style}
			onClick={onClick}
			onKeyDown={handleKeyDown}
			role={onClick || onDelete ? 'button' : undefined}
			tabIndex={onClick || onDelete ? 0 : undefined}
			aria-label={label}
			aria-pressed={onClick && selected ? 'true' : undefined}
		>
			<DsTypography variant={size === 'small' ? 'body-xs-reg' : 'body-sm-reg'} className={styles.label}>
				{label}
			</DsTypography>
			{onDelete && (
				<button
					type="button"
					className={styles.deleteButton}
					onClick={handleDeleteClick}
					aria-label="Delete chip"
					tabIndex={-1}
				>
					<DsIcon icon={deleteIcon || 'cancel'} size="tiny" />
				</button>
			)}
		</div>
	);
};

export default DsChip;
