import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";

import { Input, Button, Select, Form, InputNumber, Upload } from "antd";
import { CreateProductType } from "./ProductsContainer";
import { RootStateType } from "../../../store";
import { Product } from "./../../../types/products";
import { UploadFile } from "antd/lib/upload/interface";
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";

const { Option } = Select;

function getBase64(file) {
  console.log("getBase64", file);
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

type FormType = {
  name: string;
  price: number;
  categoryId: number;
  images: Array<UploadFile>;
};

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const CreateProduct: FC<CreateProductType> = (props) => {
  const [product, setProduct] = React.useState({
    name: "",
    price: 0,
    categoryId: 1,
    image: "",
  } as Product);

  const categories = useSelector(
    (state: RootStateType) => state.categories.categories
  );

  const categoryOptions = categories.map((c) => (
    <Option key={c.id} value={c.id}>
      {c.name}
    </Option>
  ));
  const handleSubmit = async (values: FormType) => {
    props.onSubmit(product);
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }

    if (e.fileList && e.fileList.length > 0)
      getBase64(e.fileList[0].originFileObj).then((res) => {
        setProduct((product) => ({
          ...product,
          image: res as string,
        }));
      });

    return e && e.fileList;
  };

  const handleChangeCategory = (value: number) => {
    setProduct({ ...product, categoryId: value });
  };

  useEffect(() => {}, [product]);

  return (
    <div>
      <h2>Create Product </h2>
      <Form {...formItemLayout} onFinish={handleSubmit} name="validate_other">
        <Form.Item
          name="name"
          label="name"
          rules={[
            {
              required: true,
              message: "Please input product name!",
              type: "string",
            },
          ]}
        >
          <Input
            placeholder="product name"
            onChange={(e) => {
              setProduct({ ...product, name: e.target.value });
            }}
          />
        </Form.Item>
        <Form.Item
          name="price"
          label="price"
          rules={[
            {
              required: true,
              message: "Please input price!",
              type: "number",
            },
          ]}
        >
          <InputNumber
            placeholder="Price (RUB)"
            onChange={(value: number) => {
              setProduct({ ...product, price: value });
            }}
          />
        </Form.Item>
        <Form.Item
          name="categoryId"
          label="category"
          rules={[
            {
              required: true,
              message: "Please select category!",
            },
          ]}
        >
          <Select
            placeholder="Please select a category"
            value={product.categoryId}
            onChange={handleChangeCategory}
          >
            {categoryOptions}
          </Select>
        </Form.Item>
        <Form.Item
          name="images"
          label="Images"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload name="logo" listType="picture" beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateProduct;
