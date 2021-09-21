import TextField from "@material-ui/core/TextField";
import React, { FC } from "react";
import { Button, Paper } from "@material-ui/core";
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
    <Paper>
      <h2>Create Category </h2>
      <TextField
        onChange={(e) => setItem({ ...item, name: e.target.value })}
        value={item["name"]}
        label={"Name"} //optional
      />

      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>
    </Paper>
  );
};

export default CreateCategory;
