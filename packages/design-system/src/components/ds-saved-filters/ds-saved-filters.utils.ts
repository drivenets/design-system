import { defaultDsSavedFiltersLocale, type DsSavedFiltersLocale } from './ds-saved-filters.types';

export const PICKER_GUTTER_PX = 4;
export const NAME_MODAL_COLUMNS = 4;

export type Locale = Required<DsSavedFiltersLocale>;
export type NamedTarget = { id: string; name: string };

export const resolveLocale = (locale?: DsSavedFiltersLocale): Locale => ({
	...defaultDsSavedFiltersLocale,
	...locale,
});

export const interpolateName = (template: string, name: string) => template.replace('{name}', name);

export const isThenable = (value: unknown): value is Promise<unknown> =>
	typeof value === 'object' && value !== null && typeof (value as Promise<unknown>).then === 'function';

export const runMaybeAsync = async (result: void | Promise<void>, setBusy: (busy: boolean) => void) => {
	if (!isThenable(result)) {
		return true;
	}

	setBusy(true);

	try {
		await result;

		return true;
	} catch {
		return false;
	} finally {
		setBusy(false);
	}
};
