import { default as React } from '../../../../../../node_modules/.pnpm/react@19.2.3/node_modules/react';
export interface UseDragAndDropResult {
    DragWrapper: React.ComponentType<React.PropsWithChildren>;
    SortableWrapper: React.ComponentType<React.PropsWithChildren>;
}
export interface UseDragAndDropOptions<T> {
    isDragEnabled: boolean;
    onOrderChange?: (newData: T[]) => void;
    items: T[];
}
export declare function useDragAndDrop<T extends {
    id: string;
}>({ isDragEnabled, onOrderChange, items, }: UseDragAndDropOptions<T>): UseDragAndDropResult;
//# sourceMappingURL=use-drag-and-drop.d.ts.map