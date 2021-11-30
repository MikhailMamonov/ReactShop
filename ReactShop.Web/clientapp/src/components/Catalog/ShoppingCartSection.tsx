import { FC, useCallback } from "react";
import { Product } from "../../types";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useDispatch } from "react-redux";
type ShoppingCartProps = {
  products: Product[];
};

const ShoppingCart: FC<ShoppingCartProps> = (props) => {
  const dispatch = useDispatch();
  const { currentUser } = useTypedSelector((state) => state.auth);

  const productList = props.products.map((p) => <li>{p.name}</li>);

  return <ul>{productList}</ul>;
};

export default ShoppingCart;
