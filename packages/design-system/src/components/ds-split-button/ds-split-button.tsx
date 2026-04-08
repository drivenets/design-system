import classNames from 'classnames';
import { DsSelect } from '../ds-select';
import styles from './ds-split-button.module.scss';
import type { DsSplitButtonProps } from './ds-split-button.types';
import { getSelectSize } from './ds-split-button.utils';
import { DsButtonV3 } from '../ds-button-v3';

const DsSplitButton = ({
	ref,
	className,
	style,
	size = 'medium',
	disabled,
	slotProps,
}: DsSplitButtonProps) => {
	const { className: buttonClassName, disabled: buttonDisabled, ...buttonRest } = slotProps.button;

	const { className: selectClassName, disabled: selectDisabled, ...selectRest } = slotProps.select;

	return (
		<div ref={ref} className={classNames(styles.root, className)} style={style}>
			<DsButtonV3
				{...buttonRest}
				variant="secondary"
				size={size}
				disabled={buttonDisabled ?? disabled}
				className={classNames(styles.actionButton, buttonClassName)}
			/>

			<div className={styles.dividerAnchor}>
				<div className={styles.dividerWrapper}>
					<div className={styles.divider} />
				</div>
			</div>

			<DsSelect
				{...selectRest}
				size={getSelectSize(size)}
				disabled={selectDisabled ?? disabled}
				className={classNames(styles.select, selectClassName)}
			/>
		</div>
	);
};

export default DsSplitButton;
