import { type RefObject, useLayoutEffect, useRef, useState } from 'react';
import { applyTextSelection, type TextSelection } from './ds-code-input.utils';

interface UseEditorHostOptions {
	isExpanded: boolean;
	collapsedSlotRef: RefObject<HTMLDivElement | null>;
	overlaySlotRef: RefObject<HTMLDivElement | null>;
	hostClassName?: string;
	textareaRef: RefObject<HTMLTextAreaElement | null>;
	pendingSelectionRef: RefObject<TextSelection | null>;
	shouldFocus: boolean;
}

/**
 * One host div for the textarea. Attach it to the current slot (collapsed or
 * overlay), then the component portals the same textarea into that host.
 */
export const useEditorHost = ({
	isExpanded,
	collapsedSlotRef,
	overlaySlotRef,
	hostClassName,
	textareaRef,
	pendingSelectionRef,
	shouldFocus,
}: UseEditorHostOptions) => {
	const [hostReady, setHostReady] = useState(false);
	const hostRef = useRef<HTMLDivElement | null>(null);
	// True only while appendChild runs, so the component can swallow the
	// focus/blur that moving a focused node fires.
	const isMovingHostRef = useRef(false);

	useLayoutEffect(() => {
		if (hostRef.current === null) {
			hostRef.current = document.createElement('div');
		}

		const host = hostRef.current;
		const dest = isExpanded ? overlaySlotRef.current : collapsedSlotRef.current;

		if (!dest) {
			return;
		}

		isMovingHostRef.current = true;
		host.className = hostClassName ?? '';

		if (host.parentElement !== dest) {
			dest.appendChild(host);
		}

		const textarea = textareaRef.current;
		const pending = pendingSelectionRef.current;

		// Put the caret back, then focus only if the user opened the overlay
		// (not if it opened from outside).
		if (textarea && pending) {
			applyTextSelection(textarea, pending);
			pendingSelectionRef.current = null;
		}

		if (textarea && shouldFocus) {
			textarea.focus({ preventScroll: true });
		}

		isMovingHostRef.current = false;

		if (!hostReady) {
			setHostReady(true);
		}
	}, [
		isExpanded,
		hostReady,
		shouldFocus,
		hostClassName,
		collapsedSlotRef,
		overlaySlotRef,
		textareaRef,
		pendingSelectionRef,
	]);

	return {
		host: hostRef.current,
		hostReady,
		isMovingHostRef,
	};
};
