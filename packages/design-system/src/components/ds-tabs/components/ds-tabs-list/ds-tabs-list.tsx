import { Tabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import type { DsTabsListProps } from '../../ds-tabs.types';
import styles from './ds-tabs-list.module.scss';
import indicatorStyles from './ds-tabs-indicator.module.scss';

export const DsTabsList = ({ className, style, children }: DsTabsListProps) => {
	return (
		<Tabs.List className={classNames(styles.tabList, className)} style={style}>
			{children}
			<Tabs.Indicator className={indicatorStyles.indicator} />
		</Tabs.List>
	);
};
