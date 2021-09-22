import { connect } from "react-redux";
import { RootStateType } from "../../store/store";
import { Category } from "../../types/categories";
import { Product } from "../../types/products";

import Catalog from "./Catalog";

export type CatalogProps = {
  products: Product[];
  categories: Category[];
};

const mapStateToProps = (state: RootStateType) => {
  return {
    products: state.products.products,
    categories: state.categories.categories,
  };
};

const CatalogContainer = connect(mapStateToProps)(Catalog);

export default CatalogContainer;
