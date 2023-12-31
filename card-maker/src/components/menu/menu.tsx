import {
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
} from "../models/models";
import style from "./menu.module.css";
import { ChangeEvent } from "react";

type props = {
  addElement: (
    elemt:
      | TextBlockProps
      | ImageBlockProps
      | CircleProps
      | RectangleProps
      | FilterProps
  ) => void;
}

const Menu = (props: props) => {
  const { addElement } = props;

  const addTextBlock = () => {
    const elem: TextBlockProps = {
      type: "text",
      id: "t1",
      width: 200,
      height: 100,
      xPos: 100,
      yPos: 100,
      fontSize: 20,
      fontFamily: `Roboto`,
      color: `#000000`,
      bold: false,
      value: ["Добавить текст"],
    }
    addElement(elem);
  }
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    let file: File;
    if (event.target.files) {
      file = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.onloadend = () => {
      try {
        if (typeof reader.result !== "string")
          throw Error("invalid file type: " + typeof reader.result);
        if (file.type !== "png/jpg")
          throw Error("invalid file: " + file.type);
      } catch (error) {
        alert(error);
      }
  };
  return (
    <div className={style.menu}>
      <button onClick={addTextBlock}>Добавить текст</button>
      <button>Добавить круг</button>
      <button>Добавить квадрат</button>
      <button>
        <input type="file" onChange={onChange} />Добавить картинку
      </button>
      <button>Добавить фильтр</button>
    </div>
  )
  }
}

export default Menu;