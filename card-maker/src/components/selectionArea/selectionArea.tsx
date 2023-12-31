import { RefObject, useRef } from "react";
import { SelectionAreaProps } from "../models/models";
import styles from "./selectionArea.module.css";

type Props = {
  props: SelectionAreaProps;
  ref2: RefObject<HTMLDivElement>;
};

const SelectionArea = (propsArea: Props) => {
  const { ref2, props } = propsArea;
  const sizesSelectionArea = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    top: `${props.xPos}px`,
    left: `${props.yPos}px`,
  };
  return (
    <div
      ref={ref2}
      style={sizesSelectionArea}
      className={styles.selectionArea}
    ></div>
  );
};

export default SelectionArea;
