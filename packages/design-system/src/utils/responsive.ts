import { createElement, useSyncExternalStore, type FunctionComponent } from 'react';

import breakpointTokens from '../styles/_breakpoints.module.scss';

export const BREAKPOINT_LG = parseInt(breakpointTokens.breakpointLg, 10);

export const breakpoints = ['lg', 'md'] as const;
export type Breakpoint = (typeof breakpoints)[number];

export type Responsive<T> = Partial<Record<Breakpoint, T>>;

export type ResponsiveValue<T> = T | Responsive<T>;

export const isResponsiveValue = <T>(value: ResponsiveValue<T>): value is Responsive<T> =>
	value !== null && typeof value === 'object' && breakpoints.some((bp) => bp in value);

export const resolveResponsiveValue = <T>(value: ResponsiveValue<T>, breakpoint: Breakpoint): T => {
	if (!isResponsiveValue(value)) {
		return value;
	}

	return (value[breakpoint] ?? value.lg ?? value.md) as T;
};

const MEDIA_QUERY = `(min-width: ${String(BREAKPOINT_LG)}px)`;

const subscribe = (callback: () => void) => {
	const mql = window.matchMedia(MEDIA_QUERY);
	mql.addEventListener('change', callback);
	return () => mql.removeEventListener('change', callback);
};

const getSnapshot = (): Breakpoint => (window.matchMedia(MEDIA_QUERY).matches ? 'lg' : 'md');

const getServerSnapshot = (): Breakpoint => 'lg';

export const useBreakpoint = (): Breakpoint =>
	useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

/**
 * Resolves a `ResponsiveValue<T>` to `T` using the current breakpoint.
 * Use for conditional rendering or JS logic that depends on the breakpoint.
 */
export const useResponsiveValue = <T>(value: ResponsiveValue<T>): T =>
	resolveResponsiveValue(value, useBreakpoint());

/**
 * Wraps a component so that the specified props accept `ResponsiveValue<T>`.
 * The wrapper resolves each responsive prop to a plain value before rendering,
 * so the wrapped component stays completely unaware of breakpoints.
 */
export function withResponsiveProps<Props, const Keys extends readonly (keyof Props)[]>(
	Component: FunctionComponent<Props>,
	responsiveKeys: Keys,
) {
	type EnhancedProps = {
		[P in keyof Props]: P extends Keys[number] ? ResponsiveValue<NonNullable<Props[P]>> : Props[P];
	};

	const Wrapper = (props: EnhancedProps) => {
		const breakpoint = useBreakpoint();
		const resolved = { ...props } as Record<string, unknown>;

		for (const key of responsiveKeys) {
			const k = String(key);
			const value = resolved[k];

			if (value !== undefined) {
				resolved[k] = resolveResponsiveValue(value, breakpoint);
			}
		}

		return createElement(Component as FunctionComponent<Record<string, unknown>>, resolved);
	};

	Wrapper.displayName = `withResponsiveProps(${Component.displayName ?? Component.name})`;

	return Wrapper;
}
