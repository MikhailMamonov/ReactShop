import { Container, Row, Col, Button } from "react-bootstrap";
import AddProduct from "./AddProduct";

const Products = (props) => (
  <div>
    <Container>
      <h2>Products</h2>
      <AddProduct addProduct={props.onAddClick}></AddProduct>
      <ul>
        {props.products.map((u) => (
          <li key={u.id}>
            <Row>
              <Col>Id: {u.id}</Col>
              <Col>Name: {u.name}</Col>
              <Col>Price: {u.price}</Col>
              <Col>
                <Button
                  onClick={() => {
                    this.props.onDeleteClick(u.id);
                  }}
                >
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

export default Products;
