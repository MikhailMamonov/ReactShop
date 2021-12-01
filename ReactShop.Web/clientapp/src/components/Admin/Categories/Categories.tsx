import Loader from "react-loader-spinner";
import CreateCategory from "./CreateCategory";

import { CategoriesProps } from "./CategoriesContainer";
import { Button, Col, Form, Row, Table } from "antd";
import { useCallback, useEffect, useState } from "react";
import { Category } from "../../../types/categories";
import { EditableCell } from "../EditableCell";
import AdminTable from "../AdminTable";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "hooks/useTypedSelector";
import { getAllCategoriesThunk } from "store/action-creators/categories";
import { useActions } from "hooks/useActions";

const Categories: React.FC<CategoriesProps> = (props) => {
  const dispatch = useDispatch();
  const { categories, isLoading, error } = useTypedSelector(
    (state) => state.categories
  );
  const { addCategoryThunk, editCategoryThunk, deleteCategoryThunk } =
    useActions();
  const fetchCategories = useCallback(() => {
    console.log("getAllCategoriesThunk");
    dispatch(getAllCategoriesThunk());
  }, [dispatch]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
      editable: true,
    },
  ];

  return (
    <div>
      <h2>Categories</h2>
      <Row>
        <Col span={12}>
          <CreateCategory onAdd={props.onAddCategoryClick}></CreateCategory>
        </Col>
        {props.error ?? null}
        <Loader
          type="Bars"
          visible={isLoading}
          color="#00BFFF"
          height={80}
          width={80}
        />
        <Col span={12}>
          <AdminTable
            rows={categories}
            cols={columns}
            onAdd={props.onAddCategoryClick}
            onDelete={props.onDeleteCategoryClick}
            onEdit={props.onEditCategoryClick}
          ></AdminTable>
        </Col>
      </Row>
    </div>
  );
};

export default Categories;
