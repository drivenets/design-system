import { create as createTheme, type ThemeVarsPartial } from 'storybook/theming';

const fonts = {
	fontBase: 'Roboto',
	fontCode: 'Fira Mono',
} satisfies Omit<ThemeVarsPartial, 'base'>;

export const lightTheme = createTheme({
	base: 'light',
	...fonts,
});

export const darkTheme = createTheme({
	base: 'dark',
	...fonts,
});
