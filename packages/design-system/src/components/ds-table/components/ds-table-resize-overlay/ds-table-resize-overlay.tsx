import type { DsTableResizeOverlayProps } from './ds-table-resize-overlay.types';
import styles from './ds-table-resize-overlay.module.scss';

/**
 * Full-height divider that tracks the active column's right edge during hover
 * and drag resize.
 */
export const DsTableResizeOverlay = ({ offset, phase }: DsTableResizeOverlayProps) => (
	<div
		className={styles.resizeOverlay}
		style={{ left: offset }}
		data-resize-overlay
		data-resize-phase={phase}
		aria-hidden
	/>
);
