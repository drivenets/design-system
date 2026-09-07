import type { ButtonHTMLAttributes, Ref } from 'react';

/** `color` is dropped with `children`: content is fixed branding and the palette is the preset's. */
export interface DsBotButtonProps extends Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	'children' | 'color'
> {
	ref?: Ref<HTMLButtonElement>;

	/**
	 * Pressed look for while the bot panel is open. Report the panel's open state here so the
	 * button and the panel cannot disagree.
	 * @default false
	 */
	selected?: boolean;

	/**
	 * Swaps the logo for a spinner and blocks interaction while the bot starts up or answers.
	 * Composes with `selected`: a panel that is open while the bot answers keeps the pressed look
	 * under the spinner. `disabled` overrides both.
	 * @default false
	 */
	loading?: boolean;

	locale?: {
		/**
		 * Visible label and the button's accessible name. The bot's name is fixed branding —
		 * override it only to translate it, never to repurpose the button.
		 * @default 'NetGen'
		 */
		label?: string;
	};
}
