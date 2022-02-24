//multiple reducer combination
import { combineReducers } from "redux";
import productData from "./Products/reducer";

const rootReducers = combineReducers({ productData });

export default rootReducers;
