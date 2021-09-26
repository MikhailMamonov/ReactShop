import { Table } from "antd";

import React, { FC } from "react";

import { User } from "./../../types/users";
import { Category } from "./../../types/categories";
import { Product } from "./../../types/products";

type AdminTablePropsType = {
  rows: Array<User | Category | Product>;
  cols: Array<{ name: string }>;
  onDelete: (id: any) => void;
  onEdit: (id: any, item: User | Category | Product) => void;
};

//https://github.com/benawad/basic-react-form/tree/6_edit_delete_rows
const AdminTable: FC<AdminTablePropsType> = (props) => {
  // const [currentRow, setCurrentRow] = useState({} as typeof props.rows[0]);
  const columns = props.cols.map((col) => {
    return { title: col.name, dataIndex: col.name, key: col.name };
  });
  const dataSource = props.rows.map((row) => {
    return { ...row, key: row.id };
  });

  return <Table columns={columns} dataSource={dataSource}></Table>;
};

export default AdminTable;
