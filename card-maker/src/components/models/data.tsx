import {
  PageProps,
  Doc,
  FilterProps,
  TextBlockProps,
  RectangleProps,
  CircleProps,
  ImageBlockProps,
  SelectionAreaProps,
  HistoryCommands,
  FilterCollection,
  TemplateProps,
  TemplatesCollection,
} from "./models";

const greenFilter: FilterProps = {
  colorOfFilter: "#3fc11c",
  name: "greenFilter",
  type: "filter",
  id: "filter1",
  opacity: 0.5,
  width: 800,
  height: 600,
  xPos: 0,
  yPos: 0,
};

const blueFilter: FilterProps = {
  name: "blueFilter",
  colorOfFilter: "#009afc",
  type: "filter",
  id: "filter2",
  opacity: 0.5,
  width: 800,
  height: 600,
  xPos: 0,
  yPos: 0,
};

const redFilter: FilterProps = {
  name: "redFilter",
  colorOfFilter: "#fc0000",
  type: "filter",
  id: "filter3",
  opacity: 0.5,
  width: 800,
  height: 600,
  xPos: 0,
  yPos: 0,
};

const grayFilter: FilterProps = {
  name: "grayFilter",
  colorOfFilter: "#909090",
  type: "filter",
  id: "filter4",
  opacity: 0.5,
  width: 800,
  height: 600,
  xPos: 0,
  yPos: 0,
};

const filterCollection: FilterCollection = [
  greenFilter,
  blueFilter,
  redFilter,
  grayFilter,
];

const page1: PageProps = {
  // *минимальные данные
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [],
};

const page2: PageProps = {
  //*В коллекциях могут быть некоторые элементы (не все типы элементов могут быть).
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [
    {
      id: "text1",
      type: "text",
      value: ["Привет", "Мир"],
      fontSize: 20,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      xPos: 0,
      yPos: 0,
    },
    {
      id: "text2",
      type: "text",
      value: ["HelloWorld"],
      fontSize: 17,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 200,
      height: 100,
      xPos: 100,
      yPos: 100,
    },
    {
      id: "img1",
      type: "image",
      width: 300,
      height: 300,
      xPos: 300,
      yPos: 300,
      url: "../../../resource/1.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
    },
  ],
};

const page3: PageProps = {
  //*максимальные данные для page
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [
    {
      id: "text1",
      type: "text",
      value: ["Привет", "Мир"],
      fontSize: 20,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      xPos: 0,
      yPos: 0,
    },
    {
      id: "text2",
      type: "text",
      value: ["HelloWorld"],
      fontSize: 17,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 200,
      height: 100,
      xPos: 100,
      yPos: 100,
    },
    {
      id: "img1",
      type: "image",
      width: 300,
      height: 300,
      xPos: 300,
      yPos: 300,
      url: "../../../resource/1.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
    },
    {
      id: "circle1",
      type: "circle",
      backgroundColor: "#000000",
      backgroundImage: "",
      width: 300,
      height: 300,
      xPos: 0,
      yPos: 300,
    },
    {
      id: "rectangle1",
      type: "rectangle",
      backgroundColor: "#909090",
      backgroundImage: "",
      width: 200,
      height: 200,
      xPos: 600,
      yPos: 0,
    },
    greenFilter,
  ],
};

const selectionArea: SelectionAreaProps = {
  type: "selectionArea",
  width: 0,
  height: 0,
  xPos: 0,
  yPos: 0,
};

const template1: TemplateProps = {
  id: "template1",
  name: "template1",
  blocks: [
    {
      id: "text1",
      type: "text",
      value: ["abcd"],
      fontSize: 23,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      xPos: 300,
      yPos: 100,
    },
    {
      id: "text2",
      type: "text",
      value: ["fail abc"],
      fontSize: 30,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 400,
      height: 100,
      xPos: 350,
      yPos: 490,
    },
    {
      id: "img1",
      type: "image",
      width: 300,
      height: 300,
      xPos: 250,
      yPos: 150,
      url: "../../../resource/1.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
    },
  ],
};

const template2: TemplateProps = {
  id: "template1",
  name: "template1",
  blocks: [
    {
      id: "text1",
      type: "text",
      value: ["front"],
      fontSize: 23,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      xPos: 300,
      yPos: 100,
    },
    {
      id: "text2",
      type: "text",
      value: ["back and front"],
      fontSize: 30,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 530,
      height: 100,
      xPos: 250,
      yPos: 490,
    },
    {
      id: "img1",
      type: "image",
      width: 200,
      height: 200,
      xPos: 300,
      yPos: 200,
      url: "../../../resource/2.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
    },
  ],
};

const template3: TemplateProps = {
  id: "template1",
  name: "template1",
  blocks: [
    {
      id: "text1",
      type: "text",
      value: ["rafis"],
      fontSize: 23,
      fontFamily: "Roboto",
      color: "#000000",
      bold: true,
      width: 200,
      height: 100,
      xPos: 300,
      yPos: 100,
    },
    {
      id: "text2",
      type: "text",
      value: ["huyafis"],
      fontSize: 30,
      fontFamily: "Roboto",
      color: "#565656",
      bold: true,
      width: 530,
      height: 100,
      xPos: 250,
      yPos: 490,
    },
    {
      id: "img1",
      type: "image",
      width: 200,
      height: 200,
      xPos: 300,
      yPos: 200,
      url: "../../../resource/3.png",
      allowedFormat: ["JPG", "JPEG", "PNG"],
    },
  ],
};

const page4: PageProps = {
  //*максимальные данные для page
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [...template1.blocks],
};

const page5: PageProps = {
  //*максимальные данные для page
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [...template2.blocks],
};

const page6: PageProps = {
  //*максимальные данные для page
  id: "page1",
  width: 800,
  height: 600,
  xPos: 50,
  yPos: 50,
  elements: [...template3.blocks],
};

const templateCollection: TemplatesCollection = {
  templates: [template1, template2, template3],
};

const historyCommands: HistoryCommands = {
  indexOfHistory: 0,
  history: [page6],
};

const doc: Doc = {
  page: historyCommands.history[historyCommands.indexOfHistory],
  templateCollection,
  historyCommands,
  filterCollection,
  selectionArea,
};

export { doc };
