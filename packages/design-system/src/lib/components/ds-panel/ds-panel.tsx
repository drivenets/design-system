import * as Collapsible from '@radix-ui/react-collapsible';
import classnames from 'classnames';
import styles from './ds-panel.module.scss';
import { DsIcon } from '../ds-icon';
import type { DsPanelCollapseButtonProps, DsPanelProps } from './ds-panel.types';

export function DsPanel({
	open,
	onOpenChange,
	children,
	className,
	slotProps,
	variant = 'docked',
	disablePadding = false,
	...props
}: DsPanelProps) {
	return (
		<Collapsible.Root
			open={open}
			onOpenChange={onOpenChange}
			className={classnames(styles.root, className, {
				[styles.variantDocked]: variant === 'docked',
				[styles.variantFloating]: variant === 'floating',
				[styles.disablePadding]: disablePadding,
			})}
			{...props}
		>
			<DsPanelCollapseButton {...slotProps?.collapseButton} />
			{children}
		</Collapsible.Root>
	);
}

function DsPanelCollapseButton({ collapsed, ...props }: DsPanelCollapseButtonProps) {
	return (
		<Collapsible.Trigger
			className={classnames(styles.trigger, {
				[styles.triggerCollapsed]: collapsed,
			})}
			aria-label="Toggle panel"
			{...props}
		>
			<DsIcon icon="arrow_circle_left" variant="outlined" />
		</Collapsible.Trigger>
	);
}
