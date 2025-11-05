import { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './ds-alert-banner.module.scss';
import { DsAlertBannerProps } from './ds-alert-banner.types';
import { DsIcon } from '../ds-icon';
import { DsTypography } from '../ds-typography';

/**
 * Design system AlertBanner component
 * Controlled component that displays alert messages with different variants
 */
const DsAlertBanner = ({
	open,
	onOpenChange,
	inline = false,
	variant = 'info-blue',
	icon,
	closable = false,
	className,
	style = {},
	children,
}: DsAlertBannerProps) => {
	const variantClass = {
		'info-neutral': styles.infoNeutral,
		'info-blue': styles.infoBlue,
		warning: styles.warning,
		error: styles.error,
		success: styles.success,
	}[variant];

	const alertBannerClass = classNames(
		styles.alertBanner,
		inline && styles.inline,
		!inline && styles.global,
		variantClass,
		{
			[styles.hidden]: !open,
		},
		className,
	);

	const handleClose = () => {
		onOpenChange(false);
	};

	if (!open) {
		return null;
	}

	return (
		<div className={alertBannerClass} style={style}>
			{icon && <DsIcon className={styles.icon} icon={icon} size="small" filled />}
			{children}
			{closable && (
				<button className={styles.closeButton} onClick={handleClose} aria-label="Close alert" data-close>
					<DsIcon icon="close" size="small" />
				</button>
			)}
		</div>
	);
};

const Title = ({
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}) => (
	<DsTypography style={style} className={classNames(styles.title, className)} variant="body-md-md">
		{children}
	</DsTypography>
);

const Body = ({
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}) => (
	<DsTypography style={style} className={classNames(styles.description, className)} variant="body-sm-reg">
		{children}
	</DsTypography>
);

const Actions = ({
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}) => (
	<div style={style} className={classNames(styles.actions, className)}>
		{children}
	</div>
);

DsAlertBanner.Title = Title;
DsAlertBanner.Body = Body;
DsAlertBanner.Actions = Actions;

export default DsAlertBanner;
