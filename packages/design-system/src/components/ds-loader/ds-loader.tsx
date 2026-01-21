import type React from 'react';
import classNames from 'classnames';
import styles from './ds-loader.module.scss';
import type { DsLoaderProps } from './ds-loader.types';
import PulsingIcon from './pulsing-icon';
import SpinnerIcon from './spinner-icon';

/**
 * Design system Loader component
 */
const DsLoader: React.FC<DsLoaderProps> = ({ variant = 'spinner', className, style, ...props }) => {
	return (
		<div className={classNames(styles.loaderContainer, className)} style={style} {...props}>
			{variant === 'pulsing' ? <PulsingIcon /> : <SpinnerIcon className={styles.loader} />}
		</div>
	);
};

export default DsLoader;
