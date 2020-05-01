import Axios from "axios";
import { Alert } from "react-native";
import { cityReqUrl } from "../../constants/constants";
const moment = require('moment');

export const LOAD_WEATHER_CITY = "LOAD_WEATHER_CITY";
export const ERROR_WEATHER_CITY = "ERROR_WEATHER_CITY";


export function loadWeatherCity(city) {
  return (dispatch) => {
    return Axios.get(cityReqUrl(city))
      .then((response) => {
        dispatch({ type: LOAD_WEATHER_CITY, data: response.data, time: moment().format('MMMM Do YYYY, h:mm:ss a') });
      })
      .catch((error) => {
        dispatch({ type: ERROR_WEATHER_CITY, error: error });
      });
  };
}
