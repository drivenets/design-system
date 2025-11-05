import React from 'react';
import { CreateToasterReturn, Toast, Toaster } from '@ark-ui/react';
import styles from './ds-toast.module.scss';
import { DsToastProps, ToastVariant } from './ds-toast.types';
import { DsIcon, IconType } from '../ds-icon';
import { DsTypography } from '../ds-typography';

const variantIcons = {
	success: 'check_circle',
	info: 'info',
	warning: 'error',
	error: 'cancel',
} satisfies Record<ToastVariant, IconType>;

/**
 * Design system Toast component
 * This component is used within the Toaster render function
 */
const DsToast = ({
	style,
	className,
	variant = 'info',
	title,
	description,
	onDismiss,
	actions,
}: DsToastProps) => (
	<Toast.Root style={style} className={className}>
		<DsIcon icon={variantIcons[variant]} size="small" filled className={styles.icon} />
		{title && (
			<DsTypography variant="body-sm-md" asChild>
				<Toast.Title>{title}</Toast.Title>
			</DsTypography>
		)}
		{description && (
			<DsTypography variant="body-sm-reg" asChild>
				<Toast.Description>{description}</Toast.Description>
			</DsTypography>
		)}
		<Toast.CloseTrigger onClick={onDismiss}>
			<DsIcon icon="close" size="small" />
		</Toast.CloseTrigger>
		{actions && <div className={styles.actions}>{actions}</div>}
	</Toast.Root>
);

/**
 * Design system Toast Group component that wraps the Toaster
 */
const DsToastGroup: React.FC<{ toaster: CreateToasterReturn }> = ({ toaster }) => {
	return <Toaster toaster={toaster}>{(toast: DsToastProps) => <DsToast {...toast} />}</Toaster>;
};

export { DsToast, DsToastGroup };
