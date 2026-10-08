import classNames from 'classnames';
import { useId } from 'react';
import { DsIcon, type IconType } from '../../../ds-icon';
import { DsSegmentGroup } from '../../../ds-segment-group';
import { DsTooltip } from '../../../ds-tooltip';
import { useDsFiltersBarContext } from '../../ds-filters-bar.context';
import styles from './ds-filters-bar-view-switch.module.scss';
import type { DsFiltersBarView, DsFiltersBarViewSwitchSlotProps } from '../../ds-filters-bar.types';
import { isFiltersBarView } from '../../ds-filters-bar.utils';

const VIEW_ICONS: Readonly<Record<DsFiltersBarView, IconType>> = Object.freeze({
	filters: 'filter_alt',
	builder: 'account_tree',
	advanced: 'code',
});

/**
 * Offers the listed views. While an edited advanced query is the source, the filters and builder
 * views are locked.
 */
export const ViewSwitch = ({ ref, className, style }: DsFiltersBarViewSwitchSlotProps) => {
	const { view, views, lockedViews, locale: barLocale, setView } = useDsFiltersBarContext();
	const lockedReasonId = useId();
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
			{/* The tooltip only shows on hover, so a locked radio also carries the reason as its description. */}
			{views.some((item) => lockedViews.includes(item)) && (
				<span id={lockedReasonId} className={styles.visuallyHidden}>
					{locale.lockedView}
				</span>
			)}
			{views.map((item) => {
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
