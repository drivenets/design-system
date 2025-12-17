import React from 'react';
import type { DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';
import {
	closestCenter,
	DndContext,
	KeyboardSensor,
	MouseSensor,
	TouchSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

export interface UseDragAndDropResult {
	DragWrapper: React.ComponentType<React.PropsWithChildren>;
	SortableWrapper: React.ComponentType<React.PropsWithChildren>;
}

export interface UseDragAndDropOptions<T> {
	isDragEnabled: boolean;
	onOrderChange?: (newData: T[]) => void;
	items: T[];
}

type DragWrapperProps = React.PropsWithChildren<{
	onDragEnd: (event: DragEndEvent) => void;
	sensors: ReturnType<typeof useSensors>;
}>;

const DragWrapper = ({ children, onDragEnd, sensors }: DragWrapperProps) => (
	<DndContext
		collisionDetection={closestCenter}
		modifiers={[restrictToVerticalAxis]}
		onDragEnd={onDragEnd}
		sensors={sensors}
	>
		{children}
	</DndContext>
);

type SortableWrapperProps = React.PropsWithChildren<{
	items: UniqueIdentifier[];
}>;

const SortableWrapper = ({ children, items }: SortableWrapperProps) => (
	<SortableContext items={items} strategy={verticalListSortingStrategy}>
		{children}
	</SortableContext>
);

export function useDragAndDrop<T extends { id: string }>({
	isDragEnabled,
	onOrderChange,
	items,
}: UseDragAndDropOptions<T>): UseDragAndDropResult {
	const dataIds = React.useMemo(() => items.map((row) => row.id), [items]);

	const sensors = useSensors(
		useSensor(MouseSensor, {}),
		useSensor(TouchSensor, {}),
		useSensor(KeyboardSensor, {}),
	);

	const handleDragEnd = React.useCallback(
		(event: DragEndEvent) => {
			const { active, over } = event;
			if (active.id !== over?.id) {
				const oldIndex = items.findIndex((row) => row.id === active.id);
				const newIndex = items.findIndex((row) => row.id === over?.id);
				if (oldIndex !== -1 && newIndex !== -1) {
					const newData = arrayMove(items, oldIndex, newIndex);
					onOrderChange?.(newData);
				}
			}
		},
		[items, onOrderChange],
	);

	const DragWrapperComponent = React.useMemo(
		() =>
			isDragEnabled
				? ({ children }: React.PropsWithChildren) => (
						<DragWrapper onDragEnd={handleDragEnd} sensors={sensors}>
							{children}
						</DragWrapper>
					)
				: React.Fragment,
		[isDragEnabled, handleDragEnd, sensors],
	);

	const SortableWrapperComponent = React.useMemo(
		() =>
			isDragEnabled
				? ({ children }: React.PropsWithChildren) => (
						<SortableWrapper items={dataIds}>{children}</SortableWrapper>
					)
				: React.Fragment,
		[isDragEnabled, dataIds],
	);

	return {
		DragWrapper: DragWrapperComponent,
		SortableWrapper: SortableWrapperComponent,
	};
}
