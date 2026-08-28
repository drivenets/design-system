import type { ButtonHTMLAttributes, Ref } from 'react';
import classnames from 'classnames';
import styles from '../ds-bulk-actions.module.scss';
import type { ItemWidthLayout } from '../ds-bulk-actions.utils';
import { DsIcon, type IconType } from '../../ds-icon';
import { DsTypography } from '../../ds-typography';

export interface ActionButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
	icon: IconType;
	label: string;
	itemWidth?: ItemWidthLayout['mode'];
	ref?: Ref<HTMLButtonElement>;
}

export const ActionButton = ({
	icon,
	label,
	onClick,
	disabled,
	className,
	style,
	itemWidth = 'fixed',
	ref,
	...rest
}: ActionButtonProps) => (
	<button
		className={classnames(styles.actionButton, className)}
		style={style}
		onClick={onClick}
		disabled={disabled}
		aria-label={label}
		data-item-width={itemWidth}
		{...rest}
		type="button"
		ref={ref}
	>
		<DsIcon icon={icon} size="small" />
		<DsTypography variant="body-xs-md" className={styles.actionLabel}>
			{label}
		</DsTypography>
	</button>
);
