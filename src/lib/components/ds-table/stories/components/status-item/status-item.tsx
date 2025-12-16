import { DsIcon, type IconType } from '../../../../ds-icon';
import styles from './status-item.module.scss';

export interface StatusItemProps {
	icon: IconType;
	label: string;
}

export const StatusItem = ({ icon, label }: StatusItemProps) => (
	<div className={styles.statusItem}>
		<DsIcon icon={icon} size="small" />
		<span>{label}</span>
	</div>
);
