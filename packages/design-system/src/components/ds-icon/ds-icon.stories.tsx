import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useMemo, useState } from 'react';
import DsIcon from './ds-icon';
import './ds-icon.stories.scss';
import { materialIcons } from './material-icons';
import { iconSizes, iconVariants, type IconName } from './ds-icon.types';

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
		icon: 'check_circle',
		size: 'medium',
		filled: true,
		style: { color: '#4CAF50' },
	},
};

interface IconsByCategory {
	[category: string]: IconName[];
}

// Raw GitHub content URL instead of the GitHub HTML page
const ICONS_URL =
	'https://raw.githubusercontent.com/google/material-design-icons/master/update/current_versions.json';

export const Showcase: Story = {
	parameters: {
		layout: 'fullscreen',
	},
	render: function Render() {
		const [searchTerm, setSearchTerm] = useState('');
		const [iconsByCategory, setIconsByCategory] = useState<IconsByCategory>({});
		const [isLoading, setIsLoading] = useState(true);
		// const [error, setError] = useState<string | null>(null);
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
											<DsIcon icon={iconName} size="medium" />
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
