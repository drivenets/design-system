import classNames from 'classnames';
import { DsIcon, type IconType } from '../../../ds-icon';
import { DsSegmentGroup } from '../../../ds-segment-group';
import { useDsFiltersBarContext } from '../../ds-filters-bar.context';
import styles from './ds-filters-bar-view-switch.module.scss';
import type { DsFiltersBarView, DsFiltersBarViewSwitchSlotProps } from '../../ds-filters-bar.types';
import { isFiltersBarView } from '../../ds-filters-bar.utils';

const VIEW_ICONS: Readonly<Record<DsFiltersBarView, IconType>> = Object.freeze({
	filters: 'filter_alt',
	builder: 'account_tree',
});

export const ViewSwitch = ({ ref, className, style }: DsFiltersBarViewSwitchSlotProps) => {
	const { view, views, locale: barLocale, setView } = useDsFiltersBarContext();
	const locale = barLocale.viewSwitch;

	return (
		<DsSegmentGroup.Root
			ref={ref}
			size="small"
			value={view}
			aria-label={locale.label}
			className={classNames(styles.viewSwitch, className)}
			style={style}
			onValueChange={(next) => {
				if (isFiltersBarView(next)) {
					setView(next);
				}
			}}
		>
			{views.map((item) => (
				<DsSegmentGroup.Item key={item} value={item} aria-label={locale.views[item]}>
					<DsIcon icon={VIEW_ICONS[item]} size="tiny" aria-hidden />
				</DsSegmentGroup.Item>
			))}
		</DsSegmentGroup.Root>
	);
};
