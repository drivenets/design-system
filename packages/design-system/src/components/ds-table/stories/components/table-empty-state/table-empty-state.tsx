import styles from './table-empty-state.module.scss';
import DsIcon from '../../../../ds-icon/ds-icon';

export const TableEmptyState = () => {
	return (
		<div className={styles.emptyStateContainer}>
			<DsIcon icon="info" size="large" />
			<p className={styles.emptyStateContainer__text}>No matching records found.</p>
		</div>
	);
};
