import { type CSSProperties } from 'react';
import type React from 'react';
import classNames from 'classnames';
import styles from './ds-divider.module.scss';
import { type DsDividerProps } from './ds-divider.types';
import { toCssSize } from '../../utils/common.util';

type DsDividerBaseProps = DsDividerProps & Omit<React.HTMLAttributes<HTMLElement>, 'color'>;

const DsDivider: React.FC<DsDividerBaseProps> = ({
	orientation = 'horizontal',
	thickness,
	component,
	backgroundColor,
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

	const customProperties: Record<string, string> = {};

	if (backgroundColor) {
		customProperties['--divider-color'] = backgroundColor;
	}
	if (thickness !== undefined) {
		customProperties['--divider-thickness'] = toCssSize(thickness) as string;
	}

	const mergedStyle: CSSProperties = {
		...customProperties,
		...style,
	};

	return (
		<Component
			role="separator"
			aria-orientation={orientation}
			className={classes}
			style={mergedStyle}
			{...rest}
		/>
	);
};

export default DsDivider;
