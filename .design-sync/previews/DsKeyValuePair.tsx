import * as React from 'react';
import { useState } from 'react';
import {
	DsKeyValuePair,
	DsStack,
	DsSlider,
	DsTextInput,
	DsTextarea,
	DsSelect,
	type DsSelectOption,
	DsIcon,
	DsTag,
	DsTooltip,
} from '@drivenets/design-system';

// Owned preview: ds-key-value-pair.stories.tsx imports a story-local
// `ds-key-value-pair.stories.module.scss` for demo layout/sizing (fixed
// widths on the Editable demos, the `pairsColumn`/`responsivePairs` grid
// wrappers that align multiple pairs into a shared label/value column via
// `display: contents`, and `fullTextValue`'s wrap override). That SCSS module
// resolves to `{}` in the preview-compile pass (no Sass there), so widths
// collapse, columns misalign, tags don't wrap, and long text truncates
// instead of wrapping. This mirrors the story JSX with the same CSS inlined
// as plain style objects (see DsButton.tsx for the reference pattern).

const iconLabelStyle: React.CSSProperties = {
	display: 'inline-flex',
	alignItems: 'center',
	gap: 'var(--4xs)',
};
const editableVerticalDemoStyle: React.CSSProperties = { width: 150 };
const editableHorizontalDemoStyle: React.CSSProperties = { width: 250 };
const mediumInputStyle: React.CSSProperties = { width: 140 };
const valueWithIconStyle: React.CSSProperties = {
	display: 'inline-flex',
	alignItems: 'center',
	gap: 'var(--3xs)',
};
const pairsColumnStyle: React.CSSProperties = {
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	columnGap: 'var(--xs)',
	rowGap: 'var(--xs)',
	alignItems: 'start',
	width: 336,
};
// `.pairsColumn > [data-orientation='horizontal'] { display: contents }` unifies
// each pair's own 2-col grid into the parent's columns. DsKeyValuePair forwards
// `style`, so each pair gets `style={{ display: 'contents' }}` directly instead
// — this keeps the REAL component's internal label/value/editInput markup (and
// its hover-reveal edit behavior) intact; only its own grid wrapper collapses.
const contentsStyle: React.CSSProperties = { display: 'contents' };
const responsivePairsStyle = (width: number): React.CSSProperties => ({
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	columnGap: 'var(--xs)',
	rowGap: 'var(--xs)',
	alignItems: 'start',
	width,
	border: '1px dashed var(--border)',
	borderRadius: 4,
	padding: 'var(--sm)',
});
const descriptionTextareaStyle: React.CSSProperties = { width: 230 };
const fullTextValueStyle: React.CSSProperties = {
	display: 'block',
	width: '100%',
	whiteSpace: 'normal',
	overflowWrap: 'anywhere',
};
const statusBadgeStyle: React.CSSProperties = {
	display: 'inline-flex',
	alignItems: 'center',
	gap: 'var(--3xs)',
	padding: 'var(--4xs) var(--xs)',
	borderRadius: 9999,
	background: 'var(--status-bg-success)',
	fontSize: 12,
	fontWeight: 500,
	color: 'var(--font-main)',
};
const tagGroupStyle: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 'var(--xs)' };

export const ReadOnlyVertical = () => (
	<DsKeyValuePair keyLabel="Start time" value="2024-05-23 16:47" readOnly orientation="vertical" />
);

export const ReadOnlyHorizontal = () => (
	<DsKeyValuePair keyLabel="MAC" value="00:1A:2B:3C:4D:5E" readOnly orientation="horizontal" />
);

export const CustomLabel = () => (
	<DsKeyValuePair
		keyLabel={
			<span style={iconLabelStyle}>
				<DsIcon icon="info" size="tiny" />
				Serial Number
			</span>
		}
		value="99887766"
		readOnly
		orientation="horizontal"
	/>
);

export const EditableVertical = () => {
	const [serial, setSerial] = useState('99887766');
	return (
		<DsKeyValuePair
			keyLabel="Serial Number"
			value={serial}
			orientation="vertical"
			style={editableVerticalDemoStyle}
			editInput={<DsTextInput value={serial} onValueChange={setSerial} size="small" />}
		/>
	);
};

export const EditableHorizontal = () => {
	const [model, setModel] = useState('Cisco RTR-X2000');
	return (
		<DsKeyValuePair
			keyLabel="Model"
			value={model}
			orientation="horizontal"
			style={editableHorizontalDemoStyle}
			editInput={<DsTextInput value={model} onValueChange={setModel} size="small" />}
		/>
	);
};

export const WithTrailingIcon = () => {
	const [val, setVal] = useState('Editable value');
	return (
		<DsKeyValuePair
			keyLabel="Editable"
			orientation="horizontal"
			style={editableHorizontalDemoStyle}
			value={
				<span style={valueWithIconStyle}>
					{val}
					<DsTooltip content="Additional info about this field">
						<DsIcon icon="info" size="tiny" />
					</DsTooltip>
				</span>
			}
			editInput={
				<span style={valueWithIconStyle}>
					<DsTextInput value={val} onValueChange={setVal} size="small" style={mediumInputStyle} />
					<DsTooltip content="Additional info about this field">
						<DsIcon icon="info" size="tiny" />
					</DsTooltip>
				</span>
			}
		/>
	);
};

