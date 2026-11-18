import type { CablePoint } from './ds-cable.types';

const isFinitePoint = ({ x, y }: CablePoint) => Number.isFinite(x) && Number.isFinite(y);

export const getCablePath = (from: CablePoint, to: CablePoint, curvature: number): string | null => {
	if (!isFinitePoint(from) || !isFinitePoint(to) || !Number.isFinite(curvature)) {
		return null;
	}

	const start = `M${String(from.x)} ${String(from.y)}`;
	const end = `${String(to.x)} ${String(to.y)}`;

	if (curvature === 0) {
		return `${start}L${end}`;
	}

	const deltaX = to.x - from.x;
	const deltaY = to.y - from.y;
	const controlX = (from.x + to.x) / 2 + deltaY * curvature;
	const controlY = (from.y + to.y) / 2 - deltaX * curvature;

	return `${start}Q${String(controlX)} ${String(controlY)} ${end}`;
};
