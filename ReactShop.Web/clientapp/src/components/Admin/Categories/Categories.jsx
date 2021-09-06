import { Container } from "react-bootstrap";
import Loader from "react-loader-spinner";
import CreateItem from "./CreateItem";
import AdminTable from "../AdminTable";
import { getColumns } from "../utils";


const Categories = (props) => (
  <div>
    <Container>
      <h2>Categories</h2>
      <CreateItem onAdd={props.onAddCategoryClick} ></CreateItem>
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
