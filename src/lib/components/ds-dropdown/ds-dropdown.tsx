import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styles from './ds-dropdown.module.scss';
import { DsIcon } from '../ds-icon';
import { DsDropdownProps } from './ds-dropdown.types';

/**
 * Design system Dropdown component
 */
const DsDropdown: React.FC<DsDropdownProps> = ({
  options,
  selectedHref,
  onSelect,
  children,
  contentGap = 0,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (selectedHref !== undefined) {
      setSelectedItem(selectedHref);
    }
  }, [selectedHref]);

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Content
        className={classNames(styles.content, styles.viewport)}
        sideOffset={contentGap}
      >
        <div className={styles.searchInput}>
          <input
            type="text"
            className={styles.searchInputField}
            placeholder="Search"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <DsIcon className={styles.searchIcon} icon="search" />
        </div>
        {filteredOptions.map((option, idx) => {
          const isSelected = selectedItem === option.href;
          return (
            <DropdownMenu.Item key={idx} asChild>
              <a
                href={option.href}
                className={classNames(styles.item, {
                  [styles.selected]: isSelected,
                })}
                onClick={e => {
                  e.preventDefault();
                  setSelectedItem(option.href);
                  onSelect?.(option.href);
                  setOpen(false);
                }}
              >
                <span className={styles.indicator}>{isSelected && <DsIcon icon="check" />}</span>
                {option.label}
              </a>
            </DropdownMenu.Item>
          );
        })}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default DsDropdown;
