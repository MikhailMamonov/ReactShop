import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { User } from "./../types/users";
import React from "react";
import { RootStateType } from "../store";

type ProfileProps = {
  currentUser: User | undefined;
};

const Profile: React.FC<ProfileProps> = (props) => {
  const [currentUser] = React.useState(props.currentUser);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.userName}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
    </div>
  );
};

function mapStateToProps(state: RootStateType) {
  const { currentUser } = state.auth;
  return {
    currentUser: currentUser,
  };
}

export default connect(mapStateToProps)(Profile);
