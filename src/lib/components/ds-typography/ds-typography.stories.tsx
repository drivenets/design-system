import type { Meta, StoryObj } from '@storybook/react';
import DsTypography from './ds-typography';
import styles from './ds-typography.stories.module.scss';
import { SemanticVariant } from './ds-typography.types';
import { semanticElementMap } from './ds-typography.config';

const semanticVariants = Object.keys(semanticElementMap);

const meta: Meta<typeof DsTypography> = {
	title: 'Design System/Typography',
	component: DsTypography,
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
A flexible typography component that supports both semantic variants and granular customization.
Uses predefined typography combinations (e.g., \`body-md-reg\`, \`code-xs-semi-bold\`)
				`,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			description: 'Predefined typography combination (overrides size/weight/align)',
			options: semanticVariants,
		},
		asChild: {
			control: 'boolean',
			description: 'Use Slot component for composition',
		},
		children: {
			control: 'text',
			description: 'Content to render',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsTypography>;

const sampleText = 'Almost before we knew it, we had left the ground.';

export const Default: Story = {
	args: {
		variant: 'body-md-reg',
		children: 'Hello world Design System!',
	},
};

export const Showcase: Story = {
	render: function Render() {
		const semanticSections = [
			{
				title: 'Headings',
				variants: Object.keys(semanticElementMap).filter((key) =>
					key.startsWith('heading'),
				) as SemanticVariant[],
			},
			{
				title: 'Body Text',
				variants: Object.keys(semanticElementMap).filter((key) =>
					key.startsWith('body'),
				) as SemanticVariant[],
			},
			{
				title: 'Code Text',
				variants: Object.keys(semanticElementMap).filter((key) =>
					key.startsWith('code'),
				) as SemanticVariant[],
			},
		];

		return (
			<div className={styles.typographyContainer}>
				<DsTypography className={styles.pageTitle} variant="heading1">
					Typography Design System v1.2
				</DsTypography>
				<DsTypography className={styles.pageDescription} variant="body-md-reg">
					Predefined variants that match design system typography specifications.
				</DsTypography>

				{semanticSections.map((section) => (
					<section key={section.title} className={styles.comparisonSection}>
						<DsTypography className={styles.sectionTitle} variant="heading3" asChild>
							<h2>{section.title}</h2>
						</DsTypography>
						{section.variants.map((variant: SemanticVariant) => (
							<div key={variant} className={styles.comparisonItem}>
								<DsTypography className={styles.comparisonLabel} variant="code-sm-reg">
									{variant}
								</DsTypography>
								<DsTypography variant={variant}>
									{sampleText} ({semanticElementMap[variant] as string})
								</DsTypography>
							</div>
						))}
					</section>
				))}
			</div>
		);
	},
};
