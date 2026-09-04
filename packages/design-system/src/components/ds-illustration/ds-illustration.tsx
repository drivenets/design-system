import classNames from 'classnames';
import styles from './ds-illustration.module.scss';
import { illustrations } from './illustrations';
import type { DsIllustrationProps } from './ds-illustration.types';

const DsIllustration = ({
	variant = 'no-tasks',
	className,
	style,
	ref,
	'aria-hidden': ariaHidden = true,
	'aria-label': ariaLabel,
}: DsIllustrationProps) => {
	const Svg = illustrations[variant];

	return (
		<Svg
			ref={ref}
			className={classNames(styles.root, className)}
			style={style}
			aria-hidden={ariaHidden}
			aria-label={ariaLabel}
		/>
	);
};

DsIllustration.displayName = 'DsIllustration';

export default DsIllustration;
