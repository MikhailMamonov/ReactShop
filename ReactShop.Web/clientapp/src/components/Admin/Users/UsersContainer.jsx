import { connect } from "react-redux";
import { addUserThunk, deleteUserThunk } from "../../../store/actions/users";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    loading: state.users.isLoading,
    error: state.users.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUserClick: (user) => {
      dispatch(addUserThunk(user));
    },
    onDeleteUserClick: (id) => {
      dispatch(deleteUserThunk(id));
    }
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
