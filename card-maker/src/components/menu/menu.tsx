import {
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
} from "../models/models";
import style from "./menu.module.css";

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
  };
  return (
    <div className={style.menu}>
      <button onClick={addTextBlock}>Добавить текст</button>
      <button>Добавить круг</button>
      <button>Добавить квадрат</button>
      <button>Добавить картинку</button>
      <button>Добавить фильтр</button>
    </div>
  )
  }

export default Menu;