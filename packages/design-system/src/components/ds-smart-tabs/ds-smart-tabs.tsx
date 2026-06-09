import { type CSSProperties, createContext, useContext } from 'react';
import type React from 'react';
import classNames from 'classnames';
import { DsIcon } from '../ds-icon';
import styles from './ds-smart-tabs.module.scss';
import type { Color, DsSmartTabProps, DsSmartTabsProps } from './ds-smart-tabs.types';

const colorMap: Record<Color, string> = {
	'dark-blue': 'var(--background-info-strong)',
	'light-blue': 'var(--background-active-moderate)',
	'dark-gray': 'var(--background-brand)',
	green: 'var(--background-success-strong)',
	fuchsia: 'var(--color-dap-data-fuchsia)',
	blue: 'var(--icon-information-secondary)',
	gray: 'var(--icon-information-main)',
	red: 'var(--icon-warning)',
	amber: 'var(--color-dap-data-amber)',
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
		<button
			type="button"
			className={tabClass}
			style={tabStyle}
			onClick={handleClick}
			disabled={disabled}
			{...props}
		>
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
