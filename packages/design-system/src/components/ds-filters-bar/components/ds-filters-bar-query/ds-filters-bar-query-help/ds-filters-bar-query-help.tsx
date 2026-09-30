import type { ReactNode } from 'react';
import { DsButtonV3 } from '../../../../ds-button-v3';
import { DsPopover } from '../../../../ds-popover';
import { DsStack } from '../../../../ds-stack';
import { DsTypography } from '../../../../ds-typography';
import {
	filterOperatorValues,
	type DsFilterField,
	type DsFilterOperatorValue,
} from '../../../ds-filters-bar.types';
import type { DsFiltersBarQueryLocale } from '../ds-filters-bar-query.types';
import styles from './ds-filters-bar-query-help.module.scss';
import { buildExampleQuery } from './ds-filters-bar-query-help.utils';

const HELP_PANEL_WIDTH = 360;

type QueryHelpLocale = Required<
	Pick<DsFiltersBarQueryLocale, 'help' | 'helpOperators' | 'helpCombine' | 'helpSearch' | 'helpExample'>
> & { operators: Readonly<Record<DsFilterOperatorValue, string>> };

interface QueryHelpProps {
	fields: ReadonlyArray<DsFilterField>;
	locale: QueryHelpLocale;
	content?: ReactNode;
}

export const QueryHelp = ({ fields, locale, content }: QueryHelpProps) => (
	<DsPopover.Root
		side="bottom"
		align="end"
		onOpenAutoFocus={(event) => {
			event.preventDefault();
		}}
	>
		<DsPopover.Trigger>
			<DsButtonV3
				variant="tertiary"
				size="small"
				icon="help"
				aria-label={locale.help}
				onPointerDown={(event) => {
					event.preventDefault();
				}}
			/>
		</DsPopover.Trigger>
		<DsPopover.Panel width={HELP_PANEL_WIDTH} aria-label={locale.help}>
			{content ?? (
				<>
					<DsPopover.Header>{locale.help}</DsPopover.Header>
					<DsPopover.Content>
						<DsStack direction="column" gap="var(--sm)">
							<DsStack direction="column" gap="var(--xs)">
								<DsTypography variant="body-sm-semi-bold" color="main">
									{locale.helpOperators}
								</DsTypography>
								<dl className={styles.operators}>
									{filterOperatorValues.map((operator) => (
										<div key={operator} className={styles.operator}>
											<dt>
												<DsTypography variant="code-sm-reg" color="main">
													{operator}
												</DsTypography>
											</dt>
											<dd>{locale.operators[operator]}</dd>
										</div>
									))}
								</dl>
							</DsStack>
							<DsTypography variant="body-sm-reg" color="secondary">
								{locale.helpCombine}
							</DsTypography>
							<DsTypography variant="body-sm-reg" color="secondary">
								{locale.helpSearch}
							</DsTypography>
							<DsStack direction="column" gap="var(--xs)">
								<DsTypography variant="body-sm-semi-bold" color="main">
									{locale.helpExample}
								</DsTypography>
								<DsTypography variant="code-sm-reg" color="main" className={styles.example}>
									{buildExampleQuery(fields)}
								</DsTypography>
							</DsStack>
						</DsStack>
					</DsPopover.Content>
				</>
			)}
		</DsPopover.Panel>
	</DsPopover.Root>
);
