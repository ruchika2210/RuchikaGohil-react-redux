import axios from "axios";
import { all, takeEvery, put } from "redux-saga/effects";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_CATEGORY,
  GET_PRODUCT_CATEGORY_FAIL,
  GET_PRODUCT_CATEGORY_SUCCESS,
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_DETAILS_FAIL,
  GET_PRODUCT_DETAILS_SUCCESS,
} from "./actionTypes";

function* getAllProductsSaga() {
  console.log("called saga");

  try {
    const response = yield axios.get(
      "https://aveosoft-react-assignment.herokuapp.com/products/"
    );

    yield put({ type: GET_PRODUCTS_SUCCESS, payloadarray: response.data });
  } catch (error) {
    yield put({ type: GET_PRODUCTS_FAIL, error: error.message });
  }
}

function* getAllProductCategoriesSaga() {
  try {
    const response = yield axios.get(
      "https://aveosoft-react-assignment.herokuapp.com/categories/"
    );
    console.log(response.data, "---cat");
    yield put({
      type: GET_PRODUCT_CATEGORY_SUCCESS,
      payloadArray: response.data,
    });
  } catch (error) {
    yield put({ type: GET_PRODUCT_CATEGORY_FAIL, error: error.message });
  }
}

function* getProductDetailsSaga({ payload }) {
  try {
    const response = yield axios.get(
      `https://aveosoft-react-assignment.herokuapp.com/products/${payload}`
    );
    console.log(response.data);
    yield put({
      type: GET_PRODUCT_DETAILS_SUCCESS,
      payloadObject: response.data,
    });
  } catch (error) {
    yield put({ type: GET_PRODUCT_DETAILS_FAIL, error: error.message });
  }
}

function* productSaga() {
  yield all([
    yield takeEvery(GET_PRODUCTS, getAllProductsSaga),
    yield takeEvery(GET_PRODUCT_CATEGORY, getAllProductCategoriesSaga),
    yield takeEvery(GET_PRODUCT_DETAILS, getProductDetailsSaga),
  ]);
}
export default productSaga;
