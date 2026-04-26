import type { IconType } from '../ds-icon';

export type DsBreadcrumbItem =
	| {
			/**
			 * Renders the item as a direct navigation link to `href`.
			 */
			type: 'link';
			/**
			 * Visible text for the breadcrumb segment
			 */
			label: string;
			/**
			 * Destination URL navigated to when the segment is clicked
			 */
			href: string;
			/**
			 * Optional icon rendered before the label
			 */
			icon?: IconType;
	  }
	| {
			/**
			 * Renders the item as a dropdown trigger that reveals sibling destinations.
			 */
			type: 'dropdown';
			/**
			 * Visible text for the dropdown trigger
			 */
			label: string;
			/**
			 * Sibling destinations shown in the dropdown. Each option navigates to its
			 * `href` when selected.
			 */
			options: {
				/**
				 * Visible text for the dropdown option
				 */
				label: string;
				/**
				 * Destination URL navigated to when the option is selected
				 */
				href: string;
			}[];
			/**
			 * Optional icon rendered before the label
			 */
			icon?: IconType;
	  };

export interface DsBreadcrumbProps {
	/**
	 * Ordered breadcrumb segments rendered left-to-right. The last item is typically
	 * the current page.
	 */
	items: DsBreadcrumbItem[];
	/**
	 * Called when the user activates any link segment or picks a destination from a
	 * dropdown segment. Receives the selected `href`.
	 */
	onSelect?: (href: string) => void;
	/**
	 * Additional CSS class name applied to the breadcrumb root
	 */
	className?: string;
}
