import { FC } from "react";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React from "react";
import { UploadFile } from "antd/lib/upload/interface";

const ImageUploader: FC<{}> = ({}) => {
  const [fileList, setFileList] = React.useState([] as UploadFile<any>[]);

  const onChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: any) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    if (imgWindow) imgWindow.document.write(image.outerHTML);
  };

  return (
    <Upload
      listType="picture-card"
      fileList={fileList}
      onChange={onChange}
      onPreview={onPreview}
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
};

export default ImageUploader;
