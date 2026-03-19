import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import DsKeyValuePair from './ds-key-value-pair';
import { dsKeyValuePairOrientations } from './ds-key-value-pair.types';
import { DsTextInput } from '../ds-text-input';
import { DsTextarea } from '../ds-textarea';
import { DsSelect, type DsSelectOption } from '../ds-select';
import { DsIcon } from '../ds-icon';
import { DsTag } from '../ds-tag';
import { DsTooltip } from '../ds-tooltip';
import storyStyles from './ds-key-value-pair.stories.module.scss';

const MANUFACTURER_OPTIONS: DsSelectOption[] = [
	{ label: 'Cisco Systems', value: 'cisco' },
	{ label: 'Juniper Networks', value: 'juniper' },
	{ label: 'Arista Networks', value: 'arista' },
	{ label: 'Nokia', value: 'nokia' },
];

const meta: Meta<typeof DsKeyValuePair> = {
	title: 'Design System/KeyValuePair',
	component: DsKeyValuePair,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		orientation: { control: 'select', options: dsKeyValuePairOrientations },
		readOnly: { control: 'boolean' },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;

type Story = StoryObj<typeof DsKeyValuePair>;

export const ReadOnlyVertical: Story = {
	args: {
		keyLabel: 'Start time',
		value: '2024-05-23 16:47',
		readOnly: true,
		orientation: 'vertical',
	},
};

export const ReadOnlyHorizontal: Story = {
	args: {
		keyLabel: 'MAC',
		value: '00:1A:2B:3C:4D:5E',
		readOnly: true,
		orientation: 'horizontal',
	},
};

export const CustomLabel: Story = {
	args: {
		keyLabel: (
			<span className={storyStyles.iconLabel}>
				<DsIcon icon="info" size="tiny" />
				Serial Number
			</span>
		),
		value: '99887766',
		readOnly: true,
		orientation: 'horizontal',
	},
};

export const EditableVertical: Story = {
	render: function Render() {
		const [serial, setSerial] = useState('99887766');

		return (
			<DsKeyValuePair
				keyLabel="Serial Number"
				value={serial}
				orientation="vertical"
				className={storyStyles.editableVerticalDemo}
				editInput={<DsTextInput value={serial} onValueChange={setSerial} size="small" />}
			/>
		);
	},
};

export const EditableHorizontal: Story = {
	render: function Render() {
		const [model, setModel] = useState('Cisco RTR-X2000');

		return (
			<DsKeyValuePair
				keyLabel="Model"
				value={model}
				orientation="horizontal"
				className={storyStyles.editableHorizontalDemo}
				editInput={<DsTextInput value={model} onValueChange={setModel} size="small" />}
			/>
		);
	},
};

export const WithTrailingIcon: Story = {
	name: 'Editable with trailing icon + tooltip',
	render: function Render() {
		const [val, setVal] = useState('Editable value');

		return (
			<DsKeyValuePair
				keyLabel="Editable"
				orientation="horizontal"
				className={storyStyles.editableHorizontalDemo}
				value={
					<span className={storyStyles.valueWithIcon}>
						{val}
						<DsTooltip content="Additional info about this field">
							<DsIcon icon="info" size="tiny" />
						</DsTooltip>
					</span>
				}
				editInput={
					<span className={storyStyles.valueWithIcon}>
						<DsTextInput
							value={val}
							onValueChange={setVal}
							size="small"
							className={storyStyles.mediumInput}
						/>
						<DsTooltip content="Additional info about this field">
							<DsIcon icon="info" size="tiny" />
						</DsTooltip>
					</span>
				}
			/>
		);
	},
};

export const Group: Story = {
	render: function Render() {
		const [serial, setSerial] = useState('99887766');
		const [manufacturer, setManufacturer] = useState('cisco');

		return (
			<div className={storyStyles.pairsColumn}>
				<DsKeyValuePair keyLabel="MAC" value="00:1A:2B:3C:4D:5E" readOnly orientation="horizontal" />
				<DsKeyValuePair
					keyLabel="SN"
					value={serial}
					orientation="horizontal"
					editInput={
						<DsTextInput
							value={serial}
							onValueChange={setSerial}
							size="small"
							className={storyStyles.narrowInput}
						/>
					}
				/>
				<DsKeyValuePair keyLabel="Model" value="Cisco RTR-X2000" readOnly orientation="horizontal" />
				<DsKeyValuePair
					keyLabel="MFR"
					value={MANUFACTURER_OPTIONS.find((o) => o.value === manufacturer)?.label ?? manufacturer}
					orientation="horizontal"
					editInput={
						<DsSelect
							options={MANUFACTURER_OPTIONS}
							value={manufacturer}
							onValueChange={setManufacturer}
							size="small"
						/>
					}
				/>
			</div>
		);
	},
};

const MIN_WIDTH = 200;
const MAX_WIDTH = 700;
const DEFAULT_WIDTH = 400;

export const ResponsiveWidth: Story = {
	name: 'Responsive container width',
	render: function Render() {
		const [width, setWidth] = useState(DEFAULT_WIDTH);
		const [serial, setSerial] = useState('99887766');

		return (
			<div className={storyStyles.responsiveDemo}>
				<div className={storyStyles.responsiveSlider}>
					<span>{MIN_WIDTH}px</span>
					<input
						type="range"
						min={MIN_WIDTH}
						max={MAX_WIDTH}
						value={width}
						onChange={(e) => setWidth(Number(e.target.value))}
						className={storyStyles.responsiveSliderInput}
					/>
					<span>{MAX_WIDTH}px</span>
					<span>({width}px)</span>
				</div>

				<div className={storyStyles.responsivePairs} style={{ width }}>
					<DsKeyValuePair keyLabel="MAC" value="00:1A:2B:3C:4D:5E" readOnly orientation="horizontal" />
					<DsKeyValuePair
						keyLabel="Serial Number"
						value={serial}
						orientation="horizontal"
						editInput={
							<DsTextInput
								value={serial}
								onValueChange={setSerial}
								size="small"
								className={storyStyles.narrowInput}
							/>
						}
					/>
					<DsKeyValuePair keyLabel="Model" value="Cisco RTR-X2000" readOnly orientation="horizontal" />
					<DsKeyValuePair
						keyLabel="Firmware Version"
						value="v4.2.1-build.2847"
						readOnly
						orientation="horizontal"
					/>
				</div>
			</div>
		);
	},
};

const LONG_TEXT =
	// cspell:disable-next-line
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.';

export const ValueTypes: Story = {
	name: 'Value types (Figma reference)',
	render: function Render() {
		const [editable, setEditable] = useState('Editable value');
		const [manufacturer, setManufacturer] = useState('cisco');
		const [description, setDescription] = useState(LONG_TEXT);
		const [empty, setEmpty] = useState('');

		return (
			<div className={storyStyles.pairsColumn}>
				<DsKeyValuePair keyLabel="Read-only" value="Read only value" readOnly orientation="horizontal" />

				<DsKeyValuePair
					keyLabel="Editable"
					value={editable}
					orientation="horizontal"
					editInput={
						<DsTextInput
							value={editable}
							onValueChange={setEditable}
							size="small"
							className={storyStyles.mediumInput}
						/>
					}
				/>

				<DsKeyValuePair
					keyLabel="MFR"
					value={MANUFACTURER_OPTIONS.find((o) => o.value === manufacturer)?.label ?? manufacturer}
					orientation="horizontal"
					editInput={
						<DsSelect
							options={MANUFACTURER_OPTIONS}
							value={manufacturer}
							onValueChange={setManufacturer}
							size="small"
						/>
					}
				/>

				<DsKeyValuePair
					keyLabel="Status"
					value={
						<span className={storyStyles.statusBadge}>
							<DsIcon icon="check_circle" size="tiny" />
							Active
						</span>
					}
					readOnly
					orientation="horizontal"
				/>

				<DsKeyValuePair
					keyLabel="Tags"
					value={
						<span className={storyStyles.tagGroup}>
							<DsTag label="Tag-name" size="small" />
							<DsTag label="Tag-name" size="small" />
							<DsTag label="Tag-name" size="small" />
						</span>
					}
					readOnly
					orientation="horizontal"
				/>

				<DsKeyValuePair
					keyLabel="Description"
					value={description}
					orientation="horizontal"
					editInput={
						<DsTextarea
							value={description}
							onValueChange={setDescription}
							rows={4}
							className={storyStyles.descriptionTextarea}
						/>
					}
				/>

				<DsKeyValuePair
					keyLabel="Empty Value"
					value={empty || undefined}
					orientation="horizontal"
					editInput={<DsTextInput value={empty} onValueChange={setEmpty} size="small" />}
				/>
			</div>
		);
	},
};
