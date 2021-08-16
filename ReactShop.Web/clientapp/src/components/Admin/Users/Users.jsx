import { Container, Row, Col, Button } from "react-bootstrap";
import Loader from "react-loader-spinner";
import AddUser from "./AddUser";

const Users = (props) => {
  return (
  <div>
    <Container>
      <h2>Users</h2>

      {props.error !== null ?
       props.error.split('\n').map(str => <p><b>{str}</b></p>)
          : null}
            <Loader type="Bars" visible={props.isLoading}  color="#00BFFF" height={80} width={80} /> 
            <AddUser addUser={props.onAddUserClick}></AddUser>

        <ul>
        
        {props.users.map((u) => (
          <li key={u.id}>
            <Row>
              <Col>id:{u.id}</Col>
              <Col>DisplayName: {u.displayName}</Col>
              <Col>Email: {u.email}</Col>
              <Col>Password: {u.password}</Col>
              <Col>
                <Button onClick={() => props.onDeleteUserClick(u.id)}>
                  delete
                </Button>
              </Col>
            </Row>
          </li>
        ))}
      </ul>
    </Container> 
  </div>
);
        }

export default Users;
