import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsBotButton } from './index';

const meta: Meta<typeof DsBotButton> = {
	title: 'Components/BotButton',
	component: DsBotButton,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
Launcher for the NetGen AI companion — one instance per screen, mounted in the platform chrome
(\`DsTopBarNavigation.Actions\`).

A \`DsButtonV3\` preset — \`primary-subtle\`, \`small\`, high-emphasis — with fixed branding for
content: the NetGen mark plus the bot's name. Reach for \`DsButtonV3\` itself for any other
action; this button is not a general-purpose control.

- \`selected\` — the bot panel is open; drive it from the panel's own open state
- \`loading\` — the bot is starting up or answering; a spinner replaces the mark and interaction is blocked
- \`disabled\` — the bot is unavailable (permission or license)

\`disabled\` overrides both other states; \`loading\` composes with \`selected\`, so a panel that
is open while the bot answers keeps its pressed look under the spinner.
				`,
			},
		},
	},
	argTypes: {
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;

type Story = StoryObj<typeof DsBotButton>;

/**
 * The resting launcher. Wire `onClick` to open the NetGen panel.
 */
export const Default: Story = {
	args: {
		selected: false,
		loading: false,
		disabled: false,
	},
};

/**
 * The pressed look for while the panel is open. Mirror the panel's open state here — the button
 * exposes it as `aria-pressed`, so a stale value misreports the panel to screen readers.
 */
export const Selected: Story = {
	args: { selected: true },
};

/**
 * While the bot boots or composes an answer. The spinner takes the mark's slot so the button keeps
 * its width, and clicks are blocked until it clears.
 */
export const Loading: Story = {
	args: { loading: true },
};

/**
 * The panel is open and the bot is still answering. `loading` blocks interaction without clearing
 * the pressed look, so the button keeps reporting the panel as open while the spinner runs.
 */
export const SelectedLoading: Story = {
	args: { selected: true, loading: true },
};

/**
 * The bot is unavailable — no license, or the signed-in user lacks permission. The mark drops to
 * its greyscale tone rather than being dimmed, matching the NetGen logo's own inactive variant.
 */
export const Disabled: Story = {
	args: { disabled: true },
};

/**
 * The label doubles as the accessible name, so translate it through `locale` rather than wrapping
 * the button. The bot's name is branding — translate it, never repurpose it.
 */
export const Localized: Story = {
	args: { locale: { label: 'NetGen (DE)' } },
};

/**
 * How a shell drives it: the launcher and the panel share one piece of state, so the pressed look
 * and the panel can never disagree.
 */
export const Toggle: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [open, setOpen] = useState(false);

		return <DsBotButton selected={open} onClick={() => setOpen((wasOpen) => !wasOpen)} />;
	},
};
