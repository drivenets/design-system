import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useMemo, useState } from 'react';
import DsIcon from './ds-icon';
import './ds-icon.stories.scss';
import { materialIcons } from './material-icons';
import { iconSizes, iconVariants, type IconName } from './ds-icon.types';
import { customIcons, type CustomIconName } from './custom-icons';

const meta: Meta<typeof DsIcon> = {
	title: 'Design System/Icon',
	component: DsIcon,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		icon: {
			control: 'text',
			description: 'Material icon name or SVG component',
		},
		size: {
			control: { type: 'select' },
			options: iconSizes,
			description: 'Size of the icon',
		},
		variant: {
			control: { type: 'select' },
			options: iconVariants,
			description: 'Icon variant style',
		},
		filled: {
			control: 'boolean',
			description: 'Whether the icon should be filled',
		},
		onClick: { action: 'clicked' },
	},
};

export default meta;
type Story = StoryObj<typeof DsIcon>;

export const Default: Story = {
	args: {
		icon: 'home',
		size: 'medium',
	},
};

export const Colored: Story = {
	args: {
		size: 'medium',
		filled: true,
		style: { color: '#4CAF50' },
	},
	render: function Render(args) {
		return (
			<div>
				<DsIcon {...args} icon="check_circle" />
				<DsIcon {...args} icon="special-market" />
			</div>
		);
	},
};

interface IconsByCategory {
	[category: string]: IconName[];
}

// Raw GitHub content URL instead of the GitHub HTML page
const ICONS_URL =
	'https://raw.githubusercontent.com/google/material-design-icons/master/update/current_versions.json';

export const Showcase: Story = {
	args: {
		size: 'medium',
		variant: 'outlined',
		filled: false,
	},
	parameters: {
		layout: 'fullscreen',
	},
	render: function Render(args) {
		const { size, variant, filled } = args;
		const [searchTerm, setSearchTerm] = useState('');
		const [iconsByCategory, setIconsByCategory] = useState<IconsByCategory>({});
		const [isLoading, setIsLoading] = useState(true);
		const [usedFallback, setUsedFallback] = useState(false);

		// Process icon data into categories
		const processIconData = (data: Record<string, number>) => {
			const categorizedIcons: IconsByCategory = {};

			Object.keys(data).forEach((key) => {
				// Skip any entries starting with "symbols::"
				if (key.startsWith('symbols::')) {
					return;
				}

				// Key format is "category::iconName"
				const [category, iconName] = key.split('::');

				if (!category || !iconName) {
					return;
				}

				if (!categorizedIcons[category]) {
					categorizedIcons[category] = [];
				}

				if (iconName) {
					categorizedIcons[category].push(iconName as IconName);
				}
			});

			// Sort icon names within each category
			Object.values(categorizedIcons).forEach((icons) => {
				icons.sort();
			});

			return categorizedIcons;
		};

		useEffect(() => {
			const fetchIcons = async () => {
				try {
					setIsLoading(true);

					// Try to fetch from GitHub first
					const response = await fetch(ICONS_URL);

					if (response.ok) {
						const data = (await response.json()) as Record<string, number>;
						setIconsByCategory(processIconData(data));
					} else {
						throw new Error('Failed to fetch icons from GitHub');
					}
				} catch (err) {
					console.error('Error fetching icons:', err);

					// Use fallback data if fetch fails (CORS or other issues)
					setIconsByCategory(processIconData(materialIcons));
					setUsedFallback(true);
				} finally {
					setIsLoading(false);
				}
			};

			void fetchIcons();
		}, []);

		const filteredCategories = useMemo(() => {
			const result: IconsByCategory = {};

			Object.entries(iconsByCategory).forEach(([category, icons]) => {
				const filteredIcons = icons.filter(
					(icon) =>
						icon.toLowerCase().includes(searchTerm.toLowerCase()) ||
						category.toLowerCase().includes(searchTerm.toLowerCase()),
				);

				if (filteredIcons.length > 0) {
					result[category] = filteredIcons;
				}
			});

			return result;
		}, [iconsByCategory, searchTerm]);

		const handleIconClick = async (iconName: string) => {
			// Copy icon name to clipboard
			await navigator.clipboard.writeText(iconName);

			// Create a temporary element for notification
			const notification = document.createElement('div');
			notification.className = 'copy-notification';
			notification.textContent = `Copied: ${iconName}`;
			document.body.appendChild(notification);

			// Remove after animation
			setTimeout(() => {
				document.body.removeChild(notification);
			}, 2000);
		};

		if (isLoading) {
			return <div className="loading">Loading material icons...</div>;
		}

		return (
			<div className="container">
				<div className="search-container">
					<input
						type="text"
						placeholder="Search icons by name or category..."
						className="search"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<div className="icon-count">
						{Object.values(filteredCategories).reduce((total, icons) => total + icons.length, 0)} icons found
					</div>
				</div>

				{usedFallback && (
					<div className="fallback-notice">
						Using limited icon set due to CORS restrictions. For production use, consider creating a proxy API
						endpoint or copying the icon data to your project.
					</div>
				)}

				{Object.keys(filteredCategories).length === 0 ? (
					<div className="no-results">No icons found matching &quot;{searchTerm}&quot;</div>
				) : (
					Object.entries(filteredCategories)
						.sort(([a], [b]) => a.localeCompare(b))
						.map(([category, icons]) => (
							<div key={category} className="category-section">
								<h2 className="category-title">{category}</h2>
								<div className="results">
									{icons.map((iconName) => (
										<button
											key={`${category}-${iconName}`}
											className="icon-wrapper"
											onClick={() => handleIconClick(iconName)}
											title={`Click to copy: ${iconName}`}
										>
											<DsIcon icon={iconName} size={size} variant={variant} filled={filled} />
											<span className="icon-name">{iconName}</span>
										</button>
									))}
								</div>
							</div>
						))
				)}
			</div>
		);
	},
};

