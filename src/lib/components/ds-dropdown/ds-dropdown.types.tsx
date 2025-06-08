import { ReactNode } from 'react';

/**
 * Represents a single option in the dropdown menu
 */
export interface DsDropdownOption {
  /**
   * The text label to display for this option
   */
  label: string;
  /**
   * The unique identifier/href for this option
   */
  href: string;
  /**
   * Optional icon to display next to the option
   * Can be either a string (icon name) or a React node
   */
  icon?: string | ReactNode;
}

/**
 * Props for the DsDropdown component
 */
export interface DsDropdownProps {
  /**
   * The options to be displayed in the dropdown
   */
  options: DsDropdownOption[];
  /**
   * The selected option
   */
  selectedHref?: string;
  /**
   * The event handler to be called when an option is selected
   * @param href - The href of the selected option
   */
  onSelect?: (href: string) => void;
  /**
   * Optional children to be rendered inside the component
   */
  children?: ReactNode | undefined;
  /**
   * The gap between the trigger and dropdown content in pixels
   * @default 0
   */
  contentGap?: number;
}
