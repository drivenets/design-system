export type DsTableResizeOverlayPhase = 'hover' | 'dragging';

/**
 * Props for the full-height column resize divider overlay.
 */
export interface DsTableResizeOverlayProps {
	/**
	 * Distance from the table container's left edge to the column's right edge,
	 * in pixels.
	 */
	offset: number;
	phase: DsTableResizeOverlayPhase;
}
