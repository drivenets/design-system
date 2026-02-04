import classNames from 'classnames';

import styles from './ds-card.module.scss';
import type { DsCardRootProps, DsCardHeaderProps, DsCardBodyProps, DsCardFooterProps } from './ds-card.types';

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
	onClick,
	onKeyDown,
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
			onClick={disabled ? undefined : onClick}
			onKeyDown={disabled ? undefined : onKeyDown}
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
const Header = ({ className, children, ref, ...rest }: DsCardHeaderProps) => (
	<div ref={ref} className={classNames(styles.header, className)} {...rest}>
		{children}
	</div>
);

/**
 * Card body - main content area.
 */
const Body = ({ className, children, ref, ...rest }: DsCardBodyProps) => (
	<div ref={ref} className={classNames(styles.body, className)} {...rest}>
		{children}
	</div>
);

/**
 * Card footer - bottom section for actions or additional info.
 */
const Footer = ({ className, children, ref, ...rest }: DsCardFooterProps) => (
	<div ref={ref} className={classNames(styles.footer, className)} {...rest}>
		{children}
	</div>
);

export const DsCard = {
	Root,
	Header,
	Body,
	Footer,
};
