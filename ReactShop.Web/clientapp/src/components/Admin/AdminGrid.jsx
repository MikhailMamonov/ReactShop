import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { EditingState } from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow,  TableEditRow,
  TableEditColumn } from '@devexpress/dx-react-grid-material-ui';

let cols = [];


const AdminGrid=(props)=>{ 
  const getRowId = row => { return row.id;}; 

  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  


  useEffect(() => {
    debugger;
    setRows(props.rows);
    if(props.rows[0])
    {
      cols = Object.keys(props.rows[0]).map(c=> {
        return {name:c, title:c}
      });
    }
    setColumns(cols)
  }, [props.rows]);

  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (added) {
      const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      added.forEach(row=> props.onAdd(row));
      changedRows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      changedRows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      debugger;
      deleted.forEach(idx=> props.onDelete(idx))
      changedRows = rows.filter(row => !deletedSet.has(row.id));
    }
    setRows(changedRows);
  };

return  (
  <Paper>
    <Grid
      rows={rows}
      columns={columns}
      getRowId={getRowId}
    >
      <EditingState
          onCommitChanges={commitChanges}
        />
      <Table />
      <TableHeaderRow />
      <TableEditRow />
      <TableEditColumn
          showAddCommand
          showEditCommand
          showDeleteCommand
        />
    </Grid>
  </Paper>
);
}

export default AdminGrid;