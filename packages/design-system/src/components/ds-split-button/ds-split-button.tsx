import classNames from 'classnames';
import { DsButton } from '../ds-button';
import { DsSelect } from '../ds-select';
import styles from './ds-split-button.module.scss';
import type { DsSplitButtonProps } from './ds-split-button.types';
import { getSelectSize } from './ds-split-button.utils';

const DsSplitButton = ({
	ref,
	className,
	style,
	size = 'medium',
	disabled,
	slotProps,
}: DsSplitButtonProps) => {
	const {
		className: buttonClassName,
		contentClassName,
		size: buttonSize,
		disabled: buttonDisabled,
		...buttonRest
	} = slotProps.button;

	const {
		className: selectClassName,
		size: selectSize,
		disabled: selectDisabled,
		...selectRest
	} = slotProps.select;

	return (
		<div ref={ref} className={classNames(styles.root, className)} style={style}>
			<DsButton
				{...buttonRest}
				design="v1.2"
				buttonType="secondary"
				size={buttonSize ?? size}
				disabled={buttonDisabled ?? disabled}
				className={classNames(styles.actionButton, buttonClassName)}
				contentClassName={classNames(styles.actionContent, contentClassName)}
			/>

			<div className={styles.dividerAnchor}>
				<div className={styles.dividerWrapper}>
					<div className={styles.divider} />
				</div>
			</div>

			<DsSelect
				{...selectRest}
				size={selectSize ?? getSelectSize(size)}
				disabled={selectDisabled ?? disabled}
				className={classNames(styles.select, selectClassName)}
			/>
		</div>
	);
};

export default DsSplitButton;
