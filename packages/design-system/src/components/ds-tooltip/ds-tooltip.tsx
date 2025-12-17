import type { FC } from 'react';
import { isValidElement } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import classNames from 'classnames';
import styles from './ds-tooltip.module.scss';
import type { DsTooltipProps } from './ds-tooltip.types';
import { DsTypography } from '../ds-typography';

const DsTooltip: FC<DsTooltipProps> = ({ content, children }) => {
	if (content === undefined) {
		return <>{children}</>;
	}
	return (
		<Tooltip.Provider delayDuration={200}>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
				<Tooltip.Portal>
					<Tooltip.Content className={classNames(styles.tooltip)} side="top" align="center" sideOffset={4}>
						{isValidElement(content) ? (
							content
						) : (
							<DsTypography variant="body-xs-reg" className={styles.content}>
								{content}
							</DsTypography>
						)}
						<Tooltip.Arrow className={styles.arrow} />
					</Tooltip.Content>
				</Tooltip.Portal>
			</Tooltip.Root>
		</Tooltip.Provider>
	);
};

export default DsTooltip;
