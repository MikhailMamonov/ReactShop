import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import {Button, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Grid} from '@material-ui/core';





const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
      borderRadius: 15,
      margin: '10px 10px',
      maxWidth: 950
  },
  tableHeaderCell: {
      fontWeight: 'bold',
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.getContrastText(theme.palette.primary.dark)
  },
  avatar: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.getContrastText(theme.palette.primary.light)
  },
  name: {
      fontWeight: 'bold',
      color: theme.palette.secondary.dark
  },
  status: {
      fontWeight: 'bold',
      fontSize: '0.75rem',
      color: 'white',
      backgroundColor: 'grey',
      borderRadius: 8,
      padding: '3px 10px',
      display: 'inline-block'
  }
}));

let cols = [];
const getRowId = row => { return row.id;}; 

export const ProductAdminGrid=(props)=>{ 

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

  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>ID</TableCell>
            <TableCell className={classes.tableHeaderCell}>Name</TableCell>
            <TableCell className={classes.tableHeaderCell}>Price</TableCell>
            <TableCell className={classes.tableHeaderCell}>Category</TableCell>
            <TableCell className={classes.tableHeaderCell}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>          
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.categoryId}</TableCell>  
              <TableCell>

                          <Button variant="contained" color="primary">Изменить</Button>
                          <Button variant="contained" color="secondary">Удалить</Button>

              </TableCell>
                        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}