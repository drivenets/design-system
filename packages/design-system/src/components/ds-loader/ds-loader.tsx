import classNames from 'classnames';
import styles from './ds-loader.module.scss';
import type { DsLoaderProps } from './ds-loader.types';
import PulsingIcon from './pulsing-icon';
import SpinnerIcon from './spinner-icon';

/**
 * Design system Loader component
 */
const DsLoader = ({ variant = 'spinner', className, ...props }: DsLoaderProps) => {
	return (
		<div className={classNames(styles.loaderContainer, className)} {...props}>
			{variant === 'pulsing' ? <PulsingIcon /> : <SpinnerIcon />}
		</div>
	);
};

export default DsLoader;
