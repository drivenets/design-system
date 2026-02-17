import type { ArcProgressSize, ArcProgressVariant } from './ds-arc-progress.types';

const ARC_DEGREES = 270;
const FULL_CIRCLE = 360;
const START_ROTATION = 135;

export const ARC_RATIO = ARC_DEGREES / FULL_CIRCLE;

const containerSizeMap: Record<ArcProgressSize, number> = {
	small: 80,
	medium: 120,
};

const strokeWidthMap: Record<ArcProgressSize, number> = {
	small: 4,
	medium: 6,
};

export const clampValue = (value: number): number => Math.min(100, Math.max(0, value));

export const getEffectiveValue = (variant: ArcProgressVariant, value: number): number =>
	variant === 'success' ? 100 : clampValue(value);

export interface ArcGeometry {
	containerSize: number;
	strokeWidth: number;
	radius: number;
	circumference: number;
	arcLength: number;
	center: number;
	startRotation: number;
}

export const getArcGeometry = (size: ArcProgressSize): ArcGeometry => {
	const containerSize = containerSizeMap[size];
	const strokeWidth = strokeWidthMap[size];
	const radius = (containerSize - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const arcLength = ARC_RATIO * circumference;
	const center = containerSize / 2;

	return {
		containerSize,
		strokeWidth,
		radius,
		circumference,
		arcLength,
		center,
		startRotation: START_ROTATION,
	};
};

export const getTrackDasharray = (arcLength: number, circumference: number): string =>
	`${String(arcLength)} ${String(circumference)}`;

export const getProgressDasharray = (
	effectiveValue: number,
	arcLength: number,
	circumference: number,
): string => {
	const progressLength = (effectiveValue / 100) * arcLength;

	return `${String(progressLength)} ${String(circumference)}`;
};
