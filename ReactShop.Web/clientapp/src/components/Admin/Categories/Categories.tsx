import Loader from "react-loader-spinner";
import CreateCategory from "./CreateCategory";

import { CategoriesProps } from "./CategoriesContainer";
import { Button, Col, Form, Row, Table } from "antd";
import { useEffect, useState } from "react";
import { Category } from "../../../types/categories";
import { EditableCell } from "../EditableCell";

const Categories: React.FC<CategoriesProps> = (props) => {
  const originData = props.categories.map((row) => {
    return { ...row, key: row.id };
  });

  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState(-1);
  const isEditing = (record: Category) => record.id === editingKey;
  const [dataSource, setDataSource] = useState(originData);

  useEffect(() => {
    const data = props.categories.map((row) => {
      return { ...row, key: row.id };
    });
    setDataSource(data);
  }, [props.categories]);

  const edit = (record: Category) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey(-1);
  };

  const save = async (key: number) => {
    try {
      console.log("save");
      const row = (await form.validateFields()) as Category;
      const newDataSource = [...dataSource];
      const index = newDataSource.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newDataSource[index];
        const newCategory = {
          ...item,
          ...row,
        };
        console.log("newCategory", newCategory);
        newDataSource.splice(index, 1, newCategory);
        props.onEditCategoryClick(newCategory.id, newCategory);
        setDataSource(newDataSource);
        setEditingKey(-1);
      } else {
        newDataSource.push({ ...row, key: row.id });
        props.onAddCategoryClick(row);

        setDataSource(newDataSource);
        setEditingKey(-1);
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record: Category) => {
        const editable = isEditing(record);
        return (
          <Row>
            {editable ? (
              <span>
                <Button
                  onClick={() => save(record.id)}
                  style={{ marginRight: 8 }}
                >
                  Save
                </Button>
                <Button title="Sure to cancel?" onClick={cancel}>
                  Cancel
                </Button>
              </span>
            ) : (
              <Button onClick={() => edit(record)}>Edit</Button>
            )}

            <Button onClick={() => props.onDeleteCategoryClick(record.id)}>
              Delete
            </Button>
          </Row>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Category) => ({
        record,
        inputType: col.dataIndex === "id" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
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
          visible={props.isLoading}
          color="#00BFFF"
          height={80}
          width={80}
        />
        <Col span={12}>
          <Form form={form} component={false}>
            <Table
              components={{
                body: {
                  cell: EditableCell,
                },
              }}
              bordered
              columns={mergedColumns}
              dataSource={dataSource}
            ></Table>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Categories;
