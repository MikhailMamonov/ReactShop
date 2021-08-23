import { connect } from "react-redux";
import { addCategoryThunk, deleteCategoryThunk } from "../../../store/actions/categoryActions";
import Categories from "./Categories";

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    isLoading: state.categories.isLoading,
    error: state.categories.error  };
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
