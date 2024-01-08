import { useState, useRef, useEffect } from "react";

import Filter from "../Filter/filter";
import TextBlock from "../textBlock/textBlock";
import Rectangle from "../graphicObjects/rectangle/rectangle";
import Circle from "../graphicObjects/circle/circle";
import Image from "../graphicObjects/image/image";
import SelectionArea from "../selectionArea/selectionArea";
import {
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
} from "../models/models";

import { useDnD } from "../../hooks/useDnD/useDnD";

type Props =
  | TextBlockProps
  | ImageBlockProps
  | CircleProps
  | RectangleProps
  | FilterProps;

const CommonElement = (props: Props) => {
  const [state, setState] = useState(props);
  console.log(state);
  const { registerDndItem } = useDnD();

  const ref = useRef<HTMLDivElement>(null);
  const dndControlRef = useRef<HTMLDivElement>(null);

  const [selectArea, setSelectArea] = useState(false);

  const toggleArea = () => {
    setSelectArea((area) => !area);
  };

  useEffect(() => {

    const { onDragStart } = registerDndItem({
      elementRef: ref,
      controlRef: dndControlRef,
    });

    const onMouseDown = (mouseDownEvent: MouseEvent) => {
      onDragStart({
        onDrag: (dragEvent) => {
          dragEvent.preventDefault();
          ref.current!.style.top = `${
            dragEvent.clientY + (state.yPos - mouseDownEvent.clientY)
          }px`;
          ref.current!.style.left = `${
            dragEvent.clientX + (state.xPos - mouseDownEvent.clientX)
          }px`;
        },
        onDrop: (dropEvent) => {
          setState((state) => ({
            ...state,
            xPos: dropEvent.clientX + (state.xPos - mouseDownEvent.clientX),
            yPos: dropEvent.clientY + (state.yPos - mouseDownEvent.clientY),
          }));
          toggleArea();
        },
      });
    };
    if (dndControlRef.current !== null) {
      const control = dndControlRef.current!;
      control.addEventListener("mousedown", onMouseDown);
      return () => control.removeEventListener("mousedown", onMouseDown);
    }
  }, [selectArea]);

  return (
    <div
      style={{
        position: "absolute",
        top: `${state.yPos}px`,
        left: `${state.xPos}px`,
      }}
      ref={ref}
      onDoubleClick={(e: React.MouseEvent) => {
        e.preventDefault();
        toggleArea();
      }}
    >
      {(() => {
        switch (state.type) {
          case "text":
            return <TextBlock {...(props as TextBlockProps)} />;
          case "circle":
            return <Circle {...(props as CircleProps)} />;
          case "rectangle":
            return <Rectangle {...(props as RectangleProps)} />;
          case "image":
            return <Image {...(props as ImageBlockProps)} />;
          case "filter":
            return <Filter {...(props as FilterProps)} />;
          default:
            return null;
        }
      })()}
      {selectArea ? (
        <SelectionArea
          ref2={dndControlRef}
          props={{
            width: state.width,
            height: state.height,
            xPos: 0,
            yPos: 0,
            type: "selectionArea",
          }}
        />
      ) : null}
    </div>
  );
};

export default CommonElement;
