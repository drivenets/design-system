import classNames from 'classnames';
import { useId } from 'react';
import { DsIcon } from '../../ds-icon';
import { DsToggleFilterData } from '../../ds-toggle-filter-data';
import { DsTypography } from '../../ds-typography';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import styles from '../ds-filters-bar.module.scss';
import {
	defaultDsFiltersBarPinnedLocale,
	type DsFiltersBarPinnedGroupProps,
	type DsFiltersBarPinnedProps,
	type DsFiltersBarPinnedToggleProps,
} from '../ds-filters-bar.types';

export const Pinned = ({ locale: localeProp, className, style, children }: DsFiltersBarPinnedProps) => {
	useDsFiltersBarContext();
	const locale = { ...defaultDsFiltersBarPinnedLocale, ...localeProp };

	return (
		<div className={classNames(styles.pinned, className)} style={style}>
			<span className={styles.pinnedLabel}>
				<DsIcon icon="keep" size="tiny" filled aria-hidden />
				<DsTypography variant="body-xs-md">{locale.label}</DsTypography>
			</span>
			{children}
		</div>
	);
};

Pinned.displayName = 'DsFiltersBar.Pinned';

export const PinnedGroup = ({ label, className, style, children }: DsFiltersBarPinnedGroupProps) => {
	useDsFiltersBarContext();
	const labelId = useId();

	return (
		<div
			role="group"
			aria-labelledby={labelId}
			className={classNames(styles.pinnedGroup, className)}
			style={style}
		>
			<span id={labelId} className={styles.pinnedGroupLabel}>
				<DsTypography variant="body-xs-md" color="secondary">
					{label}
				</DsTypography>
			</span>
			<div className={styles.pinnedToggles}>{children}</div>
		</div>
	);
};

PinnedGroup.displayName = 'DsFiltersBar.PinnedGroup';

export const PinnedToggle = ({
	label,
	count,
	active,
	disabled,
	ref,
	className,
	style,
	onActiveChange,
}: DsFiltersBarPinnedToggleProps) => {
	useDsFiltersBarContext();

	return (
		<DsToggleFilterData
			ref={ref}
			label={label}
			value={count}
			active={active}
			disabled={disabled ?? count === 0}
			className={className}
			style={style}
			onActiveChange={onActiveChange}
		/>
	);
};

PinnedToggle.displayName = 'DsFiltersBar.PinnedToggle';
