import { type ChangeEvent, type FocusEvent, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { DsButtonV3, type ButtonV3Size } from '../ds-button-v3';
import { DsPopover } from '../ds-popover';
import { mergeRefs } from '../../utils/merge-refs';
import { CollapsedCodeField } from './collapsed-code-field';
import collapsedStyles from './collapsed-code-field/collapsed-code-field.module.scss';
import { DsCodeInputPanel } from './ds-code-input-panel';
import panelStyles from './ds-code-input-panel/ds-code-input-panel.module.scss';
import styles from './ds-code-input.module.scss';
import type { CodeInputSize, DsCodeInputProps } from './ds-code-input.types';
import {
	applyTextSelection,
	canonicalizeLf,
	getAdditionalLineCount,
	getLogicalLineCount,
	readTextSelection,
	type TextSelection,
} from './ds-code-input.utils';
import { useCollapsedViewport } from './use-collapsed-viewport';
import { useEditorHost } from './use-editor-host';

const toggleSizes: Record<CodeInputSize, ButtonV3Size> = Object.freeze({
	small: 'tiny',
	default: 'small',
	large: 'small',
});

const OVERLAY_GUTTER_PX = 4;

const defaultLocale = Object.freeze({
	expand: 'Expand code editor',
	collapse: 'Collapse code editor',
	searchPlaceholder: 'Search in code',
	codeLabel: 'Code',
	additionalLines: (count: number) => `↵ +${String(count)}`,
	additionalLinesLabel: (count: number) => `${String(count)} additional code lines`,
	linePosition: (current: number, total: number) => `Ln ${String(current)}/${String(total)}`,
	multilineDescription: (total: number) =>
		`Multiline code, ${String(total)} lines. Only one line is visible. Expand to view the complete code.`,
	linePositionDescription: (current: number, total: number) =>
		`Line ${String(current)} of ${String(total)}; other code lines are hidden.`,
	selectionStatus: (selected: number, total: number) =>
		`${String(selected)} lines selected · ${String(total)} total`,
	expandedAnnouncement: (total: number) => `Code editor expanded, ${String(total)} lines.`,
	collapsedAnnouncement: 'Code editor collapsed',
});

/**
 * Multiline editor for code, such as a query expression. The collapsed field is a
 * one-row viewport of the same document; expanding opens a larger overlay with search.
 * There is one textarea: collapsed and expanded are two homes it moves between.
 *
 * @summary multiline code field that expands into a searchable overlay
 */
const DsCodeInput = ({
	id,
	ref,
	name,
	size = 'default',
	value,
	defaultValue,
	placeholder,
	disabled = false,
	readOnly = false,
	expanded,
	defaultExpanded = false,
	onExpandChange,
	onChange,
	onValueChange,
	onFocus,
	onBlur,
	maxLength,
	locale,
	slots,
	className,
	style,
}: DsCodeInputProps) => {
	const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? '');
	const [uncontrolledExpanded, setUncontrolledExpanded] = useState(defaultExpanded);
	// True when the user opened the overlay and should keep typing in it.
	const [focusOnOpen, setFocusOnOpen] = useState(false);
	const [announcement, setAnnouncement] = useState('');

	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const collapsedSlotRef = useRef<HTMLDivElement>(null);
	const overlaySlotRef = useRef<HTMLDivElement>(null);
	// Caret/selection saved before the textarea moves to the other slot.
	const pendingSelectionRef = useRef<TextSelection | null>(null);
	// True when the user closed the overlay and should land back in the field.
	const focusOnCloseRef = useRef(false);
	// Skip the first expand/collapse announcement so mount is silent.
	const skipAnnouncementRef = useRef(true);

	const panelId = useId();
	const descriptionId = useId();
	const announcementId = useId();

	const strings = { ...defaultLocale, ...locale };

	const isValueControlled = value !== undefined;
	const currentValue = isValueControlled ? value : uncontrolledValue;

	const isExpandedControlled = expanded !== undefined;
	const isExpanded = isExpandedControlled ? expanded : uncontrolledExpanded;

	const handleOpenChange = (open: boolean) => {
		if (open) {
			focusOnCloseRef.current = false;

			// User-open already saved the caret. If the overlay opened some other
			// way, snapshot it now so it still comes back after the move.
			if (!pendingSelectionRef.current) {
				const textarea = textareaRef.current;

				if (textarea) {
					pendingSelectionRef.current = readTextSelection(textarea);
				}
			}
		} else {
			setFocusOnOpen(false);
		}

		if (!isExpandedControlled) {
			setUncontrolledExpanded(open);
		}

		onExpandChange?.(open);
	};

	const { host, hostReady, isMovingHostRef } = useEditorHost({
		isExpanded,
		collapsedSlotRef,
		overlaySlotRef,
		hostClassName: isExpanded ? panelStyles.editorHost : collapsedStyles.editorHost,
		textareaRef,
		pendingSelectionRef,
		shouldFocus: isExpanded && focusOnOpen,
	});
	const viewport = useCollapsedViewport(textareaRef, currentValue, hostReady, !isExpanded);
	const revealCaretLineRef = useRef(viewport.revealCaretLine);

	revealCaretLineRef.current = viewport.revealCaretLine;

	useEffect(() => {
		if (skipAnnouncementRef.current) {
			skipAnnouncementRef.current = false;

			return;
		}

		setAnnouncement(
			isExpanded
				? strings.expandedAnnouncement(getLogicalLineCount(currentValue))
				: strings.collapsedAnnouncement,
		);
		// Announce presentation changes only — not every keystroke in the document.
		// eslint-disable-next-line react-hooks/exhaustive-deps -- currentValue/strings would re-announce while typing
	}, [isExpanded]);

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		// Some browsers insert \r\n. Rewrite to \n and put the caret back so
		// typing does not jump.
		const newValue = canonicalizeLf(event.target.value);

		if (newValue !== event.target.value) {
			const selection = readTextSelection(event.target);

			event.target.value = newValue;
			applyTextSelection(event.target, selection);
		}

		if (!isValueControlled) {
			setUncontrolledValue(newValue);
		}

		onChange?.(event);
		onValueChange?.(newValue);
	};

	const handleFocus = (event: FocusEvent<HTMLTextAreaElement>) => {
		// Moving the host fires fake focus/blur. Ignore those so callers do not
		// think the user left the field.
		if (isMovingHostRef.current) {
			return;
		}

		onFocus?.(event);
	};

	const handleBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
		if (isMovingHostRef.current) {
			return;
		}

		onBlur?.(event);
	};

	const handleUserOpen = () => {
		const textarea = textareaRef.current;

		if (textarea) {
			pendingSelectionRef.current = readTextSelection(textarea);
		}

		setFocusOnOpen(true);
		handleOpenChange(true);
	};

	const additionalLines = getAdditionalLineCount(currentValue);
	const description =
		!isExpanded && additionalLines > 0
			? viewport.focused
				? strings.linePositionDescription(viewport.visibleLine, viewport.totalLines)
				: strings.multilineDescription(viewport.totalLines)
			: undefined;

	// One textarea, rendered once and portaled into the host. rows / wrap /
	// className flip when it moves between the collapsed slot and the overlay.
	const editor = host
		? createPortal(
				<textarea
					id={id}
					ref={mergeRefs(ref, textareaRef)}
					name={name}
					className={isExpanded ? panelStyles.codeArea : collapsedStyles.input}
					rows={isExpanded ? undefined : 1}
					wrap={isExpanded ? 'soft' : 'off'}
					value={currentValue}
					placeholder={placeholder}
					disabled={disabled}
					readOnly={readOnly}
					maxLength={maxLength}
					spellCheck={false}
					autoComplete="off"
					aria-multiline="true"
					aria-label={isExpanded && !id ? strings.codeLabel : undefined}
					aria-describedby={description ? descriptionId : undefined}
					onChange={handleChange}
					onSelect={viewport.onSelect}
					onKeyUp={viewport.onKeyUp}
					onClick={viewport.onClick}
					onScroll={viewport.onScroll}
					onBeforeInput={viewport.onBeforeInput}
					onFocus={(event) => {
						if (!isMovingHostRef.current) {
							viewport.onFocus();
						}

						handleFocus(event);
					}}
					onBlur={(event) => {
						if (!isMovingHostRef.current) {
							viewport.onBlur();
						}

						handleBlur(event);
					}}
					onKeyDown={(event) => {
						if (event.key === 'Escape' && isExpanded) {
							event.stopPropagation();
							focusOnCloseRef.current = true;
							handleOpenChange(false);

							return;
						}

						if (!isExpanded && event.altKey && event.key === 'ArrowDown') {
							event.preventDefault();
							event.stopPropagation();
							handleUserOpen();
						}
					}}
				/>,
				host,
			)
		: null;

	return (
		<DsPopover.Root
			open={isExpanded}
			side="bottom"
			align="start"
			gutter={OVERLAY_GUTTER_PX}
			matchAnchorWidth
			// We own focus so the expand button does not steal it.
			restoreFocus={false}
			onOpenAutoFocus={(event) => {
				event.preventDefault();

				if (focusOnOpen) {
					textareaRef.current?.focus({ preventScroll: true });
				}
			}}
			onCloseAutoFocus={(event) => {
				event.preventDefault();

				// Put focus back in the collapsed field and scroll to the caret line.
				if (focusOnCloseRef.current) {
					textareaRef.current?.focus({ preventScroll: true });
					revealCaretLineRef.current();
					focusOnCloseRef.current = false;
				}
			}}
			onOpenChange={handleOpenChange}
		>
			<DsPopover.Anchor>
				<div className={classNames(styles.root, className)} style={style}>
					<CollapsedCodeField
						size={size}
						placeholder={placeholder}
						disabled={disabled}
						showEcho={isExpanded}
						echoText={viewport.echoText}
						fadeStart={viewport.fadeStart}
						fadeEnd={viewport.fadeEnd}
						showEllipsis={viewport.showEllipsis}
						indicator={
							isExpanded && additionalLines > 0
								? { kind: 'line', current: viewport.caretLine, total: viewport.totalLines }
								: isExpanded
									? null
									: viewport.indicator
						}
						additionalLinesLabel={strings.additionalLinesLabel}
						additionalLines={strings.additionalLines}
						linePosition={strings.linePosition}
						selectionStatus={strings.selectionStatus}
						editorSlotRef={collapsedSlotRef}
						onExpand={handleUserOpen}
						adornment={
							<>
								<DsPopover.Trigger>
									<DsButtonV3
										variant="tertiary"
										size={toggleSizes[size]}
										icon={isExpanded ? 'collapse_content' : 'expand_content'}
										aria-label={isExpanded ? strings.collapse : strings.expand}
										aria-expanded={isExpanded}
										aria-controls={panelId}
										onPointerDown={(event) => {
											// Snapshot the caret and request focus before the
											// button would steal it.
											event.preventDefault();

											if (isExpanded) {
												focusOnCloseRef.current = true;
											} else {
												const textarea = textareaRef.current;

												if (textarea) {
													pendingSelectionRef.current = readTextSelection(textarea);
												}

												setFocusOnOpen(true);
											}
										}}
									/>
								</DsPopover.Trigger>
								{slots?.endAdornment}
							</>
						}
					/>
					{description && (
						<span id={descriptionId} className={styles.visuallyHidden}>
							{description}
						</span>
					)}
					<div id={announcementId} className={styles.visuallyHidden} aria-live="polite" aria-atomic="true">
						{announcement}
					</div>
				</div>
			</DsPopover.Anchor>

			<DsPopover.Panel id={panelId} className={styles.panel} aria-label={strings.codeLabel}>
				<DsCodeInputPanel
					value={currentValue}
					isOpen={isExpanded}
					searchPlaceholder={strings.searchPlaceholder}
					editorSlotRef={overlaySlotRef}
				/>
			</DsPopover.Panel>
			{editor}
		</DsPopover.Root>
	);
};

DsCodeInput.displayName = 'DsCodeInput';

export default DsCodeInput;
