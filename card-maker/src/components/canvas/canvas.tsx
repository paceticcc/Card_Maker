import { useState } from "react";

import { PageProps } from "../models/models";

import styles from "./canvas.module.css";

import CommonElement from "../commonElement/commonElement";

const Canvas = (props: PageProps) => {
  const [state, setState] = useState(props);
  console.log(state);

  const styleProps = {
    width: `${state.width}px`,
    height: `${state.height}px`,
    top: `${state.yPos}%`,
    left: `${state.xPos}%`,
  }; 

  return (
    <div className={styles.page} style={styleProps}>
      {state.elements.map((el) => {
        return <CommonElement {...el} key={el.id} />;
      })}
    </div>
  );
};

export default Canvas;
