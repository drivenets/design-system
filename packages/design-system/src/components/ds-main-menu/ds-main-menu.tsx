import { useState } from 'react';
import classNames from 'classnames';
import { DsDivider } from '../ds-divider';
import { DsPopover } from '../ds-popover';
import { ExpandedItem } from './components/expanded-item';
import { TileLink } from './components/tile-link';
import { UtilityLink } from './components/utility-link';
import type { DsMainMenuProps } from './ds-main-menu.types';
import styles from './ds-main-menu.module.scss';

const DsMainMenu = ({
	trigger,
	items,
	utilityLinks,
	variant = 'compact',
	selectedId,
	onItemSelect,
	className,
	style,
	ref,
	'aria-label': ariaLabel = 'Main menu',
	side = 'bottom',
	align = 'start',
	gutter = 8,
	getAnchorElement,
	open: openProp,
	onOpenChange,
}: DsMainMenuProps) => {
	const isControlled = openProp !== undefined;
	const [internalOpen, setInternalOpen] = useState(false);
	const open = isControlled ? openProp : internalOpen;

	const handleOpenChange = (nextOpen: boolean) => {
		if (!isControlled) {
			setInternalOpen(nextOpen);
		}

		onOpenChange?.(nextOpen);
	};

	const closePanel = () => handleOpenChange(false);

	return (
		<DsPopover.Root
			open={open}
			side={side}
			align={align}
			gutter={gutter}
			getAnchorElement={getAnchorElement}
			onOpenChange={handleOpenChange}
		>
			<DsPopover.Trigger>{trigger}</DsPopover.Trigger>
			<DsPopover.Panel className={styles.panel}>
				<nav
					ref={ref}
					className={classNames(styles.root, className)}
					style={style}
					aria-label={ariaLabel}
					data-variant={variant}
				>
					<ul className={styles.grid} data-variant={variant}>
						{items.map((item) => (
							<li key={item.id} className={variant === 'expanded' ? styles.expandedItem : styles.tile}>
								{variant === 'expanded' ? (
									<ExpandedItem
										item={item}
										isSelected={item.id === selectedId}
										onItemSelect={onItemSelect}
										onClose={closePanel}
									/>
								) : (
									<TileLink
										item={item}
										isSelected={item.id === selectedId}
										onItemSelect={onItemSelect}
										onClose={closePanel}
									/>
								)}
							</li>
						))}
					</ul>
					{utilityLinks.length > 0 && (
						<div className={styles.footer}>
							<DsDivider />
							<ul className={styles.utilityList}>
								{utilityLinks.map((link) => (
									<li key={link.id} className={styles.utilityItem}>
										<UtilityLink link={link} onItemSelect={onItemSelect} onClose={closePanel} />
									</li>
								))}
							</ul>
						</div>
					)}
				</nav>
			</DsPopover.Panel>
		</DsPopover.Root>
	);
};

DsMainMenu.displayName = 'DsMainMenu';

export default DsMainMenu;
