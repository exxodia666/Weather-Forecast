import { LOAD_WEATHER } from "../actions/weather";

const initialState = {};
/**
{
  cityName,
  sky,
  temp
}*/
export default (state = initialState, action) => {
  //console.log(action.data);
  switch (action.type) {
    case LOAD_WEATHER:
      return {
        ...state,
        city: action.data.name,
        icon: action.data.weather[0].icon,
        temperature: action.data.main.temp,
        fetchTime: action.time
      };
  }
  return state;
};
