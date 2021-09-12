import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  MenuList,
  Paper,
  Typography,
  MenuItem,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1000,
  },
  image: {
    width: 128,
    height: 128,
  },
  media: {
    height: 40,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));
const Catalog = (props) => {
  const classes = useStyles();
  const categoryMenu = props.categories.map((category) => (
    <MenuItem>
      <Typography variant="inherit">{category.name}</Typography>
    </MenuItem>
  ));

  const productCards = props.products.map((product) => (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://oir.mobi/uploads/posts/2020-01/thumbs/1579616694_6-p-zelenie-lyagushki-9.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  ));

  return (
    <div>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={12}>
            <Grid item>
              <MenuList>
                <MenuItem>
                  <Typography variant="inherit">Categories</Typography>
                </MenuItem>
                {categoryMenu}
              </MenuList>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  {productCards}
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">$19.00</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default Catalog;
