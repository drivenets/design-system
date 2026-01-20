import type React from 'react';
import { useEffect, useState } from 'react';
import classnames from 'classnames';
import { DsButton } from '../../../ds-button';
import { DsIcon } from '../../../ds-icon';
import styles from './ds-table-bulk-actions.module.scss';
import type { BulkActionsProps } from './ds-table-bulk-actions.types';
import { DsTypography } from '../../../ds-typography';

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
				<DsTypography variant="heading1" className={styles.selectedCountBadge}>
					{numSelectedRows}
				</DsTypography>
			</div>
			<div className={styles.bulkActionsContent}>
				<DsTypography variant="body-md-semi-bold" className={styles.bulkActionsInfo}>
					Items selected
				</DsTypography>

				<div className={styles.bulkActionsActions}>
					{actions.map((action, index) => (
						<button key={index} type="button" className={styles.actionButton} onClick={action.onClick}>
							<DsIcon icon={action.icon} />
							<DsTypography variant="body-xs-md">{action.label}</DsTypography>
						</button>
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
				</DsButton>
			</div>
		</div>
	);
};

export default DsTableBulkActions;
