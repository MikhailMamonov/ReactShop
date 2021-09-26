import { FC } from "react";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React from "react";
import { UploadChangeParam, UploadFile } from "antd/lib/upload/interface";
import ImgCrop from "antd-img-crop";

type Props = {
  onChangeImage: (uploadFile: UploadFile<any>) => void;
};

const headerDict = {
  "Access-Control-Allow-Origin": "*",
};
const ImageUploader: FC<Props> = (props) => {
  const [fileList, setFileList] = React.useState([] as UploadFile<any>[]);

  const onChange = ({
    fileList: newFileList,
  }: UploadChangeParam<UploadFile<any>>) => {
    setFileList(newFileList);
    props.onChangeImage(newFileList[0]);
  };

  const onPreview = async (file: UploadFile<any>) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        if (file.originFileObj) reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result as string | undefined);
      });
    }
    const image = new Image();
    if (src) image.src = src;
    const imgWindow = window.open(src);
    if (imgWindow) imgWindow.document.write(image.outerHTML);
  };

  return (
    <ImgCrop rotate>
      <Upload
        listType="picture-card"
        defaultFileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        headers={headerDict}
      >
        {fileList.length < 1 && "+ Upload"}
      </Upload>
    </ImgCrop>
  );
};

export default ImageUploader;
