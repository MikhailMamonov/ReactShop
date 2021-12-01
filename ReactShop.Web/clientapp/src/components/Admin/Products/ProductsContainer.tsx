import { connect } from "react-redux";
import {
  addProductThunk,
  deleteProductThunk,
  editProductThunk,
} from "store/action-creators/products";
import { RootStateType } from "../../../store";
import Products from "./Products";
import { Product } from "./../../../types/products";
import { ThunkDispatch } from "redux-thunk";
import { ActionTypes } from "../../../types/actionCreators";
import { RowType } from "types/admin";

export type ProductsPropsType = {
  onAddProductClick: (product: RowType) => void;
  onEditProductClick: (id: number, item: RowType) => void;
  onDeleteProductClick: (id: number) => void;
};

export type CreateProductType = {
  onSubmit: (product: Product) => void;
};

const mapStateToProps = (state: RootStateType) => {
  return {};
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootStateType, void, ActionTypes>
) => {
  return {
    onAddProductClick: (product: RowType) => {
      dispatch(addProductThunk(product as Product));
    },
    onEditProductClick: (id: number, item: RowType) => {
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
