import { useState } from 'react';
import classNames from 'classnames';

import styles from './ds-key-value-pair.module.scss';
import type { DsKeyValuePairProps } from './ds-key-value-pair.types';

const DsKeyValuePair = ({
	ref,
	label,
	value,
	readOnly = false,
	layout = 'vertical',
	children,
	className,
	style,
}: DsKeyValuePairProps) => {
	const [isHovered, setIsHovered] = useState(false);
	const [isFocusedWithin, setIsFocusedWithin] = useState(false);

	const hasEditor = !readOnly && children !== undefined && children !== null;
	const isEditorActive = hasEditor && (isHovered || isFocusedWithin);

	return (
		<div
			ref={ref}
			className={classNames(styles.root, className)}
			data-layout={layout}
			data-readonly={readOnly || undefined}
			style={style}
		>
			<span className={styles.label}>{label}</span>

			<div
				className={styles.valueContainer}
				tabIndex={hasEditor ? (isEditorActive ? -1 : 0) : undefined}
				onMouseEnter={hasEditor ? () => setIsHovered(true) : undefined}
				onMouseLeave={hasEditor ? () => setIsHovered(false) : undefined}
				onFocusCapture={hasEditor ? () => setIsFocusedWithin(true) : undefined}
				onBlurCapture={
					hasEditor
						? (e) => {
								if (!e.currentTarget.contains(e.relatedTarget as Node)) {
									setIsFocusedWithin(false);
								}
							}
						: undefined
				}
			>
				<div
					className={styles.valueDisplay}
					aria-hidden={isEditorActive || undefined}
					data-hidden={isEditorActive || undefined}
				>
					{value}
				</div>

				{hasEditor && (
					<div
						className={styles.editorSlot}
						aria-hidden={!isEditorActive || undefined}
						inert={!isEditorActive || undefined}
						data-active={isEditorActive || undefined}
					>
						{children}
					</div>
				)}
			</div>
		</div>
	);
};

export default DsKeyValuePair;
