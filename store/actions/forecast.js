import Axios from "axios";
import { Alert } from "react-native";
const moment = require('moment');

export const LOAD_FORECAST = "LOAD_FORECAST";

const key = "44c682133431d2307217999c8c120d54";

export function loadForecast(city) {

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`;

  //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}

  return (dispatch) => {
    return Axios.get(url)
      .then((response) => {
        dispatch({ type: LOAD_FORECAST, data: response.data, time: moment().format('MMMM Do YYYY, h:mm:ss a') });
      })
      .catch((error) => {
        Alert.alert('Error' + error);
        //todo dispatch error
      });
  };
}
