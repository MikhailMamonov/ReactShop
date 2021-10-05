import { Input, Button, Form } from "antd";
import React, { FC } from "react";
import { CreateCategoryProps } from "./CategoriesContainer";
import { Category } from "./../../../types/categories";

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

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
      <Form {...formItemLayout} onFinish={handleSubmit} name="validate_other">
        <Form.Item
          name="name"
          label="name"
          rules={[
            {
              required: true,
              message: "Please input name!",
              type: "string",
            },
          ]}
        >
          <Input
            onChange={(e) => setItem({ ...item, name: e.target.value })}
            value={item["name"]}
            placeholder="category name"
          />
        </Form.Item>
        <Form.Item>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={handleReset}>Reset</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateCategory;
