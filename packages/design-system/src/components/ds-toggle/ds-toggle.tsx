import { Switch, type SwitchCheckedChangeDetails } from '@ark-ui/react/switch';
import classNames from 'classnames';
import type { DsToggleProps } from './ds-toggle.types';
import styles from './ds-toggle.module.scss';
import { DsIcon } from '../ds-icon';
import { DsTypography } from '../ds-typography';
import type { Ref } from 'react';

/**
 * Design system Toggle component
 */
const DsToggle = ({
	ref,
	label,
	name,
	labelInfo,
	className,
	style = {},
	onChange,
	onValueChange,
	size = 'default',
	children,
	checked,
	...rest
}: DsToggleProps) => {
	const isSmall = size === 'small';
	const iconSize = isSmall ? 'tiny' : 'small';
	const checkIconClass = classNames(styles.icon, styles.iconCheck);
	const closeIconClass = classNames(styles.icon, styles.iconClose);

	const rootClass = classNames(
		styles.root,
		{
			[styles.small]: isSmall,
		},
		className,
	);

	const handleCheckedChange = (e: SwitchCheckedChangeDetails) => {
		onValueChange?.(e.checked);
	};

	return (
		<Switch.Root
			ref={ref as Ref<HTMLLabelElement>}
			style={style}
			className={rootClass}
			label={label}
			checked={checked}
			name={name}
			onCheckedChange={handleCheckedChange}
			onClick={onChange}
			{...rest}
		>
			<Switch.Control>
				<DsIcon icon="check" size={iconSize} className={checkIconClass} />
				<Switch.Thumb />
				<DsIcon icon="close" size={iconSize} className={closeIconClass} />
			</Switch.Control>

			{label ? (
				<Switch.Label>
					<DsTypography variant={isSmall ? 'body-xs-md' : 'body-sm-md'}>{label}</DsTypography>
					{!!labelInfo && (
						<DsTypography variant="body-xs-reg" className={styles.labelInfo}>
							{labelInfo}
						</DsTypography>
					)}
				</Switch.Label>
			) : (
				children
			)}
			<Switch.HiddenInput />
		</Switch.Root>
	);
};

export default DsToggle;
