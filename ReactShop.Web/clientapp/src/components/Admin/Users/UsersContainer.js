import { connect } from "react-redux";
import { addUserThunk, deleteUserThunk,editUserThunk } from "../../../store/actions/userActions";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    isLoading: state.users.isLoading,
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
    },
    onEditUserClick: (id, item) => {
      dispatch(editUserThunk(id, item));
    }
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
