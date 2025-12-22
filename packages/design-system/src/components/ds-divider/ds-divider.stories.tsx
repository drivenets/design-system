import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import DsDivider from "./ds-divider";
import styles from './ds-divider.stories.module.scss';

const meta: Meta<typeof DsDivider> = {
    title: 'Design System/Divider',
    component: DsDivider,
    parameters: {
        layout: 'centered',
    },
    args: {
        orientation: 'horizontal',
        backgroundColor: undefined,
        thickness: undefined,
    },
    tags: ['autodocs'],
    argTypes: {
        orientation: {
            control: 'radio',
            options: ['horizontal', 'vertical'],
            description: 'Controls orientation of the divider.',
        },
        backgroundColor: {
            control: 'color',
            description: 'Divider line color.',
        },
        thickness: {
            control: { type: 'number', min: 0, step: 1 },
            description: 'Height for horizontal or width for vertical (in px).',
        },
        component: {
            control: 'select',
            options: ['(default)', 'hr', 'div', 'span'],
            mapping: {
                '(default)': undefined,
                hr: 'hr',
                div: 'div',
                span: 'span',
            } satisfies Record<string, React.ElementType | undefined>,
            description: 'Underlying element/component to render.',
        },
        style: { control: false },
        className: { control: false },
    },
};

export default meta;
type Story = StoryObj<typeof DsDivider>;

export const Default: Story = {
    render: (args) => (
        <div
            style={{
                width: 420,
                height: args.orientation === 'vertical' ? 220 : 'auto',
                display: 'flex',
                alignItems: 'stretch',
                justifyContent: 'center',
                padding: 16,
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: 12,
                boxSizing: 'border-box',
            }}
        >
            {args.orientation === 'vertical' ? (
                <>
                    <div style={{ width: 140, fontSize: 12 }}>Left content</div>
                    <DsDivider {...args} />
                    <div style={{ width: 140, fontSize: 12 }}>Right content</div>
                </>
            ) : (
                <div style={{ width: '100%' }}>
                    <div style={{ fontSize: 12 }}>Top content</div>
                    <DsDivider {...args} />
                    <div style={{ fontSize: 12 }}>Bottom content</div>
                </div>
            )}
        </div>
    ),
};

export const Showcase: Story = {
	parameters: { controls: { exclude: /.*/ } },
	render: () => (
		<div className={styles.showcaseContainer} style={{ width: 760 }}>
			<table className={styles.showcaseTable}>
				<thead>
					<tr>
						<th className={styles.showcaseHeader}>Variant</th>
						<th className={styles.showcaseHeader}>Preview</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td className={styles.showcaseCell}>
							<span className={styles.showcaseCellBold}>Horizontal</span>
							<span className={styles.showcaseCellInline}>default</span>
						</td>
						<td className={styles.showcaseCell}>
							<div style={{ width: 520 }}>
								<DsDivider />
							</div>
						</td>
					</tr>

					<tr>
						<td className={styles.showcaseCell}>
							<span className={styles.showcaseCellBold}>Horizontal</span>
							<span className={styles.showcaseCellInline}>thickness=4</span>
						</td>
						<td className={styles.showcaseCell}>
							<div style={{ width: 520 }}>
								<DsDivider thickness={4} />
							</div>
						</td>
					</tr>

					<tr>
						<td className={styles.showcaseCell}>
							<span className={styles.showcaseCellBold}>Horizontal</span>
							<span className={styles.showcaseCellInline}>custom color</span>
						</td>
						<td className={styles.showcaseCell}>
							<div style={{ width: 520 }}>
								<DsDivider backgroundColor="rgba(107, 91, 255, 1)" />
							</div>
						</td>
					</tr>

					<tr>
						<td className={styles.showcaseCell}>
							<span className={styles.showcaseCellBold}>Vertical</span>
							<span className={styles.showcaseCellInline}>default</span>
						</td>
						<td className={styles.showcaseCell}>
							<div style={{ height: 140, display: 'flex', alignItems: 'stretch', justifyContent: 'center' }}>
								<div style={{ width: 120, fontSize: 12, display: 'flex', alignItems: 'center' }}>Left</div>
								<DsDivider orientation="vertical" />
								<div style={{ width: 120, fontSize: 12, display: 'flex', alignItems: 'center' }}>Right</div>
							</div>
						</td>
					</tr>

					<tr>
						<td className={styles.showcaseCell}>
							<span className={styles.showcaseCellBold}>Vertical</span>
							<span className={styles.showcaseCellInline}>thickness=6</span>
						</td>
						<td className={styles.showcaseCell}>
							<div style={{ height: 140, display: 'flex', alignItems: 'stretch', justifyContent: 'center' }}>
								<div style={{ width: 120, fontSize: 12, display: 'flex', alignItems: 'center' }}>Left</div>
								<DsDivider orientation="vertical" thickness={6} />
								<div style={{ width: 120, fontSize: 12, display: 'flex', alignItems: 'center' }}>Right</div>
							</div>
						</td>
					</tr>

					<tr>
						<td className={styles.showcaseCell}>
							<span className={styles.showcaseCellBold}>Custom</span>
							<span className={styles.showcaseCellInline}>component=&quot;span&quot;</span>
						</td>
						<td className={styles.showcaseCell}>
							<div style={{ width: 520 }}>
								<DsDivider component="span" />
							</div>
						</td>
					</tr>

					<tr>
						<td className={`${styles.showcaseCell} ${styles.showcaseCellDark}`}>
							<span className={styles.showcaseCellBold}>Dark bg</span>
							<span className={styles.showcaseCellInline}>contrast</span>
						</td>
						<td className={`${styles.showcaseCell} ${styles.showcaseCellDark}`}>
							<div style={{ width: 520 }}>
								<DsDivider backgroundColor="rgba(255, 255, 255, 0.48)" />
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	),
};

