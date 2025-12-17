import { DsTypography } from '../../../../../ds-typography';
import styles from './user-avatar.module.scss';

export interface UserAvatarProps {
	name: string;
	size?: 'small' | 'medium';
	colorIndex?: number;
}

const colors = [
	{ bg: '#E3F2FD', text: '#1976D2' }, // Blue
	{ bg: '#F3E5F5', text: '#7B1FA2' }, // Purple
	{ bg: '#E8F5E9', text: '#388E3C' }, // Green
];

const getInitials = (name: string): string => {
	const parts = name.trim().split(' ');
	if (parts.length >= 2) {
		return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
	}
	return name.slice(0, 2).toUpperCase();
};

export const UserAvatar = ({ name, size = 'small', colorIndex = 0 }: UserAvatarProps) => {
	const initials = getInitials(name);
	const color = colors[colorIndex % colors.length];

	return (
		<div
			className={`${styles.avatar} ${styles[size]}`}
			style={{
				backgroundColor: color.bg,
				color: color.text,
			}}
		>
			<DsTypography variant="body-xs-semi-bold">{initials}</DsTypography>
		</div>
	);
};
