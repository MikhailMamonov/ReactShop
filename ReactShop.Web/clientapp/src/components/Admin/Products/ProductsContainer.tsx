import { connect } from "react-redux";
import {
  addProductThunk,
  deleteProductThunk,
  editProductThunk,
} from "../../../store/products/products";
import { RootStateType } from "../../../store/store";
import Products from "./Products";
import { Product } from "./../../../types/products";
import { Category } from "./../../../types/categories";
import { User } from "../../../types/users";
import { ThunkDispatch } from "redux-thunk";
import { ActionTypes } from "../../../types/actionCreators";

export type ProductsPropsType = {
  products: Array<Product>;
  categories: Array<Category>;
  isLoading: boolean;
  error: string | undefined;
  onAddProductClick: (product: User | Category | Product) => void;
  onEditProductClick: (id: number, item: User | Category | Product) => void;
  onDeleteProductClick: (id: number) => void;
};

export type CreateProductType = {
  onSubmit: (product: Product) => void;
};

const mapStateToProps = (state: RootStateType) => {
  return {
    products: state.products.products,
    categories: state.categories.categories,
    isLoading: state.products.isLoading,
    error: state.products.error,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootStateType, void, ActionTypes>
) => {
  return {
    onAddProductClick: (product: User | Category | Product) => {
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

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

export default ProductsContainer;
