import Loader from "react-loader-spinner";
import CreateCartItem from "./CreateCartItem";

import { CartItemsProps } from "./CartItemsContainer";
import { Col, Row } from "antd";
import { useCallback, useEffect } from "react";
import AdminTable from "../AdminTable";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { getAllCartItemsThunk } from "store/action-creators/cartItems";

const CartItems: React.FC<CartItemsProps> = (props) => {
  const dispatch = useDispatch();
  const { cartItems, isLoading, error } = useTypedSelector(
    (state) => state.cartItems
  );

  const fetchCartItems = useCallback(() => {
    console.log("getAllCartItemsThunk");
    dispatch(getAllCartItemsThunk());
  }, [dispatch]);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  const columns = [
    {
      title: "DateCreated",
      dataIndex: "dateCreated",
      key: "dateCreated",
      width: 150,
      editable: true,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: 150,
      editable: true,
    },
  ];

  return (
    <div>
      <h2>CartItems</h2>
      <Row>
        <Col span={12}>
          <CreateCartItem onAdd={props.onAddCartItemClick}></CreateCartItem>
        </Col>
        {error ?? null}
        <Loader
          type="Bars"
          visible={isLoading}
          color="#00BFFF"
          height={80}
          width={80}
        />
        <Col span={12}>
          <AdminTable
            rows={cartItems}
            cols={columns}
            onAdd={props.onAddCartItemClick}
            onDelete={props.onDeleteCartItemClick}
            onEdit={props.onEditCartItemClick}
          ></AdminTable>
        </Col>
      </Row>
    </div>
  );
};

export default CartItems;
