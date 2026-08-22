import { type FC, useEffect, useState } from 'react';
import classnames from 'classnames';
import { DsButtonV3 } from '../ds-button-v3';
import { DsIcon } from '../ds-icon';
import { DsTooltip } from '../ds-tooltip';
import { DsTypography } from '../ds-typography';
import styles from './ds-bulk-actions.module.scss';
import type { DsBulkActionDefault, DsBulkActionsProps } from './ds-bulk-actions.types';

const EXIT_ANIMATION_MS = 300;

const DefaultBulkAction: FC<DsBulkActionDefault> = ({ icon, label, onClick, disabled }) => (
	<DsTooltip content={label}>
		<button
			type="button"
			className={styles.actionButton}
			onClick={onClick}
			disabled={disabled}
			aria-label={label}
		>
			<DsIcon icon={icon} />
			<DsTypography variant="body-xs-md" className={styles.actionLabel}>
				{label}
			</DsTypography>
		</button>
	</DsTooltip>
);

const DsBulkActions: FC<DsBulkActionsProps> = ({
	selectedCount,
	actions,
	onClearSelection,
	placement = 'static',
	locale,
	className,
	style,
	ref,
}) => {
	const [isRendered, setIsRendered] = useState(false);
	const [animationClass, setAnimationClass] = useState('');
	const isFloating = placement === 'floating';

	const itemsSelectedLabel = locale?.itemsSelectedLabel ?? 'Items selected';
	const clearSelectionLabel = locale?.clearSelectionLabel ?? 'Clear selection';

	useEffect(() => {
		if (selectedCount > 0) {
			setIsRendered(true);
			setAnimationClass(isFloating ? styles.entering : '');
			return;
		}

		if (isRendered) {
			if (isFloating) {
				setAnimationClass(styles.exiting);
				const timer = setTimeout(() => {
					setIsRendered(false);
					setAnimationClass('');
				}, EXIT_ANIMATION_MS);
				return () => clearTimeout(timer);
			}

			setIsRendered(false);
			setAnimationClass('');
		}
	}, [selectedCount, isRendered, isFloating]);

	if (!isRendered) {
		return null;
	}

	return (
		<div
			ref={ref}
			className={classnames(
				styles.bulkActionsContainer,
				isFloating && styles.floating,
				isFloating && animationClass,
				className,
			)}
			style={style}
			role="toolbar"
			aria-label={itemsSelectedLabel}
		>
			<div className={styles.selectedCountContainer} aria-live="polite" aria-atomic="true">
				<DsTypography variant="heading1" className={styles.selectedCountBadge}>
					{selectedCount}
				</DsTypography>
			</div>
			<div className={styles.bulkActionsContent}>
				<DsTypography variant="body-md-semi-bold" className={styles.bulkActionsInfo}>
					{itemsSelectedLabel}
				</DsTypography>

				<div className={styles.bulkActionsActions}>
					{actions.map((action) =>
						'render' in action ? (
							<div key={action.key} className={styles.actionSlot}>
								{action.render()}
							</div>
						) : (
							<DefaultBulkAction key={action.label} {...action} />
						),
					)}
				</div>

				<DsButtonV3
					variant="tertiary"
					size="small"
					icon="close"
					aria-label={clearSelectionLabel}
					className={styles.dismissButton}
					onClick={onClearSelection}
				/>
			</div>
		</div>
	);
};

DsBulkActions.displayName = 'DsBulkActions';

export default DsBulkActions;
