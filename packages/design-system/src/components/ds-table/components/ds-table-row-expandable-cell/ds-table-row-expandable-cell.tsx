import type React from 'react';
import classnames from 'classnames';
import { DsButton } from '../../../ds-button';
import { DsIcon } from '../../../ds-icon';
import stylesShared from '../../styles/shared/ds-table-shared.module.scss';
import type { DsTableRowExpandableCellProps } from './ds-table-row-expandable-cell.types';
import styles from './ds-table-row-expandable-cell.module.scss';

export const DsTableRowExpandableCell = <TData,>({
	row,
	buttonClassName,
}: DsTableRowExpandableCellProps<TData>) => {
	const isExpanded = row.getIsExpanded();

	return (
		<DsButton
			design="v1.2"
			buttonType="tertiary"
			size="small"
			className={classnames(styles.button, buttonClassName)}
			onClick={(e: React.MouseEvent) => {
				e.stopPropagation();
				row.toggleExpanded();
			}}
			onDoubleClick={(e: React.MouseEvent) => {
				e.stopPropagation();
			}}
		>
			<DsIcon
				icon="chevron_right"
				size="small"
				className={classnames(stylesShared.pageButtonIcon, isExpanded && 'rotate-90')}
			/>
		</DsButton>
	);
};
