import { connect } from "react-redux";
import {
  addProductThunk,
  deleteProductThunk,
  editProductThunk,
} from "../../../store/reducers/products/productActions";
import Products from "./ProductPage";

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    categories: state.categories.categories,
    isLoading: state.products.isLoading,
    error: state.products.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProductClick: (product) => {
      dispatch(addProductThunk(product));
    },
    onEditProductClick: (id, item) => {
      dispatch(editProductThunk(id, item));
    },
    onDeleteProductClick: (id) => {
      dispatch(deleteProductThunk(id));
    },
  };
};

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

export default ProductsContainer;
