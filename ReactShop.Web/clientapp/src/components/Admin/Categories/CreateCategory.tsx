import { Input, Button } from "antd";
import React, { FC } from "react";
import { CreateCategoryProps } from "./CategoriesContainer";
import { Category } from "./../../../types/categories";

const CreateCategory: FC<CreateCategoryProps> = (props) => {
  const [item, setItem] = React.useState({} as Category);
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setItem({ ...item, name: "" });

    props.onAdd(item);
  };
  const handleReset = () => setItem({} as Category);

  return (
    <div>
      <h2>Create Category </h2>
      <Input
        onChange={(e) => setItem({ ...item, name: e.target.value })}
        value={item["name"]}
        placeholder="category name"
      />

      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
};

export default CreateCategory;
