import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import weather from "./reducers/weather";
import daytime from "./reducers/daytime";
import forecast from "./reducers/forecast";
import settings from "./reducers/settings";
import city from "./reducers/city";
import weatherCity from "./reducers/weatherCity";

const Store = createStore(
  combineReducers({
    weather: weather,
    daytime: daytime,
    forecast: forecast,
    settings: settings,
    city: city,
    weatherCity: weatherCity,
  }),
  applyMiddleware(thunk)
);
export default Store;
