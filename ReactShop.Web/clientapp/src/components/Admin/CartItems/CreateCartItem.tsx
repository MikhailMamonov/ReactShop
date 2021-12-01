import { Input, Button, Form, InputNumber, Select, TreeSelect } from "antd";
import React, { FC, useCallback, useEffect } from "react";
import { CreateCartItemProps } from "./CartItemsContainer";
import { CartItem } from "types/";
import { useTypedSelector } from "hooks/useTypedSelector";

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const CreateCartItem: FC<CreateCartItemProps> = (props) => {
  const { products } = useTypedSelector((state) => state.products);
  const { currentUser } = useTypedSelector((state) => state.auth);
  const [item, setCartItem] = React.useState({
    shoppingCartId: currentUser ? currentUser.shoppingCart?.id : null,
    amount: 0,
    dateCreated: new Date(),
  } as CartItem);
  console.log("currentUser", currentUser);
  console.log("item", item);
  function handleProductChange(productId) {
    setCartItem({ ...item, productId: productId });
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.onAdd(item);
    console.log("before", item);
    setCartItem({ ...item, amount: 0 });
    console.log("After", item);
  };
  const handleReset = () => {
    console.log("before", item);
    setCartItem({} as CartItem);
    console.log("After", item);
  };

  return (
    <div>
      <h2>Create CartItem </h2>
      <Form {...formItemLayout} onFinish={handleSubmit} name="validate_other">
        <Form.Item
          name="amount"
          label="amount"
          rules={[
            {
              required: true,
              message: "Please input amount!",
              type: "number",
            },
          ]}
        >
          <InputNumber
            onChange={(value) => setCartItem({ ...item, amount: value })}
            value={item["amount"]}
            placeholder="amount"
          />
        </Form.Item>
        <Form.Item
          name="product"
          label="product"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select onChange={handleProductChange}>
            {products.map((p) => (
              <Select.Option value={p.id}>{p.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={handleReset}>Reset</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateCartItem;
