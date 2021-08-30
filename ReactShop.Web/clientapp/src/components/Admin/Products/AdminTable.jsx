import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from "material-ui/Table";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState, useEffect } from "react";
import TextField from "material-ui/TextField";
import CheckIcon from '@material-ui/icons/Check';

//https://github.com/benawad/basic-react-form/tree/6_edit_delete_rows
const AdminTable = (props) => {
  debugger;
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const [editIdx, seteditIdx] = useState(-1);
  const [currentRow, setCurrentRow] = useState({});

  const startEditing = (i) => {
    debugger;
    seteditIdx(i);
    setCurrentRow(props.rows[i]);
    console.log("props.rows[i]", props.rows[i]);
  };

  const stopEditing = () => {
    seteditIdx(-1);
  };

  const getRow = (row, i) => {
    const currentlyEditing = editIdx === i;
    return (
      <TableRow key={`tr-${i}`} selectable>
        {props.cols.map((y, k) => (
          <TableRowColumn key={`trc-${k}`}>
            {currentlyEditing ? (
              <TextField
                name={y.prop}
                 onChange={(e) => setCurrentRow(e.target.value)}
                value={currentRow[y.prop]}
              />
              
            ) : (
              row[y.prop]
            )}
          </TableRowColumn>
        ))}
        <TableRowColumn>
          {currentlyEditing ? (
          <CheckIcon onClick={(e) => {props.onEdit(row.id, row); stopEditing()}} />
        ) : (
           <EditIcon
            onClick={() => {
              startEditing(i);
            }}
          />
        )}
         
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
