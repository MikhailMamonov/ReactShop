import { connect } from "react-redux";
import {
  addCategoryThunk,
  deleteCategoryThunk,
  editCategoryThunk,
} from "../../../store/reducers/category/categoryActions";
import Categories from "./Categories";

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    isLoading: state.categories.isLoading,
    error: state.categories.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCategoryClick: (category) => {
      dispatch(addCategoryThunk(category));
    },
    onEditCategoryClick: (id, item) => {
      dispatch(editCategoryThunk(id, item));
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
