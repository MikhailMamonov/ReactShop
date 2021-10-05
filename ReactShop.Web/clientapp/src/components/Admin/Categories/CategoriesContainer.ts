import { connect } from "react-redux";
import {
  addCategoryThunk,
  deleteCategoryThunk,
  editCategoryThunk,
} from "../../../store/action-creators/categories";
import { RootStateType } from "../../../store/store";
import Categories from "./Categories";
import { Category } from "./../../../types/categories";
import { ThunkDispatch } from "redux-thunk";
import { ActionTypes } from "../../../types/actionCreators";

export type CategoriesProps = {
  categories: Array<Category>;
  isLoading: boolean;
  error: string | undefined;
  onAddCategoryClick: (category: Category) => void;
  onEditCategoryClick: (id: number, item: Category) => void;
  onDeleteCategoryClick: (id: number) => void;
};

export type CreateCategoryProps = {
  onAdd: (category: Category) => void;
};

const mapStateToProps = (state: RootStateType) => {
  return {
    categories: state.categories.categories,
    isLoading: state.categories.isLoading,
    error: state.categories.error,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootStateType, void, ActionTypes>
) => {
  return {
    onAddCategoryClick: (category: Category) => {
      dispatch(addCategoryThunk(category));
    },
    onEditCategoryClick: (id: number, item: Category) => {
      dispatch(editCategoryThunk(id, item));
    },
    onDeleteCategoryClick: (id: number) => {
      dispatch(deleteCategoryThunk(id));
    },
  };
};

const CategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);

export default CategoriesContainer;
