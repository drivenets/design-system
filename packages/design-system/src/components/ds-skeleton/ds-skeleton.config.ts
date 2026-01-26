import type { DsAvatarSize } from '../ds-avatar';
import type { SemanticVariant } from '../ds-typography';
import type { SkeletonRadiusVariant } from './ds-skeleton.types';

/**
 * Circle size mapping matching DsAvatar component
 * Maps semantic size names to pixel values
 */
export const circleSizeMap: Record<DsAvatarSize, number> = Object.freeze({
	xsm: 24,
	sm: 32,
	regular: 40,
	md: 48,
	lg: 64,
	xl: 80,
});

/**
 * Typography variant height mapping
 * Maps semantic variants to approximate heights in pixels
 * Based on line-height values from design system
 */
export const typographyHeightMap: Record<SemanticVariant, number> = Object.freeze({
	// Body variants - based on line-height
	'body-md-reg': 20,
	'body-md-md': 20,
	'body-md-semi-bold': 20,
	'body-md-bold': 20,
	'body-md-link': 20,

	'body-sm-reg': 18,
	'body-sm-md': 18,
	'body-sm-semi-bold': 18,
	'body-sm-bold': 18,
	'body-sm-link': 18,

	'body-xs-reg': 16,
	'body-xs-md': 16,
	'body-xs-semi-bold': 16,
	'body-xs-bold': 16,
	'body-xs-link': 16,

	// Code variants
	'code-sm-reg': 18,
	'code-sm-semi-bold': 18,
	'code-xs-reg': 16,
	'code-xs-semi-bold': 16,

	// Heading variants - based on line-height
	heading1: 64,
	heading2: 54,
	heading3: 48,
	heading4: 36,
});

/**
 * Border radius mapping
 * Maps semantic radius names to pixel values
 */
export const radiusMap: Record<SkeletonRadiusVariant, number> = Object.freeze({
	default: 4, // Standard button/card radius
	round: 999, // Pill-shaped (fully rounded)
});

/**
 * Default gap between skeleton lines in pixels
 */
export const DEFAULT_LINE_GAP = 8;
