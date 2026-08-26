import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { DsButton } from '../ds-button';
import { DsIcon } from '../ds-icon';
import { DsPopover } from '../ds-popover';
import { DsStack } from '../ds-stack';
import { DsMainMenu } from './index';
import type { DsMainMenuItem, DsMainMenuUtilityLink } from './ds-main-menu.types';
import styles from './ds-main-menu.stories.module.scss';

const SAMPLE_ITEMS: DsMainMenuItem[] = [
	{ id: 'network-visibility', label: 'Network visibility', icon: 'visibility' },
	{ id: 'planning', label: 'Planning', icon: 'account_tree' },
	{ id: 'configurations', label: 'Configurations', icon: 'tune' },
	{ id: 'deployments', label: 'Deployments', icon: 'rocket_launch' },
	{ id: 'workflows', label: 'Workflows', icon: 'route' },
	{ id: 'packages', label: 'Packages', icon: 'special-packages' },
	{ id: 'operations-ai', label: 'AI Ops', icon: 'psychology' },
	{ id: 'resource-allocation', label: 'Resource allocation', icon: 'dashboard_customize' },
	{ id: 'triggers', label: 'Triggers', icon: 'bolt' },
	{ id: 'referential-data', label: 'Referential data', icon: 'table_rows' },
];
const SAMPLE_UTILITY_LINKS: DsMainMenuUtilityLink[] = [
	{ id: 'help-support', label: 'Help & Support', icon: 'contact_support' },
	{ id: 'knowledge-center', label: 'Knowledge Center', icon: 'local_library' },
];

const MainMenuPopover = ({
	items = SAMPLE_ITEMS,
	utilityLinks = SAMPLE_UTILITY_LINKS,
	selectedId,
	onItemSelect,
}: {
	items?: DsMainMenuItem[];
	utilityLinks?: DsMainMenuUtilityLink[];
	selectedId?: string;
	onItemSelect?: (id: string) => void;
}) => (
	<DsPopover
		side="bottom"
		align="start"
		className={styles.popoverContent}
		trigger={
			<DsButton schema="secondary">
				<DsIcon icon="apps" /> Open main menu
			</DsButton>
		}
	>
		<DsMainMenu
			items={items}
			utilityLinks={utilityLinks}
			selectedId={selectedId}
			onItemSelect={onItemSelect}
		/>
	</DsPopover>
);

const meta: Meta<typeof DsMainMenu> = {
	title: 'Components/MainMenu',
	component: DsMainMenu,
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof DsMainMenu>;

export const InPopover: Story = {
	render: () => <MainMenuPopover />,
};

export const WithSelection: Story = {
	render: () => <MainMenuPopover selectedId="packages" />,
};

export const ControlledSelection: Story = {
	render: () => {
		const [selectedId, setSelectedId] = useState('planning');

		return (
			<MainMenuPopover
				selectedId={selectedId}
				onItemSelect={(id) => {
					const item = SAMPLE_ITEMS.find((entry) => entry.id === id);
					if (item?.state === 'disabled' || item?.state === 'comingSoon') {
						return;
					}
					setSelectedId(id);
				}}
			/>
		);
	},
};

export const ItemStates: Story = {
	render: () => (
		<DsStack direction="row" gap="var(--lg)" alignItems="flex-start">
			<DsMainMenu
				items={[
					{ id: 'available', label: 'My Dashboard', icon: 'speed' },
					{ id: 'disabled', label: 'My Dashboard', icon: 'speed', state: 'disabled' },
					{ id: 'coming-soon', label: 'My Dashboard', icon: 'speed', state: 'comingSoon' },
				]}
				utilityLinks={[]}
			/>
		</DsStack>
	),
};

export const TileInteractionStates: Story = {
	render: () => (
		<DsStack direction="row" gap="var(--md)" alignItems="flex-start">
			<DsMainMenu
				items={[
					{ id: 'regular', label: 'My Dashboard', icon: 'speed' },
					{ id: 'selected', label: 'My Dashboard', icon: 'speed' },
				]}
				selectedId="selected"
				utilityLinks={[]}
			/>
			<p style={{ maxWidth: 220, margin: 0, color: 'var(--color-font-secondary)', fontSize: 12 }}>
				Hover and focus individual tiles to preview interaction states. Selected uses <code>selectedId</code>.
			</p>
		</DsStack>
	),
};

export const WithHrefLinks: Story = {
	render: () => (
		<DsMainMenu
			items={[
				{ id: 'dashboard', label: 'My dashboard', icon: 'speed', href: '/dashboard' },
				{ id: 'inventory', label: 'Inventory', icon: 'inventory_2', href: '/inventory' },
				{ id: 'planning', label: 'Network planning', icon: 'account_tree', href: '/planning' },
			]}
			utilityLinks={[
				{ id: 'help', label: 'Help & Support', icon: 'contact_support', href: '/help' },
				{ id: 'docs', label: 'Knowledge Center', icon: 'local_library', href: '/docs' },
			]}
		/>
	),
};

export const PanelOnly: Story = {
	render: () => (
		<DsMainMenu items={SAMPLE_ITEMS.slice(0, 9)} utilityLinks={SAMPLE_UTILITY_LINKS} selectedId="workflows" />
	),
};

export const TriggerIcon: Story = {
	render: () => (
		<DsPopover
			side="bottom"
			align="start"
			className={styles.popoverContent}
			trigger={
				<DsButton variant="borderless" aria-label="Open applications">
					<DsIcon icon="apps" />
				</DsButton>
			}
		>
			<DsMainMenu items={SAMPLE_ITEMS} utilityLinks={SAMPLE_UTILITY_LINKS} selectedId="network-visibility" />
		</DsPopover>
	),
};
