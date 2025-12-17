import type React from 'react';
import { useEffect, useState } from 'react';
import classnames from 'classnames';
import { DsButton } from '../../../ds-button';
import { DsIcon } from '../../../ds-icon';
import styles from './ds-table-bulk-actions.module.scss';
import type { BulkActionsProps } from './ds-table-bulk-actions.types';

const DsTableBulkActions: React.FC<BulkActionsProps> = ({ numSelectedRows, actions, onClearSelection }) => {
	const [isRendered, setIsRendered] = useState(false);
	const [animationClass, setAnimationClass] = useState('');

	useEffect(() => {
		if (numSelectedRows > 0) {
			setIsRendered(true);
			setAnimationClass(styles.entering);
		} else if (isRendered) {
			setAnimationClass(styles.exiting);
			const timer = setTimeout(() => {
				setIsRendered(false);
				setAnimationClass('');
			}, 300);
			return () => clearTimeout(timer);
		}
	}, [numSelectedRows, isRendered]);

	if (!isRendered) {
		return null;
	}

	return (
		<div className={classnames(styles.bulkActionsContainer, animationClass)}>
			<div className={styles.selectedCountContainer}>
				<h3 className={classnames(styles.selectedCountBadge, styles.bold)}>{numSelectedRows}</h3>
			</div>
			<div className={styles.bulkActionsContent}>
				<span className={styles.bulkActionsInfo}>items selected</span>

				<div className={styles.bulkActionsActions}>
					{actions.map((action, index) => (
						<DsButton
							key={index}
							variant="borderless"
							size="small"
							className={styles.actionButton}
							contentClassName={styles.actionButtonContent}
							onClick={action.onClick}
						>
							<DsIcon icon={action.icon} />
							<span className={(styles['p-s'], styles.medium)}>{action.label}</span>
						</DsButton>
					))}
				</div>

				<DsButton
					variant="borderless"
					size="small"
					color="neutral-2"
					contentClassName={styles.escapeButtonContent}
					onClick={onClearSelection}
				>
					<DsIcon icon="close" />
					<span className={(styles['p-s'], styles.medium)}>Esc</span>
				</DsButton>
			</div>
		</div>
	);
};

export default DsTableBulkActions;
