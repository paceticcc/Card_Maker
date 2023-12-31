import { RefObject, useCallback, useRef } from "react";

type Props = {
  ref: RefObject<HTMLDivElement>;
};

type DndItemInfo = {
  elementRef: RefObject<HTMLDivElement>;
  controlRef: RefObject<HTMLDivElement>;
};

type InternalDndItemInfo = DndItemInfo & {
  startY: number;
  startX: number;
};

type RegisterDndItemFn = (dndItemInfo: DndItemInfo) => {
  onDragStart: OnDragStartFn;
};

type OnDragStartFn = (args: {
  onDrag: (event: MouseEvent) => void;
  onDrop: (event: MouseEvent) => void;
}) => void;

type ItemInfo = {
  startY: number;
  startX: number;
};

const useDnD = () => {
  const items = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<Array<InternalDndItemInfo>>([]);

  const registerDndItem = useCallback((dndItemInfo: DndItemInfo) => {
    const item = {
      ...dndItemInfo,
      startY: 0,
      startX: 0,
    };

    const onDragStart: OnDragStartFn = ({ onDrag, onDrop }) => {
      item.startY = item.elementRef.current!.getBoundingClientRect().top;
      item.startX = item.elementRef.current!.getBoundingClientRect().left;

      const onMouseUp = (event: MouseEvent) => {
        onDrop(event);

        window.removeEventListener("mousemove", onDrag);
        window.removeEventListener("mouseup", onMouseUp);
      };
      window.addEventListener("mousemove", onDrag);
      window.addEventListener("mouseup", onMouseUp);
    };

    return {
      onDragStart,
    };
  }, []);

  return {
    registerDndItem,
  };
};
export { useDnD };

export type { DndItemInfo, RegisterDndItemFn };