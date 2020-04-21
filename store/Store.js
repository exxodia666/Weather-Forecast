import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import weather from "./reducers/weather";
import daytime from "./reducers/daytime";
import forecast from "./reducers/forecast";

const Store = createStore(
  combineReducers({
    weather: weather,
    daytime: daytime,
    forecast: forecast
  }),
  applyMiddleware(thunk)
);
export default Store;