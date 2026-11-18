import type { KeyboardEvent } from 'react';
import classNames from 'classnames';
import { SAMPLE_HEIGHT, SAMPLE_PATH, SAMPLE_WIDTH } from './ds-technology.config';
import type { DsTechnologyProps } from './ds-technology.types';
import styles from './ds-technology.module.scss';

const sampleBox = {
	width: SAMPLE_WIDTH,
	height: SAMPLE_HEIGHT,
	viewBox: `0 0 ${String(SAMPLE_WIDTH)} ${String(SAMPLE_HEIGHT)}`,
	preserveAspectRatio: 'none',
};

const getRole = (interactive: boolean, labelled: boolean) => {
	if (interactive) {
		return 'button';
	}

	return labelled ? 'img' : undefined;
};

/**
 * @summary Line that shows which network technology carries one service path, e.g. between two locations on a map.
 *
 * The color comes from `type` and the line pattern from `stage`. Without `path` it draws a small sample
 * curve for legends and filters; resizing that sample keeps the line thickness. It renders an `<svg>`,
 * so it works on its own or nested inside another `<svg>`, and lets pointer events through everywhere
 * except on a clickable line.
 */
const DsTechnology = ({
	ref,
	type = 'och',
	stage = 'deployed',
	path,
	selected = false,
	'aria-label': ariaLabel,
	className,
	style,
	onClick,
}: DsTechnologyProps) => {
	const interactive = Boolean(onClick);
	const hidden = !interactive && !ariaLabel;
	const d = path ?? SAMPLE_PATH;

	const handleKeyDown = (event: KeyboardEvent<SVGSVGElement>) => {
		if (event.key !== 'Enter' && event.key !== ' ') {
			return;
		}

		event.preventDefault();
		event.currentTarget.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
	};

	return (
		<svg
			ref={ref}
			className={classNames(styles.technology, className)}
			style={style}
			{...(path === undefined && sampleBox)}
			data-type={type}
			data-stage={stage}
			data-selected={selected || undefined}
			data-interactive={interactive || undefined}
			role={getRole(interactive, Boolean(ariaLabel))}
			tabIndex={interactive ? 0 : undefined}
			focusable={interactive ? undefined : 'false'}
			aria-label={ariaLabel}
			aria-hidden={hidden || undefined}
			aria-current={selected && !hidden ? true : undefined}
			onClick={onClick}
			onKeyDown={interactive ? handleKeyDown : undefined}
		>
			{selected && <path className={styles.halo} d={d} />}
			<path className={styles.line} d={d} />
			{interactive && <path className={styles.hitArea} d={d} />}
		</svg>
	);
};

DsTechnology.displayName = 'DsTechnology';

export default DsTechnology;
