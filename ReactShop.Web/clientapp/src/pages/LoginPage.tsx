import React from "react";
import { connect } from "react-redux";
import { login } from "../store/action-creators/auth";
import { CircularProgress } from "@material-ui/core";
import { RootStateType } from "../store/store";
import { ActionTypes } from "../types/actionCreators";
import { ThunkDispatch } from "redux-thunk";
import { User } from "../types/users";
import { Form, Input, Button, Checkbox } from "antd";

type LoginProps = {
  loggingIn: boolean;
  login: (user: User) => void;
};

const LoginPage: React.FC<LoginProps> = (props) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    try {
      const { userName, password } = values;
      if (userName && password) {
        props.login({ userName, password });
      }
    } catch (e: any) {}
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const { loggingIn } = props;
  return (
    <div>
      <h2>Login</h2>
      {loggingIn ?? <CircularProgress color="secondary" />}
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
      {/* <Paper className={classes.padding}>
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Face />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="userName"
                label="Username"
                name="userName"
                type="email"
                value={userName}
                onChange={handleChange}
                fullWidth
                autoFocus
                required
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Fingerprint />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="username"
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid item>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item>
              <Button
                disableFocusRipple
                disableRipple
                style={{ textTransform: "none" }}
                variant="text"
                color="primary"
              >
                Forgot password ?
              </Button>
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: "10px" }}>
            <Button
              variant="outlined"
              color="primary"
              style={{ textTransform: "none" }}
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Grid>
        </div>
      </Paper> */}
    </div>
  );
};

const mapState = (state: RootStateType) => {
  const { loggingIn }: { loggingIn: boolean } = state.auth;
  return { loggingIn };
};

const actionCreators = (
  dispatch: ThunkDispatch<RootStateType, void, ActionTypes>
) => {
  return {
    login: (user: User) => {
      return dispatch(login(user));
    },
  };
};

export default connect(mapState, actionCreators)(LoginPage);
