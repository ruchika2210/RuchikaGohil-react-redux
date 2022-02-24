import {
  GET_PRODUCTS,
  GET_PRODUCT_CATEGORY,
  GET_PRODUCT_DETAILS,
} from "./actionTypes";

export const getAllProducts = () => {
  return { type: GET_PRODUCTS };
};

export const getProductCategories = () => {
  return { type: GET_PRODUCT_CATEGORY };
};

export const getProductDetails = (productId) => {
  return { type: GET_PRODUCT_DETAILS, payload: productId };
};
