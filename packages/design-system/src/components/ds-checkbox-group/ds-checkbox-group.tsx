import type React from 'react';
import { Checkbox } from '@ark-ui/react/checkbox';
import classNames from 'classnames';
import styles from './ds-checkbox-group.module.scss';
import type { DsCheckboxGroupProps } from './ds-checkbox-group.types';

const DsCheckboxGroup: React.FC<DsCheckboxGroupProps> = ({
	orientation = 'vertical',
	className,
	children,
	...props
}) => {
	return (
		<Checkbox.Group className={classNames(styles.root, styles[orientation], className)} {...props}>
			{children}
		</Checkbox.Group>
	);
};

export default DsCheckboxGroup;
