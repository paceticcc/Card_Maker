import { PageProps } from "../models/models";

const ButtonDownload = (props: PageProps) => {
  const createFile = () => {
    const file = new Blob([JSON.stringify(props)], {
      type: "application/json",
    });
    return file;
  };

  const file = createFile();

  const downloadFile = () => {
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "file.json";
    link.click();
  };

  return <button onClick={downloadFile}>Скачать открытку</button>;
};

export default ButtonDownload;
