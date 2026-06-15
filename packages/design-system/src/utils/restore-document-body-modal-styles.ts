const SCROLL_LOCK_ATTRIBUTE = 'data-scroll-lock';
const INERT_ATTRIBUTE = 'data-inert';
const ARIA_HIDDEN_MARKER = 'data-aria-hidden';

/**
 * Clears document body styles and attributes left by Zag dialog modal effects when a
 * dialog instance tears down without a normal close transition.
 *
 * No-op unless a leak sentinel is present: in the common case Zag restores the body on
 * unmount itself, and we must not clobber styles the host app owns.
 */
export const restoreDocumentBodyModalStyles = (doc: Document = document) => {
	const { body, documentElement } = doc;

	const hasLeakedLock =
		body.hasAttribute(SCROLL_LOCK_ATTRIBUTE) ||
		body.hasAttribute(INERT_ATTRIBUTE) ||
		body.style.pointerEvents === 'none';

	if (!hasLeakedLock) {
		return;
	}

	body.removeAttribute(SCROLL_LOCK_ATTRIBUTE);
	body.removeAttribute(INERT_ATTRIBUTE);
	body.removeAttribute(ARIA_HIDDEN_MARKER);

	if (body.getAttribute('aria-hidden') === 'true') {
		body.removeAttribute('aria-hidden');
	}

	body.style.removeProperty('overflow');
	body.style.removeProperty('pointer-events');
	body.style.removeProperty('position');
	body.style.removeProperty('top');
	body.style.removeProperty('left');
	body.style.removeProperty('right');

	if (body.style.length === 0) {
		body.removeAttribute('style');
	}

	documentElement.style.removeProperty('--scrollbar-width');
};
