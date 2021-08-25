import { Container, Row, Col, Button } from "react-bootstrap";
import Loader from "react-loader-spinner";
import AddUser from "./AddUser";
import AdminGrid from "./../AdminGrid";

const Users = (props) => {
  const columns = props.users[0]?Object.keys(props.users[0]):[];
    columns = columns.map(c=> {
      return {name:c, title:c}
    });
  return (
  <div>
    <Container>
      <h2>Users</h2>

      {props.error !== null ?
       props.error.split('\n').map(str => <p><b>{str}</b></p>)
          : null}
            <Loader type="Bars" visible={props.isLoading}  color="#00BFFF" height={80} width={80} /> 
            <AddUser addUser={props.onAddUserClick}></AddUser>

            <AdminGrid columns={columns} rows={props.users}></AdminGrid>
   
    </Container> 
  </div>
);
        }

export default Users;
