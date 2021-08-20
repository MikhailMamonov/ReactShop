import { connect } from "react-redux";
import { addProductThunk, deleteProductThunk } from "../../../store/actions/productActions";
import Products from "./Products";

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    categories: state.categories.categories,
    isLoading: state.products.isLoading,
    error: state.products.error  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProductClick: (product) => {
      dispatch(addProductThunk(product));
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
