type Coordinates = {
  xPos: number;
  yPos: number;
};

type Size = {
  width: number;
  height: number;
};

type Block = Coordinates & Size;

type Info = {
  id: string;
};

type TextBlockProps = Block &
  Info & {
    type: "text";
    value: Array<string>;
    fontSize: number;
    fontFamily: string;
    color: string;
    bold: boolean;
  };

type GraphicObject = Block &
  Info & {
    backgroundImage: string;
    backgroundColor: string;
  };

type ImageBlockProps = Block &
  Info & {
    type: "image";
    url: string | undefined;
    allowedFormat: Array<string>;
  };

type CircleProps = GraphicObject & {
  type: "circle";
};

type RectangleProps = GraphicObject & {
  type: "rectangle";
};
type FilterProps = Block & {
  name: string;
  type: "filter";
  id: string;
  colorOfFilter: string;
  opacity: number;
};

type FilterCollection = Array<FilterProps>;

type SelectionAreaProps = Block & {
  type: "selectionArea";
};

type TemplateProps = {
  id: string;
  name: string;
  blocks: Array<
    | TextBlockProps
    | ImageBlockProps
    | FilterProps
    | CircleProps
    | RectangleProps
  >;
};

type TemplatesCollection = {
  templates: Array<TemplateProps>;
};

interface PageProps extends Block {
  id: string;
  elements: Array<
    | TextBlockProps
    | ImageBlockProps
    | FilterProps
    | CircleProps
    | RectangleProps
  >;
}

type HistoryCommands = {
  indexOfHistory: number;
  history: Array<PageProps>;
};

type Doc = {
  page: PageProps;
  templateCollection: TemplatesCollection;
  historyCommands: HistoryCommands;
  filterCollection: FilterCollection;
  selectionArea: SelectionAreaProps;
};
export type {
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
  Coordinates,
};
