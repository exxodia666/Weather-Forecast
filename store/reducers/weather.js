import { LOAD_WEATHER, ERROR_WEATHER } from "../actions/weather";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ERROR_WEATHER: 
      return {...state, 
        error: false,
        errorMessage: action.error
      }
    
    case LOAD_WEATHER:
      return {
        ...state,
        city: action.data.name,
        clouds: action.data.clouds.all,
        description: action.data.weather[0].description,
        icon: action.data.weather[0].icon,
        temperature: action.data.main.temp,
        feels_like: action.data.main.feels_like,
        humidity: action.data.main.humidity,
        pressure: action.data.main.pressure,
        rain: action.data.rain,
        snow: action.data.snow,
        wind: action.data.wind.speed,
        fetchTime: action.time,
        error: false
      };
  }
  return state;
};