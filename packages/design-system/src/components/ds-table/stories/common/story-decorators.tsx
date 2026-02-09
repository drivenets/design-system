import type { ReactNode } from 'react';

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
