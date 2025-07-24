import React, { useState } from 'react';
import * as Select from '@radix-ui/react-select';
import classNames from 'classnames';
import styles from './ds-select.module.scss';
import { DsSelectProps } from './ds-select.types';
import { DsIcon } from '../ds-icon';

const SEARCH_THRESHOLD = 13;

const DsSelect: React.FC<DsSelectProps> = ({
	id,
	options,
	value,
	style,
	size,
	onClear,
	onValueChange,
	onBlur,
	placeholder = 'Click to select a value',
	...props
}) => {
	const [open, setOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	const filteredOptions = options.filter((option) =>
		option.label.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const handleOpenChange = (isOpen: boolean) => {
		setOpen(isOpen);
		if (!isOpen) {
			setSearchTerm('');
		}
	};

	const selectedOption = options.find((option) => option.value === value);

	return (
		<div className={styles.container} style={style}>
			<Select.Root
				value={value}
				onValueChange={onValueChange}
				open={open}
				onOpenChange={handleOpenChange}
				{...props}
			>
				<Select.Trigger
					id={id}
					className={classNames(styles.trigger, { [styles.small]: size === 'small' })}
					onBlur={onBlur}
				>
					<div className={styles.itemValue}>
						<Select.Value className={styles.itemValueText} placeholder={placeholder} />
					</div>
					<div className={styles.triggerIcons}>
						{selectedOption && (
							<button
								onPointerDown={(e) => e.stopPropagation()}
								onClick={onClear}
								className={styles.clearIcon}
								aria-label="Clear value"
							>
								<DsIcon icon="close" />
							</button>
						)}
						<Select.Icon className={styles.triggerIcon}>
							<DsIcon
								icon="keyboard_arrow_down"
								className={classNames({
									[styles.iconRotated]: open,
								})}
							/>
						</Select.Icon>
					</div>
				</Select.Trigger>

				<Select.Portal>
					<Select.Content className={styles.content} position="popper" sideOffset={4}>
						{options.length > SEARCH_THRESHOLD && (
							<div className={styles.searchInput}>
								<DsIcon className={styles.searchIcon} icon="search" size="tiny" />
								<input
									type="text"
									className={styles.searchInputField}
									placeholder="Search"
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
								/>
							</div>
						)}
						<Select.Viewport className={styles.viewport}>
							{filteredOptions.map((option) => (
								<Select.Item key={option.value} className={styles.item} value={option.value}>
									<div className={styles.itemValue}>
										{option.icon && <DsIcon className={styles.itemIcon} icon={option.icon} />}
										<Select.ItemText>{option.label}</Select.ItemText>
									</div>
								</Select.Item>
							))}
						</Select.Viewport>
					</Select.Content>
				</Select.Portal>
			</Select.Root>
		</div>
	);
};

export default DsSelect;
