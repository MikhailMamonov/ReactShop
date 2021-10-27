import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RootStateType } from "../../store/store";
import { ActionTypes } from "../../types";
import { Category } from "../../types/categories";
import { Product } from "../../types/products";

import Catalog from "./Catalog";

export type CatalogProps = {
  products: Product[];
  categories: Category[];
  onAddToCart: (product: Product) => void;
};

const mapStateToProps = (state: RootStateType) => {
  return {
    products: state.products.products,
    categories: state.categories.categories,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootStateType, void, ActionTypes>
) => {
  return {
    onAddToCart: (product: Product) => {
      dispatch(addProductThunk(product as Product));
    },
    onEditProductClick: (id: number, item: User | Category | Product) => {
      dispatch(editProductThunk(id, item as Product));
    },
    onDeleteProductClick: (id: number) => {
      dispatch(deleteProductThunk(id));
    },
  };
};

const CatalogContainer = connect(mapStateToProps)(Catalog);

export default CatalogContainer;
