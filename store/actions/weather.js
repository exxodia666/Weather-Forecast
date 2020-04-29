import Axios from "axios";
import { Alert } from "react-native";
import { cityReqUrl, geoReqUrl } from "../../constants/constants";
const moment = require('moment');

export const LOAD_WEATHER = "LOAD_WEATHER";

export function loadWeather(city) {
  return (dispatch) => {
    return Axios.get(cityReqUrl(city))
      .then((response) => {
        dispatch({ type: LOAD_WEATHER, data: response.data, time: moment().format('MMMM Do YYYY, h:mm:ss a') });
      })
      .catch((error) => {
        Alert.alert('Error' + error);
      });
  };
}

export function geoLoadWeather(lat,lon) {
  return (dispatch) => {
    return Axios.get(geoReqUrl(lat,lon))
      .then((response) => {
        dispatch({ type: LOAD_WEATHER, data: response.data, time: moment().format('MMMM Do YYYY, h:mm:ss a') });
      })
      .catch((error) => {
        Alert.alert('Error' + error);
      });
  };
}
