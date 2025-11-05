import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import { DsTypographyProps } from './ds-typography.types';
import { semanticElementMap } from './ds-typography.config';
import styles from './ds-typography.module.scss';

/*
 * Design system Typography component that provides consistent text styling
 */
const DsTypography: React.FC<DsTypographyProps & { ref?: React.Ref<HTMLElement> }> = ({
	ref,
	variant,
	asChild = false,
	className,
	children,
	...props
}) => {
	const Component: React.ElementType = asChild ? Slot : semanticElementMap[variant];
	return (
		<Component ref={ref} className={classNames(styles[variant], className)} {...props}>
			{children}
		</Component>
	);
};

export default DsTypography;
