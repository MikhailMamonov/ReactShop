import { connect } from "react-redux";
import {
  addUserThunk,
  deleteUserThunk,
  editUserThunk,
} from "../../../store/action-creators/users";
import { RootStateType } from "../../../store/store";
import Users from "./Users";
import { User } from "./../../../types/users";
import { RowType } from "../../../types/admin";

export type UserProps = {
  users: User[];
  isLoading: boolean;
  error: string | undefined; // указали здесь, наш объект (подробный код в блоке выше)}
  onAddUserClick: (user: User) => void;
  onDeleteUserClick: (id: string) => void;
  onEditUserClick: (id: string, item: RowType) => void;
};

export type CreateUserProps = {
  onAdd: (user: User) => void;
};

const mapStateToProps = (state: RootStateType) => {
  return {
    users: state.users.users,
    isLoading: state.users.isLoading,
    error: state.users.error,
  };
};

const mapDispatchToProps = {
  onAddUserClick: (user: User) => {
    addUserThunk(user);
  },
  onDeleteUserClick: (id: string) => {
    deleteUserThunk(id);
  },
  onEditUserClick: (id: string, item: RowType) => {
    editUserThunk(id, item as User);
  },
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Users);
