export interface DsColumnSizeMeta {
	/**
	 * Internal: set by `getAugmentedColumns` on leaf defs whose `size` was
	 * authored on the raw `columns` prop, so sizing pins a fixed width instead
	 * of filling. Not part of the public API.
	 * @internal
	 */
	hasExplicitSize?: boolean;
}