export const Horizontal: Story = {
    args: {
        orientation: 'horizontal',
    },
    render: (args) => (
        <div style={{ width: 420 }}>
            <div style={{ fontSize: 12 }}>Above</div>
            <DsDivider {...args} />
            <div style={{ fontSize: 12 }}>Below</div>
        </div>
    ),
};

export const HorizontalThick: Story = {
    args: {
        orientation: 'horizontal',
        thickness: 4,
    },
    render: (args) => (
        <div style={{ width: 420 }}>
            <div style={{ fontSize: 12 }}>Above</div>
            <DsDivider {...args} />
            <div style={{ fontSize: 12 }}>Below</div>
        </div>
    ),
};

export const CustomColor: Story = {
    args: {
        orientation: 'horizontal',
        backgroundColor: '#6B5BFF',
    },
    render: (args) => (
        <div style={{ width: 420 }}>
            <div style={{ fontSize: 12 }}>Above</div>
            <DsDivider {...args} />
            <div style={{ fontSize: 12 }}>Below</div>
        </div>
    ),
};

export const Vertical: Story = {
    args: {
        orientation: 'vertical',
    },
    render: (args) => (
        <div
            style={{
                width: 420,
                height: 220,
                display: 'flex',
                alignItems: 'stretch',
                padding: 16,
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: 12,
                boxSizing: 'border-box',
            }}
        >
            <div style={{ width: 140, fontSize: 12 }}>Left</div>
            <DsDivider {...args} />
            <div style={{ width: 140, fontSize: 12 }}>Right</div>
        </div>
    ),
};

export const VerticalThick: Story = {
    args: {
        orientation: 'vertical',
        thickness: '6px',
    },
    render: (args) => (
        <div
            style={{
                width: 420,
                height: 220,
                display: 'flex',
                alignItems: 'stretch',
                padding: 16,
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: 12,
                boxSizing: 'border-box',
            }}
        >
            <div style={{ width: 140, fontSize: 12 }}>Left</div>
            <DsDivider {...args} />
            <div style={{ width: 140, fontSize: 12 }}>Right</div>
        </div>
    ),
};

export const WithCustomComponent: Story = {
    args: {
        orientation: 'horizontal',
        component: "span",
    },
    render: (args) => (
        <div style={{ width: 420 }}>
            <div style={{ fontSize: 12 }}>Above</div>
            <DsDivider {...args} />
            <div style={{ fontSize: 12 }}>Below</div>
        </div>
    ),
};
