import * as React from 'react';
import classNames from 'classnames';
import { DsButton, DsIcon, DsSpinner } from '@drivenets/design-system';

// Owned preview: the story file imports the internal DsButtonNew/DsButtonLegacy
// implementations directly (neither is a public package export), so the
// generated preview's story-module compile can't resolve them to the real
// bundle and falls back to an unstyled from-source copy. This mirrors the
// story JSX against the PUBLIC DsButton export instead (design="v1.2" routes
// to the same DsButtonNew implementation the story targets).

const defaultButtonText = 'Button Text';

export const DefaultButton = () => (
	<DsButton design="v1.2" buttonType="primary" variant="filled" size="large" disabled={false}>
		<DsIcon icon="check_circle" size="tiny" aria-hidden="true" />
		{defaultButtonText}
		<DsIcon icon="keyboard_arrow_down" size="tiny" aria-hidden="true" />
	</DsButton>
);

export const WithSpinner = () => (
	<DsButton design="v1.2" buttonType="primary" variant="filled" size="large" disabled={false}>
		<DsSpinner />
		{defaultButtonText}
		<DsIcon icon="keyboard_arrow_down" size="tiny" aria-hidden="true" />
	</DsButton>
);

const supportedCombos = [
	'primary-filled',
	'primary-danger',
	'secondary-filled',
	'secondary-ghost',
	'secondary-danger',
	'tertiary-filled',
	'tertiary-ghost',
	'tertiary-danger',
	'tertiary-dark',
	'primary-dark',
	'secondary-dark',
	'secondary-light-dark',
];
const isSupported = (buttonType: string, variant: string) =>
	supportedCombos.includes(`${buttonType}-${variant}`);

const rowDefs = [
	{ label: 'Primary', buttonType: 'primary', icon: false },
	{ label: 'Secondary', buttonType: 'secondary', icon: false },
	{ label: 'Secondary-Light', buttonType: 'secondary-light', icon: false, variant: 'dark' },
	{ label: 'Tertiary', buttonType: 'tertiary', icon: false },
	{ label: 'Icon Primary', buttonType: 'primary', icon: true },
	{ label: 'Icon Secondary', buttonType: 'secondary', icon: true },
	{ label: 'Icon Tertiary', buttonType: 'tertiary', icon: true },
	{ label: 'Icon Primary Dark', buttonType: 'primary', icon: true, variant: 'dark' },
	{ label: 'Icon Secondary Dark', buttonType: 'secondary', icon: true, variant: 'dark' },
	{ label: 'Icon Tertiary Dark', buttonType: 'tertiary', icon: true, variant: 'dark' },
];
const variants = ['filled', 'ghost', 'dashed', 'danger', 'dark'];
const sizes = ['large', 'medium', 'small', 'tiny'];
const states = [false, true];

const cellStyle: React.CSSProperties = { border: '1px solid #e5e7eb', padding: 8, textAlign: 'center' };
const headerStyle: React.CSSProperties = { ...cellStyle, fontWeight: 600, background: '#f9fafb' };

export const Showcase = () => {
	const defaultButtonChildren = (
		<>
			<DsIcon icon="check_circle" size="tiny" />
			{defaultButtonText}
			<DsIcon icon="keyboard_arrow_down" size="tiny" />
		</>
	);
	const iconButtonChildren = <DsIcon icon="check_circle" size="tiny" />;

	return (
		<div style={{ overflowX: 'auto' }}>
			<table style={{ borderCollapse: 'collapse' }}>
				<thead>
					<tr>
						<th style={headerStyle} />
						{variants.map((variant) => (
							<th key={variant} colSpan={sizes.length * states.length} style={headerStyle}>
								{variant.charAt(0).toUpperCase() + variant.slice(1)}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rowDefs.map((row) => (
						<tr key={row.label}>
							<td style={{ ...cellStyle, fontWeight: 600 }}>{row.label}</td>
							{variants
								.map((variant) =>
									sizes.map((size) =>
										states.map((disabled) => {
											const key = `${row.label}-${variant}-${size}-${disabled ? 'disabled' : 'default'}`;
											if (!isSupported(row.buttonType, variant)) {
												return <td key={key} style={cellStyle} />;
											}
											return (
												<td key={key} className={classNames({ dark: variant === 'dark' })} style={cellStyle}>
													<DsButton
														design="v1.2"
														buttonType={row.buttonType as any}
														variant={variant as any}
														size={size as any}
														disabled={disabled}
													>
														{row.icon ? iconButtonChildren : defaultButtonChildren}
													</DsButton>
												</td>
											);
										}),
									),
								)
								.flat()}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
