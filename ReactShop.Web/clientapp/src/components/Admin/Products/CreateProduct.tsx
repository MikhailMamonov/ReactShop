import React, { FC } from "react";
import { useSelector } from "react-redux";

import { Input, Button, Select } from "antd";
import { CreateProductType } from "./ProductsContainer";
import { RootStateType } from "../../../store/store";
import { Product } from "./../../../types/products";
import ImageUploader from "./ImageUploader";
import { UploadFile } from "antd/lib/upload/interface";
const { Option } = Select;

const getBase64 = (file: Blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

const CreateProduct: FC<CreateProductType> = (props) => {
  const [product, setProduct] = React.useState({} as Product);

  const categories = useSelector(
    (state: RootStateType) => state.categories.categories
  );

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleReset();
    props.onAdd(product);
  };

  const handleChangeCategory = (value: number) => {
    setProduct({ ...product, categoryId: value });
  };

  const handleChangeImage = async (uploadFile: UploadFile<any>) => {
    console.log(uploadFile);
    if (uploadFile.originFileObj) {
      let base64 = (await getBase64(uploadFile.originFileObj)) as
        | string
        | undefined;
      setProduct({ ...product, image: base64 });
    }
    console.log(product);
  };

  const handleReset = () =>
    setProduct({ ...product, name: "", price: 0, categoryId: -1 });
  return (
    <div>
      <h2>Create Product </h2>
      <Input
        placeholder="product name"
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        value={product["name"]}
      />
      <Input
        id="standard-number"
        //label=""
        placeholder="Price (RUB)"
        type="number"
        onChange={(e) =>
          setProduct({ ...product, price: Number(e.target.value) })
        }
        value={product["price"]}
      />
      <Select
        defaultValue={categories[0].id}
        style={{ width: 120 }}
        value={product.categoryId}
        onChange={handleChangeCategory}
      >
        {categories.map((c) => (
          <Option key={c.id} value={c.id}>
            {c.name}
          </Option>
        ))}
      </Select>
      <ImageUploader onChangeImage={handleChangeImage} />
      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
};

export default CreateProduct;
