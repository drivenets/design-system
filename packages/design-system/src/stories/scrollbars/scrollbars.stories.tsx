import type { Meta, StoryObj } from '@storybook/react-vite';
import { Fragment } from 'react';
import classNames from 'classnames';
import styles from './scrollbars.stories.module.scss';

const meta: Meta = {
	title: 'Design System/Scrollbars',
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
All scrollbars are styled automatically by the design system.
You can add a \`.scrollbar-thin\` class to the element in order to make its scrollbar thin.
				`,
			},
		},
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper to generate content
const generateContent = (count: number, direction: 'vertical' | 'horizontal') => {
	const items = Array.from({ length: count }, (_, i) => (
		<div key={i} className={direction === 'horizontal' ? styles.contentItemHorizontal : styles.contentItem}>
			<h3>Item {i + 1}</h3>
			<p>Content for item {i + 1}</p>
		</div>
	));

	return <div className={direction === 'horizontal' ? styles.contentContainer : undefined}>{items}</div>;
};

export const DefaultScrollbar: Story = {
	render: () => (
		<div className={styles.container}>
			<div className={styles.section}>
				<h3>Vertical Scrollbar (Default)</h3>
				<div className={styles.scrollableContainer}>{generateContent(20, 'vertical')}</div>
			</div>

			<div className={styles.sectionWide}>
				<h3>Horizontal Scrollbar (Default)</h3>
				<div className={styles.scrollableContainer}>{generateContent(15, 'horizontal')}</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Default scrollbars for both vertical and horizontal overflow.',
			},
		},
	},
};

export const SmallScrollbar: Story = {
	render: () => (
		<div className={styles.container}>
			<div className={styles.section}>
				<h3>Vertical Scrollbar (Thin)</h3>
				<div className={classNames('scrollbar-thin', styles.scrollableContainer)}>
					{generateContent(20, 'vertical')}
				</div>
			</div>

			<div className={styles.sectionWide}>
				<h3>Horizontal Scrollbar (Thin)</h3>
				<div className={classNames('scrollbar-thin', styles.scrollableContainer)}>
					{generateContent(15, 'horizontal')}
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Small (thin) scrollbars for both vertical and horizontal overflow.',
			},
		},
	},
};

export const CombinedExample: Story = {
	render: () => (
		<div className={styles.sectionExtraWide}>
			<h3>Combined Example - Both X and Y Overflow</h3>
			<div className={styles.scrollableContainerTall}>
				<div className={styles.wideContent}>
					<h2>Wide Content</h2>
					<p>This container has both vertical and horizontal overflow, showing both scrollbars.</p>
					{Array.from({ length: 25 }, (_, i) => (
						<Fragment key={i}>{generateContent(25, 'horizontal')}</Fragment>
					))}
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Example showing both vertical and horizontal scrollbars on the same container.',
			},
		},
	},
};
