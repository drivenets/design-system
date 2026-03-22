import babel from '@rolldown/plugin-babel';
import { reactCompilerPreset } from '@vitejs/plugin-react';

export function reactCompilerRolldownPlugin() {
	return babel({
		presets: [reactCompilerPreset()],
		include: [/src\/.*\.tsx?/],
		// `@tanstack/react-table` has issues with React Compiler, so we're excluding all the table components.
		//
		// See: https://github.com/TanStack/table/issues/5567
		// See: https://github.com/TanStack/virtual/issues/743
		// See: https://github.com/facebook/react/issues/33057
		exclude: [/\/components\/ds-table\//],
	});
}
