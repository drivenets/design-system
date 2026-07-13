import { type FC, isValidElement } from 'react';
import { Tooltip } from '@ark-ui/react/tooltip';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import styles from './ds-tooltip.module.scss';
import type { DsTooltipProps } from './ds-tooltip.types';

const OPEN_DELAY_MS = 200;
const CLOSE_DELAY_MS = 0;
const TOOLTIP_GUTTER_PX = 0;

const DsTooltip: FC<DsTooltipProps> = ({
	content,
	children,
	placement = 'top',
	disabled = false,
	getAnchorRect,
	slotProps,
}) => {
	if (content === undefined) {
		return children;
	}

	return (
		<Tooltip.Root
			openDelay={OPEN_DELAY_MS}
			closeDelay={CLOSE_DELAY_MS}
			disabled={disabled}
			positioning={{ placement, gutter: TOOLTIP_GUTTER_PX, getAnchorRect: getAnchorRect ?? undefined }}
			lazyMount
			unmountOnExit
		>
			<Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
			<Portal>
				<Tooltip.Positioner>
					<Tooltip.Content
						className={classNames(styles.tooltip, slotProps?.content?.className)}
						style={slotProps?.content?.style}
					>
						{isValidElement(content) ? content : <span className={styles.text}>{content}</span>}
						<Tooltip.Arrow className={styles.arrow}>
							<Tooltip.ArrowTip />
						</Tooltip.Arrow>
					</Tooltip.Content>
				</Tooltip.Positioner>
			</Portal>
		</Tooltip.Root>
	);
};

DsTooltip.displayName = 'DsTooltip';

export default DsTooltip;
