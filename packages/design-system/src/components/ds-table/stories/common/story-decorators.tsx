import type { ReactNode } from 'react';
import DsIcon from '../../../ds-icon/ds-icon';
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

export const defaultEmptyState = (
	<div className={styles.emptyStateContainer}>
		<DsIcon icon="info" size="large" />
		<p className={styles.emptyStateContainer__text}>No matching records found.</p>
	</div>
);
