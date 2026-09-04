import classNames from 'classnames';
import styles from './ds-bot-button.module.scss';
import type { DsBotButtonProps } from './ds-bot-button.types';
import { NetGenLogo } from './net-gen-logo';
import { DsButtonV3 } from '../ds-button-v3';

const DEFAULT_LOCALE = Object.freeze({ label: 'NetGen' });

/**
 * Launcher for the NetGen AI companion
 */
const DsBotButton = ({
	ref,
	className,
	selected = false,
	loading = false,
	disabled = false,
	locale,
	...rest
}: DsBotButtonProps) => {
	const label = locale?.label ?? DEFAULT_LOCALE.label;

	return (
		<DsButtonV3
			ref={ref}
			variant="primary-subtle"
			size="small"
			highEmphasis
			selected={selected}
			loading={loading}
			disabled={disabled}
			className={classNames(styles.root, className)}
			{...rest}
		>
			{/* `DsButtonV3` renders its own spinner in the leading slot while loading. */}
			{!loading && (
				<span className={styles.mark}>
					<NetGenLogo tone={disabled ? 'greyscale' : 'color'} />
				</span>
			)}
			<span className={styles.label}>{label}</span>
		</DsButtonV3>
	);
};

DsBotButton.displayName = 'DsBotButton';

export default DsBotButton;
