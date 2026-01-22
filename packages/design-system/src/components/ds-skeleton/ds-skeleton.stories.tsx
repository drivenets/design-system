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
} from '../ds-table/components/core-table';
import styles from './ds-skeleton.stories.module.scss';

const meta: Meta<typeof DsSkeleton> = {
	title: 'Design System/Skeleton',
	component: DsSkeleton,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
};

export default meta;
type Story = StoryObj<typeof DsSkeleton>;

/**
 * Default skeleton - renders a 3-line paragraph skeleton
 */
export const Default: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		// Skeleton renders span elements with aria-hidden
		const spans = canvasElement.querySelectorAll('span[aria-hidden="true"]');
		await expect(spans.length).toBeGreaterThanOrEqual(1);
	},
};

/**
 * Loading wrapper pattern - shows skeleton when loading, content when loaded
 */
export const LoadingWrapper: Story = {
	args: {
		loading: true,
		children: (
			<div className={styles.loadingContent}>
				<h2>User Profile</h2>
				<p>This is the actual content that appears when loading is complete.</p>
			</div>
		),
	},
	render: (args) => <DsSkeleton {...args} />,
	play: async ({ canvasElement }) => {
		// When loading=true, skeleton should show, not children
		const skeleton = canvasElement.querySelector('span[aria-hidden="true"]');

		await expect(skeleton).toBeInTheDocument();
		await expect(within(canvasElement).queryByText('User Profile')).not.toBeInTheDocument();
	},
};

/**
 * Loaded content - when loading=false, children are rendered instead of skeleton
 */
export const LoadedContent: Story = {
	args: {
		loading: false,
		children: (
			<div className={styles.loadingContent} data-testid="loaded-content">
				<h2>User Profile</h2>
				<p>Content is now visible because loading is false.</p>
			</div>
		),
	},
	render: (args) => <DsSkeleton {...args} />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByTestId('loaded-content')).toBeInTheDocument();
		await expect(canvas.getByText('User Profile')).toBeInTheDocument();

		const skeleton = canvasElement.querySelector('span[aria-hidden="true"]');
		await expect(skeleton).not.toBeInTheDocument();
	},
};

/**
 * Color variants - grey (default) and blue
 */
export const ColorVariants: Story = {
	render: () => (
		<div className={styles.verticalStack}>
			<div>
				<h4 className={styles.sectionLabel}>Grey (default)</h4>
				<DsSkeleton variant="grey" />
			</div>
			<div>
				<h4 className={styles.sectionLabel}>Blue</h4>
				<DsSkeleton variant="blue" />
			</div>
		</div>
	),
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
		<div className={styles.sizesRow}>
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
};

/**
 * Rectangle skeleton - buttons, badges, images
 */
export const RectangleShapes: Story = {
	render: () => (
		<div className={styles.section}>
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
