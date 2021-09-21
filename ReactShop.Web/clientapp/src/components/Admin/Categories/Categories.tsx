import { Container } from "react-bootstrap";
import Loader from "react-loader-spinner";
import CreateCategory from "./CreateCategory";
import AdminTable from "../AdminTable";
import { getColumns } from "../utils";
import { CategoriesProps } from "./CategoriesContainer";

const Categories: React.FC<CategoriesProps> = (props) => (
  <div>
    <Container>
      <h2>Categories</h2>
      <CreateCategory onAdd={props.onAddCategoryClick}></CreateCategory>
      {props.error ?? null}
      <Loader
        type="Bars"
        visible={props.isLoading}
        color="#00BFFF"
        height={80}
        width={80}
      />
      <AdminTable
        rows={props.categories}
        cols={getColumns(props.categories)}
        onDelete={props.onDeleteCategoryClick}
        onEdit={props.onEditCategoryClick}
      ></AdminTable>
    </Container>
  </div>
);

export default Categories;
