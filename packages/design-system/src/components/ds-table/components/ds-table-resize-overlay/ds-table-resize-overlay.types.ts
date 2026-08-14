export const dsTableResizeOverlayPhases = ['hover', 'dragging'] as const;
export type DsTableResizeOverlayPhase = (typeof dsTableResizeOverlayPhases)[number];

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
