import { type Ref, Fragment, useEffect, useState } from 'react';
import { useHighlight } from '@ark-ui/react/highlight';
import { DsIcon } from '../../ds-icon';
import { DsTextInput } from '../../ds-text-input';
import styles from './ds-code-input-panel.module.scss';

export interface DsCodeInputPanelProps {
	value: string;
	isOpen: boolean;
	searchPlaceholder: string;
	editorSlotRef: Ref<HTMLDivElement>;
}

const DsCodeInputPanel = ({ value, isOpen, searchPlaceholder, editorSlotRef }: DsCodeInputPanelProps) => {
	const [query, setQuery] = useState('');

	useEffect(() => {
		if (!isOpen) {
			setQuery('');
		}
	}, [isOpen]);

	const chunks = useHighlight({ text: value, query, ignoreCase: true, matchAll: true });

	return (
		<div className={styles.body}>
			<div className={styles.codeScroll}>
				<div className={styles.codeStack}>
					{isOpen && (
						<div className={styles.backdrop} aria-hidden="true">
							{chunks.map((chunk, index) =>
								chunk.match ? (
									<mark key={index} className={styles.mark}>
										{chunk.text}
									</mark>
								) : (
									<Fragment key={index}>{chunk.text}</Fragment>
								),
							)}
							{'\n'}
						</div>
					)}
					<div ref={editorSlotRef} className={styles.editorSlot} />
				</div>
			</div>
			{isOpen && (
				<label className={styles.searchRow}>
					<span className={styles.visuallyHidden}>{searchPlaceholder}</span>
					<DsTextInput
						value={query}
						placeholder={searchPlaceholder}
						onValueChange={setQuery}
						slots={{ startAdornment: <DsIcon icon="search" size="tiny" aria-hidden /> }}
					/>
				</label>
			)}
		</div>
	);
};

export default DsCodeInputPanel;
