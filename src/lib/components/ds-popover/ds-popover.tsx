import type React from 'react';
import * as Popover from '@radix-ui/react-popover';
import classNames from 'classnames';
import styles from './ds-popover.module.scss';
import type { DsPopoverProps } from './ds-popover.types';

const DsPopover: React.FC<DsPopoverProps> = ({
	trigger,
	children,
	className,
	align = 'center',
	side = 'top',
}) => {
	return (
		<Popover.Root>
			<Popover.Trigger asChild>{trigger}</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content
					side={side}
					align={align}
					sideOffset={8}
					collisionPadding={16}
					className={classNames(styles.content, className)}
				>
					{children}
					<Popover.Arrow className={styles.arrow} />
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	);
};

export default DsPopover;
