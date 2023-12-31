import {
  useState,
  useRef,
  RefObject,
  MouseEventHandler,
  MouseEvent,
} from "react";
type Props = {
  ref: RefObject<HTMLDivElement>;
  setSelectArea: (selectArea: boolean) => void;
  selectArea: boolean;
};

const useSelectArea = (props: Props) => {
  const { ref, setSelectArea, selectArea } = props;

  const activateSelectionArea = (e: MouseEvent) => {
    e.preventDefault();
    setSelectArea(!selectArea);
    console.log("asd");
    if (!selectArea) {
      ref.current!.style.border = "5px dotted black";
    } else {
      ref.current!.style.border = "none";
    }
  };

  return activateSelectionArea;
};
export default useSelectArea;
