import { Container, Row, Col, Button } from "react-bootstrap";
import Loader from "react-loader-spinner";
import AddProduct from "./AddProduct";

const Products = (props) => (
  <div>
    <Container>
      <h2>Products</h2>
      {props.error !== null ?
       props.error.split('\n').map(str => <p><b>{str}</b></p>)
          : null}
      <Loader type="Bars" visible={props.isLoading} color="#00BFFF" height={80} width={80} />
      <AddProduct addProduct={props.onAddProductClick}
            categories={props.categories}></AddProduct>

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
                    this.props.onDeleteProductClick(u.id);
                  }}
                >
                  Удалить
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
