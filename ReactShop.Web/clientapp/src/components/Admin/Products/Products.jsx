import { Container, Row, Col, Button } from "react-bootstrap";
import Loader from "react-loader-spinner";

import AddProduct from "./AddProduct";
import AdminTable from "./AdminTable";

const Products = (props) => {
  const getColumns = () => {
    console.log("props", props);
    if (typeof props.products !== "undefined" && props.products.length > 0) {
      return Object.keys(props.products[0]).map((key) => {
        return { name: key, prop: key };
      });
    }
    return [];
  };
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
        <AddProduct
          addProduct={props.onAddProductClick}
          categories={props.categories}
        ></AddProduct>
        {/* {products.length? <ul>{products}</ul>: "Products not exists"} */}

        <AdminTable
          rows={props.products}
          cols={getColumns()}
          onDelete={props.onDeleteProductClick}
          onEdit={props.onEditProductClick}
        ></AdminTable>
      </Container>
    </div>
  );
};

export default Products;
