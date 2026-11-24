import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import { failOnConsole } from './jsdom-console';

// The consumer setup documented in src/stories/testing.mdx (Guidelines/Testing). Keep the two in sync.
window.matchMedia = (query: string) => ({
	matches: false,
	media: query,
	onchange: null,
	addEventListener: () => {},
	removeEventListener: () => {},
	addListener: () => {},
	removeListener: () => {},
	dispatchEvent: () => false,
});

globalThis.ResizeObserver = class {
	observe() {}
	unobserve() {}
	disconnect() {}
};

Element.prototype.scrollTo = () => {};
Element.prototype.scrollIntoView = () => {};

afterEach(() => {
	cleanup();
});

failOnConsole();
