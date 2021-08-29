import { Container, Row, Col, Button } from "react-bootstrap";
import Loader from "react-loader-spinner";
import AddCategory from "./AddCategory";
import AdminGrid from "./../AdminGrid";

const Categories = (props) => (
  <div>
    <Container>
      <h2>Categories</h2>
      {props.error ?? null}
      <Loader
        type="Bars"
        visible={props.isLoading}
        color="#00BFFF"
        height={80}
        width={80}
      />
      <AdminGrid
        rows={props.categories}
        onAdd={props.onAddCategoryClick}
        onDelete={props.onDeleteCategoryClick}
      ></AdminGrid>
    </Container>
  </div>
);

export default Categories;
