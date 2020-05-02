import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import weather from "../store/reducers/weather";
import daytime from "../store/reducers/daytime";
import forecast from "../store/reducers/forecast";
import settings from "../store/reducers/settings";
import city from "../store/reducers/city";
import weatherCity from "../store/reducers/weatherCity";
// configureStore.js
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    weather: weather,
    daytime: daytime,
    forecast: forecast,
    settings: settings,
    city: city,
    weatherCity: weatherCity,
  })
);
/*
export default () => {
  let Store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(Store);
  return { Store, persistor };
};
*/