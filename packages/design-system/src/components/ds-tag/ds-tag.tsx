import { type KeyboardEvent, type MouseEvent, type Ref } from 'react';
import classNames from 'classnames';
import styles from './ds-tag.module.scss';
import type { DsTagProps } from './ds-tag.types';
import { DsIcon } from '../ds-icon';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';

/**
 * Design system Tag component
 */
const DsTag = ({
	ref,
	label,
	value,
	className,
	style = {},
	size = 'medium',
	shape = 'default',
	selected = false,
	variant = 'default',
	warning = false,
	disabled = false,
	locale = {},
	onClick,
	onDelete,
	onExpandClick,
	slots,
	...rest
}: DsTagProps) => {
	const tagClass = classNames(
		styles.tag,
		{
			[styles.clickable]: onClick !== undefined && !disabled,
			[styles.selected]: selected && !disabled,
			[styles.include]: variant === 'include',
			[styles.exclude]: variant === 'exclude',
			[styles.round]: shape === 'round',
			[styles.disabled]: disabled,
		},
		className,
	);

	const handleDeleteClick = (event: MouseEvent<HTMLElement>) => {
		event.stopPropagation();
		onDelete?.(event);
	};

	const handleKeyDownTag = (event: KeyboardEvent<HTMLElement>) => {
		if (onClick && (event.key === 'Enter' || event.key === ' ')) {
			event.preventDefault();
			onClick(event);

			return;
		}

		if (onDelete && (event.key === 'Backspace' || event.key === 'Delete')) {
			event.preventDefault();
			onDelete(event);
		}
	};

	const handleKeyDownDelete = (event: KeyboardEvent<HTMLElement>) => {
		event.stopPropagation();

		if (onDelete && (event.key === 'Enter' || event.key === ' ')) {
			event.preventDefault();
			onDelete(event);
		}
	};

	const handleExpandClick = (event: MouseEvent<HTMLElement>) => {
		event.stopPropagation();
		onExpandClick?.(event);
	};

	const handleKeyDownExpand = (event: KeyboardEvent<HTMLElement>) => {
		event.stopPropagation();

		if (onExpandClick && (event.key === 'Enter' || event.key === ' ')) {
			event.preventDefault();
			onExpandClick(event);
		}
	};

	// The operator slot owns a fully-wired control, so neither its clicks nor its keystrokes may
	// reach the tag's own click / delete keyboard shortcuts.
	const stopPropagation = (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => {
		event.stopPropagation();
	};

	const handleClick = (event: MouseEvent<HTMLElement>) => {
		if (onClick) {
			event.preventDefault();
			onClick(event);
		}
	};

	let iconVariant: 'do_not_disturb_on' | 'check_circle' | null = null;

	if (variant === 'include') {
		iconVariant = 'check_circle';
	}

	if (variant === 'exclude') {
		iconVariant = 'do_not_disturb_on';
	}

	const warningAriaLabel = locale.warningAriaLabel ?? 'Warning';

	// `role="button"` makes the subtree presentational and the root's own `aria-label` replaces any
	// name computed from it, so the dot's `role="img"` name is pruned on an interactive tag. Fold it
	// into the root name instead, and keep the dot named for the non-interactive case.
	const rootAriaLabel =
		typeof label === 'string' ? (warning ? `${label}, ${warningAriaLabel}` : label) : undefined;

	const isSmall = size === 'small';
	const regularVariant = isSmall ? 'body-xs-reg' : 'body-sm-reg';
	const mediumVariant = isSmall ? 'body-xs-md' : 'body-sm-md';
	const semiBoldVariant = isSmall ? 'body-xs-semi-bold' : 'body-sm-semi-bold';

	const renderContent = () => {
		if (variant === 'key-value') {
			return (
				<DsStack direction="row" alignItems="center" gap="var(--3xs)" className={styles.segments}>
					<DsTypography variant={mediumVariant} className={classNames(styles.key, styles.keyColon)}>
						{label}
					</DsTypography>
					<DsTypography variant={regularVariant} className={styles.value}>
						{value}
					</DsTypography>
				</DsStack>
			);
		}

		if (variant === 'operator-filter') {
			const operatorSlot = slots?.operator;

			return (
				<DsStack direction="row" alignItems="center" gap="var(--3xs)" className={styles.segments}>
					<DsTypography variant={mediumVariant} className={styles.key}>
						{label}
					</DsTypography>
					{operatorSlot !== undefined &&
						operatorSlot !== null && (
							// The wrapper is a pure event boundary with no semantics of its own; the slotted
							// control keeps its own. `role="presentation"` is what satisfies
							// jsx-a11y/no-static-element-interactions for a span carrying these handlers.
							<span
								role="presentation"
								className={styles.operatorSlot}
								onClick={stopPropagation}
								onKeyDown={stopPropagation}
							>
								{operatorSlot}
							</span>
						)}
					<DsTypography variant={regularVariant} className={styles.value}>
						{value}
					</DsTypography>
				</DsStack>
			);
		}

		if (variant === 'query-filter') {
			return (
				<DsStack direction="row" alignItems="center" gap="var(--4xs)" className={styles.segments}>
					<DsTypography variant={regularVariant} className={styles.queryLabel}>
						{label}
					</DsTypography>
					<DsIcon icon="keyboard_arrow_right" size="tiny" aria-hidden className={styles.querySeparator} />
					<DsTypography variant={semiBoldVariant} className={styles.queryValue}>
						{value}
					</DsTypography>
				</DsStack>
			);
		}

		return (
			<DsTypography variant={regularVariant} className={styles.label}>
				{label}
			</DsTypography>
		);
	};

	return (
		<div
			ref={ref as Ref<HTMLDivElement>}
			className={tagClass}
			style={style}
			onClick={disabled ? undefined : handleClick}
			onKeyDown={disabled ? undefined : handleKeyDownTag}
			role={onClick || onDelete ? 'button' : undefined}
			tabIndex={disabled || (!onClick && !onDelete) ? undefined : 0}
			aria-label={rootAriaLabel}
			aria-pressed={onClick && selected && !disabled ? 'true' : undefined}
			aria-disabled={disabled}
			{...rest}
		>
			{(slots?.icon || iconVariant) && (
				<span className={classNames(styles.icon)}>
					{slots?.icon ??
						(iconVariant && (
							<DsIcon icon={iconVariant} size="tiny" className={classNames(styles.variantIcon)} />
						))}
				</span>
			)}
			{renderContent()}
			{warning && <span role="img" aria-label={warningAriaLabel} className={styles.warningDot} />}
			{onExpandClick && !disabled && (
				<button
					type="button"
					className={styles.expandButton}
					onClick={handleExpandClick}
					onKeyDown={handleKeyDownExpand}
					aria-label={locale.expandAriaLabel ?? 'Expand'}
					tabIndex={0}
				>
					<DsIcon icon="keyboard_arrow_down" size="tiny" aria-hidden />
				</button>
			)}
			{onDelete && !disabled && (
				<button
					type="button"
					className={styles.deleteButton}
					onClick={handleDeleteClick}
					onKeyDown={handleKeyDownDelete}
					aria-label={locale.deleteAriaLabel ?? 'Delete tag'}
					tabIndex={0}
				>
					<DsIcon icon="close" size="tiny" />
				</button>
			)}
		</div>
	);
};

DsTag.displayName = 'DsTag';

export default DsTag;
