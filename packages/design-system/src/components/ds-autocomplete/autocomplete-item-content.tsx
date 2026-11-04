import { Combobox } from '@ark-ui/react/combobox';
import { Highlight } from '@ark-ui/react/highlight';
import styles from './ds-autocomplete.module.scss';
import type { DsAutocompleteOption } from './ds-autocomplete.types';
import { DsIcon } from '../ds-icon';

interface AutocompleteItemContentProps {
	option: DsAutocompleteOption;
	query: string;
	highlightMatch: boolean;
}

export const AutocompleteItemContent = ({ option, query, highlightMatch }: AutocompleteItemContentProps) => (
	<>
		{option.icon && <DsIcon className={styles.itemIcon} icon={option.icon} aria-hidden="true" />}

		<Combobox.ItemText className={styles.itemText}>
			{highlightMatch ? <Highlight query={query} text={option.label} ignoreCase /> : option.label}
		</Combobox.ItemText>
	</>
);
