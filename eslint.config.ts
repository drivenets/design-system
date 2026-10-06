import { defineConfig, globalIgnores } from 'eslint/config';
import baseConfig from './eslint.config.base';

export default defineConfig(
	...baseConfig,

	// Exclude packages since they have their own ESLint configuration.
	globalIgnores(['./packages/**'], 'root/exclude-packages'),

	// Exclude design-sync state: authored to the design-sync skill's own
	// conventions (ad-hoc previews, a vendored converter fork), not this
	// repo's component style, and not covered by any tsconfig project.
	// ds-bundle/ and .ds-sync/ are the skill's gitignored build output and
	// staged converter scripts - never committed, excluded for symmetry.
	globalIgnores(['./.design-sync/**', './ds-bundle/**', './.ds-sync/**'], 'root/exclude-design-sync'),
);
