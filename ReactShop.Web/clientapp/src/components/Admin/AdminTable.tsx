import { Table, Tag, Space, Input } from "antd";

import React, { FC, useState } from "react";

import { User } from "./../../types/users";
import { Category } from "./../../types/categories";
import { Product } from "./../../types/products";
import { RowType } from "../../types/admin";

type ChangeEventType = React.ChangeEvent<HTMLInputElement>;

type AdminTablePropsType = {
  rows: Array<User | Category | Product>;
  cols: Array<{ name: string }>;
  onDelete: (id: any) => void;
  onEdit: (id: any, item: User | Category | Product) => void;
};

//https://github.com/benawad/basic-react-form/tree/6_edit_delete_rows
const AdminTable: FC<AdminTablePropsType> = (props) => {
  const [editIdx, setEditIdx] = useState(-1);
  const [currentRow, setCurrentRow] = useState({} as typeof props.rows[0]);
  const columns = props.cols.map((col) => {
    return { title: col.name, dataIndex: col.name, key: col.name };
  });
  const startEditing = (i: number) => {
    setEditIdx(i);
    setCurrentRow(props.rows[i]);
    console.log("props.rows[i]", props.rows[i]);
  };

  const handleChange = (e: ChangeEventType, name: string, i: number) => {
    const { value } = e.target;
    setCurrentRow({ ...currentRow, [name]: value });
  };

  const stopEditing = () => {
    setEditIdx(-1);
  };

  const getRow = (row: RowType, i: number) => {
    // const currentlyEditing = editIdx === i;
    // return (
    //   <TableRow key={`tr-${i}`} selectable>
    //     {props.cols.map((y, k) => (
    //       <TableRowColumn key={`trc-${k}`}>
    //         {currentlyEditing ? (
    //           <Input
    //             name={y.prop}
    //             onChange={(e) => handleChange(e, y.prop, i)}
    //             value={currentRow[y.prop]}
    //           />
    //         ) : (
    //           row[y.prop]
    //         )}
    //       </TableRowColumn>
    //     ))}
    //     <TableRowColumn>
    //       {currentlyEditing ? (
    //         <CheckIcon
    //           onClick={(e) => {
    //             props.onEdit(currentRow.id, currentRow);
    //             stopEditing();
    //           }}
    //         />
    //       ) : (
    //         <EditIcon
    //           onClick={() => {
    //             startEditing(i);
    //           }}
    //         />
    //       )}
    //     </TableRowColumn>
    //     <TableRowColumn>
    //       <DeleteIcon
    //         onClick={() => {
    //           props.onDelete(row.id);
    //         }}
    //       />
    //     </TableRowColumn>
    //   </TableRow>
    // );
  };

  return <Table columns={columns} dataSource={props.rows}></Table>;
};

export default AdminTable;
