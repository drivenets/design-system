import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { DsSkeleton } from './index';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	// eslint-disable-next-line @drivenets/ds-internal/no-cross-component-internal-import
} from '../ds-table/components/core-table';
import styles from './ds-skeleton.stories.module.scss';
import skeletonStyles from './ds-skeleton.module.scss';

const meta: Meta<typeof DsSkeleton> = {
	title: 'Design System/Skeleton',
	parameters: {
		layout: 'padded',
	},
};

export default meta;

type Story = StoryObj<typeof DsSkeleton>;

/**
 * Color variants - gray (default) and blue
 */
export const ColorVariants: Story = {
	render: () => (
		<div className={styles.verticalStack} data-testid="color-variants">
			<div>
				<h4 className={styles.sectionLabel}>gray (default)</h4>
				<DsSkeleton.Text color="gray" />
				<DsSkeleton.Circle color="gray" />
				<DsSkeleton.Rect width={40} height={40} color="gray" />
			</div>
			<div>
				<h4 className={styles.sectionLabel}>Blue</h4>
				<DsSkeleton.Text color="blue" />
				<DsSkeleton.Circle color="blue" />
				<DsSkeleton.Rect width={40} height={40} color="blue" />
			</div>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const container = canvas.getByTestId('color-variants');

		const graySkeletons = container.querySelectorAll(`.${skeletonStyles.gray}`);
		const blueSkeletons = container.querySelectorAll(`.${skeletonStyles.blue}`);

		await expect(graySkeletons).toHaveLength(3);
		await expect(blueSkeletons).toHaveLength(3);
	},
};

/**
 * Text skeleton - typography variants, multiple lines, width, and radius options
 */
export const TextVariants: Story = {
	render: () => (
		<div className={styles.verticalStack}>
			<div>
				<h4 className={styles.sectionLabel}>Typography Variants</h4>
				<div className={styles.section}>
					<DsSkeleton.Text typographyVariant="heading1" />
					<DsSkeleton.Text typographyVariant="heading3" />
					<DsSkeleton.Text typographyVariant="body-md-reg" />
					<DsSkeleton.Text typographyVariant="body-sm-reg" />
				</div>
			</div>
			<div>
				<h4 className={styles.sectionLabel}>Multiple Lines</h4>
				<DsSkeleton.Text typographyVariant="body-md-reg" lines={3} />
			</div>
			<div>
				<h4 className={styles.sectionLabel}>Custom Width</h4>
				<div className={styles.sectionSmall}>
					<DsSkeleton.Text typographyVariant="body-md-reg" width="80%" />
					<DsSkeleton.Text typographyVariant="body-md-reg" width={200} />
				</div>
			</div>
			<div>
				<h4 className={styles.sectionLabel}>Border Radius</h4>
				<div className={styles.sectionSmall}>
					<DsSkeleton.Text typographyVariant="body-md-reg" radius="round" />
					<DsSkeleton.Text typographyVariant="body-md-reg" radius="default" />
					<DsSkeleton.Text typographyVariant="body-md-reg" radius={12} />
				</div>
			</div>
		</div>
	),
};

/**
 * Circle skeleton with avatar sizes
 */
