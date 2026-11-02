import classNames from 'classnames';
import { BADGE_RADIUS, BADGE_SIZE, MAX_VISIBLE_COUNT, mapPinGeometry } from './ds-map-pin.config';
import type { DsMapPinProps } from './ds-map-pin.types';
import styles from './ds-map-pin.module.scss';

const formatCount = (count: number) =>
	count > MAX_VISIBLE_COUNT ? `${String(MAX_VISIBLE_COUNT)}+` : String(count);

/**
 * @summary Marker for one location on a map: a colored core, an optional status ring and a short code or count.
 *
 * The pin's tip is the bottom-center of the element; position the element so that point sits on the
 * location's coordinates. Hover lifts the pin from its tip, so the anchor never moves.
 */
const DsMapPin = ({
	ref,
	size = 'medium',
	color = 'blue',
	ring = 'none',
	label,
	count,
	badge,
	badgeBorder = 'solid',
	selected = false,
	dragging = false,
	'aria-label': ariaLabel,
	className,
	style,
	onClick,
}: DsMapPinProps) => {
	const { width, height, outlinePath, center, coreRadius, ringRadius, badgeOrigin } = mapPinGeometry[size];
	const content = count === undefined ? label : formatCount(count);

	return (
		<button
			ref={ref}
			type="button"
			className={classNames(styles.pin, className)}
			style={style}
			data-size={size}
			data-color={color}
			data-ring={ring}
			data-badge-border={badge ? badgeBorder : undefined}
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
				{ring !== 'none' && <circle className={styles.ring} cx={center.x} cy={center.y} r={ringRadius} />}
				<circle className={styles.core} cx={center.x} cy={center.y} r={coreRadius} />
				{content && (
					<text className={styles.content} x={center.x} y={center.y}>
						{content}
					</text>
				)}
				{badge && (
					<g transform={`translate(${String(badgeOrigin.x)} ${String(badgeOrigin.y)})`}>
						{/* Inset by half the stroke so the border sits inside the badge, as in the design. */}
						<rect
							className={styles.badge}
							x={0.5}
							y={0.5}
							width={BADGE_SIZE - 1}
							height={BADGE_SIZE - 1}
							rx={BADGE_RADIUS - 0.5}
						/>
						<text className={styles.badgeContent} x={BADGE_SIZE / 2} y={BADGE_SIZE / 2}>
							{badge}
						</text>
					</g>
				)}
			</svg>
		</button>
	);
};

DsMapPin.displayName = 'DsMapPin';

export default DsMapPin;
