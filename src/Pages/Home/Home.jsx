import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import useStyles from "./HomeStyles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getAllProducts,
  getProductCategories,
} from "../../Redux/Products/action";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productData);
  const { productCategories } = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getProductCategories());
  }, [dispatch]);

  console.log(products, "home");
  const [categories, setCategories] = useState("");

  const handleChange = (event) => {
    setCategories(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <div>HomePage</div>

      <FormControl style={{ padding: "10px", width: "200px" }}>
        <InputLabel id="demo-simple-select-label" style={{ padding: "10px" }}>
          Categories
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categories}
          label="Category"
          onChange={handleChange}
        >
          {/* <MenuItem value={categories.name}>Laptop</MenuItem>
          <MenuItem value={categories.name}>Mobile</MenuItem> */}
          {productCategories.map((data) => {
            return <MenuItem value={data.id}>{data.name}</MenuItem>;
          })}
        </Select>
      </FormControl>

      <Grid container spacing={2} className={classes.GridStyle}>
        {products
          .filter((ele) => ele.categoryId === categories || categories === "")
          .map((data) => {
            return (
              <Grid item xs={12} md={4} lg={4} sm={6}>
                <Card onClick={() => navigate(`/product/${data.id}`)}>
                  <CardActionArea>
                    <CardMedia
                      image="https://picsum.photos/200/300"
                      title="Contemplative Reptile"
                      className={classes.media}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Name: {data.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Model: {data.model}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Price: {data.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default Home;
