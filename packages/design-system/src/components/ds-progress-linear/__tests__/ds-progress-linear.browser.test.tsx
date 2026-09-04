import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';

import { DsProgressLinear } from '../index';

describe('DsProgressLinear', () => {
	it('renders label, value text and caption', async () => {
		await page.render(<DsProgressLinear value={35} label="File Upload" caption="Uploading..." />);

		await expect.element(page.getByRole('progressbar')).toBeInTheDocument();
		await expect.element(page.getByText('File Upload')).toBeVisible();
		await expect.element(page.getByText('35%')).toBeVisible();
		await expect.element(page.getByText('Uploading...')).toBeVisible();
	});

	it('renders one progressbar and caption per variant', async () => {
		await page.render(
			<>
				<DsProgressLinear variant="initial" value={0} label="File Upload" caption="Waiting to start..." />
				<DsProgressLinear variant="progress" value={35} label="File Upload" caption="Uploading..." />
				<DsProgressLinear
					variant="interrupted"
					value={35}
					label="File Upload"
					caption="Upload interrupted."
				/>
				<DsProgressLinear variant="success" value={100} label="File Upload" caption="Upload complete." />
				<DsProgressLinear
					variant="error"
					value={0}
					label="File Upload"
					caption="Error: File exceeds size limit."
				/>
			</>,
		);

		expect(page.getByRole('progressbar').all()).toHaveLength(5);

		await expect.element(page.getByText('Waiting to start...')).toBeVisible();
		await expect.element(page.getByText('Uploading...')).toBeVisible();
		await expect.element(page.getByText('Upload interrupted.')).toBeVisible();
		await expect.element(page.getByText('Upload complete.')).toBeVisible();
		await expect.element(page.getByText('Error: File exceeds size limit.')).toBeVisible();
	});

	it('renders a progressbar, label and value text for each size', async () => {
		await page.render(
			<>
				<DsProgressLinear size="small" value={50} label="File Upload" caption="Uploading..." />
				<DsProgressLinear size="medium" value={50} label="File Upload" caption="Uploading..." />
				<DsProgressLinear size="large" value={50} label="File Upload" caption="Uploading..." />
			</>,
		);

		expect(page.getByRole('progressbar').all()).toHaveLength(3);
		expect(page.getByText('File Upload').all()).toHaveLength(3);
		expect(page.getByText('50%').all()).toHaveLength(3);
	});

	it('renders a ReactNode caption as-is', async () => {
		await page.render(
			<DsProgressLinear
				value={60}
				label="Processing"
				caption={
					<span>
						Step <strong>3</strong> of <strong>5</strong>
					</span>
				}
			/>,
		);

		await expect.element(page.getByRole('progressbar')).toBeInTheDocument();
		await expect.element(page.getByText('Processing')).toBeVisible();
		await expect.element(page.getByText('3')).toBeInTheDocument();
		await expect.element(page.getByText('5')).toBeInTheDocument();
	});

	it('hides the value text when showValue is false', async () => {
		await page.render(<DsProgressLinear value={70} showValue={false} />);

		await expect.element(page.getByRole('progressbar')).toBeInTheDocument();
		await expect.element(page.getByText('70%')).not.toBeInTheDocument();
	});

	it('reflects the controlled value in aria-valuenow and wires the range slider', async () => {
		const Controlled = () => {
			const [value, setValue] = useState(0);

			return (
				<>
					<input
						type="range"
						min={0}
						max={100}
						value={value}
						onChange={(e) => setValue(Number(e.target.value))}
					/>

					<DsProgressLinear value={value} label="File Upload" caption="Uploading..." />
				</>
			);
		};

		await page.render(<Controlled />);

		const progressbar = page.getByRole('progressbar');
		await expect.element(progressbar).toBeInTheDocument();
		await expect.element(progressbar).toHaveAttribute('aria-valuenow', '0');
		await expect.element(page.getByText('0%')).toBeInTheDocument();

		const slider = page.getByRole('slider');
		await expect.element(slider).toHaveAttribute('min', '0');
		await expect.element(slider).toHaveAttribute('max', '100');
	});

	it('renders the full size × variant matrix', async () => {
		await page.render(
			<>
				<DsProgressLinear
					size="small"
					variant="initial"
					value={0}
					label="File Upload"
					caption="Waiting to start..."
				/>
				<DsProgressLinear
					size="small"
					variant="progress"
					value={35}
					label="File Upload"
					caption="Uploading..."
				/>
				<DsProgressLinear
					size="small"
					variant="interrupted"
					value={35}
					label="File Upload"
					caption="Upload interrupted."
				/>
				<DsProgressLinear
					size="small"
					variant="success"
					value={100}
					label="File Upload"
					caption="Upload complete."
				/>
				<DsProgressLinear
					size="small"
					variant="error"
					value={0}
					label="File Upload"
					caption="Error: File exceeds size limit."
				/>

				<DsProgressLinear
					size="medium"
					variant="initial"
					value={0}
					label="File Upload"
					caption="Waiting to start..."
				/>
				<DsProgressLinear
					size="medium"
					variant="progress"
					value={35}
					label="File Upload"
					caption="Uploading..."
				/>
				<DsProgressLinear
					size="medium"
					variant="interrupted"
					value={35}
					label="File Upload"
					caption="Upload interrupted."
				/>
				<DsProgressLinear
					size="medium"
					variant="success"
					value={100}
					label="File Upload"
					caption="Upload complete."
				/>
				<DsProgressLinear
					size="medium"
					variant="error"
					value={0}
					label="File Upload"
					caption="Error: File exceeds size limit."
				/>

				<DsProgressLinear
					size="large"
					variant="initial"
					value={0}
					label="File Upload"
					caption="Waiting to start..."
				/>
				<DsProgressLinear
					size="large"
					variant="progress"
					value={35}
					label="File Upload"
					caption="Uploading..."
				/>
				<DsProgressLinear
					size="large"
					variant="interrupted"
					value={35}
					label="File Upload"
					caption="Upload interrupted."
				/>
				<DsProgressLinear
					size="large"
					variant="success"
					value={100}
					label="File Upload"
					caption="Upload complete."
				/>
				<DsProgressLinear
					size="large"
					variant="error"
					value={0}
					label="File Upload"
					caption="Error: File exceeds size limit."
				/>
			</>,
		);

		expect(page.getByRole('progressbar').all()).toHaveLength(15);
		expect(page.getByText('File Upload').all()).toHaveLength(15);
		expect(page.getByText('Waiting to start...').all()).toHaveLength(3);
		expect(page.getByText('Upload complete.').all()).toHaveLength(3);
	});
});
