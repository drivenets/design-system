import { useEffect, type ReactNode } from 'react';

import styles from '../ds-table.stories.module.scss';

export const fullHeightDecorator = (Story: () => ReactNode) => (
	<div className={styles.storyPadding}>
		<style>
			{`
            #storybook-root, html, body { height: 100%; }
          `}
		</style>
		<Story />
	</div>
);

const OpenColumnDisplay = ({ children }: { children: ReactNode }) => {
	useEffect(() => {
		// Opening focuses the first row, which a script-driven open draws with a keyboard focus ring,
		// so rows give focus back until the first real key or pointer press
		const blurRow = ({ target }: FocusEvent) => {
			if (target instanceof HTMLElement && target.closest('[role="tree"]')) {
				target.blur();
			}
		};
		const stop = () => {
			document.removeEventListener('focusin', blurRow, true);
			document.removeEventListener('keydown', stop, true);
			document.removeEventListener('pointerdown', stop, true);
		};

		document.addEventListener('focusin', blurRow, true);
		document.addEventListener('keydown', stop, true);
		document.addEventListener('pointerdown', stop, true);
		document.querySelector<HTMLButtonElement>('button[aria-label="Columns"]')?.click();

		return stop;
	}, []);

	return children;
};

// Visual tests screenshot the first render, and the Columns popover has no prop to start open
export const openColumnDisplayDecorator = (Story: () => ReactNode) => (
	<OpenColumnDisplay>
		<Story />
	</OpenColumnDisplay>
);

export const narrowContainerDecorator = (Story: () => ReactNode) => (
	<div className={styles.narrowContainer}>
		<Story />
	</div>
);
