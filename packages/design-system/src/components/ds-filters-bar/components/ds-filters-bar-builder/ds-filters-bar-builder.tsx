import { type KeyboardEvent, useId, useState } from 'react';
import { DsButtonV3 } from '../../../ds-button-v3';
import { DsIcon } from '../../../ds-icon';
import { DsModal } from '../../../ds-modal';
import { DsTag } from '../../../ds-tag';
import { DsTextInput } from '../../../ds-text-input';
import { DsTypography } from '../../../ds-typography';
import { useDsFiltersBarContext } from '../../ds-filters-bar.context';
import { createConditionId } from '../../ds-filters-bar.utils';
import { ConditionChips } from '../ds-filters-bar-condition-chips';
import type { DsFiltersBarBuilderSlotProps } from '../../ds-filters-bar.types';
import {
	type BuilderChoice,
	type BuilderDraft,
	type BuilderPathSegment,
	builderDraftFromCondition,
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
 * Builder view: the add button and the same condition chips as the filters view. The add button
 * opens the query builder dialog empty to add a condition; a field chip opens it filled from that
 * condition, and Save replaces it. The dialog builds one condition step by step — the field's type
 * decides the steps: compound: subfield, then operator and value; text, number and date: operator,
 * then value; enum: value. Date presets and enum options are offered on the value step. A condition
 * the dialog cannot hold, such as several enum values or a range, opens at its value step with the
 * value empty. Save and close keep the builder view. Renders nothing while an Advanced query is the
 * source.
 *
 * Owns the dialog and its draft: empty when opened from the add button, filled from the condition
 * when opened from a field chip. Save adds or replaces that one condition and closes; any other close
 * drops the draft.
 */
export const Builder = ({ suggestedFields, ref, className, style }: DsFiltersBarBuilderSlotProps) => {
	const { fields, query, locale: barLocale, addCondition, updateCondition } = useDsFiltersBarContext();
	const locale = barLocale.builder;
	const [open, setOpen] = useState(false);
	const [draft, setDraft] = useState(emptyBuilderDraft);
	// The condition being edited, or `null` while adding one
	const [editingId, setEditingId] = useState<string | null>(null);
	const inputId = useId();

	// The conditions are ignored while an Advanced query filters, so neither show them nor add to them.
	// A dialog left open would come back with a stale draft once the query clears.
	if (query !== null) {
		if (open) {
			setOpen(false);
		}

		return null;
	}

	const view = describeBuilderStep(fields, draft, suggestedFields, locale);
	const condition = toFieldCondition(fields, draft);

	const openWith = (next: BuilderDraft, id: string | null) => {
		setDraft(next);
		setEditingId(id);
		setOpen(true);
	};

	const save = () => {
		if (!condition) {
			return;
		}

		if (editingId) {
			updateCondition({ ...condition, id: editingId });
		} else {
			addCondition({ ...condition, id: createConditionId() });
		}

		setOpen(false);
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
		<ConditionChips
			ref={ref}
			locale={barLocale.chips}
			className={className}
			style={style}
			canEdit={(chip) => fields.some((field) => field.id === chip.field)}
			onAdd={() => openWith(emptyBuilderDraft(), null)}
			onEdit={(chip) => openWith(builderDraftFromCondition(fields, chip), chip.id)}
		>
			<DsModal open={open} dividers closeOnInteractOutside className={styles.dialog} onOpenChange={setOpen}>
				<DsModal.Header className={styles.header}>
					<DsModal.Title>{locale.title}</DsModal.Title>
					<DsButtonV3
						variant="tertiary"
						size="small"
						icon="close"
						aria-label={locale.close}
						onClick={() => setOpen(false)}
					/>
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
		</ConditionChips>
	);
};
