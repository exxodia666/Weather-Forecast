import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import weather from "./reducers/weather";
import daytime from "./reducers/daytime";

const Store = createStore(
  combineReducers({
    weather: weather,
    daytime: daytime
  }),
  applyMiddleware(thunk)
);
export default Store;