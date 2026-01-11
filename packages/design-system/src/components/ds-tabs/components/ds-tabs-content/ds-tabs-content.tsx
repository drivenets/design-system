import { Tabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import type { DsTabsContentProps } from './ds-tabs-content.types';
import styles from './ds-tabs-content.module.scss';

export const DsTabsContent = ({ value, className, style, children }: DsTabsContentProps) => {
	return (
		<Tabs.Content value={value} className={classNames(styles.content, className)} style={style}>
			{children}
		</Tabs.Content>
	);
};
