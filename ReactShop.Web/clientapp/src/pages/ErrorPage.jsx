import React, { useEffect } from "react";
import { connect } from "react-redux";
//import { history } from "./../../helpers/history";
import { Grid, Button } from "@material-ui/core";

function ErrorPage(props) {
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
}

const mapStateToProps = (state) => {
  return {
    errors: {
      products: state.products.error,
      categories: state.categories.error,
      users: state.users.error,
      auth: state.auth.error,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
