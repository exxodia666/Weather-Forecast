export const ADD_CITY = 'ADD_CITY';
export const DELETE_CITY = 'DELETE_CITY';
import Axios from "axios";
import { Alert } from "react-native";
import { cityReqUrl } from "../../constants/constants";

export function addCity(city) {
  return (dispatch) => {
    return Axios.get(cityReqUrl(city))
      .then((response) => {
        dispatch({ type: ADD_CITY, data: city});
      })
      .catch((error) => {
        Alert.alert('Wrong city!!!');
      });
  };
}

export const deleteCity = (payload) => {
    return {
        data: payload,
        type: DELETE_CITY
    }
}