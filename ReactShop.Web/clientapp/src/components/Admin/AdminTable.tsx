import { Button, Form, Row, Table } from "antd";

import React, { FC, useEffect, useState } from "react";

import { EditableCell } from "./EditableCell";
import { ColumnType } from "./Products/Products";
import { RowType } from "../../types/admin";

type AdminTablePropsType = {
  rows: Array<RowType>;
  cols: Array<ColumnType>;
  onDelete: (id: any) => void;
  onEdit: (id: any, item: RowType) => void;
  onAdd: (item: RowType) => void;
};

//https://github.com/benawad/basic-react-form/tree/6_edit_delete_rows
const AdminTable: FC<AdminTablePropsType> = (props) => {
  const originData = props.rows.map((row) => {
    return { ...row, key: row.id };
  });

  console.log("originData", originData);
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState<string | number>(-1);
  const isEditing = (record: RowType) => record.id === editingKey;
  const [dataSource, setDataSource] = useState(originData);

  useEffect(() => {
    const data = props.rows.map((row) => {
      return { ...row, key: row.id };
    });
    setDataSource(data);
  }, [props.rows]);

  const edit = (record: RowType) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.id as number);
  };

  const cancel = () => {
    setEditingKey(-1);
  };

  const save = async (key: number | string) => {
    try {
      const row = (await form.validateFields()) as RowType;
      const newDataSource = [...dataSource];
      const index = newDataSource.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newDataSource[index];
        const newProduct = {
          ...item,
          ...row,
        };

        newDataSource.splice(index, 1, newProduct);
        props.onEdit(newProduct.id, newProduct);
        setDataSource(newDataSource);
        setEditingKey(-1);
      } else {
        newDataSource.push({ ...row, key: row.id });
        props.onAdd(row);

        setDataSource(newDataSource);
        setEditingKey(-1);
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = props.cols.concat({
    title: "operation",
    dataIndex: "operation",
    render: (_, record: RowType) => {
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

          <Button onClick={() => props.onDelete(record.id)}>Delete</Button>
        </Row>
      );
    },
  });
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: RowType) => ({
        record,
        inputType:
          col.dataIndex === "price" || col.dataIndex === "categoryId"
            ? "number"
            : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
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
        pagination={{
          onChange: cancel,
          defaultPageSize: 4,
        }}
      ></Table>
    </Form>
  );
};

export default AdminTable;
