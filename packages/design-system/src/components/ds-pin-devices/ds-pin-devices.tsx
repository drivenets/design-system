import classNames from 'classnames';
import { DsMapPin } from '../ds-map-pin';
import { layoutDevices } from './ds-pin-devices.config';
import type { DsPinDevicesProps, PinDevice } from './ds-pin-devices.types';
import styles from './ds-pin-devices.module.scss';

const defaultMoreDevicesLabel = (count: number) => `${String(count)} more devices`;

/**
 * @summary Map marker for a location that lists its devices on a card above the location's pin.
 *
 * The pin's tip is the bottom-center of the element; position the element so that point sits on the
 * location's coordinates. Hover lifts the card and the pin around the tip, so the anchor never moves.
 * Use `DsMapPin` for a location without devices.
 */
const DsPinDevices = ({
	ref,
	devices,
	size = 'large',
	color = 'blue',
	ring = 'none',
	label,
	badge,
	badgeBorder = 'solid',
	selectedDeviceId,
	selected = false,
	dragging = false,
	'aria-label': ariaLabel,
	locale,
	className,
	style,
	onClick,
	onDeviceClick,
	onMoreDevicesClick,
}: DsPinDevicesProps) => {
	const { top, left, right, moreCount } = layoutDevices(devices);
	const moreDevicesLabel = locale?.moreDevices ?? defaultMoreDevicesLabel;

	const renderDevice = (device: PinDevice) => (
		<button
			key={device.id}
			type="button"
			className={styles.device}
			data-type={device.type}
			data-stage={device.stage ?? 'deployed'}
			aria-label={device['aria-label']}
			aria-current={device.id === selectedDeviceId ? true : undefined}
			onClick={(event) => onDeviceClick?.(device, event)}
		>
			{device.label && (
				<span className={styles.deviceLabel} aria-hidden="true">
					{device.label}
				</span>
			)}
		</button>
	);

	return (
		<div
			ref={ref}
			role="group"
			className={classNames(styles.root, className)}
			style={style}
			data-size={size}
			data-color={color}
			data-selected={selected || undefined}
			data-dragging={dragging || undefined}
			aria-label={ariaLabel}
		>
			<div className={styles.card}>
				<div className={styles.row}>{top.map(renderDevice)}</div>
				<div className={styles.bottomRow}>
					<div className={styles.side}>{left.map(renderDevice)}</div>
					<div className={classNames(styles.side, styles.sideEnd)}>
						{right.map(renderDevice)}
						{moreCount > 0 && (
							<button
								type="button"
								className={styles.more}
								aria-label={moreDevicesLabel(moreCount)}
								onClick={onMoreDevicesClick}
							>
								<span aria-hidden="true">+{moreCount}</span>
							</button>
						)}
					</div>
				</div>
				<div className={styles.pinSlot}>
					<DsMapPin
						className={styles.pin}
						size={size}
						color={color}
						ring={ring}
						label={label}
						badge={badge}
						badgeBorder={badgeBorder}
						selected={selected}
						dragging={dragging}
						aria-label={ariaLabel}
						onClick={onClick}
					/>
				</div>
			</div>
		</div>
	);
};

DsPinDevices.displayName = 'DsPinDevices';

export default DsPinDevices;
