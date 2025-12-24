import type React from 'react';
import classNames from 'classnames';
import styles from './ds-divider.module.scss';
import { type DsDividerProps } from './ds-divider.types';

const DsDivider: React.FC<DsDividerProps> = ({ orientation = 'horizontal', component, style, className }) => {
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

	return <Component role="separator" aria-orientation={orientation} className={classes} style={style} />;
};

export default DsDivider;
