import { useState } from "react";
import { ImageBlockProps } from "../../models/models";
import SelectionArea from "../../selectionArea/selectionArea";
import style from "./image.module.css";

const Image = (props: ImageBlockProps) => {
  const [activeSelectionArea, setActiveSelectionArea] = useState(false);

  const [state, setState] = useState(props);

  const styleProps = {
    left: `${state.xPos}px`,
    top: `${state.yPos}px`,
  };

  return (
    <div>
      <img
        className={style.image}
        style={styleProps}
        src={state.url}
        alt={state.id}
      />
    </div>
  );
};

export default Image;
