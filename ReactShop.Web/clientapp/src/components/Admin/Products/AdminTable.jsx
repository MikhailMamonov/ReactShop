import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from "material-ui/Table";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState, useEffect } from "react";
import TextField from "material-ui/TextField";

//https://github.com/benawad/basic-react-form/tree/6_edit_delete_rows
const AdminTable = (props) => {
  debugger;
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const [editIdx, seteditIdx] = useState(-1);

  const startEditing = (i) => {
    seteditIdx(i);
  };

  const stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  const getRow = (row, i) => {
    const currentlyEditing = editIdx === row.id;
    return (
      <TableRow key={`tr-${i}`} selectable>
        {props.cols.map((y, k) => (
          <TableRowColumn key={`trc-${k}`}>
            {currentlyEditing ? (
              <TextField
                name={y.prop}
                onChange={(e) => props.onEdit(e, y.prop, i)}
                value={row[y.prop]}
              />
            ) : (
              row[y.prop]
            )}
          </TableRowColumn>
        ))}
        <TableRowColumn>
          <EditIcon
            onClick={() => {
              startEditing(row.id);
            }}
          />
        </TableRowColumn>
        <TableRowColumn>
          <DeleteIcon
            onClick={() => {
              props.onDelete(row.id);
            }}
          />
        </TableRowColumn>
      </TableRow>
    );
  };

  const classes = useStyles();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {props.cols.map((col, i) => (
            <TableHeaderColumn key={`tch-${i}`} align="left">
              {col.name}
            </TableHeaderColumn>
          ))}
          <TableHeaderColumn></TableHeaderColumn>
          <TableHeaderColumn></TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>{props.rows.map((row, i) => getRow(row, i))}</TableBody>
    </Table>
  );
};

export default AdminTable;
