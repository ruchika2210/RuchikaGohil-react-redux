import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useStyles from "./ProductStyles";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../Redux/Products/action";

const Product = () => {
  const classes = useStyles();
  const { id } = useParams();
  console.log(id, "pppId");
  const dispatch = useDispatch();
  const { productDetails } = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [id, dispatch]);

  return (
    <>
      <div>Product</div>
      <div
        style={{
          padding: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={classes.root}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <img
                src="https://picsum.photos/200/300"
                alt="Contemplative Reptile"
                className={classes.media}
              />
            </div>

            <div style={{ marginLeft: "20px", textAlign: "justify" }}>
              <Typography gutterBottom variant="h5" component="h2">
                Name:{productDetails.name}
              </Typography>
              <Typography variant="body2" color="h6" component="p">
                Price:{productDetails.price}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                Description:{productDetails.description}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
