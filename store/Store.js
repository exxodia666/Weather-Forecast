import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import weather from "./reducers/weather";

const Store = createStore(
  combineReducers({ weather: weather }),
  applyMiddleware(thunk)
);
export default Store;