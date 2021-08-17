import { Container, Row, Col, Button } from "react-bootstrap";
import Loader from "react-loader-spinner";
import AddCategory from "./AddCategory";

const Categories = (props) => (
  <div>
    <Container>
      <h2>Categories</h2>
      {props.error !== null ?
       props.error.split('\n').map(str => <p><b>{str}</b></p>)
          : null}
      <Loader type="Bars" visible={props.isLoading} color="#00BFFF" height={80} width={80} />
      <AddCategory addCategory={props.onAddCategoryClick}
            categories={props.categories}></AddCategory>

      <ul>

        {props.categories.map((u) => (
          <li key={u.id}>
            <Row>
              <Col>Id: {u.id}</Col>
              <Col>Name: {u.name}</Col>
              <Col>
                <Button
                  onClick={() => {
                    props.onDeleteCategoryClick(u.id);
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

export default Categories;
