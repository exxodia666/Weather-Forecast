import Axios from "axios";
import { Alert } from "react-native";
const moment = require('moment');

export const LOAD_WEATHER = "LOAD_WEATHER";
const key = "44c682133431d2307217999c8c120d54";
export function loadWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
  return (dispatch) => {
    return Axios.get(url)
      .then((response) => {
        dispatch({ type: LOAD_WEATHER, data: response.data, time: moment().format('MMMM Do YYYY, h:mm:ss a') });
      })
      .catch((error) => {
        Alert.alert('Error' + error);
      });
  };
}
