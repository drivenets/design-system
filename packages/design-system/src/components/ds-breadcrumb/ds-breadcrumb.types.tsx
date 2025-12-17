import type { IconType } from '../ds-icon';

export type DsBreadcrumbItem =
	| {
			type: 'link';
			label: string;
			href: string;
			icon?: IconType;
	  }
	| {
			type: 'dropdown';
			label: string;
			options: { label: string; href: string }[];
			icon?: IconType;
	  };

export interface DsBreadcrumbProps {
	/**
	 * The items to be displayed in the breadcrumb
	 */
	items: DsBreadcrumbItem[];
	/**
	 * The event handler to be called when an option is selected
	 *
	 * @param href
	 */
	onSelect?: (href: string) => void;
	/**
	 * Additional CSS class name to be applied to the breadcrumb
	 */
	className?: string;
}
