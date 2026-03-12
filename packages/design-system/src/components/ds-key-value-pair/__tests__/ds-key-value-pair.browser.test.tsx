import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { page, userEvent } from 'vitest/browser';

import DsKeyValuePair from '../ds-key-value-pair';
import { DsTextInput } from '../../ds-text-input';
import { DsSelect, type DsSelectOption } from '../../ds-select';
import { DsIcon } from '../../ds-icon';
import { DsTag } from '../../ds-tag';
import { DsTooltip } from '../../ds-tooltip';
import { DsTextarea } from '../../ds-textarea';

const MANUFACTURER_OPTIONS: DsSelectOption[] = [
	{ label: 'Cisco Systems', value: 'cisco' },
	{ label: 'Juniper Networks', value: 'juniper' },
	{ label: 'Arista Networks', value: 'arista' },
	{ label: 'Nokia', value: 'nokia' },
];

describe('DsKeyValuePair', () => {
	it('should render read-only vertical layout', async () => {
		await page.render(
			<DsKeyValuePair label="Start time" value="2024-05-23 16:47" readOnly layout="vertical" />,
		);

		await expect.element(page.getByText('Start time')).toBeInTheDocument();
		await expect.element(page.getByText('2024-05-23 16:47')).toBeVisible();
	});

	it('should render read-only horizontal layout', async () => {
		await page.render(<DsKeyValuePair label="MAC" value="00:1A:2B:3C:4D:5E" readOnly layout="horizontal" />);

		await expect.element(page.getByText('MAC')).toBeInTheDocument();
		await expect.element(page.getByText('00:1A:2B:3C:4D:5E')).toBeVisible();
	});

	it('should render custom label content', async () => {
		await page.render(
			<DsKeyValuePair
				label={
					<span>
						<DsIcon icon="info" size="tiny" />
						Serial Number
					</span>
				}
				value="99887766"
				readOnly
				layout="horizontal"
			/>,
		);

		await expect.element(page.getByText('Serial Number')).toBeInTheDocument();
		await expect.element(page.getByText('99887766')).toBeVisible();
	});

	it('should reveal editor on hover in editable vertical mode', async () => {
		await page.render(
			<DsKeyValuePair label="Serial Number" value="99887766" layout="vertical">
				<DsTextInput defaultValue="99887766" size="small" />
			</DsKeyValuePair>,
		);

		await expect.element(page.getByText('99887766')).toBeVisible();

		await page.getByText('99887766').hover();

		await expect.element(page.getByRole('textbox')).toBeVisible();
	});

	it('should render editable horizontal layout', async () => {
		await page.render(
			<DsKeyValuePair label="Model" value="Cisco RTR-X2000" layout="horizontal">
				<DsTextInput defaultValue="Cisco RTR-X2000" size="small" />
			</DsKeyValuePair>,
		);

		await expect.element(page.getByText('Cisco RTR-X2000')).toBeVisible();
		await expect.element(page.getByText('Model')).toBeInTheDocument();
	});

	it('should support keyboard edit cycle: tab in, edit, tab out', async () => {
		await page.render(
			<DsKeyValuePair label="Serial Number" value="99887766" layout="horizontal">
				<DsTextInput defaultValue="99887766" size="small" />
			</DsKeyValuePair>,
		);

		await expect.element(page.getByText('99887766')).toBeVisible();

		await userEvent.tab();

		const input = page.getByRole('textbox');
		await expect.element(input).toBeVisible();

		await userEvent.tab();

		await input.clear();
		await input.fill('NEW SERIAL');
		await expect.element(input).toHaveValue('NEW SERIAL');

		await userEvent.tab();

		await expect.element(page.getByText('99887766')).toBeVisible();
	});

	it('should reveal editor with trailing icon on hover', async () => {
		await page.render(
			<DsKeyValuePair
				label="Editable"
				layout="horizontal"
				value={
					<span>
						Editable value
						<DsTooltip content="Additional info about this field">
							<DsIcon icon="info" size="tiny" />
						</DsTooltip>
					</span>
				}
			>
				<span>
					<DsTextInput defaultValue="Editable value" size="small" />
					<DsTooltip content="Additional info about this field">
						<DsIcon icon="info" size="tiny" />
					</DsTooltip>
				</span>
			</DsKeyValuePair>,
		);

		await expect.element(page.getByText('Editable value')).toBeVisible();
		await expect.element(page.getByText('info').first()).toBeVisible();

		await page.getByText('Editable value').hover();

		await expect.element(page.getByRole('textbox')).toBeVisible();
	});

	it('should fall back to value display without children', async () => {
		await page.render(<DsKeyValuePair label="MFR" value="Cisco Systems" readOnly={false} />);

		await expect.element(page.getByText('Cisco Systems')).toBeVisible();
	});

	it('should render a group of key-value pairs', async () => {
		function Group() {
			const [manufacturer, setManufacturer] = useState('cisco');

			return (
				<div>
					<DsKeyValuePair label="MAC" value="00:1A:2B:3C:4D:5E" readOnly layout="horizontal" />
					<DsKeyValuePair label="SN" value="99887766" layout="horizontal">
						<DsTextInput defaultValue="99887766" size="small" />
					</DsKeyValuePair>
					<DsKeyValuePair label="Model" value="Cisco RTR-X2000" readOnly layout="horizontal" />
					<DsKeyValuePair
						label="MFR"
						value={MANUFACTURER_OPTIONS.find((o) => o.value === manufacturer)?.label ?? manufacturer}
						layout="horizontal"
					>
						<DsSelect
							options={MANUFACTURER_OPTIONS}
							value={manufacturer}
							onValueChange={setManufacturer}
							size="small"
						/>
					</DsKeyValuePair>
				</div>
			);
		}

		await page.render(<Group />);

		await expect.element(page.getByText('MAC')).toBeInTheDocument();
		await expect.element(page.getByText('MFR')).toBeInTheDocument();
		await expect.element(page.getByText('00:1A:2B:3C:4D:5E')).toBeVisible();
		await expect.element(page.getByText('Cisco Systems').first()).toBeVisible();
	});

	it('should render responsive width layout with slider', async () => {
		function Responsive() {
			const [width, setWidth] = useState(400);

			return (
				<div>
					<input
						type="range"
						min={200}
						max={700}
						value={width}
						onChange={(e) => setWidth(Number(e.target.value))}
					/>
					<div style={{ width }}>
						<DsKeyValuePair label="MAC" value="00:1A:2B:3C:4D:5E" readOnly layout="horizontal" />
						<DsKeyValuePair label="Serial Number" value="99887766" layout="horizontal">
							<DsTextInput defaultValue="99887766" size="small" />
						</DsKeyValuePair>
						<DsKeyValuePair label="Model" value="Cisco RTR-X2000" readOnly layout="horizontal" />
						<DsKeyValuePair label="Firmware Version" value="v4.2.1-build.2847" readOnly layout="horizontal" />
					</div>
				</div>
			);
		}

		await page.render(<Responsive />);

		await expect.element(page.getByText('MAC')).toBeInTheDocument();
		await expect.element(page.getByText('00:1A:2B:3C:4D:5E')).toBeVisible();
		await expect.element(page.getByRole('slider')).toBeInTheDocument();
	});

	it('should render various value types', async () => {
		const LONG_TEXT =
			// cspell:disable-next-line
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.';

		function ValueTypes() {
			const [manufacturer, setManufacturer] = useState('cisco');

			return (
				<div>
					<DsKeyValuePair label="Read-only" value="Read only value" readOnly layout="horizontal" />

					<DsKeyValuePair label="Editable" value="Editable value" layout="horizontal">
						<DsTextInput defaultValue="Editable value" size="small" />
					</DsKeyValuePair>

					<DsKeyValuePair
						label="MFR"
						value={MANUFACTURER_OPTIONS.find((o) => o.value === manufacturer)?.label ?? manufacturer}
						layout="horizontal"
					>
						<DsSelect
							options={MANUFACTURER_OPTIONS}
							value={manufacturer}
							onValueChange={setManufacturer}
							size="small"
						/>
					</DsKeyValuePair>

					<DsKeyValuePair
						label="Status"
						value={
							<span>
								<DsIcon icon="check_circle" size="tiny" />
								Active
							</span>
						}
						readOnly
						layout="horizontal"
					/>

					<DsKeyValuePair
						label="Tags"
						value={
							<span>
								<DsTag label="Tag-name" size="small" />
								<DsTag label="Tag-name" size="small" />
								<DsTag label="Tag-name" size="small" />
							</span>
						}
						readOnly
						layout="horizontal"
					/>

					<DsKeyValuePair label="Description" value={LONG_TEXT} layout="horizontal">
						<DsTextarea defaultValue={LONG_TEXT} rows={4} />
					</DsKeyValuePair>
				</div>
			);
		}

		await page.render(<ValueTypes />);

		await expect.element(page.getByText('Read only value')).toBeVisible();
		await expect.element(page.getByText('Active')).toBeVisible();
		await expect.element(page.getByText('Tag-name').first()).toBeVisible();
		await expect.element(page.getByText('Cisco Systems').first()).toBeVisible();
	});
});
