import type React from 'react';
import { useState, useEffect, useRef, type CSSProperties } from 'react';
import classNames from 'classnames';
import { useTabsContext } from '../../context/ds-tabs-context';
import type { DsTabsIndicatorProps } from './ds-tabs-indicator.types';
import styles from './ds-tabs-indicator.module.scss';

export const DsTabsIndicator: React.FC<DsTabsIndicatorProps> = ({ className, style }) => {
	const { orientation, currentValue } = useTabsContext();
	const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({});
	const indicatorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const updateIndicator = () => {
			const tabsList = indicatorRef.current?.parentElement;
			if (!tabsList) {
				return;
			}

			let selectedTrigger = tabsList.querySelector(
				'button[data-scope="tabs"][data-part="trigger"][data-selected]',
			);

			if (!selectedTrigger) {
				selectedTrigger = tabsList.querySelector('button[data-overflow-trigger="true"][data-selected]');
			}

			if (selectedTrigger) {
				const tabsListRect = tabsList.getBoundingClientRect();
				const triggerRect = selectedTrigger.getBoundingClientRect();

				if (orientation === 'horizontal') {
					const left = triggerRect.left - tabsListRect.left;
					const width = triggerRect.width;
					setIndicatorStyle({
						left: `${left.toString()}px`,
						width: `${width.toString()}px`,
						transform: 'none',
					});
				} else {
					const top = triggerRect.top - tabsListRect.top;
					const height = triggerRect.height;
					setIndicatorStyle({
						top: `${top.toString()}px`,
						height: `${height.toString()}px`,
						transform: 'none',
					});
				}
			}
		};

		updateIndicator();

		const tabsList = indicatorRef.current?.parentElement;
		if (!tabsList) {
			return;
		}

		const observer = new MutationObserver(updateIndicator);
		observer.observe(tabsList, {
			attributes: true,
			attributeFilter: ['data-selected', 'data-value'],
			childList: true,
			characterData: true,
			subtree: true,
		});

		const resizeObserver = new ResizeObserver(updateIndicator);
		resizeObserver.observe(tabsList);

		const timeout = setTimeout(updateIndicator, 100);

		return () => {
			observer.disconnect();
			resizeObserver.disconnect();
			clearTimeout(timeout);
		};
	}, [orientation, currentValue]);

	return (
		<div
			ref={indicatorRef}
			className={classNames(styles.indicator, styles[`indicator-${orientation}`], className)}
			style={{ ...indicatorStyle, ...style }}
		/>
	);
};
