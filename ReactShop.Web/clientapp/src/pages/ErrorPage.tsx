import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid, Button } from "@material-ui/core";
import { AppDispatch, RootStateType } from "../store/store";

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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Error</h1>
          {Object.entries(props.errors).map(function ([key, value]) {
            return value ? <div>{`${key} => ${value} \n`}</div> : null;
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            onClick={() => props.history.go(-1)}
            variant="contained"
            color="primary"
          >
            Back
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </Grid>
      </Grid>
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
