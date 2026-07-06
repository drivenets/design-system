import classNames from 'classnames';
import { DsSelect, type SelectSize } from '../ds-select';
import styles from './ds-split-button.module.scss';
import type { DsSplitButtonProps, SplitButtonSize } from './ds-split-button.types';
import { DsButton } from '../ds-button';

const DsSplitButton = ({
	ref,
	className,
	style,
	size = 'medium',
	disabled,
	slotProps,
}: DsSplitButtonProps) => {
	const { className: buttonClassName, disabled: buttonDisabled, ...buttonProps } = slotProps.button;

	const { className: selectClassName, disabled: selectDisabled, ...selectProps } = slotProps.select;

	return (
		<div ref={ref} className={classNames(styles.root, className)} style={style}>
			<DsButton
				{...buttonProps}
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
				{...selectProps}
				size={getSelectSize(size)}
				disabled={selectDisabled ?? disabled}
				className={classNames(styles.select, selectClassName)}
			/>
		</div>
	);
};

const getSelectSize = (size: SplitButtonSize): SelectSize => {
	return size === 'medium' ? 'default' : 'small';
};

export default DsSplitButton;
