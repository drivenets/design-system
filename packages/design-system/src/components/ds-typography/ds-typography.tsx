import classNames from 'classnames';
import type { DsTypographyProps } from './ds-typography.types';
import { typographyColors, typographyVariantConfig } from './ds-typography.config';
import styles from './ds-typography.module.scss';

const semanticColorSet = new Set<string>(typographyColors);

const resolveColor = (color: string): string =>
	semanticColorSet.has(color) ? `var(--font-${color})` : color;

/*
 * Design system Typography component that provides consistent text styling
 */
const DsTypography = ({
	ref,
	variant,
	asChild = false,
	className,
	style,
	color,
	children,
	...props
}: DsTypographyProps) => {
	const Component = typographyVariantConfig[variant].component;

	return (
		<Component
			// very dynamic ref in here
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			ref={ref}
			asChild={asChild}
			className={classNames(styles[variant], className)}
			style={color ? { color: resolveColor(color), ...style } : style}
			{...props}
		>
			{children}
		</Component>
	);
};

export default DsTypography;
