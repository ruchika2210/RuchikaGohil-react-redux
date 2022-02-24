import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_CATEGORY_FAIL,
  GET_PRODUCT_CATEGORY_SUCCESS,
  GET_PRODUCT_DETAILS_FAIL,
  GET_PRODUCT_DETAILS_SUCCESS,
} from "./actionTypes";

const initialState = {
  products: [],
  productDetails: {},
  productCategories: [],
  error: false,
  loading: false,
};

const productData = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payloadarray };

    case GET_PRODUCTS_FAIL:
      return { ...state, error: action.error };

    case GET_PRODUCT_CATEGORY_SUCCESS:
      return { ...state, productCategories: action.payloadArray };

    case GET_PRODUCT_CATEGORY_FAIL:
      return { ...state, error: action.error };

    case GET_PRODUCT_DETAILS_SUCCESS:
      return { ...state, productDetails: action.payloadObject };

    case GET_PRODUCT_DETAILS_FAIL:
      return { ...state, error: action.error };

    default:
      return { ...state };
  }
};

export default productData;
