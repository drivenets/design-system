import classNames from 'classnames';

import { DsTypography } from '../ds-typography';
import styles from './ds-key-value-pair.module.scss';
import type { DsKeyValuePairProps } from './ds-key-value-pair.types';

const DsKeyValuePair = ({
	ref,
	keyLabel,
	value,
	readOnly = false,
	orientation = 'vertical',
	editInput,
	className,
	style,
}: DsKeyValuePairProps) => {
	const editable = !readOnly && !!editInput;

	return (
		<div
			ref={ref}
			className={classNames(styles.root, className)}
			data-orientation={orientation}
			data-readonly={readOnly || undefined}
			style={style}
		>
			<DsTypography variant="body-sm-md" className={styles.label}>
				{keyLabel}
			</DsTypography>

			<div
				className={styles.valueContainer}
				/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- tabIndex enables keyboard focus which triggers :focus-within to reveal the editor */
				tabIndex={editable ? 0 : undefined}
				data-editable={editable || undefined}
			>
				<DsTypography variant="body-sm-reg" asChild>
					<div className={styles.valueDisplay}>{value}</div>
				</DsTypography>

				{editable && <div className={styles.editorSlot}>{editInput}</div>}
			</div>
		</div>
	);
};

export default DsKeyValuePair;
