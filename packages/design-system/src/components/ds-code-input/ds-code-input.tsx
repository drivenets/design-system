import {
	type ChangeEvent,
	type FocusEvent,
	useEffect,
	useId,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
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
} from './query-document';
import { useCollapsedViewport } from './use-collapsed-viewport';

const toggleSizes: Record<CodeInputSize, ButtonV3Size> = Object.freeze({
	small: 'tiny',
	default: 'small',
	large: 'small',
});

const defaultLocale = Object.freeze({
	expand: 'Expand query editor',
	collapse: 'Collapse query editor',
	searchPlaceholder: 'Search in query',
	codeLabel: 'Code',
	additionalLines: (count: number) => `↵ +${String(count)}`,
	additionalLinesLabel: (count: number) => `${String(count)} additional query lines`,
	linePosition: (current: number, total: number) => `Ln ${String(current)}/${String(total)}`,
	multilineDescription: (total: number) =>
		`Multiline query, ${String(total)} lines. Only one line is visible. Expand to view the complete query.`,
	linePositionDescription: (current: number, total: number) =>
		`Line ${String(current)} of ${String(total)}; other query lines are hidden.`,
	selectionStatus: (selected: number, total: number) =>
		`${String(selected)} lines selected · ${String(total)} total`,
	expandedAnnouncement: (total: number) => `Query editor expanded, ${String(total)} lines.`,
	collapsedAnnouncement: 'Query editor collapsed',
});

/**
 * Multiline editor for code, such as a query expression. The collapsed field is a
 * one-row viewport of the same document; expanding opens a larger overlay with search.
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
	const [hostReady, setHostReady] = useState(false);
	const [focusOnOpen, setFocusOnOpen] = useState(false);
	const [announcement, setAnnouncement] = useState('');

	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const collapsedSlotRef = useRef<HTMLDivElement>(null);
	const overlaySlotRef = useRef<HTMLDivElement>(null);
	const hostRef = useRef<HTMLDivElement | null>(null);
	const pendingSelectionRef = useRef<TextSelection | null>(null);
	const focusOnCloseRef = useRef(false);
	const isMovingHostRef = useRef(false);
	const skipAnnouncementRef = useRef(true);

	if (hostRef.current === null) {
		hostRef.current = document.createElement('div');
	}

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

	const viewport = useCollapsedViewport(textareaRef, currentValue, hostReady, !isExpanded);
	const revealCaretLineRef = useRef(viewport.revealCaretLine);

	revealCaretLineRef.current = viewport.revealCaretLine;

	useLayoutEffect(() => {
		const host = hostRef.current;
		const dest = isExpanded ? overlaySlotRef.current : collapsedSlotRef.current;

		if (!host || !dest) {
			return;
		}

		isMovingHostRef.current = true;
		host.className = isExpanded ? panelStyles.editorHost : collapsedStyles.editorHost;

		if (host.parentElement !== dest) {
			dest.appendChild(host);
		}

		const textarea = textareaRef.current;
		const pending = pendingSelectionRef.current;

		if (textarea && pending) {
			applyTextSelection(textarea, pending);
			pendingSelectionRef.current = null;
		}

		if (textarea && isExpanded && focusOnOpen) {
			textarea.focus({ preventScroll: true });
		}

		isMovingHostRef.current = false;

		if (!hostReady) {
			setHostReady(true);
		}
	}, [isExpanded, hostReady, focusOnOpen]);

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

	const editor = createPortal(
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
			aria-label={isExpanded ? strings.codeLabel : undefined}
			aria-describedby={description ? descriptionId : undefined}
			onChange={handleChange}
			onFocus={handleFocus}
			onBlur={handleBlur}
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
		hostRef.current,
	);

	return (
		<DsPopover.Root
			open={isExpanded}
			side="bottom"
			align="start"
			gutter={4}
			matchAnchorWidth
			restoreFocus={false}
			onOpenAutoFocus={(event) => {
				event.preventDefault();

				if (focusOnOpen) {
					textareaRef.current?.focus();
				}
			}}
			onCloseAutoFocus={(event) => {
				event.preventDefault();

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
