import { ReactNode } from 'react';

export interface DsDropdownProps {
  /**
   * The options to be displayed in the dropdown
   */
  options: { label: string; href: string }[];
  /**
   * The selected option
   */
  selectedHref?: string;
  /**
   * The event handler to be called when an option is selected
   *
   * @param href
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
