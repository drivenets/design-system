import type { Meta, StoryObj } from '@storybook/react-vite';
import classNames from 'classnames';
import { DsTypography } from '../../components/ds-typography';
import styles from './scrollbars.stories.module.scss';

// eslint-disable-next-line @drivenets/ds-internal/require-story-meta-annotations -- component prop is not required here.
const meta: Meta = {
	title: 'Components/Scrollbars',
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
All scrollbars are styled automatically by the design system and auto-hide until you hover the scrollable region.
At rest the thumb is subtle (10px); on hover it widens (12px) and darkens for clearer affordance.
You can add a \`.scrollbar-thin\` class to the element in order to make its scrollbar thin.
				`,
			},
		},
	},
};

export default meta;
type Story = StoryObj;

export const DefaultScrollbar: Story = {
	tags: ['!manifest'],
	render: () => (
		<div className={styles.container}>
			<div className={styles.section}>
				<DsTypography variant="heading3">Vertical Scrollbar (Default)</DsTypography>
				<div className={styles.scrollableContainer}>
					<div>
						{Array.from({ length: 20 }, (_, i) => (
							<div key={i} className={styles.contentItem}>
								<DsTypography variant="heading3">Item {i + 1}</DsTypography>
								<DsTypography variant="body-md-reg">Content for item {i + 1}</DsTypography>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className={styles.sectionWide}>
				<DsTypography variant="heading3">Horizontal Scrollbar (Default)</DsTypography>
				<div className={styles.scrollableContainer}>
					<div className={styles.contentContainer}>
						{Array.from({ length: 15 }, (_, i) => (
							<div key={i} className={styles.contentItemHorizontal}>
								<DsTypography variant="heading3">Item {i + 1}</DsTypography>
								<DsTypography variant="body-md-reg">Content for item {i + 1}</DsTypography>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			canvas: { sourceState: 'none' },
			description: {
				story: 'Default scrollbars for both vertical and horizontal overflow.',
			},
		},
	},
};

export const SmallScrollbar: Story = {
	tags: ['!manifest'],
	render: () => (
		<div className={styles.container}>
			<div className={styles.section}>
				<DsTypography variant="heading3">Vertical Scrollbar (Thin)</DsTypography>
				<div className={classNames('scrollbar-thin', styles.scrollableContainer)}>
					<div>
						{Array.from({ length: 20 }, (_, i) => (
							<div key={i} className={styles.contentItem}>
								<DsTypography variant="heading3">Item {i + 1}</DsTypography>
								<DsTypography variant="body-md-reg">Content for item {i + 1}</DsTypography>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className={styles.sectionWide}>
				<DsTypography variant="heading3">Horizontal Scrollbar (Thin)</DsTypography>
				<div className={classNames('scrollbar-thin', styles.scrollableContainer)}>
					<div className={styles.contentContainer}>
						{Array.from({ length: 15 }, (_, i) => (
							<div key={i} className={styles.contentItemHorizontal}>
								<DsTypography variant="heading3">Item {i + 1}</DsTypography>
								<DsTypography variant="body-md-reg">Content for item {i + 1}</DsTypography>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			canvas: { sourceState: 'none' },
			description: {
				story: 'Small (thin) scrollbars for both vertical and horizontal overflow.',
			},
		},
	},
};

export const CombinedExample: Story = {
	tags: ['!manifest'],
	render: () => (
		<div className={styles.sectionExtraWide}>
			<DsTypography variant="heading3">Combined Example - Both X and Y Overflow</DsTypography>
			<div className={styles.scrollableContainerTall}>
				<div className={styles.wideContent}>
					<DsTypography variant="heading2">Wide Content</DsTypography>
					<DsTypography variant="body-md-reg">
						This container has both vertical and horizontal overflow, showing both scrollbars.
					</DsTypography>
					{Array.from({ length: 25 }, (_, i) => (
						<div key={i} className={styles.contentContainer}>
							{Array.from({ length: 25 }, (_, j) => (
								<div key={j} className={styles.contentItemHorizontal}>
									<DsTypography variant="heading3">Item {j + 1}</DsTypography>
									<DsTypography variant="body-md-reg">Content for item {j + 1}</DsTypography>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			canvas: { sourceState: 'none' },
			description: {
				story: 'Example showing both vertical and horizontal scrollbars on the same container.',
			},
		},
	},
};
