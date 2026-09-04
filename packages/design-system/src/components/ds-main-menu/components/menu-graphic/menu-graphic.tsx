import type { FunctionComponent, SVGProps } from 'react';
import { DsIcon, type IconType } from '../../../ds-icon';
import type { MenuGraphicProps } from './menu-graphic.types';

const isSvgIcon = (icon: IconType): icon is FunctionComponent<SVGProps<SVGSVGElement>> =>
	typeof icon === 'function';

export const MenuGraphic = ({ icon, svgClassName, size }: MenuGraphicProps) => {
	if (isSvgIcon(icon)) {
		const Svg = icon;

		return <Svg className={svgClassName} />;
	}

	return <DsIcon icon={icon} size={size} />;
};
