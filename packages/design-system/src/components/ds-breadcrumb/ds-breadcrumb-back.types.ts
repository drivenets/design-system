export interface DsBreadcrumbBackProps {
	/** Destination; renders a router link instead of a button. */
	href?: string;
	className?: string;
	locale?: {
		/** @default 'Back' */
		label?: string;
	};
	/** Called when the back crumb is activated. */
	onClick?: () => void;
}
