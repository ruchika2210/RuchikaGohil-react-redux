import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./index";
import createSageMiddleware from "redux-saga";
import rootSaga from "./saga";

const sagaMiddleware = createSageMiddleware();

const middleware = [sagaMiddleware];

const store = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(rootReducers);

sagaMiddleware.run(rootSaga);

export default store;
