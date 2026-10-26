import classNames from 'classnames';
import { MAX_VISIBLE_COUNT, mapPinGeometry } from './ds-map-pin.config';
import type { DsMapPinProps } from './ds-map-pin.types';
import styles from './ds-map-pin.module.scss';

const formatCount = (count: number) =>
	count > MAX_VISIBLE_COUNT ? `${String(MAX_VISIBLE_COUNT)}+` : String(count);

/**
 * @summary Marker for one site on a map: category color, planning ring and a short code or count.
 *
 * The pin's tip is the bottom-center of the element; position the element so that point sits on the
 * site's coordinates. Hover scales the pin from its tip, so the anchor never moves.
 */
const DsMapPin = ({
	ref,
	size = 'medium',
	category = 'central-office',
	planning = 'deployed',
	label,
	count,
	selected = false,
	dragging = false,
	'aria-label': ariaLabel,
	className,
	style,
	onClick,
}: DsMapPinProps) => {
	const { width, height, outlinePath, center, coreRadius, ringRadius } = mapPinGeometry[size];
	const content = count === undefined ? label : formatCount(count);

	return (
		<button
			ref={ref}
			type="button"
			className={classNames(styles.pin, className)}
			style={style}
			data-size={size}
			data-category={category}
			data-planning={planning}
			data-dragging={dragging || undefined}
			aria-label={ariaLabel}
			aria-current={selected ? true : undefined}
			onClick={onClick}
		>
			<svg
				className={styles.graphic}
				width={width}
				height={height}
				viewBox={`0 0 ${String(width)} ${String(height)}`}
				aria-hidden="true"
				focusable="false"
			>
				<path className={styles.outline} d={outlinePath} />
				{planning !== 'deployed' && (
					<circle className={styles.ring} cx={center.x} cy={center.y} r={ringRadius} />
				)}
				<circle className={styles.core} cx={center.x} cy={center.y} r={coreRadius} />
				{content && (
					<text className={styles.content} x={center.x} y={center.y}>
						{content}
					</text>
				)}
			</svg>
		</button>
	);
};

DsMapPin.displayName = 'DsMapPin';

export default DsMapPin;
