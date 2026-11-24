import { registerHooks } from 'node:module';

// Vitest's jsdom environment imports `jsdom` itself, so point that import at the jsdom 26
// that Jest 30 ships. Many consumers still run it.
registerHooks({
	resolve(specifier, context, nextResolve) {
		if (specifier === 'jsdom' || specifier.startsWith('jsdom/')) {
			return nextResolve(specifier.replace(/^jsdom/, 'jsdom-26'), { ...context, parentURL: import.meta.url });
		}

		return nextResolve(specifier, context);
	},
});
