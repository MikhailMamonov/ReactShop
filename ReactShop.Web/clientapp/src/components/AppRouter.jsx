import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import { privateRoutes, publicRoutes } from "../router";

function AppRouter(props) {
  return props.currentUser ? (
    <Switch>
      {privateRoutes.map((r) => (
        <Route
          path={r.path}
          exact={r.exact}
          component={r.component}
          key={r.path}
        />
      ))}
      <Route path="/error" component={ErrorPage} />
      <Redirect to="/home" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((r) => (
        <Route
          path={r.path}
          exact={r.exact}
          component={r.component}
          key={r.path}
        />
      ))}
      <Route path="/error" component={ErrorPage} />
      <Redirect to="/login" />
    </Switch>
  );
}

const mapStateToProps = (state) => {
  const { currentUser } = state.auth;
  return { currentUser };
};

export default connect(mapStateToProps)(AppRouter);
