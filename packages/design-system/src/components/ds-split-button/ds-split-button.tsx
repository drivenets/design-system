import classNames from 'classnames';
import { DsSelect, type SelectSize } from '../ds-select';
import styles from './ds-split-button.module.scss';
import type { DsSplitButtonProps, SplitButtonSize } from './ds-split-button.types';
import { DsButtonV3 } from '../ds-button-v3';

/**
 * Secondary action button paired with a dropdown select for choosing a related option.
 * Both slots share a size and disabled state controlled by the split button.
 *
 * @summary split action button with a primary action and an option select
 */
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
			<DsButtonV3
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