export const Group = () => {
	const [serial, setSerial] = useState('99887766');
	const [manufacturer, setManufacturer] = useState('cisco');
	const manufacturerOptions: DsSelectOption[] = [
		{ label: 'Cisco Systems', value: 'cisco' },
		{ label: 'Juniper Networks', value: 'juniper' },
		{ label: 'Arista Networks', value: 'arista' },
		{ label: 'Nokia', value: 'nokia' },
	];

	return (
		<div style={pairsColumnStyle}>
			<DsKeyValuePair
				keyLabel="MAC"
				value="00:1A:2B:3C:4D:5E"
				readOnly
				orientation="horizontal"
				style={contentsStyle}
			/>
			<DsKeyValuePair
				keyLabel="SN"
				value={serial}
				orientation="horizontal"
				style={contentsStyle}
				editInput={<DsTextInput value={serial} onValueChange={setSerial} size="small" />}
			/>
			<DsKeyValuePair
				keyLabel="Model"
				value="Cisco RTR-X2000"
				readOnly
				orientation="horizontal"
				style={contentsStyle}
			/>
			<DsKeyValuePair
				keyLabel="MFR"
				value={manufacturerOptions.find((o) => o.value === manufacturer)?.label ?? manufacturer}
				orientation="horizontal"
				style={contentsStyle}
				editInput={
					<DsSelect
						options={manufacturerOptions}
						value={manufacturer}
						onValueChange={setManufacturer}
						size="small"
					/>
				}
			/>
		</div>
	);
};

export const ResponsiveWidth = () => {
	const [width, setWidth] = useState(400);
	const [serial, setSerial] = useState('99887766');
	const [description, setDescription] = useState(
		// cspell:disable-next-line
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
	);

	return (
		<DsStack direction="column" gap={16}>
			<DsSlider
				label="Container width"
				value={width}
				min={200}
				max={700}
				onValueChange={(value) => {
					setWidth(value as number);
				}}
				formatValue={(current) => `${String(current)}px`}
			/>

			<div style={responsivePairsStyle(width)}>
				<DsKeyValuePair
					keyLabel="MAC"
					value="00:1A:2B:3C:4D:5E"
					readOnly
					orientation="horizontal"
					style={contentsStyle}
				/>
				<DsKeyValuePair
					keyLabel="Serial Number"
					value={serial}
					orientation="horizontal"
					style={contentsStyle}
					editInput={<DsTextInput value={serial} onValueChange={setSerial} size="small" />}
				/>
				<DsKeyValuePair
					keyLabel="Model"
					value="Cisco RTR-X2000"
					readOnly
					orientation="horizontal"
					style={contentsStyle}
				/>
				<DsKeyValuePair
					keyLabel="Firmware Version"
					value="v4.2.1-build.2847"
					readOnly
					orientation="horizontal"
					style={contentsStyle}
				/>
				<DsKeyValuePair
					keyLabel="Description"
					value={description}
					orientation="horizontal"
					style={contentsStyle}
					editInput={
						<DsTextarea
							value={description}
							onValueChange={setDescription}
							rows={4}
							style={descriptionTextareaStyle}
						/>
					}
				/>
			</div>
		</DsStack>
	);
};

export const ValueTypes = () => {
	const [editable, setEditable] = useState('Editable value');
	const [manufacturer, setManufacturer] = useState('cisco');
	const [description, setDescription] = useState(
		// cspell:disable-next-line
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
	);
	const [empty, setEmpty] = useState('');

	const manufacturerOptions: DsSelectOption[] = [
		{ label: 'Cisco Systems', value: 'cisco' },
		{ label: 'Juniper Networks', value: 'juniper' },
		{ label: 'Arista Networks', value: 'arista' },
		{ label: 'Nokia', value: 'nokia' },
	];

	return (
		<div style={pairsColumnStyle}>
			<DsKeyValuePair
				keyLabel="Read-only"
				value="Read only value"
				readOnly
				orientation="horizontal"
				style={contentsStyle}
			/>

			<DsKeyValuePair
				keyLabel="Editable"
				value={editable}
				orientation="horizontal"
				style={contentsStyle}
				editInput={
					<DsTextInput value={editable} onValueChange={setEditable} size="small" style={mediumInputStyle} />
				}
			/>

			<DsKeyValuePair
				keyLabel="MFR"
				value={manufacturerOptions.find((o) => o.value === manufacturer)?.label ?? manufacturer}
				orientation="horizontal"
				style={contentsStyle}
				editInput={
					<DsSelect
						options={manufacturerOptions}
						value={manufacturer}
						onValueChange={setManufacturer}
						size="small"
					/>
				}
			/>

			<DsKeyValuePair
				keyLabel="Status"
				value={
					<span style={statusBadgeStyle}>
						<DsIcon icon="check_circle" size="tiny" />
						Active
					</span>
				}
				readOnly
				orientation="horizontal"
				style={contentsStyle}
			/>

			<DsKeyValuePair
				keyLabel="Tags"
				value={
					<span style={tagGroupStyle}>
						<DsTag label="Tag-name" size="small" />
						<DsTag label="Tag-name" size="small" />
						<DsTag label="Tag-name" size="small" />
					</span>
				}
				readOnly
				orientation="horizontal"
				style={contentsStyle}
			/>

			<DsKeyValuePair
				keyLabel="Description"
				value={<span style={fullTextValueStyle}>{description}</span>}
				orientation="horizontal"
				style={contentsStyle}
				editInput={
					<DsTextarea
						value={description}
						onValueChange={setDescription}
						rows={4}
						style={descriptionTextareaStyle}
					/>
				}
			/>

			<DsKeyValuePair
				keyLabel="Empty Value"
				value={empty || undefined}
				orientation="horizontal"
				style={contentsStyle}
				editInput={<DsTextInput value={empty} onValueChange={setEmpty} size="small" />}
			/>
		</div>
	);
};
