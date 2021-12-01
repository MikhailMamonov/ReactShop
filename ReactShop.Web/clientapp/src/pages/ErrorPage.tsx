import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Button } from "antd";
import { AppDispatch, RootStateType } from "../store";

type ErrorPagePropsType = {
  errors: {
    products: string | undefined;
    categories: string | undefined;
    users: string | undefined;
    auth: string | undefined;
  };
  history: any;
};

const ErrorPage: React.FC<ErrorPagePropsType> = (props) => {
  useEffect(() => {
    console.log("in use Effect");
  });

  return (
    <div>
      <Row>
        <Col>
          <h1>Error</h1>
          {Object.entries(props.errors).map(function ([key, value]) {
            return value ? <div>{`${key} => ${value} \n`}</div> : null;
          })}
        </Col>
        <Col>
          <Button onClick={() => props.history.go(-1)} color="primary">
            Back
          </Button>
          <Button color="secondary">Secondary</Button>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state: RootStateType) => {
  return {
    errors: {
      products: state.products.error,
      categories: state.categories.error,
      users: state.users.error,
      auth: state.auth.error,
    },
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
