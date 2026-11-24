import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import { failOnConsole } from './jsdom-console';

// The consumer setup documented in README.md ("Testing with JSDOM"). Keep the two in sync.
globalThis.ResizeObserver = class {
	observe() {}
	unobserve() {}
	disconnect() {}
};

Element.prototype.scrollTo = () => {};

afterEach(() => {
	cleanup();
});

failOnConsole();
