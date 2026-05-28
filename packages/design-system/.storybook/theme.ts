import { create } from 'storybook/theming';
import { FONT_FAMILY_BASE, FONT_FAMILY_CODE } from '../src/styles/font-families';

/** Storybook manager + Docs — matches consumer `--font-family-base` / `--font-family-code`. */
export const drivenetsStorybookTheme = create({
	base: 'light',
	fontBase: FONT_FAMILY_BASE,
	fontCode: FONT_FAMILY_CODE,
});
