import classNames from 'classnames';
import { useId } from 'react';
import { DsIcon, type IconType } from '../../../ds-icon';
import { DsSegmentGroup } from '../../../ds-segment-group';
import { DsTooltip } from '../../../ds-tooltip';
import { useDsFiltersBarContext } from '../../ds-filters-bar.context';
import styles from './ds-filters-bar-view-switch.module.scss';
import {
	defaultDsFiltersBarViewSwitchLocale,
	filtersBarViews,
	type DsFiltersBarView,
	type DsFiltersBarViewSwitchProps,
} from '../../ds-filters-bar.types';
import { isFiltersBarView } from '../../ds-filters-bar.utils';

const VIEW_ICONS: Readonly<Record<DsFiltersBarView, IconType>> = Object.freeze({
	filters: 'filter_alt',
	builder: 'account_tree',
	advanced: 'code',
});

export const ViewSwitch = ({ locale: localeProp, ref, className, style }: DsFiltersBarViewSwitchProps) => {
	const { view, lockedViews, setView } = useDsFiltersBarContext();
	const lockedReasonId = useId();
	const locale = {
		...defaultDsFiltersBarViewSwitchLocale,
		...localeProp,
		views: { ...defaultDsFiltersBarViewSwitchLocale.views, ...localeProp?.views },
	};

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
			{/* The tooltip only shows on hover, so a locked radio also carries the reason as its description. */}
			{lockedViews.length > 0 && (
				<span id={lockedReasonId} className={styles.visuallyHidden}>
					{locale.lockedView}
				</span>
			)}
			{filtersBarViews.map((item) => {
				const locked = lockedViews.includes(item);

				return (
					// The wrapper is the tooltip trigger, so the item keeps its own `data-state`; it is
					// always there, so locking does not remount the item.
					<DsTooltip key={item} content={locale.lockedView} disabled={!locked}>
						<span className={styles.viewSwitchItem}>
							<DsSegmentGroup.Item
								value={item}
								aria-label={locale.views[item]}
								aria-describedby={locked ? lockedReasonId : undefined}
								disabled={locked}
							>
								<DsIcon icon={VIEW_ICONS[item]} size="tiny" aria-hidden />
							</DsSegmentGroup.Item>
						</span>
					</DsTooltip>
				);
			})}
		</DsSegmentGroup.Root>
	);
};

ViewSwitch.displayName = 'DsFiltersBar.ViewSwitch';
