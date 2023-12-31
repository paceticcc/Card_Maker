import { useState } from "react";

import { CircleProps } from "../../models/models";
import SelectionArea from "../../selectionArea/selectionArea";
import style from "./circle.module.css";

const Circle = (props: CircleProps) => {
  const [activeSelectionArea, setActiveSelectionArea] = useState(false);

  const [state, setState] = useState(props);
  const styleProps = {
    backgroundImage: `${state.backgroundImage}`,
    backgroundColor: `${state.backgroundColor}`,
    left: `${state.xPos}px`,
    top: `${state.yPos}px`,
  };

  return <div className={style.circle} style={styleProps}></div>;
};

export default Circle;
