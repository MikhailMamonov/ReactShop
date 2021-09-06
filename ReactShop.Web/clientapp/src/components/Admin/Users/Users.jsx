import { Container} from "react-bootstrap";
import Loader from "react-loader-spinner";

import AdminTable from "../AdminTable";
import { getColumns } from "../utils";
import CreateUser from "./CreateUser";

 
const Users = (props) => {
  return (
    <div>
      <Container>
        <h2>Users</h2>
        {props.error ?? null}
        <Loader
          type="Bars"
          visible={props.isLoading}
          color="#00BFFF"
          height={80}
          width={80}
        />
        <CreateUser onAdd={props.onAddUserClick}></CreateUser> 

        <AdminTable
          rows={props.users}
          cols={getColumns(props.users)}
          onDelete={props.onDeleteUserClick}
          onEdit={props.onEditUserClick}
      ></AdminTable>
      </Container>
    </div>
  );
};

export default Users;
