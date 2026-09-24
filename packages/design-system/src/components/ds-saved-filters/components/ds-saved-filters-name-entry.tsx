import { useState } from 'react';
import { DsButtonV3 } from '../../ds-button-v3';
import { DsFormControl } from '../../ds-form-control';
import { DsStack } from '../../ds-stack';

interface NameEntryFieldsProps {
	initialName?: string;
	nameLabel: string;
	confirmLabel: string;
	cancelLabel: string;
	loading?: boolean;
	onSubmit: (name: string) => void;
	onCancel: () => void;
}

export const NameEntryFields = ({
	initialName = '',
	nameLabel,
	confirmLabel,
	cancelLabel,
	loading = false,
	onSubmit,
	onCancel,
}: NameEntryFieldsProps) => {
	const [name, setName] = useState(initialName);
	const trimmed = name.trim();
	const confirmDisabled = trimmed.length === 0;

	const handleSubmit = () => {
		if (confirmDisabled || loading) {
			return;
		}

		onSubmit(trimmed);
	};

	return (
		<DsStack direction="column" gap="var(--sm)">
			<DsFormControl label={nameLabel}>
				<DsFormControl.TextInput
					value={name}
					disabled={loading}
					onValueChange={setName}
					onKeyDown={(event) => {
						if (event.key === 'Enter') {
							event.preventDefault();
							handleSubmit();
						}
					}}
				/>
			</DsFormControl>
			<DsStack direction="row" gap="var(--xs)" justifyContent="flex-end">
				<DsButtonV3 variant="secondary" size="small" disabled={loading} onClick={onCancel}>
					{cancelLabel}
				</DsButtonV3>
				<DsButtonV3 size="small" disabled={confirmDisabled} loading={loading} onClick={handleSubmit}>
					{confirmLabel}
				</DsButtonV3>
			</DsStack>
		</DsStack>
	);
};

NameEntryFields.displayName = 'NameEntryFields';
