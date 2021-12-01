import { Col, Row } from "antd";
import Loader from "react-loader-spinner";
import CreateProduct from "./CreateProduct";
import { FC, useCallback, useEffect } from "react";
import { ProductsPropsType } from "./ProductsContainer";
import AdminTable from "./../AdminTable";
import { useDispatch } from "react-redux";
import { getAllProductsThunk } from "store/action-creators/products";
import { useTypedSelector } from "hooks/useTypedSelector";

export type ColumnType = {
  title: string;
  dataIndex: string;
  key?: string;
  width?: number;
  editable?: boolean;
  render?: (...args: any) => JSX.Element | "";
};

const Products: FC<ProductsPropsType> = (props) => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useTypedSelector(
    (state) => state.products
  );

  const fetchProducts = useCallback(() => {
    console.log("getAllProductsThunk");
    dispatch(getAllProductsThunk());
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
      editable: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 100,
      editable: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 100,
      editable: true,
    },
    {
      title: "CategoryId",
      dataIndex: "categoryId",
      key: "categoryId",
      width: 100,
      editable: true,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: 100,
      editable: true,
      render: (category) => {
        return <>{category.name}</>;
      },
    },

    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: 100,
      render: (text) => {
        return text ? <img width="50px" height="50px" src={text} alt="" /> : "";
      },
    },
  ];

  return (
    <div>
      <h2>Product</h2>
      <Row>
        {error ?? null}
        <Loader
          type="Bars"
          visible={isLoading}
          color="#00BFFF"
          height={80}
          width={80}
        />
        <Col span={12}>
          <CreateProduct onSubmit={props.onAddProductClick}></CreateProduct>
        </Col>
        <Col span={12}>
          <AdminTable
            rows={products}
            cols={columns}
            onAdd={props.onAddProductClick}
            onDelete={props.onDeleteProductClick}
            onEdit={props.onEditProductClick}
          ></AdminTable>
        </Col>
      </Row>
    </div>
  );
};

export default Products;
