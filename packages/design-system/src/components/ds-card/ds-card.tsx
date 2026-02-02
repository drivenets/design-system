import classNames from 'classnames';

import styles from './ds-card.module.scss';
import type {
	DsCardRootProps,
	DsCardHeaderProps,
	DsCardTitleProps,
	DsCardExtraProps,
	DsCardBodyProps,
	DsCardFooterProps,
} from './ds-card.types';

/**
 * Card root component - container with optional selectable behavior.
 * Use composition with DsCard.Header, DsCard.Body, DsCard.Footer for full flexibility.
 */
const Root = ({
	ref,
	size = 'medium',
	selectable = false,
	selected = false,
	highlightSelected = false,
	disabled = false,
	className,
	style,
	children,
	...rest
}: DsCardRootProps) => {
	const interactiveProps = selectable
		? {
				role: 'button' as const,
				tabIndex: disabled ? -1 : 0,
				'aria-pressed': selected,
				'aria-disabled': disabled || undefined,
			}
		: {};

	return (
		<div
			ref={ref}
			{...rest}
			{...interactiveProps}
			data-size={size}
			data-selectable={selectable || undefined}
			data-selected={selected || undefined}
			data-disabled={disabled || undefined}
			data-highlight={(selected && highlightSelected) || undefined}
			className={classNames(styles.root, className)}
			style={style}
		>
			{children}
		</div>
	);
};

/**
 * Card header - contains title and extra content.
 * Use with DsCard.Title and DsCard.Extra for standard layout,
 * or provide custom children for full flexibility.
 */
const Header = ({ className, style, children, ref }: DsCardHeaderProps) => (
	<div ref={ref} className={classNames(styles.header, className)} style={style}>
		{children}
	</div>
);

/**
 * Card title - left-aligned title within the header.
 */
const Title = ({ className, style, children, ref }: DsCardTitleProps) => (
	<div ref={ref} className={classNames(styles.title, className)} style={style}>
		{children}
	</div>
);

/**
 * Card extra - right-aligned extra content within the header.
 */
const Extra = ({ className, style, children, ref }: DsCardExtraProps) => (
	<div ref={ref} className={classNames(styles.extra, className)} style={style}>
		{children}
	</div>
);

/**
 * Card body - main content area.
 */
const Body = ({ className, style, children, ref }: DsCardBodyProps) => (
	<div ref={ref} className={classNames(styles.body, className)} style={style}>
		{children}
	</div>
);

/**
 * Card footer - bottom section for actions or additional info.
 */
const Footer = ({ className, style, children, ref }: DsCardFooterProps) => (
	<div ref={ref} className={classNames(styles.footer, className)} style={style}>
		{children}
	</div>
);

export const DsCard = {
	Root,
	Header,
	Title,
	Extra,
	Body,
	Footer,
};
