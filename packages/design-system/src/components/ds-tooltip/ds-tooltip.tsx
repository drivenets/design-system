import { type FC, isValidElement } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import classNames from 'classnames';
import styles from './ds-tooltip.module.scss';
import type { DsTooltipProps } from './ds-tooltip.types';
import { DsTypography } from '../ds-typography';

const DsTooltip: FC<DsTooltipProps> = ({ content, children, slotProps }) => {
	if (content === undefined) {
		return children;
	}
	return (
		<Tooltip.Provider delayDuration={200}>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
				<Tooltip.Portal>
					<Tooltip.Content
						className={classNames(styles.tooltip, slotProps?.content?.className)}
						style={slotProps?.content?.style}
						side="top"
						align="center"
						sideOffset={4}
					>
						{isValidElement(content) ? content : <DsTypography variant="body-xs-reg">{content}</DsTypography>}
						<Tooltip.Arrow className={styles.arrow} />
					</Tooltip.Content>
				</Tooltip.Portal>
			</Tooltip.Root>
		</Tooltip.Provider>
	);
};

export default DsTooltip;
