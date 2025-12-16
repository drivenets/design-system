import type { Ref, RefCallback } from 'react';

export const mergeRefs = <T>(...refs: Array<Ref<T> | undefined>): RefCallback<T> => {
	return (value) => {
		refs
			.filter((r) => !!r)
			.forEach((ref) => {
				if (typeof ref === 'function') {
					ref(value);
				} else {
					ref.current = value;
				}
			});
	};
};
