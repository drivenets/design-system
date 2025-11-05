import React, { createContext, CSSProperties, useContext } from 'react';
import classNames from 'classnames';
import { DsIcon } from '../ds-icon';
import styles from './ds-smart-tabs.module.scss';
import { Color, DsSmartTabProps, DsSmartTabsProps } from './ds-smart-tabs.types';

const colorMap: Record<Color, string> = {
	'dark-blue': 'var(--color-background-info-strong)',
	'light-blue': 'var(--color-background-active-moderate)',
	green: 'var(--color-background-success-strong)',
	fuchsia: 'var(--color-data-fuchsia)',
	blue: 'var(--color-icon-information-secondary)',
	gray: 'var(--color-icon-information-main)',
	red: 'var(--color-icon-warning)',
	amber: 'var(--color-data-amber)',
};

interface SmartTabsContextType {
	activeTab: string;
	onTabClick: (value: string) => void;
}

const SmartTabsContext = createContext<SmartTabsContextType | null>(null);

const useSmartTabsContext = () => {
	const context = useContext(SmartTabsContext);
	if (!context) {
		throw new Error('DsTab must be used within DsSmartTabs');
	}
	return context;
};

/**
 * Individual tab component
 */
const DsSmartTab: React.FC<DsSmartTabProps> = ({
	label,
	value,
	icon,
	content,
	color,
	disabled,
	className,
	style = {},
	...props
}) => {
	const { activeTab, onTabClick } = useSmartTabsContext();

	const tabClass = classNames(
		styles.tab,
		{
			[styles.active]: activeTab === value,
			[styles.disabled]: disabled,
		},
		className,
	);
	const tabStyle = {
		...style,
		...(color && ({ '--tab-color': colorMap[color] } as CSSProperties)),
	};

	const handleClick = () => {
		if (!disabled) {
			onTabClick(value);
		}
	};

	return (
		<button className={tabClass} style={tabStyle} onClick={handleClick} disabled={disabled} {...props}>
			<DsIcon className={styles.icon} icon={icon} size="small" />
			<span className={styles.label}>{label}</span>
			<span className={styles.content}>{content}</span>
		</button>
	);
};

/**
 * Design system SmartTabs component
 */
const DsSmartTabs = ({
	activeTab,
	onTabClick,
	className,
	style = {},
	children,
	...props
}: DsSmartTabsProps) => {
	const contextValue: SmartTabsContextType = {
		activeTab,
		onTabClick,
	};

	return (
		<SmartTabsContext.Provider value={contextValue}>
			<div className={classNames(styles.container, className)} style={style} {...props}>
				{children}
			</div>
		</SmartTabsContext.Provider>
	);
};

DsSmartTabs.Tab = DsSmartTab;

export default DsSmartTabs;
