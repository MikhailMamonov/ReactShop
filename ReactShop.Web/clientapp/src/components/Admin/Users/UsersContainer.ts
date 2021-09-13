import { Dispatch } from "react";
import { connect, ConnectedProps } from 'react-redux'
import {
  addUserThunk,
  deleteUserThunk,
  editUserThunk,
} from "../../../store/reducers/users/userActions";
import { AppDispatch, RootState } from "../../../store/store";
import Users from "./Users";
import { IUser } from './../../../models/User';





interface IUserProps {
  users: IUser[],
  isLoading: boolean,
  error: string, // указали здесь, наш объект (подробный код в блоке выше)}
};

const mapStateToProps= (state: RootState):IUserProps => {
  return {
    users: state.users.users,
    isLoading: state.users.isLoading,
    error: state.users.error,
  };
};

const mapDispatchToProps = {
    onAddUserClick: (user:IUser) => {
      addUserThunk(user);
    },
    onDeleteUserClick: (id: string) => {
      deleteUserThunk(id);
    },
    onEditUserClick: (id: string, item: IUser) => {
      editUserThunk(id, item);
    },
  };

const connector = connect(mapStateToProps, mapDispatchToProps)


export default connector(Users);
