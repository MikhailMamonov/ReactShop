import { Container, Row, Col, Button } from "react-bootstrap";

import AddUser from "./AddUser";

const Users = (props) => (
  <div>
    <Container>
      <h2>Users</h2>
      {props.error !== null ? <b>{props.error}</b> : null}
      {props.loading ? <b>loading...</b> : null}
      <AddUser addUser={props.onAddUserClick}></AddUser>
      <ul>
        {console.log("before map")}
        {props.users.map((u) => (
          <li key={u.id}>
            <Row>
              <Col>id:{u.id}</Col>
              <Col>DisplayName: {u.displayName}</Col>
              <Col>Email: {u.email}</Col>
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

export default Users;
