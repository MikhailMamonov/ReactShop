import React, { FC } from "react";
import { Button, Input, Form } from "antd";
import { CreateUserProps } from "./UsersContainer";
import { User } from "../../../types/users";

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const CreateUser: FC<CreateUserProps> = (props) => {
  const [user, setUser] = React.useState({} as User);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleReset();
    props.onAdd(user);
  };

  const handleReset = () =>
    setUser({ ...user, email: "", userName: "", password: "" });

  return (
    <div>
      <h2>Create User </h2>
      <Form {...formItemLayout} onFinish={handleSubmit} name="validate_other">
        <Form.Item
          name="email"
          label="email"
          rules={[
            {
              required: true,
              message: "Please input email!",
              type: "string",
            },
          ]}
        >
          <Input
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user["email"]}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="password"
          rules={[
            {
              required: true,
              message: "Please input password!",
              type: "string",
            },
          ]}
        >
          <Input
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user["password"]}
            placeholder="password"
          />
        </Form.Item>
        <Form.Item
          name="userName"
          label="userName"
          rules={[
            {
              required: true,
              message: "Please input userName!",
              type: "string",
            },
          ]}
        >
          <Input
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
            value={user["userName"]}
            placeholder="username"
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

export default CreateUser;
