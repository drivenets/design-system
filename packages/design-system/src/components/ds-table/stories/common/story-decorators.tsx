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

// React tracks an input's value through its own setter, so the native one makes the `input` event count
const typeInto = (input: HTMLInputElement, value: string) => {
	Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, value);
	input.dispatchEvent(new Event('input', { bubbles: true }));
};

const OpenColumnDisplay = ({ children, search }: { children: ReactNode; search?: string }) => {
	useEffect(() => {
		document.querySelector<HTMLButtonElement>('button[aria-label="Columns"]')?.click();

		let frame = 0;
		const typeSearch = () => {
			const input = document.querySelector<HTMLInputElement>('[role="dialog"] input');

			if (input) {
				typeInto(input, search ?? '');
			} else {
				frame = requestAnimationFrame(typeSearch);
			}
		};

		if (search) {
			typeSearch();
		}

		return () => cancelAnimationFrame(frame);
	}, [search]);

	return children;
};

// Visual tests screenshot the first render, and the Columns popover has no prop to start open
export const openColumnDisplayDecorator = (Story: () => ReactNode) => (
	<OpenColumnDisplay>
		<Story />
	</OpenColumnDisplay>
);

export const searchColumnDisplayDecorator = (search: string) =>
	function SearchColumnDisplay(Story: () => ReactNode) {
		return (
			<OpenColumnDisplay search={search}>
				<Story />
			</OpenColumnDisplay>
		);
	};

export const narrowContainerDecorator = (Story: () => ReactNode) => (
	<div className={styles.narrowContainer}>
		<Story />
	</div>
);
