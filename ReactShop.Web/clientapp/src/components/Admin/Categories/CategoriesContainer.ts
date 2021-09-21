import { connect } from "react-redux";
import {
  addCategoryThunk,
  deleteCategoryThunk,
  editCategoryThunk,
} from "../../../store/action-creators/categories";
import { RootStateType } from "../../../store/store";
import Categories from "./Categories";
import { Dispatch } from "redux";
import { Category } from "./../../../types/categories";
import { RowType } from "./../../../types/admin";

export type CategoriesProps = {
  categories: Array<Category>;
  isLoading: boolean;
  error: string | undefined;
  onAddCategoryClick: (category: Category) => void;
  onEditCategoryClick: (id: number, item: RowType) => void;
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

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onAddCategoryClick: (category: Category) => {
      addCategoryThunk(category);
    },
    onEditCategoryClick: (id: number, item: RowType) => {
      editCategoryThunk(id, item as Category);
    },
    onDeleteCategoryClick: (id: number) => {
      deleteCategoryThunk(id);
    },
  };
};

const CategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);

export default CategoriesContainer;
