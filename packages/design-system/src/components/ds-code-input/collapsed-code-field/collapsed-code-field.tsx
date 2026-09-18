import { type ReactNode, type Ref } from 'react';
import classNames from 'classnames';
import type { CodeInputSize } from '../ds-code-input.types';
import type { CollapsedIndicator } from '../use-collapsed-viewport';
import { DsStack } from '../../ds-stack';
import styles from './collapsed-code-field.module.scss';

export interface CollapsedCodeFieldProps {
	size: CodeInputSize;
	placeholder?: string;
	disabled: boolean;
	showEcho: boolean;
	echoText: string;
	fadeStart: boolean;
	fadeEnd: boolean;
	showEllipsis: boolean;
	indicator: CollapsedIndicator | null;
	additionalLinesLabel: (count: number) => string;
	additionalLines: (count: number) => string;
	linePosition: (current: number, total: number) => string;
	selectionStatus: (selected: number, total: number) => string;
	editorSlotRef: Ref<HTMLDivElement>;
	adornment: ReactNode;
	className?: string;
	onExpand: () => void;
}

const CollapsedCodeField = ({
	size,
	placeholder,
	disabled,
	showEcho,
	echoText,
	fadeStart,
	fadeEnd,
	showEllipsis,
	indicator,
	additionalLinesLabel,
	additionalLines,
	linePosition,
	selectionStatus,
	editorSlotRef,
	adornment,
	className,
	onExpand,
}: CollapsedCodeFieldProps) => (
	<div
		className={classNames(styles.container, styles[size], className)}
		data-disabled={disabled || undefined}
	>
		<div className={styles.field}>
			{/* While expanded, paint a fake line so the overlay can take the real
			    textarea without the compact row going empty. */}
			{showEcho && (
				<div className={classNames(styles.echo, !echoText && styles.placeholder)}>
					{echoText || placeholder}
				</div>
			)}
			<div
				ref={editorSlotRef}
				className={classNames(styles.editorSlot, showEcho && styles.editorSlotHidden)}
			/>
			{fadeStart && <div className={styles.fadeStart} aria-hidden />}
			{fadeEnd && <div className={styles.fadeEnd} aria-hidden />}
			{showEllipsis && !showEcho && <div className={styles.ellipsis} aria-hidden />}
		</div>
		<DsStack direction="row" alignItems="center" flex="none" gap="var(--xs)">
			{indicator?.kind === 'plusN' && (
				<button
					type="button"
					className={styles.indicatorButton}
					aria-label={additionalLinesLabel(indicator.count)}
					onClick={onExpand}
				>
					{additionalLines(indicator.count)}
				</button>
			)}
			{indicator?.kind === 'line' && (
				<span className={styles.indicator}>{linePosition(indicator.current, indicator.total)}</span>
			)}
			{indicator?.kind === 'selection' && (
				<span className={styles.indicator}>{selectionStatus(indicator.selected, indicator.total)}</span>
			)}
			{adornment}
		</DsStack>
	</div>
);

export default CollapsedCodeField;
