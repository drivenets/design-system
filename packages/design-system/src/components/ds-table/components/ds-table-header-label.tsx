import type { ReactNode } from 'react';
import classnames from 'classnames';
import { DsTooltip } from '../../ds-tooltip';
import { useIsHorizontallyOverflowing } from '../../../utils/use-is-horizontally-overflowing';
import styles from './ds-table-header-label.module.scss';

type DsTableHeaderLabelProps = {
	children: ReactNode;
	tooltipText?: string;
	className?: string;
};

export const DsTableHeaderLabel = ({ className, children, tooltipText }: DsTableHeaderLabelProps) => {
	const { ref, isOverflowing } = useIsHorizontallyOverflowing<HTMLSpanElement>(tooltipText);
	const title = isOverflowing ? tooltipText : undefined;

	return (
		<span className={classnames(styles.headerLabel, className)}>
			<DsTooltip content={title} placement="top">
				<span ref={ref} className={styles.headerLabelInner}>
					{children}
				</span>
			</DsTooltip>
		</span>
	);
};

DsTableHeaderLabel.displayName = 'DsTableHeaderLabel';
