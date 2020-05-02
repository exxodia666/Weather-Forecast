import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  persistStore,
  persistReducer,
  persistCombineReducers,
} from "redux-persist";
import weather from "./reducers/weather";
import daytime from "./reducers/daytime";
import forecast from "./reducers/forecast";
import settings from "./reducers/settings";
import city from "./reducers/city";
import weatherCity from "./reducers/weatherCity";
import thunk from "redux-thunk";
import { AsyncStorage } from "react-native";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};
const rootReducer = persistCombineReducers(persistConfig, {
  weather: weather,
  daytime: daytime,
  forecast: forecast,
  settings: settings,
  city: city,
  weatherCity: weatherCity,
});

export default () => {
  let store = createStore(rootReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return { store, persistor };
};
