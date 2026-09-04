import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsSkeleton } from './index';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';
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

const meta: Meta<typeof DsSkeleton.Rect> = {
	title: 'Components/Skeleton',
	component: DsSkeleton.Rect,
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;

type Story = StoryObj<typeof DsSkeleton>;

/**
 * Gallery of the two color variants — gray (default) and blue — across every skeleton shape.
 */
export const ColorVariants: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: () => (
		<DsStack direction="column" gap="var(--xl)">
			<DsStack direction="column" gap="var(--sm)">
				<DsTypography variant="heading4">Gray (default)</DsTypography>
				<DsSkeleton.Text color="gray" />
				<DsSkeleton.Circle color="gray" />
				<DsSkeleton.Rect width={40} height={40} color="gray" />
			</DsStack>
			<DsStack direction="column" gap="var(--sm)">
				<DsTypography variant="heading4">Blue</DsTypography>
				<DsSkeleton.Text color="blue" />
				<DsSkeleton.Circle color="blue" />
				<DsSkeleton.Rect width={40} height={40} color="blue" />
			</DsStack>
		</DsStack>
	),
};

/**
 * Gallery of text skeletons — typography heights, multiple lines, custom width, and radius.
 */
export const TextVariants: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: () => (
		<DsStack direction="column" gap="var(--xl)">
			<DsStack direction="column" gap="var(--standard)">
				<DsTypography variant="heading4">Typography Variants</DsTypography>
				<DsSkeleton.Text typographyVariant="heading1" />
				<DsSkeleton.Text typographyVariant="heading3" />
				<DsSkeleton.Text typographyVariant="body-md-reg" />
				<DsSkeleton.Text typographyVariant="body-sm-reg" />
			</DsStack>
			<DsStack direction="column" gap="var(--sm)">
				<DsTypography variant="heading4">Multiple Lines</DsTypography>
				<DsSkeleton.Text typographyVariant="body-md-reg" lines={3} />
			</DsStack>
			<DsStack direction="column" gap="var(--sm)">
				<DsTypography variant="heading4">Custom Width</DsTypography>
				<DsSkeleton.Text typographyVariant="body-md-reg" width="80%" />
				<DsSkeleton.Text typographyVariant="body-md-reg" width={200} />
			</DsStack>
			<DsStack direction="column" gap="var(--sm)">
				<DsTypography variant="heading4">Border Radius</DsTypography>
				<DsSkeleton.Text typographyVariant="body-md-reg" radius="round" />
				<DsSkeleton.Text typographyVariant="body-md-reg" radius="default" />
				<DsSkeleton.Text typographyVariant="body-md-reg" radius={12} />
			</DsStack>
		</DsStack>
	),
};

/**
 * Gallery of circle skeletons across the DsAvatar size scale plus a custom pixel size.
 */
export const CircleSizes: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: () => (
		<DsStack gap="var(--standard)" alignItems="center" flexWrap="wrap">
			<DsStack direction="column" gap="var(--sm)" alignItems="center">
				<DsSkeleton.Circle size="xsm" />
				<DsTypography variant="body-xs-reg" color="secondary">
					xsm (24px)
				</DsTypography>
			</DsStack>
			<DsStack direction="column" gap="var(--sm)" alignItems="center">
				<DsSkeleton.Circle size="sm" />
				<DsTypography variant="body-xs-reg" color="secondary">
					sm (32px)
				</DsTypography>
			</DsStack>
			<DsStack direction="column" gap="var(--sm)" alignItems="center">
				<DsSkeleton.Circle size="regular" />
				<DsTypography variant="body-xs-reg" color="secondary">
					regular (40px)
				</DsTypography>
			</DsStack>
			<DsStack direction="column" gap="var(--sm)" alignItems="center">
				<DsSkeleton.Circle size="md" />
				<DsTypography variant="body-xs-reg" color="secondary">
					md (48px)
				</DsTypography>
			</DsStack>
			<DsStack direction="column" gap="var(--sm)" alignItems="center">
				<DsSkeleton.Circle size="lg" />
				<DsTypography variant="body-xs-reg" color="secondary">
					lg (64px)
				</DsTypography>
			</DsStack>
			<DsStack direction="column" gap="var(--sm)" alignItems="center">
				<DsSkeleton.Circle size="xl" />
				<DsTypography variant="body-xs-reg" color="secondary">
					xl (80px)
				</DsTypography>
			</DsStack>
			<DsStack direction="column" gap="var(--sm)" alignItems="center">
				<DsSkeleton.Circle size={100} />
				<DsTypography variant="body-xs-reg" color="secondary">
					custom (100px)
				</DsTypography>
			</DsStack>
		</DsStack>
	),
};

/**
 * Gallery of rectangle skeletons standing in for buttons, badges, and images.
 */
export const RectangleShapes: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: () => (
		<DsStack direction="column" gap="var(--standard)">
			<DsStack gap="var(--standard)" alignItems="center">
				<DsSkeleton.Rect width={120} height={40} />
				<DsTypography variant="body-sm-reg" color="secondary">
					Button
				</DsTypography>
			</DsStack>
			<DsStack gap="var(--standard)" alignItems="center">
				<DsSkeleton.Rect width={80} height={24} radius="round" />
				<DsTypography variant="body-sm-reg" color="secondary">
					Badge
				</DsTypography>
			</DsStack>
			<DsStack gap="var(--standard)" alignItems="center">
				<DsSkeleton.Rect width={200} height={150} radius={8} />
				<DsTypography variant="body-sm-reg" color="secondary">
					Image
				</DsTypography>
			</DsStack>
		</DsStack>
	),
};

/**
 * Composition example — a loading placeholder for a card with avatar, title, body, and actions.
 */
export const CardSkeleton: Story = {
	render: () => (
		<DsStack direction="column" gap="var(--standard)" width="400px">
			<DsStack gap="var(--standard)" alignItems="flex-start">
				<DsSkeleton.Circle size="lg" />
				<DsStack direction="column" gap="var(--sm)" flex="1">
					<DsSkeleton.Text typographyVariant="heading4" width="60%" />
					<DsSkeleton.Text typographyVariant="body-sm-reg" width="80%" />
				</DsStack>
			</DsStack>
			<DsSkeleton.Text typographyVariant="body-md-reg" lines={3} />
			<DsStack gap="var(--sm)">
				<DsSkeleton.Rect width={100} height={36} radius={4} />
				<DsSkeleton.Rect width={100} height={36} radius={4} />
			</DsStack>
		</DsStack>
	),
};

/**
 * Composition example — a loading state for tabular data using the core table primitives.
 */
export const TableSkeleton: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
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
								<DsStack gap="var(--sm)" alignItems="center">
									<DsSkeleton.Circle size="sm" />
									<DsSkeleton.Text width={120} />
								</DsStack>
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
