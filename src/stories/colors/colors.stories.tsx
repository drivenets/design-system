import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import styles from './colors.stories.module.scss';

const meta: Meta = {
	title: 'Design System/Colors',
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Type definition for tone objects
interface Tone {
	name: string;
	variable: string;
	showCode?: boolean;
}

// Function to get CSS custom property value
const getCSSVariable = (variableName: string): string => {
	if (typeof window !== 'undefined') {
		const value = getComputedStyle(document.documentElement).getPropertyValue(`--${variableName}`).trim();
		return isHex(value) ? value.toUpperCase() : value;
	}
	return '';
};

// Colors from _colors.scss after // New for DS v1.2
const colorGroups = [
	{
		label: 'Brand',
		tones: [
			{ name: '50', variable: 'color-brand-50' },
			{ name: '100', variable: 'color-brand-100' },
			{ name: '200', variable: 'color-brand-200' },
			{ name: '300', variable: 'color-brand-300' },
			{ name: '400', variable: 'color-brand-400' },
			{ name: '500', variable: 'color-brand-500' },
			{ name: '600', variable: 'color-brand-600' },
			{ name: '700', variable: 'color-brand-700' },
		] as Tone[],
	},
	{
		label: 'Primary',
		tones: [
			{ name: '050', variable: 'color-primary-050' },
			{ name: '100', variable: 'color-primary-100' },
			{ name: '200', variable: 'color-primary-200' },
			{ name: '300', variable: 'color-primary-300' },
			{ name: '400', variable: 'color-primary-400' },
			{ name: '500', variable: 'color-primary-500' },
			{ name: '600', variable: 'color-primary-600' },
			{ name: '700-default', variable: 'color-primary-700-default' },
			{ name: '800', variable: 'color-primary-800' },
			{ name: '900', variable: 'color-primary-900' },
			{ name: '950', variable: 'color-primary-950' },
		] as Tone[],
	},
	{
		label: 'Secondary',
		tones: [
			{ name: 'white', variable: 'color-secondary-white' },
			{ name: '100', variable: 'color-secondary-100' },
			{ name: '200', variable: 'color-secondary-200' },
			{ name: '300', variable: 'color-secondary-300' },
			{ name: '400', variable: 'color-secondary-400' },
			{ name: '500-net-4', variable: 'color-secondary-500-net-4' },
			{ name: '600-net-2', variable: 'color-secondary-600-net-2' },
			{ name: '700-net-1', variable: 'color-secondary-700-net-1' },
			{ name: '800', variable: 'color-secondary-800' },
			{ name: 'black', variable: 'color-secondary-black' },
		] as Tone[],
	},
	{
		label: 'Positive',
		tones: [
			{ name: '050', variable: 'color-positive-050' },
			{ name: '100', variable: 'color-positive-100' },
			{ name: '200', variable: 'color-positive-200' },
			{ name: '300', variable: 'color-positive-300' },
			{ name: '400', variable: 'color-positive-400' },
			{ name: '500', variable: 'color-positive-500' },
			{ name: '600', variable: 'color-positive-600' },
			{ name: '700-default', variable: 'color-positive-700-default' },
			{ name: '800', variable: 'color-positive-800' },
			{ name: '900', variable: 'color-positive-900' },
		] as Tone[],
	},
	{
		label: 'Negative',
		tones: [
			{ name: '050', variable: 'color-negative-050' },
			{ name: '100', variable: 'color-negative-100' },
			{ name: '200', variable: 'color-negative-200' },
			{ name: '300', variable: 'color-negative-300' },
			{ name: '400-default', variable: 'color-negative-400-default' },
			{ name: '500', variable: 'color-negative-500' },
			{ name: '600', variable: 'color-negative-600' },
			{ name: '700', variable: 'color-negative-700' },
		] as Tone[],
	},
	{
		label: 'Warning',
		tones: [
			{ name: '050', variable: 'color-warning-050' },
			{ name: '100', variable: 'color-warning-100' },
			{ name: '200', variable: 'color-warning-200' },
			{ name: '300', variable: 'color-warning-300' },
			{ name: '400', variable: 'color-warning-400' },
			{ name: '500', variable: 'color-warning-500' },
			{ name: '600-default', variable: 'color-warning-600-default' },
			{ name: '700', variable: 'color-warning-700' },
			{ name: '800', variable: 'color-warning-800' },
			{ name: '900', variable: 'color-warning-900' },
		] as Tone[],
	},
	{
		label: 'Info',
		tones: [
			{ name: '050', variable: 'color-info-050' },
			{ name: '100', variable: 'color-info-100' },
			{ name: '200', variable: 'color-info-200' },
			{ name: '300', variable: 'color-info-300' },
			{ name: '400', variable: 'color-info-400' },
			{ name: '500', variable: 'color-info-500' },
			{ name: '600-default', variable: 'color-info-600-default' },
			{ name: '700', variable: 'color-info-700' },
			{ name: '800-progress', variable: 'color-info-800-progress' },
			{ name: '900', variable: 'color-info-900' },
			{ name: '950', variable: 'color-info-950' },
		] as Tone[],
	},
	{
		label: 'Data Visualization & Utility',
		tones: [
			{ name: 'pink', variable: 'color-data-pink' },
			{ name: 'fuchsia', variable: 'color-data-fuchsia' },
			{ name: 'deep-fuchsia', variable: 'color-data-deep-fuchsia' },
			{ name: 'light-purple', variable: 'color-data-light-purple' },
			{ name: 'purple', variable: 'color-data-purple' },
			{ name: 'deep-purple', variable: 'color-data-deep-purple' },
			{ name: 'blue', variable: 'color-data-blue' },
			{ name: 'teal', variable: 'color-data-teal' },
			{ name: 'green', variable: 'color-data-green' },
			{ name: 'lime', variable: 'color-data-lime' },
			{ name: 'yellow', variable: 'color-data-yellow' },
			{ name: 'amber', variable: 'color-data-amber' },
			{ name: 'orange', variable: 'color-data-orange' },
			{ name: 'rose', variable: 'color-data-rose' },
			{ name: 'error', variable: 'color-data-error' },
		] as Tone[],
	},
	{
		label: 'Gradients',
		tones: [
			{
				name: 'violet-background',
				variable: 'color-gradient-violet-background',
				showCode: false,
			},
			{
				name: 'violet-transparent',
				variable: 'color-gradient-violet-transparent',
				showCode: false,
			},
			{
				name: 'blue-light',
				variable: 'color-gradient-blue-light',
				showCode: false,
			},
		] as Tone[],
	},
	{
		label: 'Markers',
		tones: [
			{ name: 'magenta-12', variable: 'color-marker-magenta-12', showCode: false },
			{ name: 'magenta-60', variable: 'color-marker-magenta-60', showCode: false },
			{ name: 'magenta-100', variable: 'color-marker-magenta-100', showCode: false },
			{ name: 'yellow-100', variable: 'color-marker-yellow-100' },
		] as Tone[],
	},
];

const isHex = (code: string) => /^#([0-9a-f]{3,8})$/i.test(code?.trim());

export const Default: Story = {
	render: () => {
		const [copied, setCopied] = useState<string | null>(null);

		const handleCopy = (tone: Tone) => {
			const codeToCopy = getCSSVariable(tone.variable);
			if (codeToCopy) {
				navigator.clipboard.writeText(codeToCopy);
				setCopied(tone.name);
				setTimeout(() => setCopied(null), 1500);
			}
		};

		return (
			<div className={styles.colorsContainer}>
				<h1 className={styles.pageTitle}>Colors Design System v1.2</h1>
				<p className={styles.pageDescription}>
					This showcase displays all color tokens defined in the Design System v1.2.
				</p>
				{colorGroups.map((group) => (
					<div key={group.label} className={styles.colorGroup}>
						<h2 className={styles.groupLabel}>{group.label}</h2>
						<div className={styles.swatchRow}>
							{group.tones.map((tone) => {
								const colorCode = getCSSVariable(tone.variable);
								return (
									<div key={tone.name} className={styles.swatchCol}>
										<div
											className={styles.swatchItem}
											style={{
												background: `var(--${tone.variable})`,
												cursor: 'pointer',
											}}
											title="Click to copy"
											onClick={() => handleCopy(tone)}
											tabIndex={0}
											role="button"
											aria-label={`Color ${tone.name} ${colorCode}`}
										>
											{tone.showCode !== false && <span className={styles.toneCode}>{colorCode}</span>}
											{copied === tone.name && <span className={styles.copiedTooltip}>Copied</span>}
										</div>
										<div className={styles.toneNumber}>{tone.name}</div>
									</div>
								);
							})}
						</div>
					</div>
				))}
			</div>
		);
	},
};
