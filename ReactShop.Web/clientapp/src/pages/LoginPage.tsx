import React from "react";
import { connect } from "react-redux";
import { login } from "../store/auth/auth";
import { Typography, Space } from "antd";
import { RootStateType } from "../store/store";
import { ActionTypes } from "../types/actionCreators";
import { ThunkDispatch } from "redux-thunk";
import { User } from "../types/users";
import { Form, Input, Button, Checkbox } from "antd";

const { Text } = Typography;

type LoginProps = {
  loggingIn: boolean;
  error: string | undefined;
  login: (userName: string, password: string) => void;
};

const LoginPage: React.FC<LoginProps> = (props) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    try {
      const { userName, password } = values;
      if (userName && password) {
        props.login(userName, password);
      }
    } catch (e: any) {}
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const { loggingIn, error } = props;
  return (
    <div>
      <h2>Login</h2>
      {error ?? <Text type="danger">{error}</Text>}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="userName"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapState = (state: RootStateType) => {
  const { loggingIn, error } = state.auth;
  return { loggingIn, error };
};

const actionCreators = (
  dispatch: ThunkDispatch<RootStateType, void, ActionTypes>
) => {
  return {
    login: (userName: string, password: string) => {
      return dispatch(login(userName, password));
    },
  };
};

export default connect(mapState, actionCreators)(LoginPage);
