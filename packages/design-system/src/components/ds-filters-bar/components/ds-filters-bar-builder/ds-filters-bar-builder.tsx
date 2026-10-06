import { type KeyboardEvent, useId, useState } from 'react';
import classNames from 'classnames';
import { DsButtonV3 } from '../../../ds-button-v3';
import { DsIcon } from '../../../ds-icon';
import { DsModal } from '../../../ds-modal';
import { DsTag } from '../../../ds-tag';
import { DsTextInput } from '../../../ds-text-input';
import { DsTypography } from '../../../ds-typography';
import { useDsFiltersBarContext } from '../../ds-filters-bar.context';
import { createConditionId } from '../../ds-filters-bar.utils';
import {
	defaultDsFiltersBarBuilderLocale,
	type DsFiltersBarBuilderProps,
} from './ds-filters-bar-builder.types';
import {
	type BuilderChoice,
	type BuilderPathSegment,
	chooseBuilderOption,
	describeBuilderStep,
	emptyBuilderDraft,
	setBuilderInput,
	toFieldCondition,
} from './ds-filters-bar-builder.utils';
import styles from './ds-filters-bar-builder.module.scss';

interface SelectionPathProps {
	segments: ReadonlyArray<BuilderPathSegment>;
	clearLabel: string;
	onClear: () => void;
}

const SelectionPath = ({ segments, clearLabel, onClear }: SelectionPathProps) => {
	if (segments.length === 0) {
		return null;
	}

	return (
		<div className={styles.pathRow}>
			<DsTag
				selected
				label={
					<span className={styles.path}>
						{segments.map((segment, index) => (
							<span key={segment.key} className={styles.segment}>
								{index > 0 && (
									<>
										<span className={styles.visuallyHidden}>, </span>
										<DsIcon
											icon="keyboard_arrow_right"
											size="tiny"
											aria-hidden
											className={styles.separator}
										/>
									</>
								)}
								<span className={segment.emphasized ? styles.pathValue : undefined}>{segment.text}</span>
							</span>
						))}
					</span>
				}
				locale={{ deleteAriaLabel: clearLabel }}
				onDelete={onClear}
			/>
		</div>
	);
};

/**
 * Builds one condition at a time. Saving appends it to the filter document and clears the draft;
 * closing returns to the filters view and drops the draft.
 */
export const Builder = ({
	suggestedFields,
	locale: localeProp,
	className,
	style,
}: DsFiltersBarBuilderProps) => {
	const { fields, lockedViews, addCondition, setView } = useDsFiltersBarContext();
	const locale = { ...defaultDsFiltersBarBuilderLocale, ...localeProp };
	const [draft, setDraft] = useState(emptyBuilderDraft);
	const inputId = useId();

	const view = describeBuilderStep(fields, draft, suggestedFields, locale);
	const condition = toFieldCondition(fields, draft);

	if (lockedViews.includes('builder')) {
		return null;
	}

	const close = () => {
		setView('filters');
	};

	const save = () => {
		if (!condition) {
			return;
		}

		addCondition({ ...condition, id: createConditionId() });
		setDraft(emptyBuilderDraft());
	};

	const choose = (choice: BuilderChoice) => {
		setDraft(chooseBuilderOption(fields, draft, choice));
	};

	const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key !== 'Enter') {
			return;
		}

		event.preventDefault();

		if (view.inputMode === 'value') {
			save();

			return;
		}

		const [onlyChoice] = view.choices;

		if (view.choices.length === 1 && onlyChoice) {
			choose(onlyChoice);
		}
	};

	return (
		<DsModal
			open
			dividers
			closeOnInteractOutside
			className={classNames(styles.dialog, className)}
			style={style}
			onOpenChange={(open) => {
				if (!open) {
					close();
				}
			}}
		>
			<DsModal.Header className={styles.header}>
				<DsModal.Title>{locale.title}</DsModal.Title>
				<DsButtonV3 variant="tertiary" size="small" icon="close" aria-label={locale.close} onClick={close} />
			</DsModal.Header>

			<DsModal.Body className={styles.body}>
				<SelectionPath
					segments={view.path}
					clearLabel={locale.clear}
					onClear={() => setDraft(emptyBuilderDraft())}
				/>

				<div className={styles.search}>
					<label htmlFor={inputId} className={styles.visuallyHidden}>
						{view.placeholder}
					</label>
					<DsTextInput
						id={inputId}
						className={styles.input}
						value={view.inputValue}
						placeholder={view.placeholder}
						slots={{ startAdornment: <DsIcon icon="search" size="tiny" aria-hidden /> }}
						onValueChange={(value) => setDraft(setBuilderInput(fields, draft, value))}
						onKeyDown={handleInputKeyDown}
					/>
				</div>

				{view.caption && (
					<div className={styles.options} role="group" aria-label={view.caption}>
						<DsTypography variant="body-xs-reg" className={styles.caption}>
							{view.caption}
						</DsTypography>
						<div className={styles.choices}>
							{view.choices.map((choice) => (
								<DsTag
									key={`${choice.kind}-${choice.id}`}
									label={choice.label}
									selected={choice.id === view.selectedChoiceId}
									onClick={() => choose(choice)}
								/>
							))}
						</div>
					</div>
				)}
			</DsModal.Body>

			<DsModal.Footer className={styles.footer}>
				<DsModal.Actions>
					<DsButtonV3 variant="primary" size="medium" disabled={!condition} onClick={save}>
						{locale.save}
					</DsButtonV3>
				</DsModal.Actions>
			</DsModal.Footer>
		</DsModal>
	);
};

Builder.displayName = 'DsFiltersBar.Builder';
