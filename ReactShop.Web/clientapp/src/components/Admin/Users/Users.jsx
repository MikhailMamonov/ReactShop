import { Container, Row, Col, Button } from "react-bootstrap";
import Loader from "react-loader-spinner";
import AddUser from "./AddUser";
import AdminGrid from "./../AdminGrid";

const printError = (err) => {
  console.log("printError", err);
  if (err) {
    return err;
  } else {
    return "";
  }
};
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
        {/* <AddUser addUser={props.onAddUserClick}></AddUser> */}

        <AdminGrid
          rows={props.users}
          onAdd={props.onAddUserClick}
          onDelete={props.onDeleteUserClick}
        ></AdminGrid>
      </Container>
    </div>
  );
};

export default Users;
