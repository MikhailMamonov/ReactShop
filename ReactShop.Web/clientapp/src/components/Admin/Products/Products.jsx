import { Container, Row, Col, Button } from "react-bootstrap";
import Loader from "react-loader-spinner";

import CreateProduct from "./CreateProduct";
import AdminTable from "../AdminTable";
import { getColumns } from "../utils";

const Products = (props) => {
  return (
    <div>
      <Container>
        <h2>Products</h2>
        {props.error ?? null}
        <Loader
          type="Bars"
          visible={props.isLoading}
          color="#00BFFF"
          height={80}
          width={80}
        />
        <CreateProduct onAdd={props.onAddProductClick}></CreateProduct>
        {/* {products.length? <ul>{products}</ul>: "Products not exists"} */}

        <AdminTable
          rows={props.products}
          cols={getColumns(props.products)}
          onDelete={props.onDeleteProductClick}
          onEdit={props.onEditProductClick}
        ></AdminTable>
      </Container>
    </div>
  );
};

export default Products;
