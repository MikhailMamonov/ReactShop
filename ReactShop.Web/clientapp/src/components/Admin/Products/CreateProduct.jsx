import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import {
  Button,
  Paper,
  Select,
  TextField,
  InputLabel,
  FormControl,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CreateProduct(props) {
  const [product, setProduct] = React.useState({});
  const categories = useSelector((state) => state.categories.categories);

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleReset();
    props.onAdd(product);
  };

  const handleChange = (e) => {
    setProduct({ ...product, categoryId: e.target.value });
  };
  const handleReset = () =>
    setProduct({ ...product, name: "", price: 0, categoryId: "" });
  return (
    <Paper>
      <h2>Create Product </h2>
      <TextField
        className={classes.margin}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        value={product["name"]}
        label="Name"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="standard-number"
        className={classes.margin}
        label="Price (RUB)"
        type="number"
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        value={product["price"]}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-category">Category</InputLabel>
        <Select
          native
          id="input-category"
          value={product.categoryId}
          onChange={handleChange}
          inputProps={{
            name: "Category",
            id: "age-native-simple",
          }}
        >
          {categories.map((c) => (
            <option value={c.id}>{c.name}</option>
          ))}
        </Select>
      </FormControl>

      <Button onClick={handleSubmit} className={classes.margin}>
        Submit
      </Button>
      <Button onClick={handleReset} className={classes.margin}>
        Reset
      </Button>
    </Paper>
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label htmlFor="name">Name</label>
    //     <input
    //       type="text"
    //       id="name"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="category">Category</label>
    //     <p>
    //       <select value={categoryId} onChange={(e) =>
    //         {var categoryId = e.target.value;
    //           console.log(categoryId);
    //          setCategoryId(categoryId)}}>
    //         {props.categories.map((c) =>(
    //             <option value={c.id}>{c.name}</option>))}
    //       </select>
    //       </p>
    //   </div>
    //   <div>
    //     <label htmlFor="price">price</label>
    //     <input
    //       type="number"
    //       id="price"
    //       value={price}
    //       onChange={(e) => setPrice(e.target.value)}
    //     />
    //     <input type="submit" value="Добавить" />
    //   </div>
    // </form>
  );
}