export const CircleSizes: Story = {
	render: () => (
		<div className={styles.sizesRow} data-testid="circle-sizes">
			<div className={styles.sizeItem}>
				<DsSkeleton.Circle size="xsm" />
				<p className={styles.label}>xsm (24px)</p>
			</div>
			<div className={styles.sizeItem}>
				<DsSkeleton.Circle size="sm" />
				<p className={styles.label}>sm (32px)</p>
			</div>
			<div className={styles.sizeItem}>
				<DsSkeleton.Circle size="regular" />
				<p className={styles.label}>regular (40px)</p>
			</div>
			<div className={styles.sizeItem}>
				<DsSkeleton.Circle size="md" />
				<p className={styles.label}>md (48px)</p>
			</div>
			<div className={styles.sizeItem}>
				<DsSkeleton.Circle size="lg" />
				<p className={styles.label}>lg (64px)</p>
			</div>
			<div className={styles.sizeItem}>
				<DsSkeleton.Circle size="xl" />
				<p className={styles.label}>xl (80px)</p>
			</div>
			<div className={styles.sizeItem}>
				<DsSkeleton.Circle size={100} />
				<p className={styles.label}>custom (100px)</p>
			</div>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const container = canvas.getByTestId('circle-sizes');

		const circles = container.querySelectorAll(`.${skeletonStyles.circle}`);
		await expect(circles).toHaveLength(7);

		// Verify sizes match avatar size mapping
		const expectedSizes = ['24px', '32px', '40px', '48px', '64px', '80px', '100px'];

		circles.forEach((circle, index) => {
			void expect(circle).toHaveStyle({ width: expectedSizes[index], height: expectedSizes[index] });
		});
	},
};

/**
 * Rectangle skeleton - buttons, badges, images
 */
export const RectangleShapes: Story = {
	render: () => (
		<div className={styles.section} data-testid="rectangle-shapes">
			<div className={styles.shapeRow}>
				<DsSkeleton.Rect width={120} height={40} />
				<span className={styles.label}>Button</span>
			</div>
			<div className={styles.shapeRow}>
				<DsSkeleton.Rect width={80} height={24} radius="round" />
				<span className={styles.label}>Badge</span>
			</div>
			<div className={styles.shapeRow}>
				<DsSkeleton.Rect width={200} height={150} radius={8} />
				<span className={styles.label}>Image</span>
			</div>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const container = canvas.getByTestId('rectangle-shapes');

		const rectangles = container.querySelectorAll(`.${skeletonStyles.rectangle}`);
		await expect(rectangles).toHaveLength(3);

		// Button skeleton
		await expect(rectangles[0]).toHaveStyle({ width: '120px', height: '40px', borderRadius: '4px' });

		// Badge skeleton (round radius)
		await expect(rectangles[1]).toHaveStyle({ width: '80px', height: '24px', borderRadius: '999px' });

		// Image skeleton (custom radius)
		await expect(rectangles[2]).toHaveStyle({ width: '200px', height: '150px', borderRadius: '8px' });
	},
};

/**
 * Card skeleton composition example
 */
export const CardSkeleton: Story = {
	render: () => (
		<div className={styles.cardContainer}>
			<div className={styles.cardHeader}>
				<DsSkeleton.Circle size="lg" />
				<div className={styles.cardHeaderContent}>
					<DsSkeleton.Text typographyVariant="heading4" width="60%" />
					<div className={styles.cardHeaderSubtitle}>
						<DsSkeleton.Text typographyVariant="body-sm-reg" width="80%" />
					</div>
				</div>
			</div>
			<DsSkeleton.Text typographyVariant="body-md-reg" lines={3} />
			<div className={styles.cardActions}>
				<DsSkeleton.Rect width={100} height={36} radius={4} />
				<DsSkeleton.Rect width={100} height={36} radius={4} />
			</div>
		</div>
	),
};

/**
 * Table skeleton composition - shows a loading state for tabular data
 */
export const TableSkeleton: Story = {
	render: () => (
		<div className={styles.tableContainer}>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Progress</TableHead>
						<TableHead>Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{Array.from({ length: 5 }).map((_, i) => (
						<TableRow key={i}>
							<TableCell>
								<div className={styles.tableNameCell}>
									<DsSkeleton.Circle size="sm" />
									<DsSkeleton.Text width={120} />
								</div>
							</TableCell>
							<TableCell>
								<DsSkeleton.Rect width={80} height={24} radius="round" />
							</TableCell>
							<TableCell>
								<DsSkeleton.Rect width={100} height={8} radius={4} />
							</TableCell>
							<TableCell>
								<DsSkeleton.Rect width={32} height={32} radius={4} />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	),
};
