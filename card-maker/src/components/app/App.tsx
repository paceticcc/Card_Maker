import "./App.css";
import Canvas from "../canvas/canvas";
import {
  PageProps,
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
} from "../models/models";
import { doc } from "../models/data";
import ButtonDownload from "../buttonDownload/buttonDownload";
import Menu from "../menu/menu";
import LoadInput from "../loadInput/loadInput";
import { useState } from "react";

const App = () => {
  const [page, setPage] = useState<PageProps>({
    id: doc.page.id,
    width: doc.page.width,
    height: doc.page.height,
    yPos: doc.page.yPos,
    xPos: doc.page.xPos,
    elements: [...doc.page.elements],
  });

  const addElement = (
    elem:
      | TextBlockProps
      | ImageBlockProps
      | CircleProps
      | RectangleProps
      | FilterProps
  ) => {
    setPage((page: PageProps) => ({
      ...page,
      elements: [...page.elements, elem],
    }));
  };

  return (
    <div className="App">
      <ButtonDownload {...page} />
      <LoadInput setPage={setPage} />
      <Menu addElement={addElement} />
      <Canvas {...page} />
    </div>
  );
};

export default App;
