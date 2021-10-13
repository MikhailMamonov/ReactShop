import { FC } from "react";
import { Product } from "../../types";

type ShoppingCartProps = {
  products: Product[];
};

const ShoppingCart: FC<ShoppingCartProps> = (props) => {
  const productList = props.products.map((p) => <li>{p.name}</li>);

  return <ul>{productList}</ul>;
};

export default ShoppingCart;
