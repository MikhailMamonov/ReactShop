import React, { FC } from "react";
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
import { CreateProductType } from "./ProductsContainer";
import { RootStateType } from "../../../store/store";
import { Product } from "./../../../types/products";

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

const CreateProduct: FC<CreateProductType> = (props) => {
  const [product, setProduct] = React.useState({} as Product);
  const categories = useSelector(
    (state: RootStateType) => state.categories.categories
  );

  const classes = useStyles();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleReset();
    props.onAdd(product);
  };

  const handleChange = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>,
    child: React.ReactNode
  ) => {
    setProduct({ ...product, categoryId: Number(e.currentTarget.value) });
  };
  const handleReset = () =>
    setProduct({ ...product, name: "", price: 0, categoryId: -1 });
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
        onChange={(e) =>
          setProduct({ ...product, price: Number(e.target.value) })
        }
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
          type="number"
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
  );
};

export default CreateProduct;
