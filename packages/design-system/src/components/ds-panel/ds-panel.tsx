import { useEffect, useRef } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import classnames from 'classnames';
import styles from './ds-panel.module.scss';
import { DsIcon } from '../ds-icon';
import type { DsPanelCollapseButtonProps, DsPanelProps } from './ds-panel.types';

function useDraggable(enabled: boolean) {
	const rootRef = useRef<HTMLDivElement>(null);
	const positionRef = useRef({ x: 0, y: 0 });
	const dragRef = useRef<{
		startX: number;
		startY: number;
		originX: number;
		originY: number;
	} | null>(null);

	useEffect(() => {
		const root = rootRef.current;

		if (!root) {
			return;
		}

		if (!enabled) {
			positionRef.current = { x: 0, y: 0 };
			root.style.transform = '';

			return;
		}

		const handleMouseDown = (e: MouseEvent) => {
			const target = e.target as HTMLElement;

			if (!target.closest('[data-drag-handle]')) {
				return;
			}

			e.preventDefault();

			dragRef.current = {
				startX: e.clientX,
				startY: e.clientY,
				originX: positionRef.current.x,
				originY: positionRef.current.y,
			};

			root.classList.add(styles.dragging);
		};

		const handleMouseMove = (e: MouseEvent) => {
			if (!dragRef.current) {
				return;
			}

			positionRef.current = {
				x: dragRef.current.originX + (e.clientX - dragRef.current.startX),
				y: dragRef.current.originY + (e.clientY - dragRef.current.startY),
			};

			root.style.transform = `translate(${String(positionRef.current.x)}px, ${String(positionRef.current.y)}px)`;
		};

		const handleMouseUp = () => {
			if (!dragRef.current) {
				return;
			}

			dragRef.current = null;
			root.classList.remove(styles.dragging);
		};

		root.addEventListener('mousedown', handleMouseDown);
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);

		return () => {
			root.removeEventListener('mousedown', handleMouseDown);
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};
	}, [enabled]);

	return rootRef;
}

export function DsPanel({
	open,
	onOpenChange,
	children,
	className,
	slotProps,
	variant = 'docked',
	draggable = false,
	disablePadding = false,
	...props
}: DsPanelProps) {
	const isDraggable = variant === 'floating' && draggable;
	const rootRef = useDraggable(isDraggable);

	return (
		<Collapsible.Root
			ref={rootRef}
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
