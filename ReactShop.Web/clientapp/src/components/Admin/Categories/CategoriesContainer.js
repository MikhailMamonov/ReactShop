import { connect } from "react-redux";
import { addCategoryThunk, deleteCategoryThunk } from "../../../store/actions/productActions";
import Categories from "./Categories";

const mapStateToProps = (state) => {
  return {
    categories: state.products.categories,
    isLoading: state.products.isLoading,
    error: state.products.error  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCategoryClick: (category) => {
      dispatch(addCategoryThunk(category));
    },
    onDeleteCategoryClick: (id) => {
      dispatch(deleteCategoryThunk(id));
    },
  };
};

const CategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);

export default CategoriesContainer;
