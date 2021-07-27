import { connect } from "react-redux";
import { addProduct, deleteProduct } from "../../../store/actions";
import Products from "./Products";

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: (newProduct) => {
      dispatch(addProduct(newProduct));
    },
    onDeleteClick: (id) => {
      dispatch(deleteProduct(id));
    },
  };
};

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

export default ProductsContainer;
