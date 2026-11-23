import type { KeyboardEvent } from 'react';
import classNames from 'classnames';
import { getCablePath } from './ds-cable.config';
import type { DsCableProps } from './ds-cable.types';
import styles from './ds-cable.module.scss';

/**
 * @summary Line for one cable between two locations on a map, colored by type and styled by status.
 *
 * Fills its nearest positioned ancestor and draws in that ancestor's pixel coordinates, so it lines up
 * with pins positioned in the same element. It can also be nested in an `<svg>`. Render one per cable.
 */
const DsCable = ({
	ref,
	from,
	to,
	curvature = 0,
	path: customPath,
	type = 'general',
	line = 'solid',
	selected = false,
	'aria-label': ariaLabel,
	className,
	style,
	onClick,
}: DsCableProps) => {
	const path = customPath ?? getCablePath(from, to, curvature);

	if (!path) {
		return null;
	}

	const handleKeyDown = (event: KeyboardEvent<SVGGElement>) => {
		if (event.repeat || (event.key !== 'Enter' && event.key !== ' ')) {
			return;
		}

		event.preventDefault();
		onClick?.(event);
	};

	return (
		<svg
			ref={ref}
			className={classNames(styles.root, className)}
			style={style}
			data-type={type}
			data-line={line}
			data-selected={selected || undefined}
		>
			{onClick ? (
				<g
					className={styles.cable}
					role="button"
					tabIndex={0}
					aria-label={ariaLabel}
					aria-current={selected ? true : undefined}
					onClick={onClick}
					onKeyDown={handleKeyDown}
				>
					<path className={styles.hitArea} d={path} />
					<path className={styles.focusRing} d={path} />
					<path className={styles.focusGap} d={path} />
					<path className={styles.line} d={path} />
				</g>
			) : (
				<g role="img" aria-label={ariaLabel} aria-current={selected ? true : undefined}>
					<path className={styles.line} d={path} />
				</g>
			)}
		</svg>
	);
};

DsCable.displayName = 'DsCable';

export default DsCable;
