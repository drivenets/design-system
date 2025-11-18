import { useState } from 'react';
import { DsButton, DsTextInput, DsTypography } from '@design-system/ui';
import styles from './range-filter.module.scss';

export interface RangeFilterValue {
	from?: number;
	to?: number;
}

export interface RangeFilterProps {
	label: string;
	value: RangeFilterValue;
	onChange: (value: RangeFilterValue) => void;
	onClear?: () => void;
}

export const RangeFilter = ({ label, value, onChange, onClear }: RangeFilterProps) => {
	const [localFrom, setLocalFrom] = useState(value.from?.toString() || '');
	const [localTo, setLocalTo] = useState(value.to?.toString() || '');

	const handleFromChange = (val: string) => {
		setLocalFrom(val);
		const numVal = val ? parseInt(val, 10) : undefined;
		onChange({ from: numVal, to: value.to });
	};

	const handleToChange = (val: string) => {
		setLocalTo(val);
		const numVal = val ? parseInt(val, 10) : undefined;
		onChange({ from: value.from, to: numVal });
	};

	const handleClear = () => {
		setLocalFrom('');
		setLocalTo('');
		if (onClear) {
			onClear();
		}
	};

	const hasValue = value.from !== undefined || value.to !== undefined;

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<DsTypography variant="body-md-md">{label}</DsTypography>
				{hasValue && onClear && (
					<DsButton design="v1.2" buttonType="tertiary" size="small" onClick={handleClear}>
						Clear
					</DsButton>
				)}
			</div>
			<div className={styles.inputs}>
				<div className={styles.inputGroup}>
					<DsTypography variant="body-sm-reg">From</DsTypography>
					<DsTextInput
						type="number"
						placeholder=""
						value={localFrom}
						onValueChange={handleFromChange}
						size="default"
					/>
				</div>
				<div className={styles.inputGroup}>
					<DsTypography variant="body-sm-reg">To</DsTypography>
					<DsTextInput
						type="number"
						placeholder=""
						value={localTo}
						onValueChange={handleToChange}
						size="default"
					/>
				</div>
			</div>
		</div>
	);
};
