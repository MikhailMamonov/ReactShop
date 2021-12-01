import { useTypedSelector } from "hooks/useTypedSelector";
import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCartItemsThunk } from "store/action-creators/cartItems";

const ShoppingCartPage: React.FC = () => {
  const dispatch = useDispatch();
  const { cartItems } = useTypedSelector((state) => state.cartItems);

  const fetchCarts = useCallback(() => {
    dispatch(getAllCartItemsThunk());
  }, [dispatch]);

  useEffect(() => {
    fetchCarts();
  }, [fetchCarts]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((i) => (
          <li key={i.id}>
            Id : {i.id} ProductId : {i.productId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCartPage;