// Group custom icons by category for display
const customIconCategories: Record<string, CustomIconName[]> = {
	'Site & Location': [
		'special-market',
		'special-site-t1',
		'special-site-t2',
		'special-site-t3',
		'special-site-t4',
		'special-site-unknown',
		'special-site-generic',
	],
	'NE State': ['special-discovered-ne', 'special-upgrading', 'special-cluster-ne', 'special-standalone'],
	'NE Navigation': [
		'special-ne-nav-360-dashboard',
		'special-ne-nav-components',
		'special-ne-nav-topology',
		'special-ne-nav-stacks',
		'special-ne-nav-settings',
		'special-ne-nav-message-support',
		'special-ne-nav-logging',
		'special-ne-nav-terminal',
		'special-ne-nav-instal-log',
	],
	'System & Config': [
		'special-autoboot-profiles',
		'special-automation',
		'special-stacks',
		'special-packages',
		'special-gnmi',
		'special-alarm-settings',
		'special-ne-health',
		'special-hardware',
		'special-modules',
		'special-resources',
		'special-version-control',
		'special-software',
		'special-conflicted-nes',
		'special-yang-version-control',
		'special-old-base-os',
		'special-general-details',
		'special-config-template',
		'special-compare',
		'special-webhook',
		'special-map-view',
	],
	Misc: [
		'special-home',
		'special-lego',
		'special-scheme',
		'special-book',
		'special-device',
		'special-grouped-devices',
		'special-fiber-circuit',
		'special-netgen',
		'special-netgen-s',
	],
	'Active State': ['special-filter-list-active', 'special-cached-active'],
};

export const CustomIcons: Story = {
	args: {
		size: 'medium',
	},
	parameters: {
		layout: 'fullscreen',
	},
	render: function Render(args) {
		const { size } = args;
		const [searchTerm, setSearchTerm] = useState('');

		const filteredCategories = useMemo(() => {
			const result: Record<string, CustomIconName[]> = {};

			Object.entries(customIconCategories).forEach(([category, icons]) => {
				const filteredIcons = icons.filter(
					(icon) =>
						icon.toLowerCase().includes(searchTerm.toLowerCase()) ||
						category.toLowerCase().includes(searchTerm.toLowerCase()),
				);

				if (filteredIcons.length > 0) {
					result[category] = filteredIcons;
				}
			});

			return result;
		}, [searchTerm]);

		const handleIconClick = async (iconName: string) => {
			await navigator.clipboard.writeText(iconName);

			const notification = document.createElement('div');
			notification.className = 'copy-notification';
			notification.textContent = `Copied: ${iconName}`;
			document.body.appendChild(notification);

			setTimeout(() => {
				document.body.removeChild(notification);
			}, 2000);
		};

		const totalIcons = Object.keys(customIcons).length;

		return (
			<div className="container">
				<div className="search-container">
					<input
						type="text"
						placeholder="Search custom icons..."
						className="search"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<div className="icon-count">
						{Object.values(filteredCategories).reduce((total, icons) => total + icons.length, 0)} of{' '}
						{totalIcons} custom icons
					</div>
				</div>

				<div className="fallback-notice">
					These are custom DriveNets-specific icons. Use the &quot;special-&quot; prefix to distinguish them
					from Material Icons.
				</div>

				{Object.keys(filteredCategories).length === 0 ? (
					<div className="no-results">No icons found matching &quot;{searchTerm}&quot;</div>
				) : (
					Object.entries(filteredCategories).map(([category, icons]) => (
						<div key={category} className="category-section">
							<h2 className="category-title">{category}</h2>
							<div className="results">
								{icons.map((iconName) => (
									<button
										key={iconName}
										className="icon-wrapper"
										onClick={() => handleIconClick(iconName)}
										title={`Click to copy: ${iconName}`}
									>
										<DsIcon icon={iconName} size={size} />
										<span className="icon-name">{iconName}</span>
									</button>
								))}
							</div>
						</div>
					))
				)}
			</div>
		);
	},
};
