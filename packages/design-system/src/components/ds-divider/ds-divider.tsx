import type React from 'react';
import classNames from 'classnames';
import styles from './ds-divider.module.scss';
import { type DsDividerProps } from './ds-divider.types';

type DsDividerBaseProps = DsDividerProps & Omit<React.HTMLAttributes<HTMLElement>, 'color'>;

const DsDivider: React.FC<DsDividerBaseProps> = ({
	orientation = 'horizontal',
	component,
	style,
	className,
	...rest
}) => {
	const isVertical = orientation === 'vertical';
	const Component = component ?? (isVertical ? 'div' : 'hr');

	const classes = classNames(
		styles.divider,
		{
			[styles.vertical]: isVertical,
			[styles.horizontal]: !isVertical,
		},
		className,
	);

	return (
		<Component
			role="separator"
			aria-orientation={orientation}
			className={classes}
			style={style}
			{...rest}
		/>
	);
};

export default DsDivider;
